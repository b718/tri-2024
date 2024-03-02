import { Button, Flex, Text } from "@mantine/core";
import React from "react";
import "./ResoectuveSections.css";

const ResoectuveSections = () => {
  return (
    <div>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <div className="respective-sections-div-one">
          <Flex
            align={"center"}
            justify={"center"}
            gap={"10rem"}
            className="respsective-sectons-speakers"
            wrap={"wrap"}
          >
            <Text className="respsective-sectons-title">Speakers</Text>
            <button className="respsective-sectons-speakers-button">
              <a href="/speakers">READ BIOS</a>
            </button>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ResoectuveSections;
