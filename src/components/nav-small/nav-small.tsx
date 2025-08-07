import {
  $,
  component$,
  useComputed$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./nav-small.css?inline";
import type { NavLink } from "../app-header/app-header";
import { useClickOutside } from "~/utils/use-click-outside";
import { useLocation } from "@builder.io/qwik-city";
import { useLayoutLoader } from "~/routes/layout";

export interface NavSmallProps {
  links: NavLink[];
}

export const NavSmall = component$<NavSmallProps>((props) => {
  useStylesScoped$(styles);

  const detailsRef = useSignal<HTMLDetailsElement>();
  const summaryRef = useSignal<HTMLElement>();
  useClickOutside(
    summaryRef,
    $(() => {
      detailsRef.value?.removeAttribute("open");
    })
  );

  const layoutData = useLayoutLoader();
  const loc = useLocation();

  const localeHref = useComputed$(() =>
    layoutData.value.locale === "en"
      ? `${loc.url.pathname}?locale=ja`
      : `${loc.url.pathname}?locale=en`
  );

  return (
    <details ref={detailsRef}>
      <summary ref={summaryRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="var(--color-primary)"
          width={24}
          height={24}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </summary>

      <ul class="small-nav-menu divided" role="list">
        {props.links.map((v) => (
          <li key={v.href}>
            {v.menus ? (
              <details name="sub-menu" class="inner-details">
                <summary class="nav-small-link-label">
                  <span style={{ pointerEvents: "none" }}>{v.label}</span>
                  <svg
                    style={{
                      width: "var(--space-xs)",
                      height: "var(--space-xs)",
                      pointerEvents: "none",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="chevron"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </summary>
                <ul role="list" class="inner-ul">
                  {v.menus.map((m) => (
                    <li
                      key={m.label}
                      hidden={m.hide?.includes(layoutData.value.locale)}
                    >
                      <a
                        class="nav-small-link"
                        href={m.href}
                        onClick$={() => {
                          const detailsEls =
                            document.querySelectorAll("details");
                          for (const el of detailsEls) {
                            el.removeAttribute("open");
                          }
                        }}
                      >
                        {m.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a class="nav-small-link" href={v.href}>
                {v.label}
              </a>
            )}
          </li>
        ))}
        <li>
          <a href={localeHref.value} class="nav-small-link with-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            {layoutData.value.locale === "en" ? "EN" : "JP"}
          </a>
        </li>
      </ul>
    </details>
  );
});
