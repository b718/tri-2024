import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import { Flex, Image } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June11thSchedule from "../../Images/june-11th-schedule.png";
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import TuesdayContribution from "../../AbstractPages/TuesdayJune11th/TuesdayContribution";
import June12thAfternoon from "../../AbstractPages/WednesdayJune12th/June12thAfterNoon";
import TuesdayHowMeasureSuccess from "../../AbstractPages/TuesdayJune11th/TuesdayHowMeasureSuccess";
import TuesdayJune11thRound from "../../AbstractPages/TuesdayJune11th/TuesdayJune11thRound";
import TuesdayMeasureTinnitus from "../../AbstractPages/TuesdayJune11th/TuesdayMeasureTinnitus";
import TuesdayBioMarkers from "../../AbstractPages/TuesdayJune11th/TuesdayBioMarkers";
import TuesdayHeterogeniety from "../../AbstractPages/TuesdayJune11th/TuesdayHeterogeniety";
import TuesdayPulsatile from "../../AbstractPages/TuesdayJune11th/TuesdayPulsatile";
import TuesdayHyper from "../../AbstractPages/TuesdayJune11th/TuesdayHyper";
import TuesdayApplicationsRemote from "../../AbstractPages/TuesdayJune11th/TuesdayApplicationsRemote";
import TuesdayNewIdeas from "../../AbstractPages/TuesdayJune11th/TuesdayNewIdeas";
import TuesdayPosters from "../../AbstractPages/TuesdayJune11th/TuesdayPosters";

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
        time={"08:00 - 09:00"}
        type={"Opening Session:"}
        location={"(THEATRE)"}
        Component={TuesdayMeasureTinnitus}
      />
      <AbstractDropDown
        title={"HYPERACUSIS AND OTHER SOUND TOLERANCE DISORDERS"}
        date={"TUESDAY, JUNE 11th"}
        time={"09:00 - 10:00"}
        type={"Round Table:"}
        location={"(THEATRE)"}
        Component={TuesdayJune11thRound}
      />
      <AbstractDropDown
        title={"BIOMARKERS OF TINNITUS"}
        date={"TUESDAY, JUNE 11th"}
        time={"09:00 - 10:00"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={TuesdayBioMarkers}
      />
      <AbstractDropDown
        title={
          "HOW SHOULD WE MEASURE THE SUCCESS OF TINNITUS TRIALS AND INTERVENTIONS?"
        }
        date={"TUESDAY, JUNE 11th"}
        time={"10:30 - 12:00"}
        type={"Symposium:"}
        location={"(THEATRE)"}
        Component={TuesdayHowMeasureSuccess}
      />
      <AbstractDropDown
        title={"HETEROGENIETY OF TINNITUS"}
        date={"TUESDAY, JUNE 11th"}
        time={"10:30 - 12:00"}
        type={"Oral Papers:"}
        location={"(C400/C420)"}
        Component={TuesdayHeterogeniety}
      />
      <AbstractDropDown
        title={"PULSATILE TINNITUS"}
        date={"TUESDAY, JUNE 11th"}
        time={"10:30 - 12:00"}
        type={"Oral Papers:"}
        location={"(C460)"}
        Component={TuesdayPulsatile}
      />
      <AbstractDropDown
        title={"WAR ON TINNITUS"}
        date={"TUESDAY, JUNE 11th"}
        time={"01:00 - 02:00"}
        type={"Afternoon Session:"}
        location={"(THEATRE)"}
        Component={June12thAfternoon}
      />
      <AbstractDropDown
        title={"HYPERACUSIS"}
        date={"TUESDAY, JUNE 11th"}
        time={"02:00 - 03:00"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={TuesdayHyper}
      />
      <AbstractDropDown
        title={
          "CONTRIBUTION OF MIDDLE EAR AND MULTIMODAL PLASTICITY TO TINNITUS AND HYPERACUSIS."
        }
        date={"TUESDAY, JUNE 11th"}
        time={"02:00 - 03:00"}
        type={"Workshop:"}
        location={"(C460)"}
        Component={TuesdayContribution}
      />
      <AbstractDropDown
        title={"NEW IDEAS IN TINNITUS"}
        date={"TUESDAY, JUNE 11th"}
        time={"03:30 - 05:00"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={TuesdayNewIdeas}
      />
      <AbstractDropDown
        title={""}
        date={"TUESDAY, JUNE 11th"}
        time={"03:00 - 05:00"}
        type={"Posters + Exhibition:"}
        location={"(POSTER HALL)"}
        Component={TuesdayPosters}
      />
    </div>
  );
};

export default June11;
