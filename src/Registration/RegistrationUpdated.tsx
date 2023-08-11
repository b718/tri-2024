import React, { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../App";
import { Flex, Text } from "@mantine/core";
import "./RegistrationUpdate.css";
import Payment from "../Payment/Payment";
import PayPalPayment from "../PayPal/PayPalPayment";

const RegistrationUpdated = () => {
  const registrationRef = useContext(NavBarContext);
  const [option, setOption] = useState<number>(0);
  const [shownSciClin, setShownSciClin] = useState(false);
  const [shownIndustry, setShownIndustry] = useState(false);
  const [shownStudent, setShownStudent] = useState(false);
  const [shownPatientOrg, setShownPatientOrg] = useState(false);
  const correctPayment = () => {
    if (option == 1) {
      return (
        <div>
          {" "}
          <Payment title="scientist-clinician" />
          <PayPalPayment price="500" />
        </div>
      );
    }

    if (option == 2) {
      return (
        <div>
          {" "}
          <Payment title="industry" />
          <PayPalPayment price="600" />
        </div>
      );
    }

    if (option == 3) {
      return (
        <div>
          {" "}
          <Payment title="student" />
          <PayPalPayment price="350" />
        </div>
      );
    }

    if (option == 4) {
      return (
        <div>
          {" "}
          <Payment title="patient" />
          <PayPalPayment price="500" />
        </div>
      );
    }
    return <div></div>;
  };
  //API END POINTS: scientist-clinician, industry, student, patient
  return (
    <div ref={registrationRef.registrationRef}>
      <div className="registration-updated-main-div">
        <Text className="registration-updated-main-header">Registration</Text>
        <Text>
          Registration is now open for the Tinnitus Research Initiative
          Conference from June 10 to 12, 2024 in Vancouver, Canada.
        </Text>

        <Flex
          direction={"column"}
          align={"center"}
          className="registration-updated-main-flex"
        >
          <Flex
            gap="md"
            align="center"
            className="registration-updated-main-flex"
            justify={"center"}
          >
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              onClick={() => {
                if (option === 1) {
                  setOption(0);
                } else {
                  setOption(1);
                }
              }}
              onMouseEnter={() => setShownSciClin(true)}
              onMouseLeave={() => setShownSciClin(false)}
              className={`registration-updated-sci-clin${
                shownSciClin || option === 1 ? "-active" : ""
              }`}
            >
              <Text>Scientist/Clinican</Text>
              <Text>$500</Text>
            </Flex>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              onClick={() => {
                if (option === 2) {
                  setOption(0);
                } else {
                  setOption(2);
                }
              }}
              onMouseEnter={() => setShownIndustry(true)}
              onMouseLeave={() => setShownIndustry(false)}
              className={`registration-updated-industry${
                shownIndustry || option === 2 ? "-active" : ""
              }`}
            >
              <Text>Industry</Text>
              <Text>$600</Text>
            </Flex>{" "}
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              onClick={() => {
                if (option === 3) {
                  setOption(0);
                } else {
                  setOption(3);
                }
              }}
              onMouseEnter={() => setShownStudent(true)}
              onMouseLeave={() => setShownStudent(false)}
              className={`registration-updated-student${
                shownStudent || option === 3 ? "-active" : ""
              }`}
            >
              <Text>Student</Text>
              <Text>$350</Text>
            </Flex>{" "}
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              onClick={() => {
                if (option === 4) {
                  setOption(0);
                } else {
                  setOption(4);
                }
              }}
              onMouseEnter={() => setShownPatientOrg(true)}
              onMouseLeave={() => setShownPatientOrg(false)}
              className={`registration-updated-patient-org${
                shownPatientOrg || option === 4 ? "-active" : ""
              }`}
            >
              <Text>Patient Organisation</Text>
              <Text>$500</Text>
            </Flex>
          </Flex>
          {correctPayment()}
        </Flex>
      </div>
    </div>
  );
};

export default RegistrationUpdated;
