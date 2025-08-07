import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { localize } from "compiled-i18n";
import styles from "./team.css?inline";
import Hide from "~/images/team/hide-headshot.jpg?jsx";
import Ron from "~/images/team/ron-headshot.jpg?jsx";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrapper region flow" style="--flow-space: var(--space-2xl)">
      <h1>{localize`team.heading`}</h1>

      <div class="wrapper" data-max="3">
        <div id="hide" class="flow" style="--flow-space: var(--space-m)">
          <h2>{localize`team.hide.name`}</h2>
          <Hide />
          <p>{localize`team.hide.long.1`}</p>
          <p>{localize`team.hide.long.2`}</p>
          <p>{localize`team.hide.long.3`}</p>
          <p>{localize`team.hide.long.4`}</p>
          <p>{localize`team.hide.long.5`}</p>
          <p>{localize`team.hide.long.6`}</p>
        </div>
      </div>

      <div class="wrapper" data-max="3">
        <div id="ron" class="flow" style="--flow-space: var(--space-m)">
          <h2>{localize`team.ron.name`}</h2>
          <Ron />
          <p>{localize`team.ron.long.1`}</p>
          <p>{localize`team.ron.long.2`}</p>
          <p>{localize`team.ron.long.3`}</p>
          <p>{localize`team.ron.long.4`}</p>
          <p>{localize`team.ron.long.5`}</p>
          <p>{localize`team.ron.long.6`}</p>
          <p>{localize`team.ron.long.7`}</p>
          <p dangerouslySetInnerHTML={localize`team.ron.long.8`} />
          <p>
            <a
              href={`mailto:${localize`team.ron.email`}`}
            >{localize`team.ron.email`}</a>
          </p>
          <p>
            <a
              href={`tel:${localize`team.ron.phone`}`}
            >{localize`team.ron.phone`}</a>
          </p>
        </div>
      </div>
    </div>
  );
});
