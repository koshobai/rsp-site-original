import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { localize } from "compiled-i18n";
import styles from "~/components/who-we-are/who-we-are.css?inline";
import Realtor from "~/images/home-hero.png?jsx";

export interface WhoWeAreProps {}

export const WhoWeAre = component$<WhoWeAreProps>(() => {
  useStylesScoped$(styles);

  return (
    <section id="who-we-are" class="who-container region">
      <div
        class="wrapper sidebar"
        data-direction="rtl"
        style="--sidebar-vertical-alignment: center"
      >
        <Realtor class="hero-img" />

        <div>
          <h2>{localize`home.who.heading`}</h2>
          <p class="prose">{localize`home.who.body`}</p>
          <a
            class="button display:inline-block"
            data-ghost-button
            href="#contact"
          >
            {localize`common.contact-us`}
          </a>
        </div>
      </div>
    </section>
  );
});
