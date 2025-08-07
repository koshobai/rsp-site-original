import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ContactForm } from "~/components/contact-form/contact-form";

export default component$(() => {
  return (
    <div class="flow region">
      <ContactForm />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact Us",
};
