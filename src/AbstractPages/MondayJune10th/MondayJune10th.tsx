import React from "react";
import "./MondayJune10th.css";
import { Text } from "@mantine/core";

const MondayJune10th = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>
          <b>Chair:</b>  Fatima Husain, University of Illinois Urbana-Champaign,
          United States
        </Text>
      </div>

      <div className="mj10-list">
        <Text>SPEAKERS: </Text>
        <ol className="mj10-inner-list">
          <li>
            Julia Campbell, University of Texas at Austin, Texas, United States
          </li>
          <li>Dave Eddins, University of Central Florida, United States</li>
          <li>
            Fatima Husain, University of Illinois Urbana-Champaign, United
            States
          </li>
          <li>Arnaud Norena, Aix-Marseille University, France</li>
          <li>Zach Rosenthal, Duke University, United States</li>
        </ol>
      </div>

      <Text className="mj10-text">
        <b>One Sentence Summary:</b> The symposium will bring together experts
        from audiology, neuroscience, and psychology to discuss sound tolerance
        disorders of loudness hyperacusis and misophonia in the context of
        tinnitus.
      </Text>
      <Text className="mj10-text">
        <b>Abstract:</b> Sound tolerance disorders are often comorbid with
        tinnitus but are poorly understood and their impact on individuals with
        tinnitus is not well understood. Misophonia is a relatively
        newly-defined sound tolerance disorder consisting of intense emotional
        responses to specific sounds, or &#39;triggers&#39; (Swedo et al.,
        2022). As a sound tolerance disorder, misophonia has a high comorbidity
        with tinnitus and hyperacusis (Aazh et al., 2022). In this panel,
        several experts spanning audiology, neuroscience, and behavioral
        psychology will moderate discussion on the similarities between
        misophonia, tinnitus, and hyperacusis, clinical differentiation between
        these disorders, and currently identified underlying mechanisms.
      </Text>
    </div>
  );
};

export default MondayJune10th;
