import React from "react";
import "./ComponentsCommitee.css";
import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import DJPHeadshot from "../../Images/dpj-headshot.jpeg";
import DRTHeadshot from "../../Images/drt-headshot.jpg";

const SpeakerBios = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"center"}
        style={{ marginTop: "1rem" }}
      >
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
              Dr Pawel Jastreboff
            </Text>
            <Text className="components-commitee-style-text">
              Bio coming soon
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image
                src={DJPHeadshot}
                height={160}
                fit="contain"
                // className="componenets-commitee-image"
              ></Image>
            </div>
          </Center>
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
              Dr Richard Tyler
            </Text>
            <Text className="components-commitee-style-text">
              Bio coming soon
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image
                src={DRTHeadshot}
                height={160}
                fit="contain"
                // className="componenets-commitee-image"
              ></Image>
            </div>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SpeakerBios;
