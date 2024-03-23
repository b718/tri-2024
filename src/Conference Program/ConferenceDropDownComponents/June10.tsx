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
    </div>
  );
};

export default June10;
