import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
  Form,
  globalAction$,
  useLocation,
  valibot$,
} from "@builder.io/qwik-city";
import { email, minLength, object, pipe, string } from "valibot";
import styles from "./contact-form.css?inline";
import dedent from "dedent";
import { localize } from "compiled-i18n";
import { spamPhrases } from "./blacklist";

const ron = "ron@newborn.co.jp";
const hideo = "hideo@newborn.co.jp";
const to = [{ email: ron }, { email: hideo }];
const from = { email: ron };

export const useSubmitContactForm = globalAction$(
  async (data, event) => {
    const maybeLink = data.message.match(/https?:\/\//);
    const maybeSpam = spamPhrases.some((phrase) =>
      data.message.toLowerCase().includes(phrase)
    );

    if (maybeLink || maybeSpam) {
      return {
        success: true,
        data,
      };
    }

    const template = {
      personalizations: [{ to }],
      from,
      subject: `Contact submission from ${data.name}`,
      content: [
        {
          type: "text/plain",
          value: dedent`Name: ${data.name} 
          Phone: ${data.phone}
          Email: ${data.email}
          Message: ${data.message}`,
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${event.env.get("SENDGRID_API_KEY")}`,
    };

    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "post",
      body: JSON.stringify(template),
      headers,
    });

    return {
      success: true,
      data,
    };
  },
  valibot$(
    object({
      name: pipe(string(), minLength(1, "(Please enter your name.)")),
      phone: pipe(string(), minLength(1, "(Please enter your phone number.)")),
      email: pipe(
        string(),
        minLength(1, "(Please enter your email.)"),
        email("(Please enter a valid email.)")
      ),
      message: pipe(string(), minLength(1, "(Please enter a message.)")),
    })
  )
);

export const ContactForm = component$(() => {
  const action = useSubmitContactForm();
  const loc = useLocation();
  const isContactPage = loc.url.pathname === "/contact/";

  useStylesScoped$(styles);

  return action.status === 200 ? (
    <div id="thanks" class="wrapper text-center">
      <h2>{localize`contact.thanks`}</h2>
      <p>{localize`contact.be-in-touch`}</p>
    </div>
  ) : (
    <Form class="flow wrapper" data-max="2" id="contact" action={action}>
      {isContactPage ? (
        <h1 class="flush-top">{localize`contact.heading`}</h1>
      ) : (
        <h2 class="flush-top">{localize`contact.heading`}</h2>
      )}

      <label class="flow">
        <div class="cluster">
          <span>{localize`contact.name`}</span>
          <span class="field-error">{action.value?.fieldErrors?.name}</span>
        </div>
        <input required type="text" name="name" />
      </label>

      <label class="flow">
        <div class="cluster">
          <span>{localize`contact.email`}</span>
          <span class="field-error">{action.value?.fieldErrors?.email}</span>
        </div>
        <input required type="email" name="email" />
      </label>

      <label class="flow">
        <div class="cluster">
          <span>{localize`contact.phone`}</span>
          <span class="field-error">{action.value?.fieldErrors?.phone}</span>
        </div>
        <input required type="text" name="phone" />
      </label>

      <label class="flow">
        <div class="cluster">
          <span>{localize`contact.message`}</span>
          <span class="field-error">{action.value?.fieldErrors?.message}</span>
        </div>
        <textarea name="message" rows={6} required />
      </label>

      <button
        type="submit"
        class="button w-full justify-center"
        style="--flow-space: var(--space-l)"
      >
        {localize`common.submit`}
      </button>
    </Form>
  );
});
