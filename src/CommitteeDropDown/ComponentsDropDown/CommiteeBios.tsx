import React from "react";
import "./ComponentsCommitee.css";
import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import cHeadShot from "../../Images/Carol-Lau.jpg";
import sHeadShot from "../../Images/sylvieHS.png";

const CommiteeBios = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Grid columns={width < 720 ? 1 : 8} justify={"center"} align={"center"}>
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Carol Lau
            </Text>
            <Text className="components-commitee-style-text">
              Carol Lau is an audiologist and owner of a private practice
              clinic, Sound idEARS Hearing & Listening Clinic and the Vancouver
              Tinnitus & Hyperacusis Clinic in Vancouver since 1998. Specialty
              areas are tinnitus, decreased sound tolerance, auditory processing
              disorders and amplification in adults, seniors and children.
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          {width < 720 ? (
            <Image
              src={cHeadShot}
              radius={"10rem"}
              height={160}
              fit="contain"
              className="componenets-commitee-image-middle"
            ></Image>
          ) : (
            <Image
              src={cHeadShot}
              radius={"10rem"}
              height={160}
              fit="contain"
              className="componenets-commitee-image"
            ></Image>
          )}
        </Grid.Col>
      </Grid>

      <Grid columns={width < 720 ? 1 : 8} justify={"center"} align={"center"}>
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Sylvie Hébert{" "}
            </Text>
            <Text className="components-commitee-style-text">
              Sylvie Hébert is Professor and Program director of Audiology at
              Université de Montréal, where she teaches evidence-based practice
              in audiology and specialized courses on tinnitus and hyperacusis.
              She is a member of the BRAMS (International Laboratory for
              research on Brain, Music, and Sound) and of the Center of Research
              on Brain, Language, and Music (CRBLM). Her research expertise
              includes auditory and non-auditory factors involved in loudness
              perception, tinnitus and hyperacusis, and objective measures of
              tinnitus.
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          {width < 720 ? (
            <Image
              src={sHeadShot}
              radius={"10rem"}
              height={160}
              fit="contain"
              className="componenets-commitee-image-middle"
            ></Image>
          ) : (
            <Image
              src={sHeadShot}
              radius={"10rem"}
              height={160}
              fit="contain"
              className="componenets-commitee-image"
            ></Image>
          )}
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default CommiteeBios;
