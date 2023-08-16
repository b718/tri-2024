import React, { createContext, useState } from "react";
import "./PaymentForm.css";
import RegistrationAndFees from "./PaymentFormSections/RegistrationAndFees/RegistrationAndFees";
import AttendeeContactInformation from "./PaymentFormSections/AttendeeContactInformation/AttendeeContactInformation";
import TermsAndConditions from "./PaymentFormSections/TermsAndConditions/TermsAndConditions";
import { Button, Center, Flex } from "@mantine/core";
import PaymentFormPayment from "./PaymentFormSections/PaymentFormPayment/PaymentFormPayment";
interface apiEndPointInterface {
  api: string;
  setAPI: Function;
}

interface paymentTotalInterface {
  total: number;
  setTotal: Function;
}

export const apiEndPointContext = createContext<apiEndPointInterface>({
  api: "",
  setAPI: () => {},
});

export const paymentTotalContext = createContext<paymentTotalInterface>({
  total: 0,
  setTotal: () => {},
});

const PaymentForm = () => {
  const [api, setAPI] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  return (
    <>
      <apiEndPointContext.Provider value={{ api, setAPI }}>
        <paymentTotalContext.Provider value={{ total, setTotal }}>
          <form name="payment-form-general">
            <Flex gap={"md"} className="payment-form-flex-first-two">
              {" "}
              <Flex direction={"column"}>
                {" "}
                <RegistrationAndFees />
                <PaymentFormPayment />
              </Flex>
              <AttendeeContactInformation />
            </Flex>
            <TermsAndConditions />
            <Center>
              <Button type="submit" style={{ marginBottom: "2rem" }}>
                Submit
              </Button>
            </Center>
          </form>
        </paymentTotalContext.Provider>
      </apiEndPointContext.Provider>
    </>
  );
};

export default PaymentForm;
