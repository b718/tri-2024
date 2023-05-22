import React from "react";
import "./Program.css";
import ProgramBase from "./ProgramBase";
import { Text, Center } from "@mantine/core";

const Program = () => {
  return (
    <div>
      <Text
        fz="xl"
        fw="600"
        style={{ marginLeft: "10%", marginBottom: "1rem", marginTop: "2rem" }}
      >
        Programs
      </Text>
      <Center>
        <div>
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
      </Center>
    </div>
  );
};

export default Program;
