import React, { useState, useRef, FunctionComponent } from "react";
import "./DropDownFaQ.css";
import { Text, Grid, Flex } from "@mantine/core";
interface FaQData {
  title: string;
  text: string;
  links: string;
}
const DropDownFaQ: FunctionComponent<FaQData> = ({ title, text, links }) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <div className="drop-down-faq-div" onClick={() => setClick(!click)}>
      <Grid columns={8}>
        <Grid.Col span={4}>
          {" "}
          <Text className={`drop-down-faq-title${click ? "-active" : ""}`}>
            {title}
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          {" "}
          <Flex justify="flex-end">
            {" "}
            <Text style={{ marginRight: "1rem" }}>""</Text>
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
        <Text className={`drop-down-faq-links${click ? "-active" : ""}`}>
          + {links}
        </Text>
      </div>
      <hr />
    </div>
  );
};

export default DropDownFaQ;
