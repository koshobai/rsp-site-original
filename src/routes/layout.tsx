import { component$, Slot } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";
import { guessLocale, localize } from "compiled-i18n";
import { AppFooter } from "~/components/app-footer/app-footer";
import { AppHeader } from "~/components/app-header/app-header";
import "~/styles/global.css";
import { useStripLocale } from "~/utils/useStripLocale";

import.meta.glob("../styles/compositions/*.css", { eager: true });
import.meta.glob("../styles/utilities/*.css", { eager: true });
import.meta.glob("../styles/blocks/*.css", { eager: true });

export const onRequest: RequestHandler = async ({
  query,
  cookie,
  headers,
  locale,
}) => {
  // Allow overriding locale with query param `locale`
  // This sets the cookie but doesn't redirect to save another request
  if (query.has("locale")) {
    const newLocale = guessLocale(query.get("locale"));
    cookie.delete("locale");
    cookie.set("locale", newLocale, { path: "/", maxAge: [365, "days"] });
    locale(newLocale);
  } else {
    // Choose locale based on cookie or accept-language header
    const maybeLocale =
      cookie.get("locale")?.value || headers.get("accept-language");
    locale(guessLocale(maybeLocale));
  }
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useLayoutLoader = routeLoader$((event) => {
  const { locale } = event;

  return {
    locale: locale(),
  };
});

export default component$(() => {
  useStripLocale();

  return (
    <>
      <AppHeader />

      <main id="main">
        <Slot />
      </main>

      <AppFooter />
    </>
  );
});

export const head: DocumentHead = ({ head }) => ({
  title: `${head.title ? `${head.title} | ` : ""}${localize`common.company.name`}`,
  meta: [
    {
      name: "description",
      content: "Rising Sun Properties website",
    },
  ],
});
