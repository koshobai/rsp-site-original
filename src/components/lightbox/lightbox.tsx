import type { Signal } from "@builder.io/qwik";
import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./lightbox.css?inline";

export interface LightboxProps {
  ref: Signal<HTMLDialogElement | undefined>;
  src: string;
  imageCount: number;
  selected: Signal<number>;
}

export const Lightbox = component$<LightboxProps>((props) => {
  const { src, ref, imageCount, selected } = props;
  const imgRef = useSignal<HTMLImageElement | undefined>();

  useStylesScoped$(styles);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const onLeft = () => {
      if (selected.value < imageCount) {
        selected.value++;
      }
    };
    const onRight = () => {
      if (selected.value > 1) {
        selected.value--;
      }
    };
    import("swiped-events").then(() => {
      imgRef.value?.addEventListener("swiped-left", onLeft);
      imgRef.value?.addEventListener("swiped-right", onRight);
    });

    cleanup(() => {
      imgRef.value?.removeEventListener("swiped-left", onLeft);
      imgRef.value?.removeEventListener("swiped-right", onRight);
    });
  });

  return (
    <dialog
      ref={ref}
      onMouseDown$={(e, c) => {
        if (e.target === c) {
          c.close();
        }
      }}
      onKeyDown$={(e) => {
        const { key } = e;
        switch (key) {
          case "ArrowLeft":
            if (selected.value > 1) {
              selected.value--;
            }
            break;
          case "ArrowRight":
            if (selected.value < imageCount) {
              selected.value++;
            }
            break;
          default:
            return;
        }
      }}
    >
      {/* eslint-disable qwik/jsx-img */}
      <div class="position:relative">
        <button
          class="button"
          data-naked
          data-function="dismiss"
          onClick$={() => ref.value?.close()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={36}
            height={36}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          class="button"
          data-naked
          data-function="prev"
          hidden={selected.value === 1}
          preventdefault:click
          onClick$={() => {
            if (selected.value > 1) {
              selected.value--;
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={36}
            height={36}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          class="button"
          data-naked
          data-function="next"
          hidden={selected.value === imageCount}
          preventdefault:click
          onClick$={() => {
            if (selected.value < imageCount) {
              selected.value++;
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={36}
            height={36}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <a href={src} target="_blank">
          <img ref={imgRef} src={src} alt="" />
        </a>
      </div>
      {/* eslint-enable qwik/jsx-img */}
    </dialog>
  );
});
