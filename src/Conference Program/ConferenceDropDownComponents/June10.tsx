import { Flex, Image, Table } from "@mantine/core";
import React, { useState } from "react";
import EventComponent from "./EventComponent/EventComponent";
import June10th9AM from "../HelperComponents/June10th9AM";
import June10th1030AM from "../HelperComponents/June10th1030AM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June10tScheduleTwo from "../../Images/june10th-2.png";
import { Document, Page, pdfjs } from "react-pdf";
import NewJune10thSchedule from "../../Images/june10th-new.png";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "@bitnoi.se/react-scheduler/dist/style.css";
import June10thSchedule from "../../Images/Monday June 10.png";
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import MondayJune10thDistinguish from "../../AbstractPages/MondayJune10th/MondayJune10thDistinguish";
import MondayJune10th from "../../AbstractPages/MondayJune10th/MondayJune10th";
import MondayJune10thHyeracusis from "../../AbstractPages/MondayJune10th/MondayJune10thHyperacusis";
import MondayRealWorldEvidence from "../../AbstractPages/MondayJune10th/MondayRealWorldEvidence";
import MondayJune10thAnimalResearch from "../../AbstractPages/MondayJune10th/MondayJune10thAnimalResearch";
import MondayJune10thSoundTherapy from "../../AbstractPages/MondayJune10th/MondayJune10thSoundTherapy";
import MondayJune10thPosters from "../../AbstractPages/MondayJune10th/MondayJune10thPosters";
import TuesdayJune11thEvidenceBased from "../../AbstractPages/TuesdayJune11th/TuesdayJune11thEvidenceBased";

const June10 = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
  };

  return (
    <div>
      <Flex direction={"column"}>
        <div
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <Image
            src={June10thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>

      <AbstractDropDown
        title={"WHERE ARE WE NOW? WHERE ARE WE GOING?"}
        date={"MONDAY, JUNE 10th"}
        time={"09:00 - 10:00"}
        type={"The Aage Moller Distinguished Lecture On Tinnitus:"}
        location={"(THEATRE)"}
        Component={MondayJune10thDistinguish}
      />

      <AbstractDropDown
        title={"ANIMAL RESEARCH"}
        date={"MONDAY, JUNE 10th"}
        time={"10:30 - 12:00"}
        type={"Oral Papers:"}
        location={"(C400/C420)"}
        Component={MondayJune10thAnimalResearch}
      />

      <AbstractDropDown
        title={
          "SOUND TOLERANCE DISORDERS AND TINNITUS: INVESTIGATING HYPERACUSIS AND MISOPHONIA"
        }
        date={"MONDAY, JUNE 10th"}
        time={"10:30 - 12:00"}
        type={"Symposium:"}
        location={"(THEATRE)"}
        Component={MondayJune10th}
      />

      <AbstractDropDown
        title={
          "REAL WORLD EVIDENCE FOR MULTIMODAL TREATMENT APPROACHES FOR TINNITUS"
        }
        date={"MONDAY, JUNE 10th"}
        time={"01:00 - 02:00"}
        type={"Symposium:"}
        location={"(THEATRE)"}
        Component={MondayRealWorldEvidence}
      />

      <AbstractDropDown
        title={"EVIDENCE-BASED PRACTICE IN AUDIOLOGY: AN INTRODUCTION"}
        date={"MONDAY, JUNE 10th"}
        time={"02:00 - 03:00"}
        type={"Workshop:"}
        location={"(C460)"}
        Component={TuesdayJune11thEvidenceBased}
      />

      <AbstractDropDown
        title={"HYPERACUSIS.NET"}
        date={"MONDAY, JUNE 10th"}
        time={"02:30 - 03:00"}
        type={"Sponsor Session:"}
        location={"(C460)"}
        Component={MondayJune10thHyeracusis}
      />

      <AbstractDropDown
        title={"SOUND THERAPY"}
        date={"MONDAY, JUNE 10th"}
        time={"03:30 - 05:00"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={MondayJune10thSoundTherapy}
      />

      <AbstractDropDown
        title={""}
        date={"MONDAY, JUNE 10th"}
        time={"03:00 - 05:00 "}
        type={"Posters + Exhibition:"}
        location={"(POSTER HALL)"}
        Component={MondayJune10thPosters}
      />
    </div>
  );
};

export default June10;
