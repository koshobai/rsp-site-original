import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { localize } from "compiled-i18n";
import { ContactForm } from "~/components/contact-form/contact-form";
import { MeetTheTeam } from "~/components/meet-the-team/meet-the-team";
import { WhatWeHave } from "~/components/what-we-have/what-we-have";
import { WhoWeAre } from "~/components/who-we-are/who-we-are";
import { WhyChooseUs } from "~/components/why-choose-us/why-choose-us";

export default component$(() => {
  return (
    <>
      <h1 class="visually-hidden">{localize`common.company.name`}</h1>

      <WhoWeAre />

      <WhyChooseUs />

      <section class="divide">
        <WhatWeHave />
      </section>

      <section class="divide region">
        <MeetTheTeam />
      </section>

      <section class="divide region">
        <ContactForm />
      </section>

      {/*
        <section id="about-us" hidden>
          <h2 class="visually-hidden">About Us</h2>
          <h3>Group Data</h3>
          <h3>History</h3>
        </section>
        
        <section id="access" hidden>
          <h2>Access</h2>
        </section>
        
        <section id="contact" hidden>
          <h2>Contact</h2>
        </section>
      */}
    </>
  );
});

export const head: DocumentHead = () => ({
  title: localize`nav.home`,
  meta: [
    {
      name: "description",
      content:
        "Rising Sun Properties helps you rent or buy property in Nagoya, Japan.",
    },
  ],
});
