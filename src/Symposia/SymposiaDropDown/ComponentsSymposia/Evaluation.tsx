import React from "react";
import "./ComponentSymposia.css";
import { List, Text } from "@mantine/core";

const Evaluation = () => {
  return (
    <div>
      {" "}
      <Text className="general-information-main-div">
        All submitted proposals will be peer-reviewed by members of the Program
        Committee based on the following criteria:{" "}
      </Text>
      <List className="general-information-main-div">
        <List.Item>
          {" "}
          Scientific merit, with emphasis on new research results, cutting-edge
          developments, novel perspectives, and <br />
          innovative or interdisciplinary approaches
        </List.Item>
        <List.Item>
          Clear relevance to the conference themes of Tinnitus or Hyperacusis
        </List.Item>
        <List.Item>
          Integrated treatment of the topic, such that presentations go beyond
          individual case studies and contribute to a <br /> cohesive,
          overarching synthesis
        </List.Item>
        <List.Item>
          Likelihood of a successful session, as indicated by a large proportion
          of confirmed speakers
        </List.Item>
        <List.Item>
          Two alternate contacts (name, institutional affiliation, email
          address).
        </List.Item>
        <List.Item>Submission of a complete and compelling proposal</List.Item>
      </List>
    </div>
  );
};

export default Evaluation;
