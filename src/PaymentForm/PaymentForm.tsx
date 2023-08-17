import React, { createContext, useState } from "react";
import "./PaymentForm.css";
import RegistrationAndFees from "./PaymentFormSections/RegistrationAndFees/RegistrationAndFees";
import AttendeeContactInformation from "./PaymentFormSections/AttendeeContactInformation/AttendeeContactInformation";
import TermsAndConditions from "./PaymentFormSections/TermsAndConditions/TermsAndConditions";
import { Button, Center, Flex, Text } from "@mantine/core";
import PaymentFormPayment from "./PaymentFormSections/PaymentFormPayment/PaymentFormPayment";
interface apiEndPointInterface {
  api: string;
  setAPI: Function;
}

interface paymentTotalInterface {
  total: number;
  setTotal: Function;
}

interface paymentStatusInterface {
  paymentStatus: boolean;
  setPaymentStatus: Function;
}

export const apiEndPointContext = createContext<apiEndPointInterface>({
  api: "",
  setAPI: () => {},
});

export const paymentTotalContext = createContext<paymentTotalInterface>({
  total: 0,
  setTotal: () => {},
});

export const paymentStatusContext = createContext<paymentStatusInterface>({
  paymentStatus: false,
  setPaymentStatus: () => {},
});

const PaymentForm = () => {
  const [api, setAPI] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);

  return (
    <>
      <apiEndPointContext.Provider value={{ api, setAPI }}>
        <paymentStatusContext.Provider
          value={{ paymentStatus, setPaymentStatus }}
        >
          <paymentTotalContext.Provider value={{ total, setTotal }}>
            <form name="payment-form-general">
              <Flex gap={"md"} className="payment-form-flex-first-two">
                {" "}
                <Flex direction={"column"}>
                  {" "}
                  <RegistrationAndFees />
                  <PaymentFormPayment />
                  {paymentStatus ? (
                    <Center>
                      <Text className="payment-form-confirmation-payment">
                        Payment Confirmed
                      </Text>
                    </Center>
                  ) : (
                    <div></div>
                  )}
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
        </paymentStatusContext.Provider>
      </apiEndPointContext.Provider>
    </>
  );
};

export default PaymentForm;
