import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import June12th8AM from "../HelperComponents/June12th8AM";
import June12th1030AM from "../HelperComponents/June12th1030AM";
import June12thSchedule from "../../Images/june12.png";
import useWindowDimensions from "../../Components/useWindowsDimensions";

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
      return 600;
    }
    //961
    //500
  };
  return (
    <div style={{ minWidth: "45rem" }}>
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
        <EventComponent
          time="08:00 - 09:00"
          // happen='Opening session - "Tinnitus Research in Canada"'
          Component={June12th8AM}
          location="Theatre"
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

        <EventComponent time="10:00 - 10:30" happen="Break" />

        <EventComponent
          time="10:30 - 12:00"
          // happen="Symposium 3 - “TINNITUS AND PHYSICAL LINKS” LEAD: SARAH MICHIELS, HASSELT UNIVERSITY, BELGIUM."
          location="Theatre"
          Component={June12th1030AM}
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
          happen="Sponsor session"
          location="Room C440"
        />

        <EventComponent time="15:00 - 15:30" happen="Break" />

        <EventComponent
          time="15:30 - 16:30"
          happen="Round table"
          location="Theatre"
        />

        <div style={{ marginBottom: "0.5rem" }}>
          <EventComponent
            time="16:30 - 17:00"
            happen="Farewell and closing remarks"
            location="Theatre"
          />
        </div>
      </Flex>
    </div>
  );
};

export default June12;
