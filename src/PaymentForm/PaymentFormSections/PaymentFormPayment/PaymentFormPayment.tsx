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
      <Flex direction={"column"}>
        <Text>Payment</Text>
        <Text>
          Note, you do not need a PayPal account - you can pay with your credit
          card using Stripe.
        </Text>
        <Flex>
          <Text>Conference Registration Fee Payment (CAD): </Text>
          <Text>{paymentTotal.total}</Text>
        </Flex>
        <button
          className="payment-form-payment-button"
          disabled={buttonConfirm}
          onClick={() => {
            setButtonConfirm(true);
          }}
        >
          CONFIRM
        </button>
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
