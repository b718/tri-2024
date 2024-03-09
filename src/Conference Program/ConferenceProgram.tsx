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
import MondayJune10thDistinguish from "../AbstractPages/MondayJune10th/MondayJune10thDistinguish";
import June12thMorning from "../AbstractPages/WednesdayJune12th/June12thMorning";
import June12thSuccessful from "../AbstractPages/WednesdayJune12th/June12thSuccessful";
import June12thAfternoon from "../AbstractPages/WednesdayJune12th/June12thAfterNoon";
import MondayJune10thHyeracusis from "../AbstractPages/MondayJune10th/MondayJune10thHyperacusis";
import TuesdayJune11thRound from "../AbstractPages/TuesdayJune11th/TuesdayJune11thRound";
import TuesdayJune11thEvidenceBased from "../AbstractPages/TuesdayJune11th/TuesdayJune11thEvidenceBased";
import June12thRoundTable from "../AbstractPages/WednesdayJune12th/June12thRoundTable";
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
            title={"WHERE ARE WE NOW? WHERE ARE WE GOING?"}
            date={"MONDAY, JUNE 10th"}
            time={"9:00 - 10:00"}
            type={"The Aage Moller Distinguished Lecture On Tinnitus:"}
            Component={MondayJune10thDistinguish}
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

          <AbstractDropDown
            title={"HYPERACUSIS.NET"}
            date={"MONDAY, JUNE 10th"}
            time={"2:30 - 3:00"}
            type={"Sponsor Session:"}
            Component={MondayJune10thHyeracusis}
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
            title={"HYPERACUSIS AND OTHER SOUND TOLERANCE DISORDERS"}
            date={"TUESDAY, JUNE 11th"}
            time={"9:00 - 10:00"}
            type={"Round Table:"}
            Component={TuesdayJune11thRound}
          />

          <AbstractDropDown
            title={
              "HOW SHOULD WE MEASURE THE SUCCESS OF TINNITUS TRIALS AND INTERVENTIONS?"
            }
            date={"TUESDAY, JUNE 11th"}
            time={"10:30 - 12:00"}
            type={"Symposium:"}
            Component={TuesdayHowMeasureSuccess}
          />

          <AbstractDropDown
            title={"EVIDENCE-BASED PRACTICE IN AUDIOLOGY: AN INTRODUCTION"}
            date={"TUESDAY, JUNE 11th"}
            time={"10:30 - 12:00"}
            type={"Workshop:"}
            Component={TuesdayJune11thEvidenceBased}
          />

          <AbstractDropDown
            title={"WAR ON TINNITUS"}
            date={"TUESDAY, JUNE 11th"}
            time={"1:00 - 2:00"}
            type={"Afternoon Session:"}
            Component={June12thAfternoon}
          />

          <AbstractDropDown
            title={
              "CONTRIBUTION OF MIDDLE EAR AND MULTIMODAL PLASTICITY TO TINNITUS AND HYPERACUSIS."
            }
            date={"TUESDAY, JUNE 11th"}
            time={"2:00 - 3:00"}
            type={"Workshop:"}
            Component={TuesdayContribution}
          />

          <ConferenceProgramDropDown
            title="wednesday, june 12"
            Component={June12}
          />

          <AbstractDropDown
            title={"TINNITUS ASSESSMENT AND COMORBIDITIES"}
            date={"WEDNESDAY, JUNE 12th"}
            time={"8:00 - 9:00"}
            type={"Opening Session:"}
            Component={June12thMorning}
          />

          <AbstractDropDown
            title={"THE SUCCESSFUL TINNITUS AUDIOLOGIST"}
            date={"WEDNESDAY, JUNE 12th"}
            time={"9:00 - 9:30"}
            type={"Workshop:"}
            Component={June12thSuccessful}
          />

          <AbstractDropDown
            title={"TINNITUS AND PHYSICAL LINKS"}
            date={"WEDNESDAY, JUNE 12th"}
            time={"10:30 - 12:00"}
            type={"Symposium:"}
            Component={June12thPhysicalLinks}
          />

          <AbstractDropDown
            title={"HETEROGENIETY OF TINNITUS"}
            date={"WEDNESDAY, JUNE 12th"}
            time={"3:00 - 4:00"}
            type={"Round Table:"}
            Component={June12thRoundTable}
          />
        </div>
      </div>
    </div>
  );
};

export default ConferenceProgram;
