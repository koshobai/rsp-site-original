import { Fragment, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import { ContactForm } from "~/components/contact-form/contact-form";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { localize } from "compiled-i18n";

export const useAccidentLoader = routeLoader$((event) => {
  if (event.locale() === "ja") {
    throw event.redirect(307, "/");
  }
});

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Fragment>
      <section class="flow prose wrapper region">
        <h1>{localize`accident.heading`}</h1>

        <p>{localize`accident.body.1`}</p>

        <p>{localize`accident.body.2`}</p>

        <p>
          {localize`accident.body.3.pre`}
          <a href="#contact" class="color:dark">
            {localize`accident.body.3.link`}
          </a>
          {localize`accident.body.3.post`}
        </p>
      </section>
      <section class="divide">
        <ContactForm />
      </section>
    </Fragment>
  );
});

export const head: DocumentHead = () => ({
  title: localize`accident.heading`,
});
