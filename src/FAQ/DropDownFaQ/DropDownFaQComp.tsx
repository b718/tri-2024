import React, { useState, useRef, FunctionComponent } from "react";
import "./DropDownFaQ.css";
import { Text, Grid, Flex } from "@mantine/core";
interface FaQData {
  title: string;
  text?: string;
  links?: string[][];
  Component: React.ComponentType;
}
const DropDownFaQComp: FunctionComponent<FaQData> = ({
  title,
  text,
  links,
  Component,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <div className="drop-down-faq-div">
      <Grid
        columns={8}
        onClick={() => setClick(!click)}
        align="center"
        style={{ cursor: "pointer" }}
      >
        <Grid.Col span={4}>
          {" "}
          <Text className={`drop-down-faq-title${click ? "-active" : ""}`}>
            {title}
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex justify="flex-end">
            <svg
              viewBox="0 0 100 100"
              stroke="#74a441"
              width="40"
              height="40"
              style={{ maxWidth: "1rem", marginRight: "1rem" }}
              className={`drop-down-svg-div${click ? "-active" : ""}`}
            >
              <line
                className="drop-down-faq-line-middle"
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#74a441"
                strokeWidth="10"
              />
              <line
                className={`drop-down-faq-line-rotate${click ? "-active" : ""}`}
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
        className="drop-down-faq-div-active-content"
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
        <Text className={`drop-down-faq-paragraph${click ? "-active" : ""}`}>
          {text}
        </Text>

        <Flex direction={"column"}>
          {links?.map((value) => {
            return (
              <Flex>
                <Text
                  className="drop-down-faq-links"
                  style={{ marginRight: "0.2rem" }}
                >
                  +
                </Text>
                <Text
                  className={`drop-down-faq-links${click ? "-active" : ""}`}
                >
                  <a href={value[1]} target="blank">
                    {value[0]}
                  </a>
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Component />
      </div>
      <hr />
    </div>
  );
};

export default DropDownFaQComp;
