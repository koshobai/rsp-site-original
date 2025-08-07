import type { QRL, Signal } from "@builder.io/qwik";
import { $, useOnDocument } from "@builder.io/qwik";

type Ref = Signal<HTMLElement | undefined>;

export const useClickOutside = (
  ref: Ref,
  onClickOut: QRL<(event: Event, ref: Ref) => void>
) => {
  useOnDocument(
    "click",
    $((event) => {
      if (!ref.value) {
        return;
      }
      const target = event.target as HTMLElement;
      if (
        !ref.value.contains(target) &&
        !["SUMMARY"].includes(target.tagName)
      ) {
        onClickOut(event, ref);
      }
    })
  );
};
