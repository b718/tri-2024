import { Button, Flex, Grid, Text } from "@mantine/core";
import React, { useContext } from "react";
import "./LatestUpdates.css";
import { NavBarContext } from "../App";
import useWindowDimensions from "../Components/useWindowsDimensions";
const LatestUpdates = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const navBarContext = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <div className="latest-updates-main">
        <div className="latest-updates-center-div">
          <Flex
            direction={"column"}
            className="latest-updates-main-flex"
            justify={`${width < 500 ? "center" : ""}`}
            align={`${width < 500 ? "center" : ""}`}
          >
            <Text className="latest-updates-text">Latest Updates</Text>
            <div className="latest-updates-div-with-buttons">
              <Flex className="latest-update-flex-text-button">
                <Text className="latest-updates-small-text">
                  Symposia submissions
                </Text>
                <div
                  className="latest-updates-min-width-button-div"
                  onClick={() => {
                    scrollToSection(navBarContext.symposiaRef);
                  }}
                >
                  <span className={`material-symbols-outlined`}>
                    arrow_circle_right
                  </span>{" "}
                </div>
              </Flex>
              <Flex className="latest-update-flex-text-button">
                <Text className="latest-updates-small-text">Program</Text>
                <div
                  className="latest-updates-min-width-button-div"
                  onClick={() => {
                    scrollToSection(navBarContext.programRef);
                  }}
                >
                  <span className={`material-symbols-outlined`}>
                    arrow_circle_right
                  </span>{" "}
                </div>
              </Flex>

              <Flex>
                <Text className="latest-updates-small-text">
                  Travel + tourism
                </Text>
                <div
                  className="latest-updates-min-width-button-div"
                  onClick={() => {
                    scrollToSection(navBarContext.faqRef);
                  }}
                >
                  <span className={`material-symbols-outlined`}>
                    arrow_circle_right
                  </span>
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
