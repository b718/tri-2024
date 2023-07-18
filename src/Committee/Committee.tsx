import React, { useContext, useEffect, useState, useRef } from "react";
import "./Committee.css";
import { Center, Grid, Image, Text, Flex } from "@mantine/core";
import { NavBarContext } from "../App";
import TriCommitteePicture from "../Images/Logos/TRI2024 Full Logo/TRI2024_Logo_Medium.png";
import CommitteBridgePicture from "../Images/divit-sharma-9mvjJFDLYzg-unsplash.jpg";
import CommitteeStairsPicture from "../Images/alexander-serzhantov-xN0zxqQSdCk-unsplash.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../Components/useWindowsDimensions";

const Committee = () => {
  const committeeRef = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();
  const [hoverStairs, setHoverStairs] = useState(false);
  const [hoverBridge, setHoverBridge] = useState(false);

  const { ref: mainCommitteeDiv, inView: mainCommitteeDivVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: westCoastCommitteeDiv, inView: westCoastCommitteeDivVisible } =
    useInView({
      triggerOnce: true,
    });

  const stairs = useParallax<HTMLDivElement>({
    // rotateX: [0, 40],
    rotateY: [-40, 0],
    // rotateZ: [0, 40],
  });

  // const bridge = useParallax<HTMLDivElement>({
  //   // rotateX: [0, 40],
  //   rotateY: [0, 40],
  //   // rotateZ: [0, 40],
  // });

  const triCommitteePictureSize = () => {
    if (width > 1040) {
      return 400;
    } else if (width < 400) {
      return 250;
    } else if (width < 620) {
      return 350;
    } else if (width < 961) {
      return 400;
    } else {
      return 320;
    }
    //961
  };

  const triCommitteeBridgeSize = () => {
    if (width > 1040) {
      return 650;
    } else if (width < 501) {
      return 350;
    } else if (width < 620) {
      return 500;
    } else if (width < 961) {
      return 500;
    } else {
      return 650;
    }
    //650
  };
  return (
    <div className="committee-outer-container" ref={committeeRef.committeeRef}>
      <div className="committee-contain-div" ref={mainCommitteeDiv}>
        <Center>
          {width > 961 ? (
            <Grid columns={8} className="committee-grid" grow={true}>
              <Grid.Col span={4} className="committee-grid-column-left">
                <div
                  className={`committee-text-left${
                    mainCommitteeDivVisible ? "-active" : ""
                  }`}
                >
                  <Text className="committee-text-left-header">
                    Bridging academia, industry, medicine & society
                  </Text>
                  <Text className="committee-text-left-paragraph">
                    While tinnitus is a common symptom, current-day treatments
                    reduce the impact than specifically address the percept
                    itself. Globally, tinnitus sufferers demand a permanent
                    solution to this problem. Although market research
                    demonstrates a strong commercial opportunity, the amount of
                    scientific research and financial investment is small
                    compared to other chronic health conditions. TRI 2023 aims
                    to bring together world-className scientists,
                    industrialists, clinicians and policymakers, patients and
                    caregivers to address these impending issues thereby seeking
                    to bridge the gap between academia, industry, medicine &
                    society (AIMS). We aspire to join hands with experts from
                    emerging scientific fields such as big data science,
                    personalized medicine, neuroinflammation, genetics etc. who
                    can give us insights about their successful translations
                    from bench to bedside. Through this meeting we intend to
                    open new avenues of research, clinical practices, and
                    patient engagement strategies in tinnitus, setting us on a
                    path of disruptive innovation. This led us to title the
                    conference{" "}
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
              <Grid.Col span={4} className="committee-grid-column-right">
                <Image
                  width={triCommitteePictureSize()}
                  src={TriCommitteePicture}
                  className={`committee-grid-right-image${
                    mainCommitteeDivVisible ? "-active" : ""
                  }`}
                />
              </Grid.Col>
            </Grid>
          ) : (
            <Flex justify="center" align="center" direction="column">
              {" "}
              <Image
                width={triCommitteePictureSize()}
                src={TriCommitteePicture}
                className={`committee-grid-right-image${
                  mainCommitteeDivVisible ? "-active" : ""
                }`}
              />{" "}
              <div
                className={`committee-text-left${
                  mainCommitteeDivVisible ? "-active" : ""
                }`}
              >
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
            </Flex>
          )}
        </Center>
        <div className="committee-image-stairs" ref={stairs.ref}>
          {/* <div className="committee-parallax-stairs"></div> */}
          <Image
            width={triCommitteePictureSize()}
            fit="contain"
            src={CommitteeStairsPicture}
            onMouseEnter={() => setHoverStairs(true)}
            onMouseLeave={() => setHoverStairs(false)}
          />
          <Text
            className={`committee-text-roll-over${
              hoverStairs ? "-active" : ""
            }`}
          >
            © Alexander Serzhantov
          </Text>
        </div>
      </div>

      {/* <div className="committee-west-coast-grid-div"> */}
      {width > 961 ? (
        <Grid
          columns={8}
          justify="center"
          grow={true}
          style={{ maxWidth: "99vw" }}
        >
          <Grid.Col span={2}></Grid.Col>
          <Grid.Col span={6}>
            {" "}
            <Flex justify="center">
              <div
                className={`committee-west-coast-text${
                  westCoastCommitteeDivVisible ? "-active" : ""
                }`}
                ref={westCoastCommitteeDiv}
              >
                <Text className="committee-west-coast-text-header">
                  The West Coast is waiting for you
                </Text>
                <Text className="committee-west-coast-text-paragraph">
                  TRI 2023 will be held at the Trinity Business School in
                  Trinity College Dublin, the oldest academic institution in
                  Ireland. Established in 1592 as the College of the Holy and
                  Undivided Trinity of Queen Elizabeth in the heart of Dublin
                  city, Trinity College draws more than 400 years of history and
                  houses some of the oldest relics in the world. Complementing
                  its glory is Dublin city itself, weaving centuries of culture
                  and tradition between the modern folds of the third
                  millennium. This year at TRI 2023, along with our vision to
                  #BridgingAIMS, we are honoured to give our delegates a taste
                  of the infamous Irish culture and tradition through our social
                  events.
                </Text>
              </div>
            </Flex>
            <div
              className="committee-image-bridge"
              //  ref={bridge.ref}
            >
              <Image
                width={650}
                fit="contain"
                src={CommitteBridgePicture}
                onMouseEnter={() => setHoverBridge(true)}
                onMouseLeave={() => setHoverBridge(false)}
              />
              <Text
                className={`committee-bridge-roll-over${
                  hoverBridge ? "-active" : ""
                }`}
              >
                © Divit Sharma
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      ) : (
        <Flex justify="center" align="center" direction="column">
          {" "}
          <div
            className={`committee-west-coast-text${
              westCoastCommitteeDivVisible ? "-active" : ""
            }`}
            ref={westCoastCommitteeDiv}
          >
            <Text className="committee-west-coast-text-header">
              The West Coast is waiting for you
            </Text>
            <Text className="committee-west-coast-text-paragraph">
              TRI 2023 will be held at the Trinity Business School in Trinity
              College Dublin, the oldest academic institution in Ireland.
              Established in 1592 as the College of the Holy and Undivided
              Trinity of Queen Elizabeth in the heart of Dublin city, Trinity
              College draws more than 400 years of history and houses some of
              the oldest relics in the world. Complementing its glory is Dublin
              city itself, weaving centuries of culture and tradition between
              the modern folds of the third millennium. This year at TRI 2023,
              along with our vision to #BridgingAIMS, we are honoured to give
              our delegates a taste of the infamous Irish culture and tradition
              through our social events.
            </Text>
          </div>
          <div
            className="committee-image-bridge"
            // ref={bridge.ref}
          >
            <Image
              width={triCommitteeBridgeSize()}
              fit="contain"
              src={CommitteBridgePicture}
              onMouseEnter={() => setHoverBridge(true)}
              onMouseLeave={() => setHoverBridge(false)}
            />
            <Text
              className={`committee-bridge-roll-over${
                hoverBridge ? "-active" : ""
              }`}
            >
              © Divit Sharma
            </Text>
          </div>
        </Flex>
      )}
    </div>
    // </div>
  );
};

export default Committee;

{
  /* <div className="committee-parallax-container-stairs">
            <div
              className="committee-parallax-image-stairs"
              style={{
                backgroundPositionY: `calc(50% + ${scrollPosition * 0.5}px)`,
              }}
            />
          </div>
          <Text className="committee-text-roll-over">
            © Alexander Serzhantov
          </Text> */
}

{
  /* <div className="committee-parallax-bridge"></div> */
}
