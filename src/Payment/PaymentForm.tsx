import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message ?? "An unknown error occurred.");
      setPaymentSuccess(false);
    } else {
      // Send the paymentMethod.id to your server to complete the payment
      // You will handle this in your Node.js backend
      console.log(paymentMethod?.id);
      setPaymentError(null);
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment succeeded!</div>}
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
