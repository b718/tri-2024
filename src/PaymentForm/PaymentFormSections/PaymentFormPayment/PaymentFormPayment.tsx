import React, { useContext, useState } from "react";
import { apiEndPointContext, paymentTotalContext } from "../../PaymentForm";
import { Flex, Text } from "@mantine/core";
import "./PaymentFormPayment.css";
import PayPalPayment from "../../../PayPal/PayPalPayment";
import Payment from "../../../Payment-Stripe/Payment";
const PaymentFormPayment = () => {
  const paymentTotal = useContext(paymentTotalContext);
  const apiEndPoint = useContext(apiEndPointContext);
  const [buttonConfirm, setButtonConfirm] = useState(false);
  return (
    <>
      <Flex direction={"column"} className="payment-form-payment-main-flex">
        <Text className="payment-form-payment-main-text">Payment</Text>
        <Text className="payment-form-payment-info-text">
          Note, you do not need a PayPal account - you can pay with your credit
          card using Stripe.
        </Text>
        <Flex className="payment-form-payment-display-flex">
          <Text className="payment-form-payment-info-text">
            Conference Registration Fee Payment (CAD):
          </Text>
          <Text
            className="payment-form-payment-info-text"
            style={{ marginLeft: "0.2rem" }}
          >
            ${paymentTotal.total}
          </Text>
        </Flex>
        <Flex className="payment-form-payment-display-flex">
          <Text className="payment-form-payment-info-text">
            Current Option:
          </Text>
          <Text
            className="payment-form-payment-info-text"
            style={{ marginLeft: "0.2rem" }}
          >
            {apiEndPoint.api}
          </Text>
        </Flex>
        {paymentTotal.total > 0 ? (
          <Flex gap={"md"}>
            <button
              className="payment-form-payment-button"
              disabled={buttonConfirm}
              onClick={() => {
                setButtonConfirm(true);
              }}
              type="button"
            >
              CONFIRM
            </button>
            <button
              className="payment-form-payment-button"
              onClick={() => {
                setButtonConfirm(false);
              }}
              type="button"
            >
              CANCEL
            </button>
          </Flex>
        ) : (
          <div></div>
        )}
      </Flex>

      {buttonConfirm ? (
        <Flex direction={"column"}>
          <Payment title={apiEndPoint.api} />
          <PayPalPayment price={paymentTotal.total.toString()} />
        </Flex>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PaymentFormPayment;
