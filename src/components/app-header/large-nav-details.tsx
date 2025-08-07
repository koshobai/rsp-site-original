import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import type { NavLink } from "./app-header";
import styles from "./app-header.css?inline";
import { useClickOutside } from "~/utils/use-click-outside";
import { useLayoutLoader } from "~/routes/layout";

export const LargeNavDetails = component$((props: { v: NavLink }) => {
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

  return (
    <details ref={detailsRef} name="large-nav-details">
      <summary ref={summaryRef}>
        <span>{props.v.label}</span>

        <svg
          style={{
            width: "var(--space-xs)",
            height: "var(--space-xs)",
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

      {props.v.menus && (
        <ul class="divided">
          {props.v.menus.map((m) => (
            <li
              key={m.label}
              hidden={m.hide?.includes(layoutData.value.locale)}
            >
              <a href={m.href} class="sub-menu-link">
                {m.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
});
