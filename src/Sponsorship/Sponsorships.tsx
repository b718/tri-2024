import React, { useContext } from "react";
import "./Sponsorship.css";
import { NavBarContext } from "../App";
import { Flex, Image, Text, Center } from "@mantine/core";
import googleImage from "../Images/Sponsorships/google.png";

const Sponsorships = () => {
  const sponsorshipRef = useContext(NavBarContext);
  const imageWidth = 240;
  return (
    <div className="sponsorships-div-section">
      <Text
        fz="xl"
        fw="600"
        style={{ marginLeft: "10%", marginBottom: "1rem" }}
        ref={sponsorshipRef.sponsorshipRef}
      >
        Sponsorships
      </Text>
      <Center>
        <Flex
          justify="flex-start"
          align="flex-start"
          wrap="wrap"
          direction="row"
          gap="lg"
          className="sponsorship-flex"
        >
          <Image width={imageWidth} fit="contain" src={googleImage} />
          <Image width={imageWidth} fit="contain" src={googleImage} />
          <Image width={imageWidth} fit="contain" src={googleImage} />
        </Flex>
      </Center>
      <Center>
        <Flex
          justify="flex-start"
          align="flex-start"
          wrap="wrap"
          direction="row"
          gap="lg"
          className="sponsorship-flex"
        >
          <Image width={imageWidth} fit="contain" src={googleImage} />
          <Image width={imageWidth} fit="contain" src={googleImage} />
          <Image width={imageWidth} fit="contain" src={googleImage} />
        </Flex>
      </Center>
    </div>
  );
};

export default Sponsorships;
