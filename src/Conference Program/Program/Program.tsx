import React from "react";
import "./Program.css";
import ProgramBase from "./ProgramBase";
import { Text } from "@mantine/core";

const Program = () => {
  return (
    <div className="program-section-container">
      <Text
        fz="xl"
        fw="600"
        style={{ marginLeft: "2rem", marginBottom: "1rem", marginTop: "2rem" }}
      >
        Programs
      </Text>
      <div style={{ marginLeft: "2rem" }}>
        <ProgramBase
          title="June 6"
          information="june 6 testing june 6 testing june 6 testing june 6 testing june 6 testing"
        />
        <ProgramBase
          title="June 7"
          information="june 7 testing june 7 testing june 7 testing june 7 testing june 7 testing"
        />
        <ProgramBase
          title="June 8"
          information="june 8 testing june 8 testing june 8 testing june 8 testing june 8 testing"
        />
        <ProgramBase
          title="June 9"
          information="june 9 testing june 9 testing june 9 testing june 9 testing june 9 testing"
        />
      </div>
    </div>
  );
};

export default Program;
