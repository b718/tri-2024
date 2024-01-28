import React, { FunctionComponent } from "react";
import "./AbstractPages.css";
import { Flex, Text } from "@mantine/core";

interface AbstractPageData {
  date: string;
  time: string;
  location: string;
  type: string;
  title: string;
  Component: React.ComponentType;
}

const AbstractPages: FunctionComponent<AbstractPageData> = ({
  date,
  time,
  location,
  type,
  title,
  Component,
}) => {
  return (
    <div className="abstract-page-main-div">
      <div className="abstract-page-inner-div">
        <Flex direction={"column"}>
          <Text className="abstract-page-date">{date}</Text>
          <Text className="abstract-page-time-and-location">
            {time} | {location}
          </Text>
        </Flex>
        <Text className="abstract-page-main-type">{type}</Text>
        <Text className="abstract-page-main-title">{title}</Text>
        <Component />
      </div>
    </div>
  );
};

export default AbstractPages;
