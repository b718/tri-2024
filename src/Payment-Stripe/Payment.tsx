import React, { useEffect, useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
interface PaymentPerson {
  title: string;
}

const Payment: React.FunctionComponent<PaymentPerson> = ({ title }) => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/${title}`, {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {" "}
      <div className="payment-div-container">
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm secret={clientSecret} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Payment;
