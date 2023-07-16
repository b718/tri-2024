/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import "./Venue.css";
import { Text, Grid } from "@mantine/core";
import { NavBarContext } from "../App";
import { useInView } from "react-intersection-observer";

const Venue = () => {
  const venueRef = useContext(NavBarContext);
  const { ref: venueMainDiv, inView: venueMainDivVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <div ref={venueRef.venueRef}>
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
    </div>
  );
};

export default Venue;
