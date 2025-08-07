import { component$, useSignal } from "@builder.io/qwik";
import { Lightbox } from "../lightbox/lightbox";
import { localize } from "compiled-i18n";

export interface PropertyProps {
  id: string;
  title: string;
  youtube?: string;
  size: string;
  rent: string;
  fee: string;
  total: string;
  imageCount: number;
}

export const RentalProperty = component$<PropertyProps>((props) => {
  const { id, title, youtube, size, rent, fee, total, imageCount } = props;

  const selectedImage = useSignal(1);

  const dialogRef = useSignal<HTMLDialogElement>();

  return (
    <li class="property">
      <div class="grid" data-layout="halves">
        {/* eslint-disable qwik/jsx-img */}
        <div data-property="images">
          <button
            onClick$={() => dialogRef.value?.showModal()}
            class="button"
            data-naked
            data-zoom
          >
            <img
              data-property="main-image"
              src={`/images/${id}/${id}-${selectedImage.value}.webp`}
              alt=""
              class="radius-2"
            />
          </button>
          <div class="reel">
            {[...Array(imageCount).keys()]
              .map((n) => n + 1)
              .map((n) => (
                <img
                  data-selected={selectedImage.value === n ? "on" : "off"}
                  key={n}
                  role="button"
                  class="button-naked radius-2"
                  onClick$={(_e, t) => {
                    selectedImage.value = n;
                    t.scrollIntoView({
                      block: "nearest",
                      inline: "center",
                      behavior: "smooth",
                    });
                  }}
                  src={`/images/${id}/${id}-${n}.webp`}
                  alt=""
                />
              ))}
          </div>
        </div>

        <div data-property="information" class="flow flow-2xs">
          {/* eslint-enable qwik/jsx-img */}
          <h3>{title}</h3>
          <table>
            <tbody>
              <tr>
                <th>{localize`rent.property.size`}</th>
                <td>
                  {size}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <th>{localize`rent.property.rent`}</th>
                <td>{rent}</td>
              </tr>
              <tr>
                <th>{localize`rent.property.fee`}</th>
                <td>{fee}</td>
              </tr>
              <tr>
                <th>{localize`rent.property.total`}</th>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>

          {youtube && (
            <iframe
              loading="lazy"
              class="frame widescreen radius-2 border-none"
              src={`https://www.youtube.com/embed/${youtube}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>
          )}
        </div>

        <Lightbox
          ref={dialogRef}
          imageCount={imageCount}
          selected={selectedImage}
          src={`/images/${id}/${id}-${selectedImage.value}.webp`}
        />
      </div>

      <div class="inquire">
        <a class="button" href={`#contact`}>
          {localize`common.inquire`}
        </a>
      </div>
    </li>
  );
});
