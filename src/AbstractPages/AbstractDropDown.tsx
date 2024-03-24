import React, { FunctionComponent, useRef, useState } from "react";
import "./AbstractDropDown.css";
import { Flex, Grid, Text } from "@mantine/core";
import Cal10 from "../Images/TRI2024_CalIcon-01.png";
import Cal11 from "../Images/TRI2024_CalIcon-02.png";
import Cal12 from "../Images/TRI2024_CalIcon-03.png";

interface CommiteeDropDownData {
  title: string;
  type?: string;
  time?: string;
  date?: string;
  location?: string;
  Component: React.ComponentType;
}

const AbstractDropDown: FunctionComponent<CommiteeDropDownData> = ({
  title,
  type,
  time,
  date,
  location,
  Component,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <div className="a-dd-div">
      <Grid
        columns={12}
        onClick={() => setClick(false)}
        align="center"
        style={{ cursor: "pointer" }}
      >
        <Grid.Col span={10}>
          {" "}
          <Flex align={"center"} gap={"1rem"}>
            <div style={{ minWidth: "10rem" }}>
              <Flex direction={"column"}>
                <Text
                  className={`a-dd-div-title-left${click ? "-active" : ""}`}
                >
                  {date}
                </Text>
                <Text
                  className={`a-dd-div-title-left${click ? "-active" : ""}`}
                >
                  {time}
                </Text>
                <Text
                  className={`a-dd-div-title-left${click ? "-active" : ""}`}
                >
                  {location}
                </Text>
              </Flex>
            </div>
            <Flex direction={"column"}>
              <Text className={`a-dd-div-title${click ? "-active" : ""}`}>
                {type}
              </Text>
              <Text className={`a-dd-div-title-left${click ? "-active" : ""}`}>
                {title}
              </Text>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={2}>
          <Flex justify="flex-end">
            <svg
              viewBox="0 0 100 100"
              stroke="#74a441"
              width="40"
              height="40"
              style={{ maxWidth: "1rem", marginRight: "1rem" }}
              className={`a-dd-div-svg-div${click ? "-active" : ""}`}
            >
              <line
                className="a-dd-div-faq-line-middle"
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#74a441"
                strokeWidth="10"
              />
              <line
                className={`a-dd-div-line-rotate${click ? "-active" : ""}`}
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#74a441"
                strokeWidth="10"
              />
            </svg>
          </Flex>
        </Grid.Col>
      </Grid>
      <div
        className="a-dd-div-active-content"
        ref={parentRef}
        style={
          click
            ? {
                height: parentRef.current?.scrollHeight,
              }
            : {
                height: parentRef.current?.scrollHeight,
              }
        }
      >
        <Component />
      </div>
    </div>
  );
};

export default AbstractDropDown;
