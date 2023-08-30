import React, { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../App";
import { Button, Flex, Text } from "@mantine/core";
import "./RegistrationUpdate.css";
import Payment from "../Payment-Stripe/Payment";
import PayPalPayment from "../PayPal/PayPalPayment";
import useWindowDimensions from "../Components/useWindowsDimensions";

const RegistrationUpdated = () => {
  const registrationRef = useContext(NavBarContext);
  const [option, setOption] = useState<number>(0);
  const [shownSciClin, setShownSciClin] = useState(false);
  const [shownIndustry, setShownIndustry] = useState(false);
  const [shownStudent, setShownStudent] = useState(false);
  const [shownPatientOrg, setShownPatientOrg] = useState(false);
  const [currentPayment, setCurrentPaymnet] = useState<any>();
  const { width, height } = useWindowDimensions();

  // const correctPayment = () => {
  //   if (option == 1) {
  //     return (
  //       <div>
  //         {" "}
  //         <Payment title="scientist-clinician" />
  //         <PayPalPayment price="500" />
  //       </div>
  //     );
  //   }

  //   if (option == 2) {
  //     return (
  //       <div>
  //         {" "}
  //         <Payment title="industry" />
  //         <PayPalPayment price="600" />
  //       </div>
  //     );
  //   }

  //   if (option == 3) {
  //     return (
  //       <div>
  //         {" "}
  //         <Payment title="student" />
  //         <PayPalPayment price="350" />
  //       </div>
  //     );
  //   }

  //   if (option == 4) {
  //     return (
  //       <div>
  //         {" "}
  //         <Payment title="patient" />
  //         <PayPalPayment price="500" />
  //       </div>
  //     );
  //   }
  //   return <div></div>;
  // };

  // useEffect(() => {
  //   setCurrentPaymnet(correctPayment());
  // }, [option]);

  //API END POINTS: scientist-clinician, industry, student, patient
  return (
    <div ref={registrationRef.registrationRef}>
      <div className="registration-updated-main-div">
        <Flex
          direction={width < 500 ? "column" : "row"}
          justify={"center"}
          align={width < 500 ? "center" : "flex-start"}
        >
          {" "}
          <Flex direction={"column"}>
            <Text className="registration-updated-main-header">
              Registration
            </Text>
            <Text className="registration-updated-text-left">
              Registration is now open for the Tinnitus Research Initiative
              Conference from June 10 to 12, 2024 in Vancouver, Canada.
            </Text>
            <button
              className="registration-updated-register-button"
              disabled={true}
            >
              <a
                // href="register"
                // target="_blank"
                className="registration-updated-a-tag"
                href="triMainPdf.pdf"
                download="tri-2024-save-the-date"
              >
                COMING JAN 15TH
              </a>
            </button>
          </Flex>
          <div
            className={`${width < 500 ? "" : "registration-updated-line"}`}
          />
          <Flex
            gap="0.5rem"
            align="flex-start"
            className="registration-updated-main-flex"
            justify={"center"}
            direction={"column"}
          >
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              // onClick={() => {
              //   if (option === 1) {
              //     setOption(0);
              //   } else {
              //     setOption(1);
              //   }
              // }}
              onMouseEnter={() => setShownSciClin(true)}
              onMouseLeave={() => setShownSciClin(false)}
              className={`registration-updated-sci-clin${
                shownSciClin || option === 1 ? "-active" : ""
              }`}
            >
              <Text className="registration-updated-text">
                Scientist/Clinican
              </Text>
              <Text className="registration-updated-price-500 registration-updated-text">
                $50
              </Text>
            </Flex>
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              // onClick={() => {
              //   if (option === 2) {
              //     setOption(0);
              //   } else {
              //     setOption(2);
              //   }
              // }}
              onMouseEnter={() => setShownIndustry(true)}
              onMouseLeave={() => setShownIndustry(false)}
              className={`registration-updated-industry${
                shownIndustry || option === 2 ? "-active" : ""
              }`}
            >
              <Text className="registration-updated-text">Industry</Text>
              <Text className="registration-updated-price-600 registration-updated-text">
                $60
              </Text>
            </Flex>{" "}
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              // onClick={() => {
              //   if (option === 3) {
              //     setOption(0);
              //   } else {
              //     setOption(3);
              //   }
              // }}
              onMouseEnter={() => setShownStudent(true)}
              onMouseLeave={() => setShownStudent(false)}
              className={`registration-updated-student${
                shownStudent || option === 3 ? "-active" : ""
              }`}
            >
              <Text className="registration-updated-text">Student</Text>
              <Text className="registration-updated-price-350 registration-updated-text">
                $35
              </Text>
            </Flex>{" "}
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              // onClick={() => {
              //   if (option === 4) {
              //     setOption(0);
              //   } else {
              //     setOption(4);
              //   }
              // }}
              onMouseEnter={() => setShownPatientOrg(true)}
              onMouseLeave={() => setShownPatientOrg(false)}
              className={`registration-updated-patient-org${
                shownPatientOrg || option === 4 ? "-active" : ""
              }`}
            >
              <Text className="registration-updated-text">
                Patient Organisation
              </Text>
              <Text className="registration-updated-price-500-2 registration-updated-text">
                $50
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {currentPayment}
      </div>
    </div>
  );
};

export default RegistrationUpdated;
