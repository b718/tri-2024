import { Flex, Grid, Text } from "@mantine/core";
import React, { FunctionComponent } from "react";
import "./EventComponent.css";
interface EventComponentData {
  time: string;
  happen: string;
  location?: string;
  Component?: React.ComponentType;
}
const EventComponent: FunctionComponent<EventComponentData> = ({
  time,
  happen,
  location,
  Component,
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
          <Flex
            justify={"flex-start"}
            style={{ minWidth: "10rem" }}
            direction={"column"}
          >
            <Text className="event-component-time-text">
              {happen === "Aage Moller - Lecture on Tinnitus" ? (
                <Text>
                  AAGE M<span>&#248;</span>
                  LLER - LECTURE ON TINNITUS
                </Text>
              ) : (
                happen
              )}
            </Text>
            {Component ? (
              <div className="event-component-time-text">
                <Component />
              </div>
            ) : (
              <div></div>
            )}
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default EventComponent;
