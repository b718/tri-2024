import { Flex, Text } from "@mantine/core";
import React from "react";
import "./ScientificCommitee.css";

const ScientificCommitee = () => {
  return (
    <div className="scientific-commitee-main-div">
      <div className="scientific-commitee-inner-div">
        <Text className="scientific-commitee-title">Scientific Committee</Text>

        <Flex direction={"column"} justify={"center"} gap={"1rem"}>
          <Flex direction={"column"} justify={"center"}>
            <Text className="scientific-person-title">Barbara Canlon</Text>
            <Text className="scientific-person-works">
              Department of Physiology and Pharmacology, Karolinska Institute,
              Sweden, and Editor-in-chief of Hearing Research Journal.
            </Text>
          </Flex>
          <Flex direction={"column"} justify={"center"}>
            <Text className="scientific-person-title">Victoria Duda</Text>
            <Text className="scientific-person-works">
              Assistant Professor, School of Speech Pathology and Audiology,
              Université de Montréal, Qc, Canada.
            </Text>
          </Flex>
          <Flex direction={"column"} justify={"center"}>
            <Text className="scientific-person-title">Philippe Fournier</Text>
            <Text className="scientific-person-works">
              Assistant Professor, Faculty of Rehabilitation Sciences, Laval
              University, Qc, Canada.
            </Text>
          </Flex>
          <Flex direction={"column"} justify={"center"}>
            <Text className="scientific-person-title">Arnaud J. Norena</Text>
            <Text className="scientific-person-works">
              Senior Researcher, Aix-Marseille Université, France
            </Text>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ScientificCommitee;
