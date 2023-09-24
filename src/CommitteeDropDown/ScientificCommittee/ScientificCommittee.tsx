import { Flex, Text } from "@mantine/core";
import React from "react";
import "./ScientificCommittee.css";
const ScientificCommittee = () => {
  return (
    <div>
      <Flex direction={"column"}>
        <Text className="scientific-committee-text">
          Christopher Cederroth - Associate Professor, Kaolinska Institute,
          Sweden
        </Text>
        <Text className="scientific-committee-text">
          Rilana Cima - Assistant Professor, Catholic University Leuven, Belgium
        </Text>
        <Text className="scientific-committee-text">
          Hazel Goedhart - Directorm Tinnitus Hub, U.K./The Netherlands
        </Text>
        <Text className="scientific-committee-text">
          Berthold Langguth - Professor of Psychiatry and Psychotherapy,
          University of Regensburg, Germany
        </Text>
        <Text className="scientific-committee-text">
          Sarah Michiels - Assistant Professor, University Hasselt, Belgium
        </Text>
        <Text className="scientific-committee-text">
          Anusha Mohan - Glogbal Brain Health Fellow, Trinity College Dublin,
          Ireland
        </Text>
        <Text className="scientific-committee-text">
          Winfried Schlee - Scientific Coordinator of Tinnitus Research
          Initiative, University of Regensburg, Germany
        </Text>
        <Text className="scientific-committee-text">
          William Sedley - Academic Clinical Lecturer, Newcastle University,
          United Kingdom
        </Text>
        <Text className="scientific-committee-text">
          Jae-Jin Song - Professor of Neuro-otolgy, Seoul National University
          Bundang Hospital, South Korea
        </Text>
      </Flex>
    </div>
  );
};

export default ScientificCommittee;
