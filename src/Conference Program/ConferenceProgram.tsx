/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import "./ConferenceProgram.css";
import SpeakerSection from "./SpeakersComponent/SpeakerSection";
import Program from "./Program/Program";
import { Image, Text } from "@mantine/core";
import ConferenceProgramDropDown from "./ConferenceProgramComponents/ConferenceProgramDropDown";
import June10 from "./ConferenceDropDownComponents/June10";
import June11 from "./ConferenceDropDownComponents/June11";
import June12 from "./ConferenceDropDownComponents/June12";
import PeterScienceWorld from "../Images/peter-skaronis-XH82uGMB8H8-unsplash copy.jpg";
import useWindowDimensions from "../Components/useWindowsDimensions";
import { useInView } from "react-intersection-observer";
import { NavBarContext } from "../App";
import AbstractDropDown from "../AbstractPages/AbstractDropDown";
import June12thPhysicalLinks from "../AbstractPages/WednesdayJune12th/June12thPhysicalLinks";
import June12thMorning from "../AbstractPages/WednesdayJune12th/June12thMorning";
import June12thSuccessful from "../AbstractPages/WednesdayJune12th/June12thSuccessful";
import June12thRoundTable from "../AbstractPages/WednesdayJune12th/June12thRoundTable";
import June12thOticon from "../AbstractPages/WednesdayJune12th/June12thOticon";
const ConferenceProgram = () => {
  const { width, height } = useWindowDimensions();
  const [hoverPeter, setHoverPeter] = useState(false);
  const navBarContext = useContext(NavBarContext);
  const { ref: peterScienceWorld, inView: peterScienceWorldVisible } =
    useInView({
      triggerOnce: true,
    });

  const peterWorldSize = () => {
    if (width > 1040) {
      return 650;
    } else if (width < 501) {
      return 350;
    } else if (width < 620) {
      return 450;
    } else if (width < 961) {
      return 500;
    } else {
      return 650;
    }
    //650
  };
  return (
    <div>
      <div
        className={`conference-program-world-peter${
          peterScienceWorldVisible ? "-active" : ""
        }`}
        ref={peterScienceWorld}
      >
        <img
          src={PeterScienceWorld}
          className="conference-program-world-peter-image"
          onMouseEnter={() => setHoverPeter(true)}
          onMouseLeave={() => setHoverPeter(false)}
        />
        <Text
          className={`committee-text-roll-over${hoverPeter ? "-active" : ""}`}
        >
          © Peter Skaronis
        </Text>
      </div>

      <div className="conference-program-section-main-div">
        <Text
          className="conference-program-section-max-header"
          ref={navBarContext.programRef}
        >
          Conference program
        </Text>

        <div className="conference-program-main-div-under-text">
          <hr style={{ maxWidth: "98vw" }}></hr>
          <ConferenceProgramDropDown
            title="monday, june 10"
            Component={June10}
          />

          <ConferenceProgramDropDown
            title="tuesday, june 11"
            Component={June11}
          />

          <ConferenceProgramDropDown
            title="wednesday, june 12"
            Component={June12}
          />
          <div className="conference-program-download-section">
            <Text className="conference-program-download-section-title">
              Program/Speakers/Speaker Schedule
            </Text>
            <button className="conference-program-button">
              <a href="Speaker Program.pdf" download="SpeakProgram">
                Download Schedule
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceProgram;
