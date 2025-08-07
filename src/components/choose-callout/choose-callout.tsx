import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "~/components/choose-callout/choose-callout.css?inline";

export interface ChooseCalloutProps {}

export const ChooseCallout = component$<ChooseCalloutProps>(() => {
  useStylesScoped$(styles);

  return (
    <li class="container">
      <div class="choose-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          height={24}
          width={24}
        >
          <Slot name="icon" />
        </svg>
      </div>

      <div>
        <Slot />
      </div>
    </li>
  );
});
