import { PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPalPayment.css";
const PayPalPayment = () => {
  const serverURL = "http://localhost:3001";
  const createOrder = (data: any) => {
    // Order is created on the server and the order id is returned
    return fetch(`${serverURL}/my-server/create-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        scientistClinician: {
          description: "scientist-clinician",
          cost: "400.00",
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data: any) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${serverURL}/my-server/capture-paypal-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => response.json());
  };
  return (
    <>
      {" "}
      <div className="pay-pal-payments-main-button-div">
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data)}
          onApprove={(data, actions) => onApprove(data)}
        />
      </div>
    </>
  );
};

export default PayPalPayment;
