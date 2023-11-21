import React from "react";
import "./ComponentSymposia.css";
import { Text } from "@mantine/core";

const GeneralInformation = () => {
  return (
    <Text className="general-information-main-div">
      The abstracts submitted as part of a symposium will not differ from the
      abstracts normally submitted for the annual meeting. However, earlier
      submission will allow for designation of these presentations separate from
      the regular podium sessions. If your symposium is accepted you will still
      be required to submit your abstract through the TRI website by the regular
      deadline but we will specially designate these abstracts after submission
      so they are grouped together. If your symposium proposal is not accepted
      you will still be able to submit your individual abstracts through the
      normal TRI submission process.
    </Text>
  );
};

export default GeneralInformation;
