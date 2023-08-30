import React, { useState } from "react";
import "./SymposiaForm.css";
import { Button, Flex, Grid, Text, TextInput, Textarea } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";

const SymposiaForm = () => {
  const [titleS, setTitleS] = useState("");
  const [youngInvestigator, setYoungInvestigator] = useState("yes");
  const { width, height } = useWindowDimensions();

  return (
    <div className="symposia-form-main-div">
      <Text className="symposia-form-main-text">Symposia Submissions</Text>
      <TextInput
        label="Title of symposium (25 words max)"
        className="symposia-form-label"
        withAsterisk
        value={titleS}
        onChange={(event) => {
          setTitleS(event.target.value);
        }}
      />
      <Grid columns={8} className="symposa-form-grid-young-investigator">
        <Grid.Col span={6}>
          <Flex direction={"column"}>
            <Text className="symposia-form-text-young-investigator">
              Does it qualify for a Young Investigator Symposium?
            </Text>
            <Text className="symposia-form-text-young-investigator-restriction">
              Restricted to junior investigators: Assistant Professors, Faculty;
              5 years, and Post-docs.
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={2}>
          <Flex gap={"md"} direction={"column"} style={{ marginRight: "1rem" }}>
            <button
              className={`symposia-form-button${
                youngInvestigator == "yes" ? "-active" : ""
              }`}
              onClick={() => {
                setYoungInvestigator("yes");
              }}
            >
              Yes
            </button>
            <button
              className={`symposia-form-button${
                youngInvestigator == "no" ? "-active" : ""
              }`}
              onClick={() => {
                setYoungInvestigator("no");
              }}
            >
              No
            </button>
          </Flex>
        </Grid.Col>
      </Grid>
      <TextInput
        label="Lead Organizer (name, affiliation, email address)"
        className="symposia-form-label-organizer"
        withAsterisk
      />
      <Textarea
        placeholder="A brief overview of the objectives, topics to be covered, and relevance."
        label="Abstract (250 words max)"
        className="symposia-form-label-abstract"
        autosize
        minRows={2}
        withAsterisk
      />
      <TextInput
        label="One-sentence summary of the symposium (50 words max)"
        className="symposia-form-label-organizer"
        withAsterisk
      />
      <Grid columns={8} grow={true} className="symposia-form-grid-alternate">
        <Grid.Col span={4}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="symposia-form-side-text">
              Alternate Contact #1
            </Text>
            <TextInput
              placeholder="Name"
              className="symposia-form-label-organizer"
              withAsterisk
            />{" "}
            <TextInput
              placeholder="Institutional Affiliation"
              className="symposia-form-label-organizer"
              withAsterisk
            />{" "}
            <TextInput
              placeholder="Email Address"
              className="symposia-form-label-organizer"
              withAsterisk
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="symposia-form-side-text">
              Alternate Contact #2
            </Text>
            <TextInput
              placeholder="Name"
              className="symposia-form-label-organizer"
              withAsterisk
            />{" "}
            <TextInput
              placeholder="Institutional Affiliation"
              className="symposia-form-label-organizer"
              withAsterisk
            />{" "}
            <TextInput
              placeholder="Email Address"
              className="symposia-form-label-organizer"
              withAsterisk
            />
          </Flex>
        </Grid.Col>
      </Grid>

      <TextInput
        label="Draft program for the symposium"
        className="symposia-form-label-draft"
        withAsterisk
      />

      <TextInput
        label="Invited speakers List"
        placeholder="Include each speaker's affiliation, location, title of their presentation, and confirmation of participation."
        className="symposia-form-label-draft"
        withAsterisk
      />

      <Button className="symposia-form-submit-button">
        SUBMIT APPLICATION
      </Button>
    </div>
  );
};

export default SymposiaForm;
