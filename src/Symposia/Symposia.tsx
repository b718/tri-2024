import React from "react";
import "./Symposia.css";
import { Text } from "@mantine/core";
import SymposiaDropDown from "./SymposiaDropDown/SymposiaDropDown";
import GeneralInformation from "../FAQ/DropDownFaQ/General-Information/General-Information";
import SymposiaForm from "./SymposiaForm/SymposiaForm";
const Symposia = () => {
  return (
    <div className="symposia-outside-div">
      <div className="symposia-main-div">
        <Text className="symposia-max-header">Symposia Guidelines</Text>
        <Text className="symposia-main-text">
          The 2024 Tinnitus Research Initiative Annual Meeting (tri2024.com)
          will be held for the first time in Canada, in the vibrant city of
          Vancouver, June 10th-12th, under the theme The Science of Tinnitus.
        </Text>
        <div className="symposia-main-div-under-text">
          <hr></hr>
          <SymposiaDropDown
            title={"General Information"}
            Component={GeneralInformation}
          />
          <SymposiaDropDown
            title={
              "Key differences between regular podium session and symposium"
            }
            Component={GeneralInformation}
          />
          <SymposiaDropDown
            title={"Proposal Format"}
            Component={GeneralInformation}
          />{" "}
          <SymposiaDropDown
            title={"Evaluation Process and CRITERIA"}
            Component={GeneralInformation}
          />
          <SymposiaDropDown
            title={"RESPONSIBILITIES as an organizer"}
            Component={GeneralInformation}
          />
        </div>
      </div>

      <div className="symposia-form-section">
        <SymposiaForm />
      </div>
    </div>
  );
};

export default Symposia;
