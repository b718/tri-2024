import React from "react";
import "./MondayJune10th.css";
import { Text } from "@mantine/core";

const MondayRealWorldEvidence = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>
          <b>Chair:</b> Emily McMahan, Alaska Hearing and Tinnitus Center
        </Text>
      </div>

      <div className="mj10-list">
        <Text>SPEAKERS: </Text>
        <ol className="mj10-inner-list">
          <li>
            Sven Vanneste, Trinity College Institute for Neuroscience, &amp;
            School of Psychology, Trinity College Dublin, Ireland - Exploring
            Transcutaneous Stimulation of Peripheral Nerves as a Source of
            Transcranial Electrical Stimulation Effects
          </li>
          <li>
            Emily McMahan, Founder of Alaska Hearing and Tinnitus Center - A
            Hybrid Approach to Tinnitus Care: Utilizing Bimodal Neuromodulation
          </li>
          <li>
            Craig Kasper, Founder and Managing Director of New York Hearing
            Doctors – Institute for Hearing and Balance, New York, U.S.A and
            Brian Fligor – Co-Founder and Clinical Strategic Advisor at Lantos
            Technologies. President and Owner of Tobias and Battite Inc, Boston,
            Massachusetts, U.S.A. - Bimodal Neuromodulation for the Treatment of
            Tinnitus: Real-World Clinical Outcomes &amp; Outliers
          </li>

          <li>
            Stefan Schoisswohl, Universität der Bundeswehr München, Munich,
            Germany - The Effects of Combining Transcranial Magnetic Stimulation
            with Auditory Stimulation on Tinnitus Symptoms
          </li>
          <li>
            Milena Engelke, Universitätsklinikum Regensburg, Germany -
            Collecting real world evidence on tinnitus symptom dynamics through
            Ecological Momentary Assessment
          </li>
        </ol>
      </div>

      <Text className="mj10-text">
        <b>One Sentence Summary:</b> Speakers will present real-world clinical
        experience in implementing multimodal treatment for tinnitus.
      </Text>
      <Text className="mj10-text">
        <b>Abstract:</b> There is a rapid growth in combining various modalities
        for activating or modulating different networks in the brain for
        treating a range of neurological and psychiatric disorders. In tinnitus,
        multimodal treatment is not new. The efficacy of novel approaches which
        simultaneously activate multiple pathways to target relevant tinnitus
        circuits have been demonstrated in clinical trials, however, it is
        important to continue to investigate and collect data on these
        multimodal approaches as they transition into routine clinic practice
        and are utilized outside of the controlled environment of clinical
        studies. This session will provide insight into the effectiveness and
        safety of different multimodal approaches being implemented for tinnitus
        treatment during routine delivery of care, with new perspectives in
        treatment strategies, user customization, and patient experiences to
        improve therapeutic outcomes. Presentations will include discussions on
        leveraging different forms of transcranial electrical stimulation; the
        clinical implementation and outcomes of sound therapy and electrical
        body stimulation; the effects of non-invasive cortical stimulation and
        sound therapy; as well as understanding the impact of structured
        counselling and sound therapy on daily life.
      </Text>
    </div>
  );
};

export default MondayRealWorldEvidence;
