import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import { Flex, Image } from "@mantine/core";
import June11th8AM from "../HelperComponents/June11th8AM";
import June11th1030AM from "../HelperComponents/June11th1030AM";
import June11th1PM from "../HelperComponents/June11th1PM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June11thSchedule from "../../Images/june11.png";

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
      return 600;
    }
    //961
    //500
  };
  return (
    <div>
      {" "}
      <Flex direction={"column"}>
        <div style={{ marginTop: "1rem", marginLeft: "1rem" }}>
          <Image
            src={June11thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
        <EventComponent
          time="08:00 - 09:00"
          // happen="Opening session - “MEASURING TINNITUS IN THE CLINIC AND RESEARCH” BY DR RICHARD TYLER."
          location="Theatre"
          Component={June11th8AM}
        />
        <EventComponent
          time="09:00 - 10:00"
          happen="Paper presentations"
          location="Theatre"
        />
        <EventComponent
          time="09:00 - 10:00"
          happen="Paper presentations"
          location="Room C400/C420"
        />
        <EventComponent
          time="09:00 - 10:00"
          happen="Paper presentations"
          location="Room C440"
        />
        <EventComponent time="10:00 - 10:30" happen="Break" />
        <EventComponent
          time="10:30 - 12:00"
          // happen="Symposium 2 - “HOW SHOULD WE MEASURE THE SUCCESS OF TINNITUS TRIALS AND INTERVENTIONS”
          // LEAD: HAZEL GOEDHART, TINNITUS HUB, THE NETHERLANDS."
          location="Theatre"
          Component={June11th1030AM}
        />
        <EventComponent time="12:00 - 13:00" happen="Lunch" />
        <EventComponent
          time="13:00 - 15:00"
          location="Theatre"
          Component={June11th1PM}
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
          happen="Exhibit Hall"
          location="HSBC Hall"
        />

        <EventComponent time="15:00 - 15:30" happen="Break" />

        <div style={{ marginBottom: "0.5rem" }}>
          <EventComponent
            time="15:30 - 17:00"
            happen="Poster session"
            location="HSBC Hall"
          />{" "}
        </div>
      </Flex>
    </div>
  );
};

export default June11;
