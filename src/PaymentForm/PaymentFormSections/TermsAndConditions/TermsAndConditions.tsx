import { Checkbox, Flex, Text } from "@mantine/core";
import React from "react";
import "./TermsAndConditions.css";
const TermsAndConditions = () => {
  return (
    <>
      <Flex direction={"column"} gap={"md"}>
        <Flex>
          {" "}
          <Text>Participation, Cancellation, Refund, and Privacy Policies</Text>
          <Text style={{ color: "red" }}>*</Text>
        </Flex>

        <Text className="terms-and-conditions-text">
          The Tinnitus Research Initiative-2020 Vancouver Conference
          (“Conference” and/or “TRI-2020 Conference”) along with its associated
          pre-conference workshops is managed and implemented by the Vancouver
          Tinnitus & Hyperacusis Clinic, Inc. (“VTHC”) its staff, designates,
          and agents (“collectively known as “TRI-2020”). TRI-2020 and VTHC
          shall refer interchangeably to the VTHC and the staff responsible for
          planning and implementing the Conference.
        </Text>
        <Checkbox
          label="Having read and understood the Participation, Cancellation, Refund, and Privacy Policies, I hereby accept and agree
that these terms are a fundamental condition of my Conference participation."
        />
        <Checkbox
          label="I hereby consent to the collection and use of my Personal Information for the purposes of communications for and
          about the Conference."
        />
      </Flex>
    </>
  );
};

export default TermsAndConditions;
