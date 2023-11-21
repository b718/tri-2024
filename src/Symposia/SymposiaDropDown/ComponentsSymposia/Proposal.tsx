import { List, Text } from "@mantine/core";
import React from "react";
import "./ComponentSymposia.css";

const Proposal = () => {
  return (
    <div>
      <Text className="general-information-main-div">
        Information that will be needed for submitting a Symposium proposal:
      </Text>
      <List className="general-information-main-div" spacing={"1rem"}>
        <List.Item>Title of the symposium (25 words max.).</List.Item>
        <List.Item>
          Abstract – a brief overview of the objectives, topic to be covered,
          and relevance (250 words max.).
        </List.Item>
        <List.Item>
          A one-sentence summary of the symposium (50 words max.).
        </List.Item>
        <List.Item>
          Lead organizer (name, institutional affiliation, email address).
        </List.Item>
        <List.Item>
          Two alternate contacts (name, institutional affiliation, email
          address).
        </List.Item>
        <List.Item>A draft program for the symposium.</List.Item>
        <List.Item>
          A list of invited speakers including their affiliation and location,
          the title of their presentation, and an <br></br>indication of whether
          their participation is confirmed.
        </List.Item>
      </List>
    </div>
  );
};

export default Proposal;
