/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import "./ConferenceProgram.css";
import SpeakerSection from "./SpeakersComponent/SpeakerSection";
import Program from "./Program/Program";
import { Image, Text } from "@mantine/core";
import ConferenceProgramDropDown from "./ConferenceProgramComponents/ConferenceProgramDropDown";
import June10 from "./ConferenceDropDownComponents/June10";
import June11 from "./ConferenceDropDownComponents/June11";
import June12 from "./ConferenceDropDownComponents/June12";
import PeterScienceWorld from "../Images/peter-skaronis-XH82uGMB8H8-unsplash copy.jpg";
import useWindowDimensions from "../Components/useWindowsDimensions";
import { useInView } from "react-intersection-observer";
import { NavBarContext } from "../App";
import AbstractDropDown from "../AbstractPages/AbstractDropDown";
import June12thPhysicalLinks from "../AbstractPages/WednesdayJune12th/June12thPhysicalLinks";
import MondayJune10th from "../AbstractPages/MondayJune10th/MondayJune10th";
import MondayRealWorldEvidence from "../AbstractPages/MondayJune10th/MondayRealWorldEvidence";
import TuesdayMeasureTinnitus from "../AbstractPages/TuesdayJune11th/TuesdayMeasureTinnitus";
import TuesdayHowMeasureSuccess from "../AbstractPages/TuesdayJune11th/TuesdayHowMeasureSuccess";
import TuesdayContribution from "../AbstractPages/TuesdayJune11th/TuesdayContribution";
const ConferenceProgram = () => {
  const { width, height } = useWindowDimensions();
  const [hoverPeter, setHoverPeter] = useState(false);
  const navBarContext = useContext(NavBarContext);
  const { ref: peterScienceWorld, inView: peterScienceWorldVisible } =
    useInView({
      triggerOnce: true,
    });

  const peterWorldSize = () => {
    if (width > 1040) {
      return 650;
    } else if (width < 501) {
      return 350;
    } else if (width < 620) {
      return 450;
    } else if (width < 961) {
      return 500;
    } else {
      return 650;
    }
    //650
  };
  return (
    <div>
      <div
        className={`conference-program-world-peter${
          peterScienceWorldVisible ? "-active" : ""
        }`}
        ref={peterScienceWorld}
      >
        <img
          src={PeterScienceWorld}
          className="conference-program-world-peter-image"
          onMouseEnter={() => setHoverPeter(true)}
          onMouseLeave={() => setHoverPeter(false)}
        />
        <Text
          className={`committee-text-roll-over${hoverPeter ? "-active" : ""}`}
        >
          © Peter Skaronis
        </Text>
      </div>

      <div className="conference-program-section-main-div">
        <Text
          className="conference-program-section-max-header"
          ref={navBarContext.programRef}
        >
          Conference program
        </Text>

        <div className="conference-program-main-div-under-text">
          <hr style={{ maxWidth: "98vw" }}></hr>
          <ConferenceProgramDropDown
            title="monday, june 10"
            Component={June10}
          />

          <AbstractDropDown
            title={
              "SOUND TOLERANCE DISORDERS AND TINNITUS: INVESTIGATING HYPERACUSIS AND MISOPHONIA"
            }
            date={"MONDAY, JUNE 10th"}
            time={"10:30 - 12:00"}
            type={"Symposium:"}
            Component={MondayJune10th}
          />

          <AbstractDropDown
            title={
              "REAL WORLD EVIDENCE FOR MULTIMODAL TREATMENT APPROACHES FOR TINNITUS"
            }
            date={"MONDAY, JUNE 10th"}
            time={"1:00 - 2:00"}
            type={"Symposium:"}
            Component={MondayRealWorldEvidence}
          />

          <ConferenceProgramDropDown
            title="tuesday, june 11"
            Component={June11}
          />

          <AbstractDropDown
            title={"MEASURING TINNITUS IN THE CLINIC AND FOR RESEARCH"}
            date={"TUESDAY, JUNE 11th"}
            time={"8:00 - 9:00"}
            type={"Opening Session:"}
            Component={TuesdayMeasureTinnitus}
          />

          <AbstractDropDown
            title={
              "HOW SHOULD WE MEASURE THE SUCCESS OF TINNITUS TRIALS AND INTERVENTIONS?"
            }
            date={"TUESDAY, JUNE 11th"}
            time={"10:30 - 12:00"}
            type={"Opening Session:"}
            Component={TuesdayHowMeasureSuccess}
          />

          <AbstractDropDown
            title={
              "CONTRIBUTION OF MIDDLE EAR AND MULTIMODAL PLASTICITY TO TINNITUS AND HYPERACUSIS."
            }
            date={"TUESDAY, JUNE 11th"}
            time={"1:00 - 2:00"}
            type={"Afternoon Session:"}
            Component={TuesdayContribution}
          />

          <ConferenceProgramDropDown
            title="wednesday, june 12"
            Component={June12}
          />

          <AbstractDropDown
            title={"TINNITUS AND PHYSICAL LINKS"}
            date={"WEDNESDAY, JUNE 12th"}
            time={"10:30 - 12:00"}
            type={"Symposium:"}
            Component={June12thPhysicalLinks}
          />
        </div>
      </div>
      {/* <SpeakerSection />
      <Program /> */}
    </div>
  );
};

export default ConferenceProgram;
