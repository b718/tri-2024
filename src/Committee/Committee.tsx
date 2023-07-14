import React, { useContext, useEffect, useState, useRef } from "react";
import "./Committee.css";
import { Center, Grid, Image, Text, Flex } from "@mantine/core";
import { NavBarContext } from "../App";
import TriCommitteePicture from "../Images/Logos/TRI2024 Full Logo/TRI2024_Logo_Medium.png";
import { ScrollParallax } from "react-just-parallax";
import CommitteeStairsPicture from "../Images/alexander-serzhantov-xN0zxqQSdCk-unsplash.jpg";

const Committee = () => {
  const committeeRef = useContext(NavBarContext);

  return (
    <div className="committee-outer-container" ref={committeeRef.committeeRef}>
      <div className="committee-contain-div">
        <Center>
          <Grid columns={8} className="committee-grid" grow={true}>
            <Grid.Col
              span={4}
              style={{ marginLeft: "1rem", maxWidth: "40rem" }}
            >
              <div className="committee-text-left">
                <Text className="committee-text-left-header">
                  Bridging academia, industry, medicine & society
                </Text>
                <Text className="committee-text-left-paragraph">
                  While tinnitus is a common symptom, current-day treatments
                  reduce the impact than specifically address the percept
                  itself. Globally, tinnitus sufferers demand a permanent
                  solution to this problem. Although market research
                  demonstrates a strong commercial opportunity, the amount of
                  scientific research and financial investment is small compared
                  to other chronic health conditions. TRI 2023 aims to bring
                  together world-className scientists, industrialists,
                  clinicians and policymakers, patients and caregivers to
                  address these impending issues thereby seeking to bridge the
                  gap between academia, industry, medicine & society (AIMS). We
                  aspire to join hands with experts from emerging scientific
                  fields such as big data science, personalized medicine,
                  neuroinflammation, genetics etc. who can give us insights
                  about their successful translations from bench to bedside.
                  Through this meeting we intend to open new avenues of
                  research, clinical practices, and patient engagement
                  strategies in tinnitus, setting us on a path of disruptive
                  innovation. This led us to title the conference{" "}
                  <b>
                    Engineering the future of tinnitus: Bridging Academia,
                    Industry, Medicine & Society.
                  </b>
                </Text>

                <Text className="committee-text-left-footer">
                  Sven Vanneste & Anusha Mohan
                </Text>
              </div>
            </Grid.Col>
            <Grid.Col
              span={4}
              style={{ marginRight: "1rem", maxWidth: "fit-content" }}
            >
              <Image
                width={400}
                src={TriCommitteePicture}
                className="committee-grid-right-image"
              />
            </Grid.Col>
          </Grid>
        </Center>

        <div className="committee-image-stairs">
          <div className="committee-parallax-stairs"></div>
          <Text className="committee-text-roll-over">
            © Alexander Serzhantov
          </Text>
          {/* <div className="committee-parallax-container-stairs">
            <div
              className="committee-parallax-image-stairs"
              style={{
                backgroundPositionY: `calc(50% + ${scrollPosition * 0.5}px)`,
              }}
            />
          </div>
          <Text className="committee-text-roll-over">
            © Alexander Serzhantov
          </Text> */}
        </div>
      </div>

      <Grid columns={8} justify="center">
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={6}>
          {" "}
          <Flex justify="center">
            <div className="committee-west-coast-text">
              <Text className="committee-west-coast-text-header">
                The West Coast is waiting for you
              </Text>
              <Text className="committee-west-coast-text-paragraph">
                TRI 2023 will be held at the Trinity Business School in Trinity
                College Dublin, the oldest academic institution in Ireland.
                Established in 1592 as the College of the Holy and Undivided
                Trinity of Queen Elizabeth in the heart of Dublin city, Trinity
                College draws more than 400 years of history and houses some of
                the oldest relics in the world. Complementing its glory is
                Dublin city itself, weaving centuries of culture and tradition
                between the modern folds of the third millennium. This year at
                TRI 2023, along with our vision to #BridgingAIMS, we are
                honoured to give our delegates a taste of the infamous Irish
                culture and tradition through our social events.
              </Text>
            </div>
          </Flex>
          <div className="committee-image-bridge">
            <div className="committee-parallax-bridge"></div>
            <Text className="committee-bridge-roll-over">© Divit Sharma</Text>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Committee;
