import React from "react";
import "./Footer.css";
import { Flex, Grid, Image, Text } from "@mantine/core";
import SocialIconInsta from "../Images/Social icons/SocialMediaIcons_IG REV.png";
import SocialIconFB from "../Images/Social icons/SocialMediaIcons_FB REV.png";
import SocialIconTW from "../Images/Social icons/SocialMediaIcons_Twitter REV.png";
import SoundDidEars from "../Images/Logos/Sound idEARS Logo (Footer)/SoundidEARS_Logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-div-main">
        <div className="footer-inner-top-div">
          <Text className="footer-inner-top-div-title">See you there!</Text>
          <div className="footer-grid-div">
            <Flex gap={"2rem"} justify="center">
              {" "}
              <Image width={20} fit="contain" src={SocialIconInsta} />
              <Image width={23} fit="contain" src={SocialIconTW} />
              <Image width={10} fit="contain" src={SocialIconFB} />
            </Flex>
          </div>
        </div>
        <hr className="footer-hr-divide" />
        <div className="footer-div-details">
          <div className="footer-div-details-text-upper">
            <Flex>
              <Text style={{ color: "white" }}>HOSTED BY </Text>
              <Text style={{ marginLeft: "0.2rem" }}>
                <a href="https://www.soundidears.com/" target="blank">
                  Carol Lau
                </a>
              </Text>
            </Flex>
          </div>
          {/* <div className="footer-div-details-picture">
            <Image width={60} fit="contain" src={SoundDidEars} />
          </div> */}
          <div className="footer-div-details-text-lower">
            <Flex>
              {" "}
              <Text style={{ color: "white" }}>Designed by</Text>
              <Text style={{ marginLeft: "0.2rem" }}>
                {/* <a href="https://www.google.ca/" target="blank">
                  Shanene.com
                </a> */}
                Shanene Lau
              </Text>
              <Text
                style={{
                  marginLeft: "0.2rem",
                  marginRight: "0.2rem",
                  color: "white",
                }}
              >
                •
              </Text>
              <Text style={{ color: "white" }}>Developed by </Text>
              <Text style={{ marginLeft: "0.2rem" }}>
                {" "}
                <a href="https://linkedin.com/in/bryan-zhao-" target="blank">
                  Bryan Zhao
                </a>
              </Text>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
