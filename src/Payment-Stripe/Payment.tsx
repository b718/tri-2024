import React, { useEffect, useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
interface PaymentPerson {
  title: string;
  name: string;
  email: string;
  price: number;
}

const Payment: React.FunctionComponent<PaymentPerson> = ({
  title,
  price,
  name,
  email,
}) => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const serverURL = "https://tri-2024-back-end.onrender.com";
  const testURL = "http://localhost:3001";

  useEffect(() => {
    fetch(`${serverURL}/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${serverURL}/${title}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: (price * 100).toString(),
        name: name,
        email: email,
      }),
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
            <CheckoutForm secret={clientSecret} price={price.toString()} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Payment;
