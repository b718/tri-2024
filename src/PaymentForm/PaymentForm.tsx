import React, { createContext, useEffect, useState } from "react";
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

interface contactInformationInterface {
  contactObject: any;
  setContactObject: Function;
}

//PARTICIPATION

interface participationInterface {
  participationObject: any;
  setParticipationObject: Function;
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

export const contactObjectContext = createContext<contactInformationInterface>({
  contactObject: {},
  setContactObject: () => {},
});

export const participationObjectContext = createContext<participationInterface>(
  {
    participationObject: {},
    setParticipationObject: () => {},
  }
);

const PaymentForm = () => {
  const [api, setAPI] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [paymentStatus, setPaymentStatus] = useState<boolean>(false);
  const [contactObject, setContactObject] = useState<any>({});
  const [participationObject, setParticipationObject] = useState<any>({});
  const [submitBool, setSubmitBool] = useState<boolean>(false);

  //   useEffect(() => {
  //     console.log(contactObject);
  //     console.log(participationObject);
  //   }, [contactObject, participationObject]);

  const submitFunction = async (e: any) => {
    e.preventDefault();
    let date = new Date().toLocaleString() + "";
    let finalObject = {
      ...contactObject,
      ...participationObject,
      option: api,
      registration: total,
      gst: total * 0.05,
      total: total * 1.05,
      paymentStatus: paymentStatus,
      data: date,
    };
    await fetch("http://localhost:3001/submit-payment-form", {
      method: "POST",
      body: JSON.stringify({
        finalObject,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setSubmitBool(true);
  };

  return (
    <>
      <participationObjectContext.Provider
        value={{ participationObject, setParticipationObject }}
      >
        <contactObjectContext.Provider
          value={{ contactObject, setContactObject }}
        >
          <apiEndPointContext.Provider value={{ api, setAPI }}>
            <paymentStatusContext.Provider
              value={{ paymentStatus, setPaymentStatus }}
            >
              <paymentTotalContext.Provider value={{ total, setTotal }}>
                {!submitBool ? (
                  <form name="payment-form-general" onSubmit={submitFunction}>
                    <Flex gap={"md"} className="payment-form-flex-first-two">
                      {" "}
                      <Flex direction={"column"}>
                        {" "}
                        <RegistrationAndFees />
                        <PaymentFormPayment />
                        {paymentStatus ? (
                          <Center>
                            <Text className="payment-form-confirmation-payment">
                              Payment Confirmed for {api} thank you!
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
                ) : (
                  <Center>
                    <Text className="payment-form-on-submit-message">
                      Thank you for registiring with us, we will see you soon at
                      the 2024 Tinnitus Research Initiative Conference!{" "}
                    </Text>
                  </Center>
                )}
              </paymentTotalContext.Provider>
            </paymentStatusContext.Provider>
          </apiEndPointContext.Provider>
        </contactObjectContext.Provider>
      </participationObjectContext.Provider>
    </>
  );
};

export default PaymentForm;
