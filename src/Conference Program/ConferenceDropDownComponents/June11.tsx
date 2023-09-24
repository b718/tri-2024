import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import { Flex } from "@mantine/core";

const June11 = () => {
  return (
    <div>
      {" "}
      <Flex direction={"column"}>
        <EventComponent
          time="08:00 - 09:00"
          happen="Opening session"
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
        <EventComponent
          time="09:00 - 10:00"
          happen="Paper presentations"
          location="Room C440"
        />
        <EventComponent time="10:00 - 10:30" happen="Break" />
        <EventComponent
          time="10:30 - 12:00"
          happen="Symposium 2"
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
