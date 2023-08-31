import React, { useContext } from "react";
import { Text } from "@mantine/core";
import "./CommiteeSection.css";
import CommitteeDropDown from "./CommitteDropDown/CommitteeDropDown";
import CommiteeBios from "./ComponentsDropDown/CommiteeBios";
const CommiteeSection = () => {
  return (
    <div>
      <div className="commitee-section-main-div">
        <Text className="commitee-section-max-header">Committee</Text>

        <div className="commitee-section-main-div-under-text">
          <hr style={{ maxWidth: "98vw" }}></hr>
          <CommitteeDropDown
            title={"Conference Hosts"}
            Component={CommiteeBios}
          />
        </div>
      </div>
    </div>
  );
};

export default CommiteeSection;
