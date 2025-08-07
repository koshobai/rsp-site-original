import { Fragment, Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "~/images/rising-sun-logo.webp?jsx";
import BookCover from "~/images/book-cover.webp?jsx";
import styles from "./company.css?inline";
import { ContactForm } from "~/components/contact-form/contact-form";
import { localize } from "compiled-i18n";
import Hide from "~/images/team/hide-headshot.jpg?jsx";

import type { DocumentHead } from "@builder.io/qwik-city";

const Item = component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="item flow flow-3xs">
        <span class="label">
          <Slot name="label" />
        </span>
        <span class="content flow flow-3xs">
          <Slot />
        </span>
      </div>
    </div>
  );
});

const BOOK_HREF =
  "https://www.amazon.com/Dont-Miss-This-Historic-Depreciation-ebook/dp/B0C9LRL71X/ref=sr_1_4?crid=5QHMK2MXVUDP&keywords=hide-san&qid=1688106675&refinements=p_n_feature_twenty_browse-bin%3A13054657011&rnid=13054642011&s=books&sprefix=hide-san%2Caps%2C400&sr=1-4";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <Fragment>
      <div class="wrapper flow flow-xl region" data-max="3">
        <section class="flow flow-s wrapper" data-max="2">
          <div>
            <Logo />
          </div>
          <h1 class="text-center">{localize`company.heading`}</h1>
        </section>

        <section id="group">
          <div class="flow flow-s">
            <h2>{localize`company.group.heading`}</h2>

            <Item>
              <span q:slot="label">{localize`company.group.name.label`}</span>
              <span>{localize`company.group.name.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.group.ceo.label`}</span>
              <span>{localize`company.group.ceo.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.group.address.label`}</span>
              <span>{localize`company.group.address.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.group.phone.label`}</span>
              <span>{localize`company.group.phone.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.group.business-content.label`}</span>
              <span>{localize`company.group.business-content.content`}</span>
            </Item>
          </div>
        </section>

        <section id="history">
          <div class="flow flow-s">
            <h2>{localize`company.history.heading`}</h2>

            <Item>
              <span q:slot="label">{localize`company.history.1.label`}</span>
              <span>{localize`company.history.1.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.history.2.label`}</span>
              <span>{localize`company.history.2.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.history.3.label`}</span>
              <span>{localize`company.history.3.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.history.4.label`}</span>
              <span>{localize`company.history.4.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.history.5.label`}</span>
              <span>{localize`company.history.5.content`}</span>
            </Item>
            <Item>
              <span q:slot="label">{localize`company.history.6.label`}</span>
              <span>{localize`company.history.6.content`}</span>
            </Item>
            <Item>
              <span q:slot="label">{localize`company.history.7.label`}</span>
              <span>{localize`company.history.7.content`}</span>
            </Item>
            <Item>
              <span q:slot="label">{localize`company.history.8.label`}</span>
              <span>{localize`company.history.8.content`}</span>
            </Item>

            <Item>
              <span q:slot="label">{localize`company.history.9.label`}</span>
              <span>
                {localize`company.history.9.content`}
                <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer">
                  {localize`company.history.9.link`}
                </a>
                {localize`common.fullstop`}
              </span>
              <div>
                <a href={BOOK_HREF} target="_blank">
                  <BookCover />
                </a>
              </div>
            </Item>
          </div>
        </section>
      </div>
      <section id="message" class="divide region">
        <div class="wrapper" data-max="3">
          <Hide style="max-block-size: 40vh; object-fit: contain;" />
          <p class="italic">{localize`company.message.1`}</p>
          <p>{localize`company.message.2`}</p>
          <p>{localize`company.message.3`}</p>
          <p>{localize`company.message.4`}</p>
          <p>{localize`company.message.5`}</p>
          <p>{localize`company.message.6`}</p>
          <p>{localize`company.message.7`}</p>
          <p>{localize`company.message.8`}</p>
        </div>
      </section>

      <section class="region divide">
        <ContactForm />
      </section>
    </Fragment>
  );
});

export const head: DocumentHead = {
  title: "Our Company",
};
