import React from "react";
import "./Topics.css";
import { Text } from "@mantine/core";

const Topics = () => {
  return (
    <div className="topics-main-div">
      <Text>
        These will be selectable from a drop-down menu when submitting an
        abstract through the form below.{" "}
      </Text>

      <ol className="topics-ol">
        <li>
          Basic mechanisms of tinnitus – Human research (includes EEG, fMRI)
        </li>
        <li>Basic mechanisms of tinnitus/hyperacusis – Animal research</li>
        <li>Basic mechanisms of hyperacusis</li>
        <li>Psychology of tinnitus (e.g., comorbidity, different models)</li>
        <li>Stress, auditory system and tinnitus/hyperacusis</li>
        <li>
          New ideas about tinnitus (includes insights from other disciplines)
        </li>
        <li>
          Heterogeneity of tinnitus - Can we diagnose the different sub-types of
          tinnitus and how (e.g., psychoacoustics, electrophysiology, imaging)?
        </li>
        <li>
          Heterogeneity of hyperacusis – Can we diagnose the different sub-types
          of hyperacusis and how (e.g., psychoacoustics, electrophysiology,
          imaging)
        </li>
        <li>
          {" "}
          Clinical management strategies (e.g., telehealth, technological
          advances)
        </li>
        <li>Reproducibility of findings in tinnitus research</li>
        <li>Audiology and tinnitus</li>
        <li>Somatic tinnitus</li>
        <li>Other (please specify in submission form)</li>
      </ol>
    </div>
  );
};

export default Topics;
