import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import June12th8AM from "../HelperComponents/June12th8AM";
import June12th1030AM from "../HelperComponents/June12th1030AM";
import June12thScheduleTwo from "../../Images/june12th-2.png";
import NewJune12thSchedule from "../../Images/june12th-new.png";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import C440June12th9AM from "../HelperComponents/C440June12th9AM";
import C440June12th930AM from "../HelperComponents/C440June12th930AM";
import C440June12th1PM from "../HelperComponents/C440June12th1PM";
import C440June12th2PM from "../HelperComponents/C440June12th2PM";
import June12thSchedule from "../../Images/Wednesday June 12.png";
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import June12thMorning from "../../AbstractPages/WednesdayJune12th/June12thMorning";
import June12thOticon from "../../AbstractPages/WednesdayJune12th/June12thOticon";
import June12thPhysicalLinks from "../../AbstractPages/WednesdayJune12th/June12thPhysicalLinks";
import June12thRoundTable from "../../AbstractPages/WednesdayJune12th/June12thRoundTable";
import June12thSuccessful from "../../AbstractPages/WednesdayJune12th/June12thSuccessful";
import WednesdayElectro from "../../AbstractPages/WednesdayJune12th/WednesdayElectro";
import WednesdayTinnitusAndCognition from "../../AbstractPages/WednesdayJune12th/WednesdayTinnitusAndCognition";
import WednesdayMisophonia from "../../AbstractPages/WednesdayJune12th/WednesdayMisophonia";
import WednesdayRemoteCare from "../../AbstractPages/WednesdayJune12th/WednesdayRemoteCare";
import WednesdayClinical from "../../AbstractPages/WednesdayJune12th/WednesdayClinical";
import WednesdayEpidemiology from "../../AbstractPages/WednesdayJune12th/WednesdayEpidemiology";

const June12 = () => {
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
      <Flex direction={"column"}>
        <div
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <Image
            src={June12thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>

      <AbstractDropDown
        title={"TINNITUS ASSESSMENT AND COMORBIDITIES"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"08:00 - 09:00"}
        type={"Opening Session:"}
        location={"(THEATRE)"}
        Component={June12thMorning}
      />

      <AbstractDropDown
        title={"ELECTROPHYSIOLOGY"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"09:00 - 10:00"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={WednesdayElectro}
      />

      <AbstractDropDown
        title={"TINNITUS AND COGNITION"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"09:00 - 10:00"}
        type={"Oral Papers:"}
        location={"(C400/C420)"}
        Component={WednesdayTinnitusAndCognition}
      />

      <AbstractDropDown
        title={"MISOPHONIA AND TINNITUS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"09:30 - 10:00"}
        type={"Workshop:"}
        location={"(C460)"}
        Component={WednesdayMisophonia}
      />

      <AbstractDropDown
        title={"THE SUCCESSFUL TINNITUS AUDIOLOGIST"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"09:30 - 10:00"}
        type={"Workshop:"}
        location={"(C460)"}
        Component={June12thSuccessful}
      />

      <AbstractDropDown
        title={"TINNITUS AND PHYSICAL LINKS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"10:30 - 12:00"}
        type={"Symposium:"}
        location={"(THEATRE)"}
        Component={June12thPhysicalLinks}
      />

      <AbstractDropDown
        title={"NAVIGATING OTICON'S TINNITUS SOUND SUPPORT IN THE GENIE 2.0"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"10:30 - 11:00"}
        type={"Sponsorship Session:"}
        location={"(C460)"}
        Component={June12thOticon}
      />

      <AbstractDropDown
        title={"CLINICAL APPLICATIONS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"02:00 - 03:30"}
        type={"Oral Papers:"}
        location={"(THEATRE)"}
        Component={WednesdayClinical}
      />

      <AbstractDropDown
        title={"REMOTE CARE"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"02:00 - 03:30"}
        type={"Oral Papers:"}
        location={"(C400/C420)"}
        Component={WednesdayRemoteCare}
      />

      <AbstractDropDown
        title={"HETEROGENIETY OF TINNITUS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"03:00 - 04:00"}
        type={"Round Table:"}
        location={"(THEATRE)"}
        Component={June12thRoundTable}
      />

      <AbstractDropDown
        title={"EPIDEMIOLOGY"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"03:30 - 04:30"}
        type={"Oral Papers:"}
        location={"(C400/C420)"}
        Component={WednesdayEpidemiology}
      />
    </div>
  );
};

export default June12;
