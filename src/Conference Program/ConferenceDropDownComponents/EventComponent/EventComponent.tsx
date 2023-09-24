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
        <Flex gap={"2rem"}>
          <Flex direction={"column"} style={{ minWidth: "10rem" }}>
            <Text className="event-component-break-text">{time}</Text>
          </Flex>
          <Flex style={{ minWidth: "10rem" }} justify={"flex-start"}>
            <Text className="event-component-break-text">{happen}</Text>
          </Flex>
        </Flex>
      ) : (
        <Flex gap={"2rem"}>
          <Flex direction={"column"} style={{ minWidth: "10rem" }}>
            <Text className="event-component-time-text">{time}</Text>
            <Text className="event-component-location-text">{location}</Text>
          </Flex>
          <Flex justify={"flex-start"} style={{ minWidth: "10rem" }}>
            <Text className="event-component-time-text">{happen}</Text>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default EventComponent;
