import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { localize } from "compiled-i18n";
import { ContactForm } from "~/components/contact-form/contact-form";

const phone = "070-2440-3818";
const email = "ron@newborn.co.jp";

export default component$(() => {
  useStylesScoped$(`
  h1,h2,a {
    color: var(--color-primary);
  }
    `);
  return (
    <>
      <div
        class="wrapper region prose flow"
        style="--flow-space: var(--space-2xl)"
      >
        <h1>{localize`careers.heading`}</h1>

        <section>
          <h2>{localize`careers.overview.heading`}</h2>
          <p>{localize`careers.overview.body`}</p>
        </section>

        <section>
          <h2>{localize`careers.qualifications.heading`}</h2>
          <ul>
            <li>{localize`careers.qualifications.list.1`}</li>
            <li>{localize`careers.qualifications.list.2`}</li>
            <li>{localize`careers.qualifications.list.3`}</li>
            <li>{localize`careers.qualifications.list.4`}</li>
            <li>{localize`careers.qualifications.list.5`}</li>
            <li>{localize`careers.qualifications.list.6`}</li>
          </ul>
        </section>

        <section>
          <h2>{localize`careers.job-details.heading`}</h2>
          <ul>
            <li>{localize`careers.job-details.list.1`}</li>
            <li>{localize`careers.job-details.list.2`}</li>
            <li>{localize`careers.job-details.list.3`}</li>
          </ul>
        </section>

        <section>
          <h2>{localize`careers.responsibilities.heading`}</h2>
          <ul>
            <li>{localize`careers.responsibilities.list.1`}</li>
            <li>{localize`careers.responsibilities.list.2`}</li>
            <li>{localize`careers.responsibilities.list.3`}</li>
            <li>{localize`careers.responsibilities.list.4`}</li>
          </ul>
        </section>

        <section>
          <p>
            Please call us directly at{" "}
            <a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>, or email
            your resume and cover letter to{" "}
            <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </section>
      </div>

      <section class="divide region">
        <ContactForm />
      </section>
    </>
  );
});
