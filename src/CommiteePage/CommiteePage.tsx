import React from "react";
import "./CommiteePage.css";
import CommiteeBios from "../CommitteeDropDown/ComponentsDropDown/CommiteeBios";
import { Text } from "@mantine/core";

const CommiteePage = () => {
  return (
    <div className="commitee-page-main-div">
      <div className="commitee-page-inner-div">
        <Text className="commitee-page-title">Conference Hosts</Text>
        <CommiteeBios />
      </div>
    </div>
  );
};

export default CommiteePage;
