/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import "./Venue.css";
import { Text, Grid, Flex } from "@mantine/core";
import { NavBarContext } from "../App";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../Components/useWindowsDimensions";

const Venue = () => {
  const venueRef = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();
  const { ref: venueMainDiv, inView: venueMainDivVisible } = useInView({
    triggerOnce: true,
  });

  const iframeWidth = () => {
    if (width < 422) {
      return 350;
    } else if (width < 522) {
      return 420;
    } else if (width < 622) {
      return 500;
    } else if (width < 722) {
      return 600;
    } else if (width < 822) {
      return 700;
    } else {
      return 800;
    }
  };

  const iframeheight = () => {
    if (width < 622) {
      return 200;
    } else {
      return 350;
    }
  };
  return (
    <div ref={venueRef.venueRef}>
      {width > 982 ? (
        <div className="venue-i-frame-div" ref={venueMainDiv}>
          <Text className="venue-title-event-location">Event Location</Text>
          <Grid columns={12}>
            <Grid.Col span={8}>
              <div
                className={`venue-iframe-div${
                  venueMainDivVisible ? "-active" : ""
                }`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.708026956732!2d-123.12449312362534!3d49.281929471392715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671803c5addc1%3A0x9b6f00f98c71ca5f!2sRobson%20Square!5e0!3m2!1sen!2sca!4v1687048291115!5m2!1sen!2sca"
                  width="600"
                  height="350"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                className={`venue-text-div-right${
                  venueMainDivVisible ? "-active" : ""
                }`}
              >
                <Text className="venue-text-title"> Robson Square</Text>
                <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  <Text className="venue-text-location">
                    {" "}
                    800 Robson Street,{" "}
                  </Text>
                  <Text className="venue-text-location">
                    Vancouver, BC, V6E 1A7
                  </Text>
                </div>
                <Text className="venue-text-website">
                  {" "}
                  <a href="https://www.robsonsquare.com/" target="blank">
                    ROBSONSQUARE.COM
                  </a>
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      ) : (
        <Flex
          direction={"column"}
          ref={venueMainDiv}
          className="venue-i-frame-div-flex"
        >
          <div
            className={`venue-iframe-div-flex${
              venueMainDivVisible ? "-active" : ""
            }`}
          >
            {" "}
            <Text className="venue-title-event-location-flex">
              Event Location
            </Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.708026956732!2d-123.12449312362534!3d49.281929471392715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671803c5addc1%3A0x9b6f00f98c71ca5f!2sRobson%20Square!5e0!3m2!1sen!2sca!4v1687048291115!5m2!1sen!2sca"
              width={iframeWidth()}
              height={iframeheight()}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Text className="venue-text-title-flex"> Robson Square</Text>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <Text className="venue-text-location-flex">
                {" "}
                800 Robson Street, Vancouver, BC, V6E 1A7
              </Text>
            </div>
            <Text className="venue-text-website-flex">
              {" "}
              <a href="https://www.robsonsquare.com/" target="blank">
                ROBSONSQUARE.COM
              </a>
            </Text>
          </div>
        </Flex>
      )}
    </div>
  );
};

export default Venue;
