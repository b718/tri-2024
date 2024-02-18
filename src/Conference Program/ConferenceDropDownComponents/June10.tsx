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

  // const elements = [
  //   {
  //     position: "8:00 - 8:30",
  //     mass: "Registration",
  //     symbol: "",
  //     name: "",
  //   },
  //   {
  //     position: "8:30 - 9:00",
  //     mass: "Welcome + Opening Ceremony",
  //     symbol: "",
  //     name: "",
  //   },
  //   {
  //     position: "9:00 - 9:30",
  //     mass: <June10th9AM />,
  //     symbol: "",
  //     name: "",
  //   },
  //   { position: "9:30 - 10:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "10:00 - 10:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "10:30 - 11:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "11:00 - 11:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "11:30 - 12:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "12:00 - 12:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "12:30 - 1:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "1:00 - 1:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "1:30 - 2:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "2:00 - 2:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "3:00 - 3:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "3:30 - 4:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "4:00 - 4:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "4:30 - 5:00", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "5:00 - 6:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  //   { position: "6:30 - 11:30", mass: 137.33, symbol: "Ba", name: "Barium" },
  // ];

  // const rows = elements.map((element) => (
  //   <tr key={element.name}>
  //     <td>{element.position}</td>
  //     <td>{element.name}</td>
  //     <td>{element.symbol}</td>
  //     <td>{element.mass}</td>
  //   </tr>
  // ));
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

        {/* <Document
          file={"./trijune10th.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document> */}

        {/* <Table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Theatre</th>
              <th>C400/C420</th>
              <th>C440</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table> */}

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
          // happen="The Aage Moller - Lecture on Tinnitus"
          Component={June10th9AM}
          location="Theatre"
        />

        <EventComponent time="10:00 - 10:30" happen="Break" />

        <EventComponent
          time="10:30 - 12:00"
          // happen="Symposium 1 - “SOUND TOLERANCE DISORDERS AND TINNITUS: INVESTIGATING HYPERACUSIS AND MISOPHONIA”. LEAD: FATIMA HUSAIN, UNIVERSITY OF ILLINOISE URBANA-CHAMPAIGN, USA"
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
        {/* 
        <EventComponent
          time="13:00 - 15:00"
          happen="Exhibit hall"
          location="HSBC Hall"
        /> */}

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
