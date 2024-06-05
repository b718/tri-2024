import { Text } from "@mantine/core";
import React from "react";

const TuesdayContribution = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>
          <b>Speaker:</b> Dr Arnaud Norena, Aix-Marseille University, France, Ms
          Myriam Westcott, DWM Audiology
        </Text>
      </div>

      <Text className="mj10-text">
        <b>Abstract (Arnaud Norena):</b> In this presentation, I will present
        the hypothesis, as well as the data collected in patients, suggesting
        that the middle ear (especially the middle ear muscles) and the
        multimodal plasticity can account for specific sub- types of tinnitus
        and hyperacusis.  I will also present the tools and approaches that can
        be used to assess the middle ear function, including a sensor pressure
        device that we have developed to objectify the tensor tympani
        contraction.
      </Text>
      <Text className="mj10-text">
        <b>Abstract (Myriam Westcott):</b> I will present a clinical perspective
        with case studies on the role of Tensor Tympani Syndrome (TTS) in
        hyperacusis and tinnitus patients. TTS symptoms have been associated
        with acoustic shock, are prevalent in most hyperacusis patients but also
        in tinnitus patients, and can frequently be sound-induced. The
        presentation, evaluation and effective treatment of TTS symptoms in a
        clinical setting has revealed insights into TTS triggers, the underlying
        somatic, neurological and psychological pathways and more broadly into
        hyperacusis mechanisms and tinnitus reactivity. This highlights the
        importance of TTS diagnosis and treatment, and the therapeutic benefit
        of identifying and demystifying the associated pathways.
      </Text>
    </div>
  );
};

export default TuesdayContribution;
