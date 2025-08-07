import { component$, useSignal } from "@builder.io/qwik";
import { Lightbox } from "../lightbox/lightbox";
import { localize } from "compiled-i18n";

export interface PropertyProps {
  id: string;
  title: string;
  address: string;
  trainLines: { name: string; description: string }[];
  rent: string;
  fee: string;
  map?: string;
  imageCount: number;
}

export const URProperty = component$<PropertyProps>((props) => {
  const { id, title, address, trainLines, rent, fee, map, imageCount } = props;

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
                <th>{localize`ur.property.address`}</th>
                <td>{address}</td>
              </tr>
              {trainLines.map((tl) => (
                <tr key={tl.name}>
                  <th>{tl.name}</th>
                  <td>{tl.description}</td>
                </tr>
              ))}
              <tr>
                <th>{localize`ur.property.rent`}</th>
                <td>{rent}</td>
              </tr>
              <tr>
                <th>{localize`ur.property.fee`}</th>
                <td>{fee}</td>
              </tr>
            </tbody>
          </table>

          {map && (
            <iframe
              class="w-full"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3262.9602014369434!2d136.9149167!3d35.1326667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA3JzU3LjYiTiAxMzbCsDU0JzUzLjciRQ!5e0!3m2!1sen!2sjp!4v1729818851372!5m2!1sen!2sjp"
              width="400"
              height="300"
              style="border:0;"
              allowFullscreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
