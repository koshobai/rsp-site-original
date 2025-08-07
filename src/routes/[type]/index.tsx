import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";

const PROPERTY_TYPES = ["ur", "rent", "buy", "accident"];

export const useTypeLoader = routeLoader$((context) => {
  const { params, status } = context;

  if (!PROPERTY_TYPES.includes(params.type)) {
    status(404);
    return { ok: false };
  }

  return { ok: true };
});

export default component$(() => {
  const data = useTypeLoader();
  const loc = useLocation();

  if (!data.value.ok) return <h1>Page not found</h1>;

  return <h1>{loc.params.type} Index</h1>;
});
