import React, { createContext, useEffect, useState } from "react";
import "./RegistrationFormNRS.css";
import { Button, Flex, Select, Text, TextInput, em } from "@mantine/core";
import PaymentFormPayment from "../PaymentForm/PaymentFormSections/PaymentFormPayment/PaymentFormPayment";
import RegistrationAndFees from "../PaymentForm/PaymentFormSections/RegistrationAndFees/RegistrationAndFees";
import Payment from "../Payment-Stripe/Payment";
import PayPalPayment from "../PayPal/PayPalPayment";

interface contactInformationInterface {
  contactObject: any;
  setContactObject: Function;
}

export const contactObjectContext = createContext<contactInformationInterface>({
  contactObject: {},
  setContactObject: () => {},
});

const RegistrationFormNRS = () => {
  //ContactInfo
  //   const [contactObject, setContactObject] = useState<any>({});
  const [page, setPage] = useState<number>(0);

  //Contact Info
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [profession, setProfession] = useState<string | null>("");
  const [org, setOrg] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addressType, setAddressType] = useState<string | null>("");

  const [street, setStreet] = useState("");
  const [state, setstate] = useState("");
  const [suite, setSuite] = useState("");

  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  //Ticket Types
  const [ticketType, setTicketType] = useState<string | null>("");
  const [addOn, setAddOn] = useState<string | null>("");
  const [price, setPrice] = useState(0);
  const [btn, setBtn] = useState("no");
  const [guest, setGuest] = useState<string | null>("");

  useEffect(() => {
    let values = [
      "Early Bird (closes 1 March 2024) $825 CAD",
      "Regular Rate (closes 8 June 2024) $975 CAD",
      "On-site Registration $1475 CAD",
      "Student Rate (requires proof of enrolment – closes 8 June 2024) $625 CAD",
      "One day, June 10 only $525 CAD",
      "One day, June 11 only $525 CAD",
      "One day, June 12 only $525 CAD",
    ];

    switch (ticketType) {
      case values[0]:
        setPrice(825.0 + guestHelper());
        break;
      case values[1]:
        setPrice(975.0 + guestHelper());
        break;
      case values[2]:
        setPrice(1475.0 + guestHelper());
        break;
      case values[3]:
        setPrice(625.0 + guestHelper());
        break;
      case values[4]:
        setPrice(525.0 + guestHelper());
        break;
      case values[5]:
        setPrice(525.0 + guestHelper());
        break;
      case values[6]:
        setPrice(525.0 + guestHelper());
        break;
    }
  }, [ticketType, guest]);

  const guestHelper = () => {
    let values = ["Yes – ($95 to be added to conference registration)", "No"];

    switch (guest) {
      case values[0]:
        return 95;
      case values[1]:
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div>
      <form className="registration-form-nrs-main-div">
        <Text className="registration-form-nrs-main-text">
          TRI 2024 Registration
        </Text>
        <Flex justify={"space-between"}>
          {
            {
              0: (
                <Flex direction={"column"}>
                  <Text>Attendee Contact Information</Text>
                  <Text>*Registration is NOT transferable</Text>
                </Flex>
              ),
              1: (
                <Flex direction={"column"}>
                  <Text>Registration Options</Text>
                </Flex>
              ),
              2: (
                <Flex direction={"column"}>
                  <Text>Payment Options</Text>
                </Flex>
              ),
            }[page]
          }
          {
            {
              0: <progress value={0.33} />,
              1: <progress value={0.67} />,
              2: <progress value={1} />,
            }[page]
          }
        </Flex>

        {/* {ComponentDisplay(page)} */}

        {
          {
            0: (
              <Flex
                direction={"column"}
                gap={"1rem"}
                style={{ marginTop: "1rem" }}
                className="registration-form-nrs-flex-0"
              >
                <div>
                  <Text className="">
                    Name{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>
                  <Flex gap={"md"} wrap={"wrap"}>
                    <TextInput
                      placeholder="Title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <TextInput
                      placeholder="First"
                      value={first}
                      onChange={(e) => {
                        setFirst(e.target.value);
                      }}
                    />
                    <TextInput
                      placeholder="Last"
                      value={last}
                      onChange={(e) => {
                        setLast(e.target.value);
                      }}
                    />
                  </Flex>
                </div>

                <div>
                  <Text className="">
                    Profession/Attendee Type{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <Select
                    withAsterisk={true}
                    required={true}
                    transitionProps={{
                      transition: "pop-top-left",
                      duration: 80,
                      timingFunction: "ease",
                    }}
                    value={profession}
                    onChange={setProfession}
                    data={["Audiologist", "Counsellor", "Educator"]}
                  />
                </div>

                <div>
                  <Text className="">Affiliation/Organization</Text>
                  <TextInput
                    value={org}
                    onChange={(e) => {
                      setOrg(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <Text className="">
                    Email{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <TextInput
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <Text className="">
                    Phone Number{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <TextInput
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <Text>
                    Address{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <Select
                    withAsterisk={true}
                    required={true}
                    transitionProps={{
                      transition: "pop-top-left",
                      duration: 80,
                      timingFunction: "ease",
                    }}
                    value={addressType}
                    onChange={setAddressType}
                    data={["Work", "Home"]}
                    style={{ marginBottom: "1rem" }}
                    placeholder={"Address Type"}
                  />

                  <Flex
                    gap={"1rem"}
                    direction={"column"}
                    justify={"center"}
                    style={{ marginBottom: "1rem" }}
                  >
                    <Flex gap={"1rem"}>
                      <TextInput
                        required={true}
                        placeholder="Street Address"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <TextInput
                        placeholder="Apartment, suite"
                        value={suite}
                        onChange={(e) => setSuite(e.target.value)}
                      />
                      <TextInput
                        required={true}
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Flex>
                    <Flex gap={"1rem"}>
                      <TextInput
                        required={true}
                        placeholder="Province/State"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                      />
                      <TextInput
                        required={true}
                        placeholder="Postal Code"
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}
                      />
                      <TextInput
                        required={true}
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            ),
            1: (
              <Flex
                direction={"column"}
                gap={"1rem"}
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                className="registration-form-nrs-flex-1"
              >
                <div>
                  <Text className="">
                    Select Ticket Type{" "}
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <Select
                    value={ticketType}
                    onChange={setTicketType}
                    withAsterisk={true}
                    required={true}
                    data={[
                      "Early Bird (closes 1 March 2024) $825 CAD",
                      "Regular Rate (closes 8 June 2024) $975 CAD",
                      "On-site Registration $1475 CAD",
                      "Student Rate (requires proof of enrolment – closes 8 June 2024) $625 CAD",
                      "One day, June 10 only $525 CAD",
                      "One day, June 11 only $525 CAD",
                      "One day, June 12 only $525 CAD",
                    ]}
                    transitionProps={{
                      transition: "pop-top-left",
                      duration: 80,
                      timingFunction: "ease",
                    }}
                  />
                  <Text
                    style={{
                      maxWidth: "40rem",
                      wordBreak: "break-word",
                      fontSize: "0.65rem",
                    }}
                  >
                    Full Conference Registration includes daily conference lunch
                    and the TRI Networking Dinner Event on Monday 10th June.
                  </Text>
                </div>

                <div>
                  <Text className="">
                    Pre-Conference Workshop Add-on: Wednesday, June 10th
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <Select
                    size={"xs"}
                    placeholder="Workshop registrations are limited in number, first-come, first-served."
                    value={addOn}
                    onChange={setAddOn}
                    withAsterisk={true}
                    required={true}
                    data={[
                      "Workshop 1",
                      "Workshop 2",
                      "No - I am only attending the main conference from June 10-12, 2023",
                    ]}
                    transitionProps={{
                      transition: "pop-top-left",
                      duration: 80,
                      timingFunction: "ease",
                    }}
                  />
                </div>

                <div>
                  <Text className="">
                    Will you be bringing a guest to the Event?
                    <Text
                      style={{
                        color: "red",
                        marginLeft: "0.1rem",
                        display: "inline-block",
                      }}
                    >
                      *
                    </Text>
                  </Text>

                  <Select
                    size={"xs"}
                    placeholder="Workshop registrations are limited in number, first-come, first-served."
                    value={guest}
                    onChange={setGuest}
                    withAsterisk={true}
                    required={true}
                    data={[
                      "Yes – ($95 to be added to conference registration)",
                      "No",
                    ]}
                    transitionProps={{
                      transition: "pop-top-left",
                      duration: 80,
                      timingFunction: "ease",
                    }}
                  />
                </div>
                <div>
                  <Flex style={{ wordBreak: "break-word" }} gap={"4rem"}>
                    <Text style={{ maxWidth: "30rem" }}>
                      Your full Conference Registration includes the TRI
                      Networking Dinner Event on Monday, June 10th. Will you be
                      bringing a guest to the Event?
                      <Text
                        style={{
                          color: "red",
                          marginLeft: "0.1rem",
                          display: "inline-block",
                        }}
                      >
                        *
                      </Text>
                    </Text>
                    <Flex gap={"1rem"} justify={"center"}>
                      <button
                        type="button"
                        className={`registration-form-nrs-button${
                          btn == "yes" ? "-active" : ""
                        }`}
                        onClick={() => {
                          setBtn("yes");
                        }}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className={`registration-form-nrs-button${
                          btn == "no" ? "-active" : ""
                        }`}
                        onClick={() => {
                          setBtn("no");
                        }}
                      >
                        No
                      </button>
                    </Flex>
                  </Flex>
                </div>

                <div>
                  <Flex justify={"space-between"}>
                    <Text style={{ color: "gray" }}>Subtotal</Text>
                    <Text style={{ color: "gray" }}>${price}</Text>
                  </Flex>
                  <hr style={{ border: "1px solid lightgray" }} />
                </div>
                <div>
                  <Flex justify={"space-between"}>
                    <Flex direction={"column"}>
                      <Text style={{ color: "gray" }}>5% GST</Text>
                      <Text style={{ color: "gray" }}>
                        (Canadian Goods & Services Tax applicable for all
                        attendees)
                      </Text>
                    </Flex>
                    <Text style={{ color: "gray" }}>${price * 0.05}</Text>
                  </Flex>
                  <hr style={{ border: "1px solid lightgray" }} />
                </div>
                <div>
                  <Flex justify={"space-between"}>
                    <Text></Text>
                    <Flex>
                      <Text style={{ color: "gray", marginRight: "0.5rem" }}>
                        Total (CAD)
                      </Text>
                      <Text>${price * 1.05}</Text>
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            ),
            2: (
              <Flex
                direction={"column"}
                className="registration-form-nrs-flex-2"
              >
                <RegistrationAndFees />
                <PaymentFormPayment />
                {/* <Payment title={apiEndPoint.api} />
                <PayPalPayment price={paymentTotal.total.toString()} /> */}
              </Flex>
            ),
          }[page]
        }

        <Flex justify={"space-between"}>
          <Button
            onClick={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
            disabled={page == 0}
          >
            PREV
          </Button>
          <Button
            onClick={() => {
              if (page < 2) {
                setPage(page + 1);
              }
            }}
            disabled={page == 2}
          >
            NEXT
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default RegistrationFormNRS;
