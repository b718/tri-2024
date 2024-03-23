import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import { Flex, Image } from "@mantine/core";
import June11th8AM from "../HelperComponents/June11th8AM";
import June11th1030AM from "../HelperComponents/June11th1030AM";
import June11th1PM from "../HelperComponents/June11th1PM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June11thSchedule from "../../Images/Tuesday June 11.png";
import June11thScheduleTwo from "../../Images/june11th-2.png";
import NewJune11thSchedule from "../../Images/june11th-new.png";
import C440June11th9AM from "../HelperComponents/C440-June11th9AM";
import C440June11th1PM from "../HelperComponents/C440June11th1PM";
import C440June11th230PM from "../HelperComponents/C440June11th230PM";
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import TuesdayContribution from "../../AbstractPages/TuesdayJune11th/TuesdayContribution";
import June12thAfternoon from "../../AbstractPages/WednesdayJune12th/June12thAfterNoon";
import TuesdayJune11thEvidenceBased from "../../AbstractPages/TuesdayJune11th/TuesdayJune11thEvidenceBased";
import TuesdayHowMeasureSuccess from "../../AbstractPages/TuesdayJune11th/TuesdayHowMeasureSuccess";
import TuesdayJune11thRound from "../../AbstractPages/TuesdayJune11th/TuesdayJune11thRound";
import TuesdayMeasureTinnitus from "../../AbstractPages/TuesdayJune11th/TuesdayMeasureTinnitus";

const June11 = () => {
  const { width, height } = useWindowDimensions();

  const triCommitteeRogersSize = () => {
    if (width < 400) {
      return 300;
    } else if (width < 500) {
      return 350;
    } else if (width < 580) {
      return 400;
    } else {
      return 700;
    }
    //961
    //500
  };
  return (
    <div>
      {" "}
      <Flex direction={"column"}>
        <div
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <Image
            src={June11thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>
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
    </div>
  );
};

export default June11;
