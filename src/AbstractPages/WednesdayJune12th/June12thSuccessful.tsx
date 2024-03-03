import React from "react";
import { Flex, Text } from "@mantine/core";

const June12thSuccessful = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>
          <b>Speaker:</b> Ms Carol Lau, Sound idEARS Hearing Clinic, Vancouver,
          Canada
        </Text>
      </div>

      {/* <div className="mj10-list">
        <Text>SPEAKERS: </Text>
        <ol className="mj10-inner-list">
          <li>Mr. Robin Guillard, University of Grenoble Alpes, France</li>
          <li>Mr. Antonios Chalimourdas, Hasselt University, Belgium,</li>
          <li>Ms. Sara Demoen, Hasselt University, Belgium</li>
          <li>
            Dr. Annemarie van der Wal, ACTA Academic Center for Dentistry,
            Amsterdam, The Netherlands
          </li>
          <li>
            Prof. dr. Tanit Ganz Sanchez, University of Sao Paulo, ENT
            Department, School of Medicine, Brazil
          </li>
        </ol>
      </div> */}

      {/* <Text className="mj10-text">
        <b>One Sentence Summary:</b> The symposium will bring together experts
        from audiology, neuroscience, and psychology to discuss sound tolerance
        disorders of loudness hyperacusis and misophonia in the context of
        tinnitus.
      </Text> */}
      <Text className="mj10-text">
        <b>Abstract:</b> This presentation, based on nearly 30 years of running
        a private-practice, will discuss the difference between running a
        hearing aid dispensing clinic versus a tinnitus clinic dispensing
        hearing aids; the requirements to provide successful and fruitful
        tinnitus care; and, the engagement with other healthcare providers,
        clients and prospective clients.
      </Text>
    </div>
  );
};

export default June12thSuccessful;
