import React, { useEffect } from "react";
import SpeakerBios from "../CommitteeDropDown/ComponentsDropDown/SpeakerBios";
import "./SpeakerPage.css";
import { Text } from "@mantine/core";

const SpeakerPage = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = 0;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToSection(null);
  }, []);

  return (
    <div className="speaker-page-main-div">
      <div className="speaker-page-inner-div">
        <Text className="speaker-page-main-text">Speakers</Text>
        <SpeakerBios />
      </div>
    </div>
  );
};

export default SpeakerPage;
