/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";
import "./Sponsorship.css";
import { NavBarContext } from "../App";
import { Flex, Image, Text, Center } from "@mantine/core";
import oticonImage from "../Images/Oticon_Logo_LCT_260px_rgb_pos.png";
import signia from "../Images/Sponsorships/signia.png";
import neuromod from "../Images/Sponsorships/new_neuro_white.png";
import widex from "../Images/Sponsorships/widex.jpg";
import ataImage from "../Images/ATA Logo.jpg";
import hyperArc from "../Images/HyperacusisResearch.png";
import useWindowDimensions from "../Components/useWindowsDimensions";

const Sponsorships = () => {
  const sponsorshipRef = useContext(NavBarContext);
  const imageWidth = 200;
  const oticonLink = "https://www.oticon.ca/hearing-aid-users";
  const signialink = "https://www.signia.net/en/";
  const neurmodlink = "https://neuromoddevices.com/";
  const widexlink = "https://www.widex.com/";
  const ata = "https://www.ata.org/";
  const { width, height } = useWindowDimensions();

  return (
    <div
      className="sponsorships-div-section"
      ref={sponsorshipRef.sponsorshipRef}
    >
      <Text className="sponsorships-main-header">Sponsorship</Text>
      <div className="sponsorships-main-flex">
        <Flex
          justify="center"
          align="center"
          wrap="wrap"
          direction={`${width < 600 ? "column" : "row"}`}
          gap={"4rem"}
        >
          <a href={oticonLink} target="_blank">
            <Image width={imageWidth} fit="contain" src={oticonImage} />
          </a>
          <a href={signialink} target="_blank">
            <Image width={110} fit="contain" src={signia} />
          </a>
          <a href={neurmodlink} target="_blank">
            <Image width={210} fit="contain" src={neuromod} />
          </a>
          <a href={widexlink} target="_blank">
            <Image width={imageWidth} fit="contain" src={widex} />
          </a>
          <a href={ata} target="_blank">
            <Image width={imageWidth} fit="contain" src={ataImage} />
          </a>

          <Image width={105} fit="contain" src={hyperArc} />
        </Flex>
      </div>
    </div>
  );
};

export default Sponsorships;
