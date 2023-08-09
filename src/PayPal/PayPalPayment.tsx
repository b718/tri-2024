import { PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import "./PayPalPayment.css";
const PayPalPayment = () => {
  return (
    <>
      {" "}
      <div className="pay-pal-payments-main-button-div">
        <PayPalButtons />
      </div>
    </>
  );
};

export default PayPalPayment;
