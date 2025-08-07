import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "~/components/app-footer/app-footer.css?inline";
import { localize } from "compiled-i18n";
import { useLayoutLoader } from "~/routes/layout";

export interface AppFooterProps {}

export const AppFooter = component$<AppFooterProps>(() => {
  const footerLinks = [
    { href: "/", label: localize`nav.home` },
    {
      href: "/contact",
      label: localize`nav.contact`,
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
  ];
  useStylesScoped$(styles);

  const layoutData = useLayoutLoader();

  return (
    <footer class="footer flow">
      <nav class="wrapper nav grid region" data-layout="fourths">
        <div class="footer-list">
          <ul role="list">
            {footerLinks.slice(0, 2).map((v) => (
              <li key={v.href}>
                <a class="footer-link" href={v.href}>
                  {v.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer-list">
          <span class="menu-label">{localize`nav.about`}</span>
          <ul role="list">
            {footerLinks.at(2)?.menus?.map((m) => (
              <li
                key={m.label}
                hidden={m.hide?.includes(layoutData.value.locale)}
              >
                <a class="footer-link" href={m.href}>
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="footer-list">
          <span class="menu-label">{localize`nav.rent`}</span>
          <ul role="list">
            {footerLinks.at(3)?.menus?.map((m) => (
              <li
                key={m.label}
                hidden={m.hide?.includes(layoutData.value.locale)}
              >
                <a class="footer-link" href={m.href}>
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer-list">
          <span class="menu-label">{localize`nav.buy`}</span>
          <ul role="list">
            {footerLinks.at(4)?.menus?.map((m) => (
              <li
                key={m.label}
                hidden={m.hide?.includes(layoutData.value.locale)}
              >
                <a class="footer-link" href={m.href}>
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div>
        <small>
          &copy; {localize`common.company.name`} {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
});
