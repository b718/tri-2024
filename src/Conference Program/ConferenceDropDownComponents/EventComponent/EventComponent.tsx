import { Flex, Grid, Text } from "@mantine/core";
import React, { FunctionComponent } from "react";
import "./EventComponent.css";
interface EventComponentData {
  time: string;
  happen: string;
  location?: string;
}
const EventComponent: FunctionComponent<EventComponentData> = ({
  time,
  happen,
  location,
}) => {
  return (
    <div className="event-component-main-div">
      {happen === "Break" || happen === "Lunch" ? (
        <Flex gap={"4rem"}>
          <Text className="event-component-break-text">{time}</Text>
          <Text className="event-component-break-text">{happen}</Text>
        </Flex>
      ) : (
        <Flex gap={`${location === "Room C400/C420" ? "2rem" : "4rem"}`}>
          <Flex direction={"column"}>
            <Text className="event-component-time-text">{time}</Text>
            <Text className="event-component-location-text">{location}</Text>
          </Flex>
          <Flex justify={"center"}>
            <Text className="event-component-time-text">{happen}</Text>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default EventComponent;
