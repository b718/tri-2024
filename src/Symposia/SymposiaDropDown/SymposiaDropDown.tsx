import React, { FunctionComponent, useRef, useState } from "react";
import "./SymposiaDropDown.css";
import { Flex, Grid, Text } from "@mantine/core";
interface SymposiaDropDownData {
  title: string;
  Component: React.ComponentType;
}
const SymposiaDropDown: FunctionComponent<SymposiaDropDownData> = ({
  title,
  Component,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <div className="symposia-drop-down-div">
      {" "}
      <Grid
        columns={8}
        onClick={() => setClick(!click)}
        align="center"
        style={{ cursor: "pointer" }}
      >
        <Grid.Col span={6}>
          {" "}
          <Text
            className={`symposia-drop-down-div-title${click ? "-active" : ""}`}
          >
            {title}
          </Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Flex justify="flex-end">
            <svg
              viewBox="0 0 100 100"
              stroke="#74a441"
              width="40"
              height="40"
              style={{ maxWidth: "1rem", marginRight: "1rem" }}
              className={`symposia-drop-down-div-svg-div${
                click ? "-active" : ""
              }`}
            >
              <line
                className="symposia-drop-down-div-faq-line-middle"
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#74a441"
                strokeWidth="10"
              />
              <line
                className={`symposia-drop-down-div-line-rotate${
                  click ? "-active" : ""
                }`}
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
        className="symposia-drop-down-div-active-content"
        ref={parentRef}
        style={
          click
            ? {
                height: parentRef.current?.scrollHeight,
              }
            : {
                height: "0px",
              }
        }
      >
        <Component />
      </div>
      <hr />
    </div>
  );
};

export default SymposiaDropDown;
