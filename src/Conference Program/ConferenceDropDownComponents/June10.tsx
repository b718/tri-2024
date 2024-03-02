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
    </div>
  );
};

export default June10;
