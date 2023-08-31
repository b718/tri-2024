import React, { useContext } from "react";
import "./Symposia.css";
import { Text } from "@mantine/core";
import SymposiaDropDown from "./SymposiaDropDown/SymposiaDropDown";
import GeneralInformation from "./SymposiaDropDown/ComponentsSymposia/General-Information";
import SymposiaForm from "./SymposiaForm/SymposiaForm";
import { NavBarContext } from "../App";
import KeyDifferences from "./SymposiaDropDown/ComponentsSymposia/KeyDifferences";
import Proposal from "./SymposiaDropDown/ComponentsSymposia/Proposal";
import Evaluation from "./SymposiaDropDown/ComponentsSymposia/Evaluation";
import Responsibilites from "./SymposiaDropDown/ComponentsSymposia/Responsibilites";
const Symposia = () => {
  const symposiaRef = useContext(NavBarContext);
  return (
    <div className="symposia-outside-div" ref={symposiaRef.symposiaRef}>
      <div className="symposia-main-div">
        <Text className="symposia-max-header">Symposia Guidelines</Text>
        <Text className="symposia-main-text">
          The 2024 Tinnitus Research Initiative Annual Meeting (tri2024.com)
          will be held for the first time in Canada, in the vibrant city of
          Vancouver, June 10th-12th, under the theme The Science of Tinnitus .
          We are inviting proposals for symposia on topics or themes relevant to
          tinnitus or hyperacusis. A symposium typically gathers between 4-6
          speakers and provides a well-integrated synthesis of information on a
          given theme. It can be structured as a series of formal talks or a
          moderated panel discussion, which can allow for greater audience
          participation. The number of symposia will be limited and each will be
          allocated a time of 90 minutes.
        </Text>
        <div className="symposia-main-div-under-text">
          <hr style={{ maxWidth: "98vw" }}></hr>
          <SymposiaDropDown
            title={"General Information"}
            Component={GeneralInformation}
          />
          <SymposiaDropDown
            title={
              "Key differences between regular podium session and symposium"
            }
            Component={KeyDifferences}
          />
          <SymposiaDropDown title={"Proposal Format"} Component={Proposal} />{" "}
          <SymposiaDropDown
            title={"Evaluation Process and CRITERIA"}
            Component={Evaluation}
          />
          <SymposiaDropDown
            title={"RESPONSIBILITIES as an organizer"}
            Component={Responsibilites}
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
