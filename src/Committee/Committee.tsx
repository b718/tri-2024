import React, { useContext } from "react";
import "./Committee.css";
import { Box, Center, Grid, Image, Text, Flex } from "@mantine/core";
import { NavBarContext } from "../App";
import TriCommitteePicture from "../Images/Logos/TRI2024 Full Logo/TRI2024_Logo_Medium.png";
import ComitteePictureStairs from "../Images/alexander-serzhantov-xN0zxqQSdCk-unsplash.jpg";
import ComitteePictureBridge from "../Images/divit-sharma-9mvjJFDLYzg-unsplash.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";

const Committee = () => {
  const committeeRef = useContext(NavBarContext);
  const stairs = useParallax<HTMLDivElement>({ speed: -10 });
  const bridge = useParallax<HTMLDivElement>({ speed: -10 });

  return (
    <div className="committee-outer-container" ref={committeeRef.committeeRef}>
      {/* <Text
        fz="xl"
        fw="600"
        style={{
          marginLeft: "10%",
          marginBottom: "1rem",
        }}
        ref={committeeRef.committeeRef}
      >
        Committees
      </Text>
      <div>
        <Box className="committee-container">
          <Text className="committee-scientific-title">
            SCIENTIFIC COMMITTEE
          </Text>
          <Center>
            <Box className="committee-scientific-container">
              <Text>
                Christopher Cederroth -{" "}
                <em>Associate Professor, Kaolinska Institute,</em>
                Sweden
              </Text>
              <Text>
                Rilana Cima -{" "}
                <em>
                  Assistant Professor, Catholic University Leuven, Belgium{" "}
                </em>
              </Text>
              <Text>
                Hazel Goedhart -{" "}
                <em>Director, Tinnitus Hub, U.K./The Netherlands</em>
              </Text>
              <Text>
                Berthold Langguth -{" "}
                <em>
                  Professor of Psychiatry and Psychotherapy, University of
                  Regensburg, Germany
                </em>
              </Text>
              <Text>
                Sarah Michiels -{" "}
                <em>Assistant Professor, University Hasselt, Belgium</em>
              </Text>
              <Text>
                Anusha Mohan -{" "}
                <em>
                  Global Brain Health Fellow, Trinity College Dublin, Ireland
                </em>
              </Text>
              <Text>
                Winfried Schlee -{" "}
                <em>
                  Scientific Coordinator of Tinnitus Research Initiative,
                  University of Regensburg, Germany
                </em>
              </Text>
              <Text>
                William Sedley -{" "}
                <em>
                  Academic Clinical Lecturer, Newcastle University, United
                  Kingdom
                </em>
              </Text>
              <Text>
                Jae-Jin Song -{" "}
                <em>
                  Professor of Neuro-otology, Seoul National University Bundang
                  Hospital, South Korea
                </em>
              </Text>
              <Text>
                Sven Vanneste -{" "}
                <em>
                  Professor of Neuroscience, Trinity College Dublin, Ireland
                </em>
              </Text>
              <Text>
                Nathan Weisz-{" "}
                <em>
                  Professor of Physiological Psychology, University of Salzberg,
                  Austria
                </em>
              </Text>
            </Box>
          </Center>

          <Text className="committee-programme-title">PROGRAMME COMMITTEE</Text>
          <Box className="committee-programme-container">
            <Text>
              Elva Arulchelvan, Gabriel Byczynski, Feifan Chen, Yvette
              Grootjans, Colum Ó Sé, Susanne Staudinger
            </Text>
          </Box>
        </Box>
      </div> */}
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
                  together world-class scientists, industrialists, clinicians
                  and policymakers, patients and caregivers to address these
                  impending issues thereby seeking to bridge the gap between
                  academia, industry, medicine & society (AIMS). We aspire to
                  join hands with experts from emerging scientific fields such
                  as big data science, personalized medicine, neuroinflammation,
                  genetics etc. who can give us insights about their successful
                  translations from bench to bedside. Through this meeting we
                  intend to open new avenues of research, clinical practices,
                  and patient engagement strategies in tinnitus, setting us on a
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

        <div className="committee-image-stairs" ref={stairs.ref}>
          <Image width={550} fit="contain" src={ComitteePictureStairs} />
          <Text className="committee-text-roll-over">
            © Alexander Serzhantov
          </Text>
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
          <div className="committee-image-bridge" ref={bridge.ref}>
            <Image width={650} fit="contain" src={ComitteePictureBridge} />
            <Text className="committee-bridge-roll-over">© Divit Sharma</Text>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Committee;
