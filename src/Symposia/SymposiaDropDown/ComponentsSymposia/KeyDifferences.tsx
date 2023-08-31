import React from "react";
import "./ComponentSymposia.css";
import { List } from "@mantine/core";
const KeyDifferences = () => {
  return (
    <div>
      <List className="general-information-main-div">
        <List.Item>
          The topics are proposed and organized by the participants rather than
          by the program committee.
        </List.Item>
        <List.Item>
          The talks are grouped by theme and not just a collection of
          presentations.
        </List.Item>
        <List.Item>
          A minimum of 5 talks related to the same topic are required to create
          a session, with some flexibility regarding its structure.
        </List.Item>
        <List.Item>
          To promote diversity, no more than two presentations from any one lab
          should be included in a session.
        </List.Item>
      </List>
    </div>
  );
};

export default KeyDifferences;
