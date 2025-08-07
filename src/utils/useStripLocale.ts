import { $, useOnDocument } from "@builder.io/qwik";

export const useStripLocale = () =>
  useOnDocument(
    "load",
    $(() => {
      // remove all query params except allowed
      const allowed = new Set(["page"]);
      if (location.search) {
        const params = new URLSearchParams(location.search);
        for (const [key] of params) {
          if (!allowed.has(key)) {
            params.delete(key);
          }
        }
        let search = params.toString();
        if (search) search = "?" + search;
        history.replaceState(
          history.state,
          "",
          location.href.slice(0, location.href.indexOf("?")) + search
        );
      }
    })
  );
