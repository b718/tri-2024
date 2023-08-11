import { PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { Text } from "@mantine/core";
import { PaymentIntentResult } from "@stripe/stripe-js";
interface CheckFormInterface {
  secret: string;
}

const CheckoutForm: React.FunctionComponent<CheckFormInterface> = ({
  secret,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error!.message);
    } else if (paymentIntent && paymentIntent.status == "succeeded") {
      setMessage(
        "Payment Status: " +
          paymentIntent.status +
          " 🎉!" +
          " Paid: " +
          paymentIntent.amount / 100 +
          ".00" +
          " " +
          paymentIntent.currency +
          "!"
      );
      setButtonDisable(true);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button
        disabled={isProcessing || !stripe || !elements || buttonDisable}
        className="payment-submit"
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
