import { Flex, Image, Table } from "@mantine/core";
import React, { useState } from "react";
import EventComponent from "./EventComponent/EventComponent";
import June10th9AM from "../HelperComponents/June10th9AM";
import June10th1030AM from "../HelperComponents/June10th1030AM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June10thSchedule from "../../Images/june10th.png";
import June10tScheduleTwo from "../../Images/june10th-2.png";
import { Document, Page, pdfjs } from "react-pdf";
import NewJune10thSchedule from "../../Images/june10th-new.png";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "@bitnoi.se/react-scheduler/dist/style.css";
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import June12thPhysicalLinks from "../../AbstractPages/WednesdayJune12th/June12thPhysicalLinks";

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
      return 600;
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
            src={NewJune10thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>

        <hr
          style={{
            maxWidth: "98vw",
            marginTop: "1rem",
          }}
        ></hr>

        <AbstractDropDown
          title={"Tinnitus and Physical Links"}
          date={"WEDNESDAY, JUNE 12"}
          time={"1:00 - 2:00"}
          type={"Symposium:"}
          Component={June12thPhysicalLinks}
        />

        <EventComponent
          time="08:00 - 08:30"
          happen="Registration"
          location="Theatre"
        />

        <EventComponent
          time="08:30 - 09:00"
          happen="Welcome remarks / opening ceremony"
          location="Theatre"
        />

        <EventComponent
          time="09:00 - 10:00"
          Component={June10th9AM}
          location="Theatre"
        />

        <EventComponent time="10:00 - 10:30" happen="Break" />

        <EventComponent
          time="10:30 - 12:00"
          Component={June10th1030AM}
          location="Theatre"
        />

        <EventComponent time="12:00 - 13:00" happen="Lunch" />

        <EventComponent
          time="13:00 - 15:00"
          happen="Paper presentations"
          location="Theatre"
        />

        <EventComponent
          time="13:00 - 15:00"
          happen="Paper presentations"
          location="Room C400/C420"
        />

        <EventComponent
          time="13:00 - 15:00"
          happen="Sponsor presentation"
          location="Room C440"
        />

        <EventComponent time="15:00 - 15:30" happen="Break" />

        <EventComponent
          time="15:30 - 17:00"
          happen="Posters + Exhibititon"
          location="Room C440"
        />

        <div style={{ marginBottom: "0.5rem" }}>
          <EventComponent
            time="18:30 - 23:30"
            location="Hyatt Regency Hotel"
            happen="TRI Networking Dinner"
          />
        </div>
      </Flex>
    </div>
  );
};

export default June10;
