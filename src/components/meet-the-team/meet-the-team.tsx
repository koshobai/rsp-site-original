import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./meet-the-team.css?inline";
import Hide from "~/images/team/hide-headshot.jpg?jsx";
import Ron from "~/images/team/ron-headshot.jpg?jsx";
import { localize } from "compiled-i18n";

export interface MeetTheTeamProps {}

export const MeetTheTeam = component$<MeetTheTeamProps>(() => {
  useStylesScoped$(styles);

  return (
    <div
      class="wrapper flow team-container"
      style="--flow-space: var(--space-xl)"
    >
      <h2 class="text-center">{localize`team.heading`}</h2>
      <div class="grid" data-layout="halves">
        <div id="hide" class="prose flow">
          <h3 class="text-center">{localize`team.hide.name`}</h3>
          <Hide />
          <p>
            {localize`team.hide.short`}
            <a href="/team#hide">{localize`team.hide.more`}</a>
          </p>
        </div>
        <div id="ron" class="prose flow">
          <h3 class="text-center">{localize`team.ron.name`}</h3>
          <Ron />
          <p>
            {localize`team.ron.short`}
            <a href="/team#ron">{localize`team.ron.more`}</a>
          </p>
        </div>
      </div>
    </div>
  );
});
