import { PaymentElement } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { PaymentIntentResult } from "@stripe/stripe-js";
import { paymentStatusContext } from "../PaymentForm/PaymentForm";
import { Center } from "@mantine/core";
interface CheckFormInterface {
  secret: string;
  price: string;
}

const CheckoutForm: React.FunctionComponent<CheckFormInterface> = ({
  secret,
  price,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const paymentFormPaymentStatus = useContext(paymentStatusContext);

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
          " " +
          paymentIntent.currency +
          "!"
      );
      paymentFormPaymentStatus.setPaymentStatus(true);
      setButtonDisable(true);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div
      id="payment-form"
      //  onSubmit={handleSubmit}
    >
      <PaymentElement id="payment-element" />
      <Center>
        <button
          disabled={isProcessing || !stripe || !elements || buttonDisable}
          className="payment-submit"
          type="button"
          onClick={handleSubmit}
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : `Pay Now: $${price}`}
          </span>
        </button>
      </Center>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </div>
  );
};

export default CheckoutForm;
