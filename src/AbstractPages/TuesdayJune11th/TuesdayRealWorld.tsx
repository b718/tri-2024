import React from "react";
import { Text } from "@mantine/core";

const TuesdayRealWorld = () => {
  return (
    <div>
      {" "}
      <div className="mj10-host">
        <Text>CHAIR:</Text>
        <Text>Emily McMahan,</Text>
        <Text>Alaska Hearing and Tinnitus Center</Text>
      </div>
      <div className="mj10-list">
        <Text>SPEAKERS: </Text>

        <ol className="mj10-inner-list">
          <li>Mr. Robin Guillard, University of Grenoble Alpes, France</li>
          <li>Mr. Antonios Chalimourdas, Hasselt University, Belgium</li>
          <li>Ms. Sara Demoen, Hasselt University, Belgium</li>
          <li>
            Dr. Annemarie van der Wal, ACTA Academic Center for Dentistry,
            Amsterdam, The Netherlands
          </li>
          <li>
            Prof. dr. Tanit Ganz Sanchez, University of Sao Paulo, ENT
            Department, School of Medicine, Brazil
          </li>
        </ol>
      </div>
      <Text className="mj10-text">
        There is a rapid growth in combining various modalities for activating
        or modulating different networks in the brain for treating a range of
        neurological and psychiatric disorders. In tinnitus, multimodal
        treatment is not new. The efficacy of novel approaches which
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

export default TuesdayRealWorld;
