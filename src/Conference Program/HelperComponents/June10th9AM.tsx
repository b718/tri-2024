import { Text } from "@mantine/core";
import React from "react";

const June10th9AM = () => {
  return (
    <div>
      <Text style={{ color: "#0482c8" }}>
        The Aage M<span>&#248;</span>
        ller Tinnitus Lecture -
      </Text>
      <Text style={{ color: "#0482c8", textTransform: "uppercase" }}>
        Lead:{" "}
        <a
          href={"https://www.linkedin.com/in/pawel-jastreboff-9581527/"}
          target={"_blank"}
        >
          Dr Pawel Jastreboff,
        </a>
        <br />
        Professor Emeritus, Emory University School of Medicine.
      </Text>
      <Text style={{ color: "#73a441" }}>
        Sponsorship support by WSA/Widex Signia.
      </Text>
    </div>
  );
};

export default June10th9AM;
