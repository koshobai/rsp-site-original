import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { localize } from "compiled-i18n";
import styles from "~/components/what-we-have/what-we-have.css?inline";

export interface WhatWeHaveProps {}

export const WhatWeHave = component$<WhatWeHaveProps>(() => {
  useStylesScoped$(styles);

  return (
    <section id="what-we-have" class="have-container region">
      <div class="wrapper flow flow-xl">
        <h2 class="text-center flush-top">{localize`home.what.heading`}</h2>

        <div class="grid" data-layout="thirds">
          <section id="apartment-rentals" class="what-section">
            <h3>{localize`home.what.rental.heading`}</h3>
            <p>{localize`home.what.rental.body`}</p>
            <a href="/rent" class="button">
              {localize`home.what.rental.link`}
            </a>
          </section>

          <section id="ur-apartments" class="what-section">
            <h3>{localize`home.what.ur.heading`}</h3>
            <p>{localize`home.what.ur.body`}</p>
            <a href="/ur" class="button">
              {localize`home.what.ur.link`}
            </a>
          </section>

          <section id="home-buying" class="what-section">
            <h3>{localize`home.what.buy.heading`}</h3>
            <p>{localize`home.what.buy.body`}</p>
            <a href="/buy" class="button">
              {localize`home.what.buy.link`}
            </a>
          </section>
        </div>
      </div>
    </section>
  );
});
