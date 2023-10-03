import React, { useContext } from "react";
import "./Sponsorship.css";
import { NavBarContext } from "../App";
import { Flex, Image, Text, Center } from "@mantine/core";
import googleImage from "../Images/Sponsorships/brainhealth.jpg";
import comingSoon from "../Images/null_image.png";
const Sponsorships = () => {
  const sponsorshipRef = useContext(NavBarContext);
  const imageWidth = 240;
  return (
    <div
      className="sponsorships-div-section"
      ref={sponsorshipRef.sponsorshipRef}
    >
      <Text className="sponsorships-main-header">Sponsorship</Text>
      <div className="sponsorships-main-flex">
        {/* <Flex
          justify="center"
          align="center"
          wrap="wrap"
          direction="row"
          gap={"4rem"}
        >
          <Image width={imageWidth} fit="contain" src={comingSoon} />
          <Image width={imageWidth} fit="contain" src={comingSoon} />
          <Image width={imageWidth} fit="contain" src={comingSoon} />
          <Image width={imageWidth} fit="contain" src={comingSoon} />
          <Image width={imageWidth} fit="contain" src={comingSoon} />
          <Image width={imageWidth} fit="contain" src={comingSoon} />
        </Flex> */}
        <Flex justify="center" align="center">
          <Text
            size={"3rem"}
            style={{ fontStyle: "italic" }}
            className="sponsorships-main-coming-soon-text"
          >
            COMING SOON
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default Sponsorships;
