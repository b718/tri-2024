import React, { useState } from "react";
import "./SymposiaForm.css";
import {
  Button,
  Center,
  Flex,
  Grid,
  Loader,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";

const SymposiaForm = () => {
  const [titleS, setTitleS] = useState("");
  const [youngInvestigator, setYoungInvestigator] = useState("no");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadIns, setLeadIns] = useState("");
  const [abstract, setAbstract] = useState("");
  const [summary, setSummary] = useState("");

  const [contactOneName, setContactOneName] = useState("");
  const [contactOneEmail, setContactOneEmail] = useState("");
  const [contactOneIns, setContactOneIns] = useState("");

  const [contactTwoName, setContactTwoName] = useState("");
  const [contactTwoEmail, setContactTwoEmail] = useState("");
  const [contactTwoIns, setContactTwoIns] = useState("");

  const [draft, setDraft] = useState("");
  const [invites, setInvites] = useState("");

  const { width, height } = useWindowDimensions();

  const [loading, setLoading] = useState("start");

  const buttonChecker = () => {
    return (
      invites &&
      draft &&
      summary &&
      abstract &&
      leadIns &&
      leadEmail &&
      leadName &&
      titleS
    );
  };
  const submitFunction = async (e: any) => {
    e.preventDefault();

    const symposiaObject = {
      title: titleS,
      youngInvestigator: youngInvestigator,
      leadName: leadName,
      leadEmail: leadEmail,
      leadIns: leadIns,
      abstract: abstract,
      summary: summary,
      contactOne: {
        name: contactOneName,
        email: contactOneEmail,
        ins: contactOneIns,
      },
      contactTwo: {
        name: contactTwoName,
        email: contactTwoEmail,
        ins: contactTwoIns,
      },
      draft: draft,
      invites: invites,
    };
    setLoading("loading");
    const x = await fetch(
      "https://tri-2024-back-end.onrender.com/submit-symposia-form",
      // "http://localhost:3001/submit-symposia-form",
      {
        method: "POST",
        body: JSON.stringify({
          symposiaObject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      setLoading("start");
    });
    console.log(x);

    setTitleS("");
    setYoungInvestigator("no");
    setLeadName("");
    setLeadEmail("");
    setLeadIns("");
    setAbstract("");
    setSummary("");

    setContactOneName("");
    setContactOneEmail("");
    setContactOneIns("");

    setContactTwoName("");
    setContactTwoEmail("");
    setContactTwoIns("");

    setDraft("");
    setInvites("");
  };

  return (
    <form className="symposia-form-main-div" onSubmit={submitFunction}>
      <Text className="symposia-form-main-text">Symposia Submissions</Text>
      <Text className="symposia-form-label" style={{ marginBottom: "1rem" }}>
        The deadline for submissions is November 15, 2023
      </Text>

      <TextInput
        label="Title of symposium (25 words max)"
        className="symposia-form-label"
        required={true}
        type="text"
        autoComplete="turnoff"
        value={titleS}
        onChange={(event) => {
          setTitleS(event.target.value);
        }}
      />
      <Grid
        columns={width < 660 ? 1 : 8}
        className="symposa-form-grid-young-investigator"
      >
        <Grid.Col span={width < 660 ? 1 : 6}>
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
        <Grid.Col span={width < 660 ? 1 : 2}>
          <Flex gap={"md"} direction={"column"} style={{ marginRight: "1rem" }}>
            <button
              type="button"
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
              type="button"
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
      <Flex direction={"column"} justify={"flex-start"} align={"flex-start"}>
        {" "}
        <Text className="symposia-form-side-text">
          Lead Organizer (name, affiliation, email address)
        </Text>
        {width < 660 ? (
          <div className="symposia-form-less-than-660-div">
            <TextInput
              className="symposia-form-label-organizer"
              required={true}
              label="Name"
              type="text"
              value={leadName}
              onChange={(event) => {
                setLeadName(event.target.value);
              }}
            />{" "}
            <TextInput
              className="symposia-form-label-organizer"
              required={true}
              label="Institutional Affiliation"
              type="text"
              value={leadIns}
              onChange={(event) => {
                setLeadIns(event.target.value);
              }}
            />{" "}
            <TextInput
              label="Email Address"
              className="symposia-form-label-organizer"
              required={true}
              type="email"
              value={leadEmail}
              onChange={(event) => {
                setLeadEmail(event.target.value);
              }}
            />
          </div>
        ) : (
          <Flex
            gap={"md"}
            justify={"center"}
            align={"center"}
            direction={width < 660 ? "column" : "row"}
          >
            {" "}
            <TextInput
              className="symposia-form-label-organizer"
              required={true}
              label="Name"
              type="text"
              value={leadName}
              onChange={(event) => {
                setLeadName(event.target.value);
              }}
            />{" "}
            <TextInput
              className="symposia-form-label-organizer"
              required={true}
              label="Institutional Affiliation"
              type="text"
              value={leadIns}
              onChange={(event) => {
                setLeadIns(event.target.value);
              }}
            />{" "}
            <TextInput
              label="Email Address"
              className="symposia-form-label-organizer"
              required={true}
              type="email"
              value={leadEmail}
              onChange={(event) => {
                setLeadEmail(event.target.value);
              }}
            />
          </Flex>
        )}
      </Flex>

      <Textarea
        placeholder="A brief overview of the objectives, topics to be covered, and relevance."
        label="Abstract (250 words max)"
        className="symposia-form-label-abstract"
        autosize
        minRows={2}
        required={true}
        value={abstract}
        onChange={(event) => {
          setAbstract(event.target.value);
        }}
      />
      <TextInput
        label="One-sentence summary of the symposium (50 words max)"
        className="symposia-form-label-summary"
        required={true}
        value={summary}
        onChange={(event) => {
          setSummary(event.target.value);
        }}
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
              value={contactOneName}
              onChange={(event) => {
                setContactOneName(event.target.value);
              }}
            />{" "}
            <TextInput
              placeholder="Institutional Affiliation"
              className="symposia-form-label-organizer"
              value={contactOneIns}
              onChange={(event) => {
                setContactOneIns(event.target.value);
              }}
            />{" "}
            <TextInput
              placeholder="Email Address"
              className="symposia-form-label-organizer"
              value={contactOneEmail}
              onChange={(event) => {
                setContactOneEmail(event.target.value);
              }}
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
              value={contactTwoName}
              onChange={(event) => {
                setContactTwoName(event.target.value);
              }}
            />{" "}
            <TextInput
              placeholder="Institutional Affiliation"
              className="symposia-form-label-organizer"
              value={contactTwoIns}
              onChange={(event) => {
                setContactTwoIns(event.target.value);
              }}
            />{" "}
            <TextInput
              placeholder="Email Address"
              className="symposia-form-label-organizer"
              value={contactTwoEmail}
              onChange={(event) => {
                setContactTwoEmail(event.target.value);
              }}
            />
          </Flex>
        </Grid.Col>
      </Grid>

      <TextInput
        label="Draft program for the symposium"
        className="symposia-form-label-draft"
        required={true}
        value={draft}
        onChange={(event) => {
          setDraft(event.target.value);
        }}
      />

      <TextInput
        label="Invited speakers List"
        placeholder="Include each speaker's affiliation, location, title of their presentation, and confirmation of participation."
        className="symposia-form-label-speakers"
        required={true}
        value={invites}
        onChange={(event) => {
          setInvites(event.target.value);
        }}
      />

      <Flex>
        <Button
          className="symposia-form-submit-button"
          type={"submit"}
          disabled={!buttonChecker()}
        >
          SUBMIT APPLICATION
          {loading === "loading" ? (
            <Loader
              color="gray"
              size="0.8rem"
              style={{
                marginLeft: "0.5rem",
                maxWidth: "fit-content",
              }}
            />
          ) : (
            <div></div>
          )}
        </Button>
      </Flex>
    </form>
  );
};

export default SymposiaForm;
