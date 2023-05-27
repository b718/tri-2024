import { Grid, Text, Center, Flex, Button } from "@mantine/core";
import React, { useContext } from "react";
import "./Registration.css";
import { NavBarContext } from "../App";
const Registration = () => {
  const registrationRef = useContext(NavBarContext);

  return (
    <div className="registration-div-section">
      <Text
        fz="xl"
        fw="600"
        style={{ marginLeft: "10%", marginBottom: "1rem" }}
        ref={registrationRef.registrationRef}
      >
        Registration
      </Text>
      <Center>
        <Grid columns={12} className="registration-grid" grow={true}>
          <Grid.Col span={4}>
            <Text className="registration-opening-text">
              {" "}
              Registration is now open for the Engineering the future of
              tinnitus - Tinnitus Research Initiative Conference from June 6 to
              9, 2023 in Dublin - Ireland
            </Text>
            <a href="https://www.google.ca/" target="blank">
              <Button style={{ marginTop: "1rem" }}> Register Now</Button>
            </a>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex direction={"row"} justify="center">
              <Flex direction={"column"}>
                {" "}
                <Text>Scientist/Clinician </Text>
                <Text>Industry </Text>
                <Text>Student </Text>
                <Text>Patient Organisation </Text>
              </Flex>
              <Flex
                direction={"column"}
                justify="flex-end"
                style={{ marginLeft: "1rem" }}
              >
                {" "}
                <Text>500 €</Text>
                <Text> 600 €</Text>
                <Text> 350 €</Text>
                <Text> 500 €</Text>
              </Flex>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            {" "}
            <Text> Registration until Conference, 2023</Text>
          </Grid.Col>
        </Grid>
      </Center>
    </div>
  );
};

export default Registration;
