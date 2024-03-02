import React, { useEffect } from "react";
import SpeakerBios from "../CommitteeDropDown/ComponentsDropDown/SpeakerBios";
import "./SpeakerPage.css";
import { Image, Text } from "@mantine/core";
import crowdImage from "../Images/headway-F2KRf_QfCqw-unsplash.jpg";

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
    <div>
      <Image src={crowdImage} height={350} />

      <div className="speaker-page-main-div">
        <div className="speaker-page-inner-div">
          <Text className="speaker-page-main-text">Speakers</Text>
          <SpeakerBios />
        </div>
      </div>
    </div>
  );
};

export default SpeakerPage;
