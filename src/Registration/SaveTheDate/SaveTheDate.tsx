import React, { useContext } from "react";
import "./SaveTheDate.css";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import { Flex, Text } from "@mantine/core";
import { NavBarContext } from "../../App";

const SaveTheDate = () => {
  const { width, height } = useWindowDimensions();
  const saveTheDate = useContext(NavBarContext);

  return (
    <div ref={saveTheDate.registrationRef}>
      <div className="save-the-date-main-div">
        <Flex
          direction={width < 730 ? "column" : "row"}
          align={width < 730 ? "center" : ""}
          justify={width < 730 ? "center" : ""}
        >
          <Flex
            direction={"column"}
            style={{ maxWidth: "fit-content" }}
            align={width < 730 ? "center" : ""}
            justify={width < 730 ? "center" : ""}
          >
            <Text className="save-the-date-main-text">Save the Date</Text>
            <Text
              className="save-the-date-text"
              style={{ textAlign: `${width < 730 ? "center" : "left"}` }}
            >
              Keep these conference dates close with our downloadable PDF.
            </Text>
            <button className="save-the-date-download-button">
              <a href="triMainPdf.pdf" download="tri-2024-save-the-date">
                DOWNLOAD
              </a>
            </button>
          </Flex>
          {width < 730 ? (
            <div className="save-the-date-vertical-line-730"></div>
          ) : (
            <div className="save-the-date-vertical-line"></div>
          )}
          <Flex direction={"column"}>
            <Flex direction={"column"} className="save-the-date-dates-flex">
              <Text className="save-the-date-right-side-title">
                call for symposia
              </Text>
              <Text className="save-the-date-right-side-date">
                October 31, 2023
              </Text>
            </Flex>
            <div className="save-the-date-horizontal-line"></div>
            <Flex direction={"column"} className="save-the-date-dates-flex">
              <Text className="save-the-date-right-side-title">
                CALL FOR PAPERS
              </Text>
              <Text className="save-the-date-right-side-date">
                December 1, 2023
              </Text>
            </Flex>
            <div className="save-the-date-horizontal-line"></div>

            <Flex direction={"column"} className="save-the-date-dates-flex">
              <Text className="save-the-date-right-side-title">
                CONFERENCE REGISTRATION
              </Text>
              <Text className="save-the-date-right-side-date">
                January 15, 2024
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default SaveTheDate;
