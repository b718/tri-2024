import React, { useContext } from "react";
import "./Home.css";
import { Center, Grid, Image, Text, Button } from "@mantine/core";
import triHomePicture from "../Images/TRI.png";
import { NavBarContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const homeRef = useContext(NavBarContext);

  return (
    <div>
      <Text
        fz="xl"
        fw="600"
        style={{
          marginLeft: "10%",
          marginBottom: "1rem",
          marginTop: "1rem",
          color: "white",
        }}
        ref={homeRef.homeRef}
      >
        Home
      </Text>
      {/* <div>
        <Center>
          <Grid columns={12} className="home-grid-information">
            <Grid.Col span={6}>
              {" "}
              <Image height={400} fit="contain" src={triHomePicture} />
            </Grid.Col>
            <Grid.Col span={6}>
              <Text fw={700} className="home-grid-paragraph-title">
                BRIDGING ACADEMIA, INDUSTY, MEDICINE & SOCIETY
              </Text>
              <Text fz="md" className="home-grid-paragraph">
                While tinnitus is a common symptom, current-day treatments
                reduce the impact than specifically address the percept itself.
                Globally, tinnitus sufferers demand a permanent solution to this
                problem. Although market research demonstrates a strong
                commercial opportunity, the amount of scientific research and
                financial investment is small compared to other chronic health
                conditions. TRI 2023 aims to bring together world-class
                scientists, industrialists, clinicians and policymakers,
                patients and caregivers to address these impending issues
                thereby seeking to bridge the gap between academia, industry,
                medicine & society (AIMS). We aspire to join hands with experts
                from emerging scientific fields such as big data science,
                personalized medicine, neuroinflammation, genetics etc. who can
                give us insights about their successful translations from bench
                to bedside. Through this meeting we intend to open new avenues
                of research, clinical practices, and patient engagement
                strategies in tinnitus, setting us on a path of disruptive
                innovation. This led us to title the conference
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
      </div> */}
      <Center>
        <div className="home-main-div">
          <h1 className="home-h1-div-intro">
            Engineering the Future of Tinnitus
          </h1>
          <Text className="home-text-under-h1">
            Tinnitus Research Initiative Conference
          </Text>
          <Text className="home-text-under-h1-text" fz="sm">
            June 10-12 2024 • Vancouver, Canada
          </Text>

          <Center>
            <Button
              radius="lg"
              className="home-text-under-ht-text-text-button"
              onClick={() => scrollToSection(homeRef.registrationRef)}
            >
              <p style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
                Register Now
              </p>
            </Button>
          </Center>

          <div className="home-arrow-scroll">
            <Text>Scroll</Text>
            <div className="home-arrow-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
              </svg>
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Home;
