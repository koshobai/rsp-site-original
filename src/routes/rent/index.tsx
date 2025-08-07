import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import { faq } from "./faq";
import MaisonSunshine from "~/images/maison-sunshine/maison-sunshine-1.webp?jsx";
import { RentalProperty } from "~/components/property/rental-property";
import { ContactForm } from "~/components/contact-form/contact-form";
import type { DocumentHead } from "@builder.io/qwik-city";
import { rentals } from "~/models/rental";
import { localize } from "compiled-i18n";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="">
      <section class="wrapper region grid" data-layout="halves">
        <MaisonSunshine class="h-full fit:cover" />

        <div>
          <h1>{localize`rent.hero.heading`}</h1>
          <p class="prose">{localize`rent.hero.description`}</p>
          <a class="button display:inline-block" href="#contact">
            {localize`common.contact-us`}
          </a>
        </div>
      </section>

      <section class="divide region faq wrapper">
        <ul class="grid" data-layout="thirds" role="list">
          {faq().map((v, i) => (
            <li key={i}>
              <h2 class="color:primary">{v.heading}</h2>
              <p style="margin-block-start: var(--space-3xs)">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div class="bg:primary color:light">
        <section class="wrapper prose region cluster availability" data-nowrap>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <p style="margin-block-start: 0">
            {localize`rent.callout.pre`}
            <a href="#contact" class="color:light">
              {localize`rent.callout.link`}
            </a>
            {localize`rent.callout.post`}
          </p>
        </section>
      </div>

      <section class="region bg:gray-1">
        <div class="wrapper">
          <h2 class="visually-hidden">{localize`rent.properties.heading`}</h2>

          <ul role="list" class="flow">
            {rentals().map((r) =>
              r.imageCount ? <RentalProperty key={r.id} {...r} /> : null
            )}
          </ul>
        </div>
      </section>
      <section class="wrapper region">
        <ContactForm />
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Our Rentals",
};
