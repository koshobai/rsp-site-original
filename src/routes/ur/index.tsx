import { component$, useComputed$ } from "@builder.io/qwik";
import { useDocumentHead, type DocumentHead } from "@builder.io/qwik-city";
import { localize } from "compiled-i18n";
import { ContactForm } from "~/components/contact-form/contact-form";
import { URProperty } from "~/components/property/ur-property";
import URBuilding from "~/images/jingu-higashi/jingu-higashi-1.webp?jsx";
import { ur } from "~/models/ur";
import { useLayoutLoader } from "../layout";

export default component$(() => {
  const head = useDocumentHead();
  const layoutData = useLayoutLoader();
  const locale = useComputed$(() => layoutData.value.locale as "en" | "ja");

  return (
    <div class="">
      <section class="wrapper region grid" data-layout="halves">
        <URBuilding class="h-full fit:cover" />

        <div class="prose">
          <h1>{head.frontmatter.h1}</h1>
          <p>{localize`ur.hero.body.1`}</p>
          <p>{localize`ur.hero.body.2`}</p>
          <p>{localize`ur.hero.body.3`}</p>
          <a class="button display:inline-block" href="#contact">
            {localize`common.contact-us`}
          </a>
        </div>
      </section>

      <section class="divide region faq wrapper">
        <ul
          class="grid"
          style="--gutter: var(--space-xl)"
          data-layout="halves"
          role="list"
          id="ur-rules"
        >
          <li id="ur-individuals">
            <h2 class="color:primary flush-top">
              {localize`ur.rules.individuals.heading`}
            </h2>

            <div style="margin-block-start: var(--space-3xs)">
              <p>{localize`ur.rules.individuals.items.1`}</p>
              <p>{localize`ur.rules.individuals.items.2`}</p>
              <p>{localize`ur.rules.individuals.items.3`}</p>
              <p>{localize`ur.rules.individuals.items.4`}</p>
              <p>{localize`ur.rules.individuals.items.5`}</p>
            </div>
          </li>
          <li id="ur-household">
            <h2 class="color:primary flush-top">
              {localize`ur.rules.household.heading`}
            </h2>

            <div style="margin-block-start: var(--space-3xs)">
              <p>{localize`ur.rules.household.items.1`}</p>
              <p>{localize`ur.rules.household.items.2`}</p>
              <p>{localize`ur.rules.household.items.3`}</p>
              <p>{localize`ur.rules.household.items.4`}</p>
              <p>{localize`ur.rules.household.items.5`}</p>
            </div>
          </li>
        </ul>
      </section>

      <div class="bg:primary color:light">
        <section class="wrapper prose region flow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="center"
            style={{ maxWidth: "var(--space-3xl)", flexGrow: 1 }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
          <div>
            <p style="margin-block-start: 0">{localize`ur.callout.1`}</p>
            <p>{localize`ur.callout.2`}</p>
          </div>
        </section>
      </div>

      <section class="wrapper region grid" data-layout="halves">
        <div>
          <h2>{localize`ur.requirements.heading`}</h2>

          <ul>
            <li>{localize`ur.requirements.item.1`}</li>
            <li>{localize`ur.requirements.item.2`}</li>
            <li>{localize`ur.requirements.item.3`}</li>
            <li>{localize`ur.requirements.item.4`}</li>
            <li>{localize`ur.requirements.item.5`}</li>
            <li>{localize`ur.requirements.item.6`}</li>
          </ul>
        </div>

        <div>
          <p>{localize`ur.requirements.body.1`}</p>
          <p>{localize`ur.requirements.body.2`}</p>
        </div>
      </section>

      <section class="region bg:gray-1">
        <div class="wrapper">
          <h2 class="visually-hidden">Rental Properties</h2>

          <ul role="list" class="flow">
            {ur()[locale.value].map((r) =>
              r.imageCount ? <URProperty key={r.id} {...r} /> : null
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

export const head: DocumentHead = () => ({
  title: localize`nav.ur-apartments`,
  frontmatter: {
    h1: localize`nav.ur-apartments`,
  },
});
