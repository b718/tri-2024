import React, { useContext } from "react";
import "./Home.css";
import { Center, Grid, Image, Text } from "@mantine/core";
import triHomePicture from "../Images/TRI.png";
import { NavBarContext } from "../App";

const Home = () => {
  const homeRef = useContext(NavBarContext);

  return (
    <div className="home-div-vh-min">
      <Center>
        <Grid
          columns={12}
          className="home-grid-information"
          ref={homeRef.homeRef}
        >
          <Grid.Col span={6}>
            {" "}
            <Image height={400} fit="contain" src={triHomePicture} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text fw={700} className="home-grid-paragraph-title">
              BRIDGING ACADEMIA, INDUSTY, MEDICINE & SOCIETY
            </Text>
            <Text fz="md" className="home-grid-paragraph">
              While tinnitus is a common symptom, current-day treatments reduce
              the impact than specifically address the percept itself. Globally,
              tinnitus sufferers demand a permanent solution to this problem.
              Although market research demonstrates a strong commercial
              opportunity, the amount of scientific research and financial
              investment is small compared to other chronic health conditions.
              TRI 2023 aims to bring together world-class scientists,
              industrialists, clinicians and policymakers, patients and
              caregivers to address these impending issues thereby seeking to
              bridge the gap between academia, industry, medicine & society
              (AIMS). We aspire to join hands with experts from emerging
              scientific fields such as big data science, personalized medicine,
              neuroinflammation, genetics etc. who can give us insights about
              their successful translations from bench to bedside. Through this
              meeting we intend to open new avenues of research, clinical
              practices, and patient engagement strategies in tinnitus, setting
              us on a path of disruptive innovation. This led us to title the
              conference
            </Text>
            <Text fw={500} className="home-grid-paragraph">
              Engineering the future of tinnitus: Bridging Academia, Industry,
              Medicine & Society.
            </Text>

            <Text fz="md" className="home-grid-paragraph">
              {" "}
              Sven Vanneste & Anusha Mohan
            </Text>
          </Grid.Col>
        </Grid>
      </Center>
    </div>
  );
};

export default Home;
