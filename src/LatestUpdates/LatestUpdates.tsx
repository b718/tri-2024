import { Button, Flex, Grid, Text } from "@mantine/core";
import React, { useContext } from "react";
import "./LatestUpdates.css";
import { NavBarContext } from "../App";
const LatestUpdates = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const navBarContext = useContext(NavBarContext);

  return (
    <div>
      <div className="latest-updates-main">
        <div className="latest-updates-center-div">
          <Flex direction={"column"} className="latest-updates-main-flex">
            <Text className="latest-updates-text">Latest Updates</Text>
            <div className="latest-updates-div-with-buttons">
              <Flex>
                <Text className="latest-updates-small-text">
                  Symposia submissions
                </Text>
                <div className="latest-updates-min-width-button-div">
                  <Button></Button>
                </div>
              </Flex>
              <Flex>
                <Text className="latest-updates-small-text">Program</Text>
                <div className="latest-updates-min-width-button-div">
                  <Button></Button>
                </div>
              </Flex>
              <Flex>
                <Text className="latest-updates-small-text">
                  Travel + tourism
                </Text>
                <div className="latest-updates-min-width-button-div">
                  <Button></Button>
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
