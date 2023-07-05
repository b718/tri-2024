import React, { useState, useRef, FunctionComponent } from "react";
import "./DropDownFaQ.css";
import { Text, Grid, Flex } from "@mantine/core";
interface FaQData {
  title: string;
  text: string;
  links: string;
  url: string;
}
const DropDownFaQ: FunctionComponent<FaQData> = ({
  title,
  text,
  links,
  url,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <div className="drop-down-faq-div">
      <Grid columns={8} onClick={() => setClick(!click)}>
        <Grid.Col span={4}>
          {" "}
          <Text className={`drop-down-faq-title${click ? "-active" : ""}`}>
            {title}
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          {/* <Flex justify="flex-end">
            {" "}
            <Text style={{ marginRight: "1rem" }}>""</Text>
          </Flex> */}
          <Flex justify="flex-end">
            <svg
              viewBox="0 0 100 100"
              stroke="#74a441"
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
                stroke-width="10"
              />
              <line
                className={`drop-down-faq-line-rotate${click ? "-active" : ""}`}
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#74a441"
                stroke-width="10"
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

        <div style={{ display: "flex" }}>
          <Text
            className="drop-down-faq-links"
            style={{ marginRight: "0.2rem" }}
          >
            +
          </Text>
          <Text className={`drop-down-faq-links${click ? "-active" : ""}`}>
            <a href={url} target="blank">
              {" "}
              {links}
            </a>
          </Text>
        </div>
        <div style={{ display: "flex" }}>
          <Text
            className="drop-down-faq-links"
            style={{ marginRight: "0.2rem" }}
          >
            +
          </Text>
          <Text className={`drop-down-faq-links${click ? "-active" : ""}`}>
            <a href={url} target="blank">
              {" "}
              {links}
            </a>
          </Text>
        </div>
        <div style={{ display: "flex", marginBottom: "1.5rem" }}>
          <Text
            className="drop-down-faq-links"
            style={{ marginRight: "0.2rem" }}
          >
            +
          </Text>
          <Text className={`drop-down-faq-links${click ? "-active" : ""}`}>
            <a href={url} target="blank">
              {" "}
              {links}
            </a>
          </Text>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DropDownFaQ;
