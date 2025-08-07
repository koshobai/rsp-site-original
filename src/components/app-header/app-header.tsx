import {
  $,
  component$,
  useComputed$,
  useOnWindow,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import Logo from "~/images/logo-simple.webp?jsx";
import styles from "~/components/app-header/app-header.css?inline";
import { NavSmall } from "../nav-small/nav-small";
import { LargeNavDetails } from "./large-nav-details";
import { useLocation } from "@builder.io/qwik-city";
import { useLayoutLoader } from "~/routes/layout";
import { localize } from "compiled-i18n";

export type NavLinkItem = {
  href: string;
  label: string;
  hide?: string[];
};
export type NavLink = {
  href: string;
  label: string;
  hide?: string[];
  menus?: NavLinkItem[];
};

export interface AppHeaderProps {}

export const AppHeader = component$<AppHeaderProps>(() => {
  useStylesScoped$(styles);

  const navLinks = [
    { href: "/", label: localize`nav.home` },
    {
      href: "/rent",
      label: localize`nav.rent`,
      menus: [
        {
          href: "/rent",
          label: localize`nav.our-apartments`,
        },
        {
          href: "/ur",
          label: localize`nav.ur-apartments`,
        },
      ],
    },
    {
      href: "/buy",
      label: localize`nav.buy`,
      menus: [
        {
          href: "/buy",
          label: localize`nav.for-sale`,
        },
        {
          href: "/accident",
          label: localize`nav.accident`,
          hide: ["ja"],
        },
      ],
    },
    {
      href: "/company",
      label: localize`nav.about`,
      menus: [
        {
          href: "/company",
          label: localize`nav.company`,
        },
        {
          href: "/team",
          label: localize`nav.team`,
        },
        {
          href: "/careers",
          label: localize`nav.careers`,
        },
      ],
    },
    {
      href: "/contact",
      label: localize`nav.contact`,
    },
  ];

  const scrolled = useSignal(false);
  useOnWindow(
    "scroll",
    $(() => {
      scrolled.value = window.scrollY > 0;
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
    <header class="repel app-header" data-scrolled={scrolled.value}>
      <a
        href="/"
        class="cluster app-header-link"
        style="--gutter: var(--space-2xs)"
      >
        <Logo class="header-logo" />
        <span>{localize`common.company.name`}</span>
      </a>

      {/* Only displays under 640px */}
      <NavSmall links={navLinks} />

      <nav class="cluster large-nav">
        <ul class="cluster" role="list">
          {navLinks.map((v) => (
            <li key={v.href} data-has-menus={v.menus?.length && true}>
              {v.menus?.length ? (
                <LargeNavDetails v={v} />
              ) : (
                <a
                  href={v.href}
                  class="cluster"
                  style={{ "--gutter": ".25rem" }}
                >
                  <span>{v.label}</span>
                </a>
              )}
            </li>
          ))}
          <li>
            <a href={localeHref.value} class="with-icon">
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
      </nav>
    </header>
  );
});
