import { PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPalPayment.css";
import { FunctionComponent, useState } from "react";
import { Flex, Text } from "@mantine/core";
interface PayPalPaymentInterface {
  price: string;
}
const PayPalPayment: FunctionComponent<PayPalPaymentInterface> = ({
  price,
}) => {
  const serverURL = "http://localhost:3001";
  const [responsePayment, setResponsePayment] = useState<any>();
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
          cost: price,
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
    })
      .then((response) => {
        console.log("Payment Success");
        return response.json();
      })
      .then((res) => {
        console.log("res", res);
        setResponsePayment(res);
      });
  };
  return (
    <>
      {" "}
      <div className="pay-pal-payments-main-button-div">
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data)}
          onApprove={(data, actions) => onApprove(data)}
        />

        {responsePayment ? (
          <Flex align={"center"} direction={"column"}>
            <Flex>
              <Text>Payment Status:</Text>
              <Text>{responsePayment.status}</Text>
              <Text>🎉!</Text>
            </Flex>
            <Flex>
              <Text> Paid: </Text>
              <Text>
                {" "}
                {
                  responsePayment.purchase_units[0].payments.captures[0].amount
                    .value
                }
              </Text>
              <Text>
                {" "}
                {
                  responsePayment.purchase_units[0].payments.captures[0].amount
                    .currency_code
                }
                !
              </Text>
            </Flex>
          </Flex>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default PayPalPayment;
