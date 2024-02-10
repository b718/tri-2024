import { Flex, Image } from "@mantine/core";
import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import June10th9AM from "../HelperComponents/June10th9AM";
import June10th1030AM from "../HelperComponents/June10th1030AM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June10thSchedule from "../../Images/june10.png";
const June10 = () => {
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
    //961
    //500
  };
  return (
    <div>
      <Flex direction={"column"}>
        <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
          <Image
            src={June10thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
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

        <EventComponent
          time="13:00 - 15:00"
          happen="Exhibit hall"
          location="HSBC Hall"
        />

        <EventComponent time="15:00 - 15:30" happen="Break" />

        <EventComponent
          time="15:30 - 17:00"
          happen="Poster session"
          location="HSBC Hall"
        />

        <div style={{ marginBottom: "0.5rem" }}>
          <EventComponent time="18:30 - Late " happen="TRI Welcome Dinner" />
        </div>
      </Flex>
    </div>
  );
};

export default June10;
