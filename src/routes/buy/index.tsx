import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import { faq } from "./faq";
import HouseForSale from "~/images/house-buy.webp?jsx";
import { ContactForm } from "~/components/contact-form/contact-form";
import { localize } from "compiled-i18n";

const akiyaMartHref = "https://www.akiya-mart.com/";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="wrapper grid" data-align="stretch" data-layout="halves">
        <HouseForSale class="h-full fit:cover" />

        <div class="prose flow">
          <h1 style={{ marginBlockStart: 0 }}>{localize`buy.hero.heading`}</h1>
          <p>{localize`buy.hero.body`}</p>
          <a class="button display:inline-block" href="#contact">
            {localize`common.contact-us`}
          </a>
        </div>
      </section>

      <div class="bg:primary color:light">
        <section class="wrapper prose" id="buying-guide">
          <ul class="prose flow" data-layout="halves" role="list">
            <li>
              <h2>{localize`buy.guide.1.heading`}</h2>
              <p>
                {localize`buy.guide.1.pre`}
                <a
                  href={akiyaMartHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AkiyaMart
                </a>
                {localize`buy.guide.1.post`}
              </p>
            </li>

            <li>
              <h2>{localize`buy.guide.2.heading`}</h2>
              <p>{localize`buy.guide.2.body`}</p>
            </li>

            <li>
              <h2>{localize`buy.guide.3.heading`}</h2>
              <p dangerouslySetInnerHTML={localize`buy.guide.3.body`}></p>
            </li>

            <li>
              <h2>{localize`buy.guide.4.heading`}</h2>
              <p>{localize`buy.guide.4.body`}</p>

              <ul
                class="flow"
                style="--flow-space: var(--space-2xs); margin-block-start: 1em"
              >
                <li>
                  <strong>{localize`buy.guide.4.item.1.label`}:</strong>{" "}
                  {localize`buy.guide.4.item.1.content`}
                </li>

                <li>
                  <strong>{localize`buy.guide.4.item.2.label`}:</strong>{" "}
                  {localize`buy.guide.4.item.2.content`}
                </li>
                <li>
                  <strong>{localize`buy.guide.4.item.3.label`}:</strong>{" "}
                  {localize`buy.guide.4.item.3.content`}
                </li>
                <li>
                  <strong>{localize`buy.guide.4.item.4.label`}:</strong>{" "}
                  {localize`buy.guide.4.item.4.content`}
                </li>
                <li>
                  <strong>{localize`buy.guide.4.item.5.label`}:</strong>{" "}
                  {localize`buy.guide.4.item.5.content`}
                </li>
              </ul>
            </li>

            <li>
              <h2>{localize`buy.guide.5.heading`}</h2>
              <p>{localize`buy.guide.5.pre`}</p>
              <ul
                class="flow"
                style="--flow-space: var(--space-2xs); margin-block-start: 1em"
              >
                <li>
                  <strong>{localize`buy.guide.5.item.1.label`}:</strong>{" "}
                  {localize`buy.guide.5.item.1.content`}
                </li>
                <li>
                  <strong>{localize`buy.guide.5.item.2.label`}:</strong>{" "}
                  {localize`buy.guide.5.item.2.content`}
                </li>
              </ul>
              <p>{localize`buy.guide.5.post`}</p>
            </li>

            <li>
              <h2>{localize`buy.guide.summary.heading`}</h2>
              <p>
                {localize`buy.guide.summary.body.pre`}
                <a
                  href={akiyaMartHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AkiyaMart
                </a>
                {localize`buy.guide.summary.body.post`}
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section id="faq" class="wrapper prose">
        <div class="flow">
          <h2 class="color:primary">{localize`buy.faq.heading`}</h2>

          <ul
            role="list"
            class="flow"
            style="--flow-space: var(--space-s)"
            data-layout="thirds"
          >
            {faq().map((v) => (
              <li key={v.heading}>
                <details name="faq">
                  <summary class="color:primary no-triangle with-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span>{v.heading}</span>
                  </summary>
                  <p class="prose">{v.body}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section class="divide">
        <div class="wrapper">
          <ContactForm />
        </div>
      </section>
    </>
  );
});
