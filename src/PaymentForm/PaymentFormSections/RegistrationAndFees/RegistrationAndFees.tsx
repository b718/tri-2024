import React, { useContext, useEffect, useState } from "react";
import { Flex, Radio, Text } from "@mantine/core";
import { apiEndPointContext, paymentTotalContext } from "../../PaymentForm";
import "./RegistrationAndFees.css";

const RegistrationAndFees = () => {
  const apiContext = useContext(apiEndPointContext);
  const totalContext = useContext(paymentTotalContext);
  const [registrationEndPoint, setRegistrationEndPoint] = useState("");
  const [registrationEndPointClicked, setRegistrationEndPointClicked] =
    useState(false);
  const [currentRegistrationPrice, setCurrentRegistrationPrice] = useState(0);

  const clickChecker = (bool: boolean, str: string) => {
    if (bool) {
      return str.length > 0;
    } else {
      return true;
    }
  };
  useEffect(() => {
    apiContext.setAPI(registrationEndPoint);
  }, [registrationEndPoint]);

  useEffect(() => {
    totalContext.setTotal(
      currentRegistrationPrice + currentRegistrationPrice * 0.05
    );
  }, [currentRegistrationPrice]);
  return (
    <>
      {" "}
      <Flex direction={"column"} className="registration-and-fees-main-flex">
        <Flex>
          <Text className="registration-and-fees-main-text">
            Select Registration Option:
          </Text>
          <Text style={{ color: "red", marginLeft: "0.5rem" }}>*</Text>
        </Flex>
        <Radio.Group
          value={registrationEndPoint}
          onChange={setRegistrationEndPoint}
          style={{ marginLeft: "0.5rem" }}
          withAsterisk
          required={true}
          onClick={() => {
            setRegistrationEndPointClicked(true);
          }}
          error={
            clickChecker(registrationEndPointClicked, registrationEndPoint)
              ? ""
              : "This is required."
          }
        >
          {" "}
          <Radio
            value="scientist-clinician"
            label="SCIENTIST/CLINICAN ($500 CAD)"
            onClick={() => {
              setCurrentRegistrationPrice(500.0);
            }}
            className="registration-and-fees-radio-options"
          />
          <Radio
            value="industry"
            label="INDUSTRY ($600 CAD)"
            onClick={() => {
              setCurrentRegistrationPrice(600.0);
            }}
            className="registration-and-fees-radio-options"
          />
          <Radio
            value="student"
            label="STUDENT ($350 CAD)"
            onClick={() => {
              setCurrentRegistrationPrice(1);
            }}
            className="registration-and-fees-radio-options"
          />
          <Radio
            value="patient"
            label="PATIENT ORGANISATION ($500 CAD)"
            onClick={() => {
              setCurrentRegistrationPrice(500.0);
            }}
            className="registration-and-fees-radio-options"
          />
        </Radio.Group>
        <Text className="registration-and-fees-display">
          Registration: ${currentRegistrationPrice}
        </Text>
        <Text className="registration-and-fees-display">
          5% GST: ${currentRegistrationPrice * 0.05}{" "}
        </Text>
        <Text className="registration-and-fees-display">
          Total (CAD): ${currentRegistrationPrice * 1.05}
        </Text>
      </Flex>
    </>
  );
};

export default RegistrationAndFees;
