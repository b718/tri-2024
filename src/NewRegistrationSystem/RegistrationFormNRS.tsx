import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./RegistrationFormNRS.css";
import { Button, Checkbox, Flex, Loader, Text, TextInput } from "@mantine/core";
import Payment from "../Payment-Stripe/Payment";
import PayPalPayment from "../PayPal/PayPalPayment";
import { ButtonClickedContext, NavBarContext } from "../App";
import useWindowDimensions from "../Components/useWindowsDimensions";
import ProgressBar from "react-customizable-progressbar";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface PaymentCheckingInterface {
  paymentStatus: any;
  setPaymentStatus: Function;
}

export const paymentCheckingObject = createContext<PaymentCheckingInterface>({
  paymentStatus: {},
  setPaymentStatus: () => {},
});

const RegistrationFormNRS = () => {
  const buttonClickedContext = useContext(ButtonClickedContext);
  const snapTitle = useRef<HTMLDivElement>(null);
  const fontSize = "0.87rem";

  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;

    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };

  const PaymentRef = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();

  const [paymentStatus, setPaymentStatus] = useState<any>("");

  //PageInfo
  const [page, setPage] = useState<number>(0);

  //Contact Info
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [profession, setProfession] = useState<any>("");
  const [otherProfession, setOtherProfession] = useState<any>("");
  const handleProfession = (event: SelectChangeEvent) => {
    setProfession(event.target.value as string);
  };

  useEffect(() => {
    console.log(profession);
  }, [profession]);
  const [org, setOrg] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addressType, setAddressType] = useState<any>("");
  const handleAddressType = (event: SelectChangeEvent) => {
    setAddressType(event.target.value as string);
  };

  const [street, setStreet] = useState("");
  const [state, setstate] = useState("");
  const [suite, setSuite] = useState("");

  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [osName, setOsName] = useState("");
  const [osPhone, setOsPhone] = useState("");
  const [osEmail, setOsEmail] = useState("");

  const [ofsName, setOfsName] = useState("");
  const [ofsPhone, setOfsPhone] = useState("");
  const [ofsEmail, setOfsEmail] = useState("");

  const checkContact = () => {
    return (
      title.length > 0 &&
      first.length > 0 &&
      last.length > 0 &&
      org.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      addressType &&
      street.length > 0 &&
      state.length > 0 &&
      postal.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      osName.length > 0 &&
      osPhone.length > 0 &&
      osEmail.length > 0 &&
      ofsName.length > 0 &&
      ofsPhone.length > 0 &&
      ofsEmail.length > 0
    );
  };

  //TUA Info
  const [communicationConsent, setCommunicationConsent] = useState(false);
  const [conferenceParticipation, setConferenceParticipation] = useState(false);
  const [releaseInfo, setReleaseInfo] = useState(false);

  const checkTUA = () => {
    return communicationConsent && conferenceParticipation;
  };

  //Ticket Types
  const [ticketType, setTicketType] = useState<any>("");
  const handleTicketType = (event: SelectChangeEvent) => {
    setTicketType(event.target.value as string);
  };
  const [price, setPrice] = useState(0);
  const [guest, setGuest] = useState<any>("");
  const handleGuest = (event: SelectChangeEvent) => {
    setGuest(event.target.value as string);
  };

  const [dietaryMain, setDietaryMain] = useState("");
  const [dietaryGuest, setDietaryGuest] = useState("");

  const checkTicket = () => {
    return ticketType && price > 0 && guest;
  };

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
        setPrice(1 + guestHelper());
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
        return 95.0;
      case values[1]:
        return 0.0;
      default:
        return 0.0;
    }
  };

  const nextDisabler = () => {
    if (page == 0 && checkContact()) {
      if (profession === "Other" && !(otherProfession.length > 0)) {
        return true;
      }

      return false;
    } else if (page == 1 && checkTicket()) {
      return false;
    } else if (page == 2 && checkTUA()) {
      return false;
    } else if (
      page == 3 &&
      (paymentStatus === "done-stripe" || paymentStatus === "done-pp")
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    scrollToSection(snapTitle);
  }, [page]);

  const [loading, setLoading] = useState("start");

  const FormSubmit = async (e: any) => {
    e.preventDefault();

    const currentDate = new Date();
    const options = { timeZone: "America/Los_Angeles" };
    const pstDate = currentDate.toLocaleString("en-US", options);

    const splitData = paymentStatus.split("-");
    const NewPaymentStatus = "Successful through " + splitData[1];

    let objectProfession = profession;

    if (profession === "Other") {
      objectProfession = otherProfession;
    }
    const RegistrationObject = {
      contactInfo: {
        title: title,
        first: first,
        last: last,
        profession: objectProfession,
        org: org,
        email: email,
        phone: phone,
        addressType: addressType,
        street: street,
        state: state,
        suite: suite,
        postal: postal,
        city: city,
        country: country,
      },
      ticketInfo: {
        ticketType: ticketType,
        price: price,
        gst: (price * 0.05).toFixed(2),
        guest: guest,
        paymentStatus: NewPaymentStatus,
        date: pstDate,
      },
      dietInfo: {
        mainContact: dietaryMain,
        guestContact: dietaryGuest,
      },
      tua: {
        communicationConsent: communicationConsent,
        conferenceParticipation: conferenceParticipation,
        releaseInfo: releaseInfo,
      },
      onSiteContact: {
        name: osName,
        phone: osPhone,
        email: osEmail,
      },
      offSiteContact: {
        name: ofsName,
        phone: ofsPhone,
        email: ofsEmail,
      },
    };
    setLoading("loading");
    const x = await fetch(
      "https://tri-2024-back-end.onrender.com/submit-registration-form",
      // "http://localhost:3001/submit-registration-form",
      {
        method: "POST",
        body: JSON.stringify({
          RegistrationObject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      setLoading("end");
    });

    //ContactInfo
    setTitle("");
    setFirst("");
    setLast("");
    setProfession("");
    setOrg("");
    setEmail("");
    setPhone("");
    setAddressType("");
    setStreet("");
    setstate("");
    setSuite("");
    setPostal("");
    setCity("");
    setCountry("");

    //Contacts
    setOfsName("");
    setOfsEmail("");
    setOfsPhone("");
    setOsName("");
    setOsEmail("");
    setOsPhone("");

    //Ticket
    setTicketType("");
    setPrice(0);
    setGuest("");

    //Payment
    setPaymentStatus("");
  };

  return (
    <paymentCheckingObject.Provider value={{ paymentStatus, setPaymentStatus }}>
      <div
        ref={PaymentRef.innerRegistrationRef}
        style={{
          display: `${buttonClickedContext.buttonClicked ? "" : "none"}`,
        }}
      >
        <form className="registration-form-nrs-main-div" onSubmit={FormSubmit}>
          <Text className="registration-form-nrs-main-text">
            <div ref={snapTitle}></div>
            TRI 2024 Registration
          </Text>
          <Flex
            justify={"space-between"}
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            {
              {
                0: (
                  <Flex direction={"column"} style={{ fontSize: "0.7rem" }}>
                    <Text>Attendee Contact Information</Text>
                    <Text>*Registration is NOT transferable</Text>
                  </Flex>
                ),
                1: (
                  <Flex direction={"column"} style={{ fontSize: "0.7rem" }}>
                    <Text>Registration Options</Text>
                  </Flex>
                ),
                2: (
                  <Flex direction={"column"} style={{ fontSize: "0.7rem" }}>
                    <Text>
                      Participation, Cancellation, Refund, and Privacy Policies
                    </Text>
                  </Flex>
                ),
                3: (
                  <Flex direction={"column"} style={{ fontSize: "0.7rem" }}>
                    <Text>Payment Options</Text>
                  </Flex>
                ),
              }[page]
            }
            {
              {
                0: (
                  <ProgressBar
                    progress={25}
                    radius={15}
                    fillColor={"white"}
                    strokeWidth={2}
                    strokeColor="#5d9cec"
                    trackStrokeWidth={2}
                    pointerRadius={5}
                    pointerStrokeWidth={2}
                    pointerStrokeColor="#5d9cec"
                  />
                ),
                1: (
                  <ProgressBar
                    progress={50}
                    radius={15}
                    fillColor={"white"}
                    strokeWidth={2}
                    strokeColor="#5d9cec"
                    trackStrokeWidth={2}
                    pointerRadius={5}
                    pointerStrokeWidth={2}
                    pointerStrokeColor="#5d9cec"
                  />
                ),
                2: (
                  <ProgressBar
                    progress={75}
                    radius={15}
                    fillColor={"white"}
                    strokeWidth={2}
                    strokeColor="#5d9cec"
                    trackStrokeWidth={2}
                    pointerRadius={5}
                    pointerStrokeWidth={2}
                    pointerStrokeColor="#5d9cec"
                  />
                ),
                3: (
                  <ProgressBar
                    progress={100}
                    radius={15}
                    fillColor={"white"}
                    strokeWidth={2}
                    strokeColor="#5d9cec"
                    trackStrokeWidth={2}
                    pointerRadius={0}
                    pointerStrokeWidth={2}
                    pointerStrokeColor="#5d9cec"
                  />
                ),
                // <progress value={1} />
              }[page]
            }
          </Flex>

          {
            {
              0: (
                <Flex
                  direction={"column"}
                  gap={"1rem"}
                  style={{
                    marginTop: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
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
                    <Flex gap={"md"} wrap={"nowrap"}>
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
                    <Text className="">Profession/Attendee Type </Text>

                    {/* <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth size="small">
                        <Select
                          value={profession}
                          onChange={handleProfession}
                          style={{ fontSize: "0.875rem" }}
                        >
                          <MenuItem
                            value={"Advocacy"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Advocacy
                          </MenuItem>
                          <MenuItem
                            value={"Audiology/Hearing"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Audiology/Hearing
                          </MenuItem>
                          <MenuItem
                            value={"Education"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Education
                          </MenuItem>
                          <MenuItem
                            value={"Medicine"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Medicine
                          </MenuItem>
                          <MenuItem
                            value={"Psychology"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Psychology
                          </MenuItem>
                          <MenuItem
                            value={"Research"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Research
                          </MenuItem>
                          <MenuItem
                            value={"Other"}
                            style={{ fontSize: `${fontSize}` }}
                          >
                            Other
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}

                    <select
                      className="registration-form-select"
                      value={profession}
                      onChange={(e) => {
                        setProfession(e.target.value);
                      }}
                    >
                      <option value="" selected disabled></option>
                      <option
                        value={"Advocacy"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Advocacy
                      </option>
                      <option
                        value={"Audiology/Hearing"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Audiology/Hearing
                      </option>
                      <option
                        value={"Education"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Education
                      </option>
                      <option
                        value={"Medicine"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Medicine
                      </option>
                      <option
                        value={"Psychology"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Psychology
                      </option>
                      <option
                        value={"Research"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Research
                      </option>
                      <option
                        value={"Other"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Other
                      </option>
                    </select>

                    {profession === "Other" ? (
                      <TextInput
                        placeholder={"Example: Teacher"}
                        style={{ marginTop: "1rem" }}
                        value={otherProfession}
                        onChange={(e) => {
                          setOtherProfession(e.target.value);
                        }}
                      ></TextInput>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  <div>
                    <Text className="">
                      Affiliation/Organization
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
                      value={org}
                      onChange={(e) => {
                        setOrg(e.target.value);
                      }}
                    />
                    <Text
                      style={{
                        maxWidth: "40rem",
                        wordBreak: "break-word",
                        fontSize: "0.65rem",
                      }}
                    >
                      Name and Affiliation/Organization will appear on nametags.
                    </Text>
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

                    {/* <Select
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
                    /> */}

                    {/* <FormControl
                      fullWidth
                      size={"small"}
                      style={{ marginBottom: "1rem" }}
                    >
                      <Select
                        value={addressType}
                        onChange={handleAddressType}
                        style={{ fontSize: "0.875rem" }}
                      >
                        <MenuItem
                          value={"Work"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          Work
                        </MenuItem>
                        <MenuItem
                          value={"Home"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          Home
                        </MenuItem>
                      </Select>
                    </FormControl> */}

                    <select
                      className="registration-form-select"
                      value={addressType}
                      onChange={(e) => {
                        setAddressType(e.target.value);
                      }}
                      style={{ marginBottom: "1rem" }}
                    >
                      <option value="" selected disabled></option>
                      <option value={"Work"}>Work</option>
                      <option value={"Home"}>Home</option>
                    </select>

                    <Flex gap={"1rem"} direction={"column"} justify={"center"}>
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

                  <div>
                    <Flex
                      gap={"1rem"}
                      direction={"column"}
                      justify={"center"}
                      style={{ marginBottom: "1rem" }}
                    >
                      <Flex
                        gap={"1rem"}
                        direction={"column"}
                        justify={"center"}
                      >
                        <Text>
                          Emergency On-Site Contact (name, phone number, email){" "}
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
                          required={true}
                          placeholder="Name"
                          value={osName}
                          onChange={(e) => setOsName(e.target.value)}
                        />
                        <TextInput
                          required={true}
                          placeholder="Phone Number"
                          value={osPhone}
                          onChange={(e) => setOsPhone(e.target.value)}
                        />
                        <TextInput
                          required={true}
                          placeholder="Email"
                          value={osEmail}
                          onChange={(e) => setOsEmail(e.target.value)}
                        />
                      </Flex>
                      <Flex
                        gap={"1rem"}
                        direction={"column"}
                        justify={"center"}
                      >
                        <Text>
                          Emergency Off-Site Contact (name, phone number, email)
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
                          required={true}
                          placeholder="Name"
                          value={ofsName}
                          onChange={(e) => setOfsName(e.target.value)}
                        />
                        <TextInput
                          required={true}
                          placeholder="Phone Number"
                          value={ofsPhone}
                          onChange={(e) => setOfsPhone(e.target.value)}
                        />
                        <TextInput
                          required={true}
                          placeholder="Email"
                          value={ofsEmail}
                          onChange={(e) => setOfsEmail(e.target.value)}
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
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
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

                    {/* <FormControl fullWidth size="small">
                      <Select
                        value={ticketType}
                        onChange={handleTicketType}
                        style={{ fontSize: "0.875rem" }}
                      >
                        <MenuItem
                          value={"Early Bird (closes 1 March 2024) $825 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          Early Bird (closes 1 March 2024) $825 CAD
                        </MenuItem>
                        <MenuItem
                          value={"Regular Rate (closes 8 June 2024) $975 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          Regular Rate (closes 8 June 2024) $975 CAD
                        </MenuItem>
                        <MenuItem
                          value={"On-site Registration $1475 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          On-site Registration $1475 CAD
                        </MenuItem>
                        <MenuItem
                          value={
                            "Student Rate (requires proof of enrolment – closes 8 June 2024) $625 CAD"
                          }
                          style={{ fontSize: `${fontSize}` }}
                        >
                          Student Rate (requires proof of enrolment – closes 8
                          June 2024) $625 CAD
                        </MenuItem>
                        <MenuItem
                          value={"One day, June 10 only $525 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          One day, June 10 only $525 CAD
                        </MenuItem>
                        <MenuItem
                          value={"One day, June 11 only $525 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          One day, June 11 only $525 CAD
                        </MenuItem>
                        <MenuItem
                          value={"One day, June 12 only $525 CAD"}
                          style={{ fontSize: `${fontSize}` }}
                        >
                          One day, June 12 only $525 CAD
                        </MenuItem>
                      </Select>
                    </FormControl> */}

                    <select
                      className="registration-form-select"
                      value={ticketType}
                      onChange={(e) => {
                        setTicketType(e.target.value);
                      }}
                    >
                      <option value="" selected disabled></option>
                      <option
                        value={"Early Bird (closes 1 March 2024) $825 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Early Bird (closes 1 March 2024) $825 CAD
                      </option>
                      <option
                        value={"Regular Rate (closes 8 June 2024) $975 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Regular Rate (closes 8 June 2024) $975 CAD
                      </option>
                      <option
                        value={"On-site Registration $1475 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        On-site Registration $1475 CAD
                      </option>
                      <option
                        value={
                          "Student Rate (requires proof of enrolment – closes 8 June 2024) $625 CAD"
                        }
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Student Rate (requires proof of enrolment – closes 8
                        June 2024) $625 CAD
                      </option>
                      <option
                        value={"One day, June 10 only $525 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        One day, June 10 only $525 CAD
                      </option>
                      <option
                        value={"One day, June 11 only $525 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        One day, June 11 only $525 CAD
                      </option>
                      <option
                        value={"One day, June 12 only $525 CAD"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        One day, June 12 only $525 CAD
                      </option>
                    </select>

                    <Text
                      style={{
                        maxWidth: "40rem",
                        wordBreak: "break-word",
                        fontSize: "0.65rem",
                      }}
                    >
                      Full Conference Registration includes daily conference
                      lunch and the TRI Welcome Dinner on Monday 10th June.
                    </Text>
                  </div>

                  {/* <div>
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
                  </div> */}

                  <div>
                    <Text className="">
                      Will you be bringing a guest to the TRI Welcome Dinner?
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

                    {/* <FormControl fullWidth size="small"> */}
                    {/* <Select
                      value={guest}
                      onChange={handleGuest}
                      style={{ fontSize: "0.875rem" }}
                    >
                      <MenuItem
                        value={
                          "Yes – ($95 to be added to conference registration)"
                        }
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Yes – ($95 to be added to conference registration)
                      </MenuItem>
                      <MenuItem
                        value={"No"}
                        style={{ fontSize: `${fontSize}` }}
                      >
                        No
                      </MenuItem>
                    </Select> */}
                    {/* </FormControl> */}

                    <select
                      className="registration-form-select"
                      value={guest}
                      onChange={(e) => {
                        setGuest(e.target.value);
                      }}
                    >
                      <option value="" selected disabled></option>
                      <option
                        value={
                          "Yes – ($95 to be added to conference registration)"
                        }
                        style={{ fontSize: `${fontSize}` }}
                      >
                        Yes – ($95 to be added to conference registration)
                      </option>
                      <option value={"No"} style={{ fontSize: `${fontSize}` }}>
                        No
                      </option>
                    </select>

                    <Text className="" style={{ marginTop: "1rem" }}>
                      Dietary Requirements
                    </Text>
                    <TextInput
                      value={dietaryMain}
                      onChange={(e) => {
                        setDietaryMain(e.target.value);
                      }}
                    />
                    <Text
                      style={{
                        maxWidth: "40rem",
                        wordBreak: "break-word",
                        fontSize: "0.65rem",
                      }}
                    >
                      This applies to lunches and to the dinner. Please note
                      restrictions will be accommodated if possible*
                    </Text>

                    {guest ===
                    "Yes – ($95 to be added to conference registration)" ? (
                      <div style={{ marginTop: "1rem" }}>
                        {" "}
                        <Text className="">Dietary Requirements - Guest</Text>
                        <TextInput
                          value={dietaryGuest}
                          onChange={(e) => {
                            setDietaryGuest(e.target.value);
                          }}
                        />
                        <Text
                          style={{
                            maxWidth: "40rem",
                            wordBreak: "break-word",
                            fontSize: "0.65rem",
                          }}
                        >
                          This applies to lunches and to the dinner. Please note
                          restrictions will be accommodated if possible*
                        </Text>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  {/* <div>
                    <Flex style={{ wordBreak: "break-word" }} gap={"4rem"}>
                      <Text className="registration-form-nrs-dinner-text">
                        Your full Conference Registration includes the TRI
                        Networking Dinner Event on Monday, June 10th. Will you
                        be bringing a guest to the Event?
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
                      <Flex
                        gap={"1rem"}
                        justify={"center"}
                        direction={`${width < 600 ? "column" : "row"}`}
                      >
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
                  </div> */}

                  <div>
                    <Flex
                      justify={"space-between"}
                      style={{ marginTop: "0.5rem" }}
                    >
                      <Text style={{ color: "gray" }}>Subtotal</Text>
                      <Text style={{ color: "gray" }}>${price.toFixed(2)}</Text>
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
                      <Text style={{ color: "gray" }}>
                        ${(price * 0.05).toFixed(2)}
                      </Text>
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
                        <Text>${(price * 1.05).toFixed(2)}</Text>
                      </Flex>
                    </Flex>
                  </div>
                </Flex>
              ),
              2: (
                <Flex
                  direction={"column"}
                  style={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                  gap={"0.5rem"}
                >
                  <Flex
                    direction={"column"}
                    className="registration-form-nrs-flex-3"
                    gap={"0.5rem"}
                  >
                    <Text style={{ fontSize: "1rem" }}>
                      Terms of Use Agreement
                    </Text>
                    <Text>
                      The Tinnitus Research Initiative-2024 Vancouver Conference
                      (<b>“Conference”</b> and/or <b>“TRI-2024 Conference”</b>)
                      is managed and implemented by the Vancouver Tinnitus &
                      Hyperacusis Clinic, Inc. (“VTHC”) its staff, designates,
                      and agents (“collectively known as <b>“TRI-2024”</b>).
                      TRI-2024 and VTHC shall refer interchangeably to the VTHC
                      and the staff responsible for planning and implementing
                      the Conference.
                    </Text>

                    <Text>
                      The TRI-2024 Conference will be held in designated areas (
                      <b>“Conference Facility”</b>) at the University of British
                      Columbia Robson Square (<b>“UBC Robson”</b>) and/or any
                      other venues designated, from time to time, by TRI-2024,
                      from June 10, 2024 to June 12, 2024.
                    </Text>

                    <Text style={{ fontWeight: "bold" }}>
                      The headings and bolded words in this Registration
                      agreement are solely for convenience of reference and
                      shall not be used for purposes of interpreting or
                      construing the provisions thereof.
                    </Text>

                    <Text>
                      Where appropriate, “Attendee” and “Participant” shall be
                      used interchangeably and refer to the Conference Attendee
                      registered in the TRI-2024 conference system and/or, where
                      applicable, any individual registered to accompany the
                      Conference Attendee to any designated Conference function.
                    </Text>

                    <Text>
                      These Terms and Conditions may be amended at any time by
                      TRI-2024 at its sole discretion, and all amendments shall
                      be binding upon the Attendee upon publication or issuance
                      of notice. Any area not specifically covered in these
                      terms and conditions is subject to the sole discretion and
                      decision of TRI-2024, such discretion and decision shall
                      be final. Terms and Conditions and all other guidelines
                      shall be available to the Attendee on the TRI-2024
                      Registration receipt and on the TRI-2024 website. The
                      TRI-2024 website shall be deemed to hold the current
                      version of the in-effect Terms and Conditions.
                    </Text>

                    <Text>
                      <b>Participation:</b> Participation by Attendee in any and
                      all Conference events/functions shall be governed by these
                      Terms and Conditions and/or any subsequent amendments
                      therein. TRI-2024 is managed using the conference app
                      Whova (
                      <a href="https://whova.com/" target="_blank">
                        www.Whova.com
                      </a>
                      ). With the exception of those Attendees who are
                      Networking Dinner Event Guests, all Attendees must be
                      registered in Whova to access the live conference
                      schedule, event polling, and other functions used by
                      TRI-2024 to manage Attendee programs and events.
                    </Text>

                    <Text>
                      Notwithstanding any other term or condition in these Terms
                      and Conditions, the Participant hereby acknowledges and
                      accepts that TRI-2024 may, at its sole discretion, limit,
                      terminate, or cancel the Participant’s access, in whole or
                      in part, to the Conference or any Conference Function
                      where the Participant’s actions, conduct, or effect on any
                      aspect of the Conference is deemed to be inappropriate,
                      deemed to be disruptive, or deemed to pose a risk to any
                      other Attendee or aspect of the Conference. Such
                      limitation, termination, or cancellation of the
                      Participant’s access, for any reason whatsoever, shall not
                      be deemed a waiver of any of TRI-2024’s other rights and
                      remedies.
                    </Text>

                    <Text>
                      <b>Registration and Badges:</b> All Attendees must be
                      registered and wear the applicable badge(s) to access the
                      Conference Facilities and Events/ Functions.
                    </Text>

                    <Text>
                      <b>Photography, Recording, and any Other Media:</b> The
                      Attendee may not engage in photography, video production
                      and/or graphic reproduction of any conference materials
                      unless authorization is obtained from the owner/presenter
                      of that material. Commercial use of photographs of
                      attendees is prohibited unless written consent is given by
                      the attendee and by TRI-2024. Personal photography is
                      permitted at social functions. Audio, video and digital
                      recordings, live streaming or broadcasting, and
                      photography whether for personal or commercial use, are
                      all strictly prohibited during any Conference sessions.
                    </Text>

                    <Text>
                      The Attendee hereby authorizes TRI-2024 to use any
                      photographs, video, social media communications, graphic
                      reproductions of materials, and any other materials
                      TRI-2024 deems appropriate to create/promote Conference
                      communications and engagement prior-to, during, and after
                      the Conference. The Attendee hereby releases to TRI-2024
                      any and all rights for such communications and engagement
                      use. TRI-2024 will not sell or otherwise make available
                      for commercial sale or licensing any of the materials
                      referenced above.
                    </Text>

                    <Text>
                      <b>Security</b>: UBC Robson, TRI-2024, official
                      contractors, or any Conference Services provided by UBC or
                      TRI-2024 will NOT be held responsible for bodily injury,
                      theft or damage to the Attendee’s personal, commercial, or
                      academic property. All Attendees are responsible for
                      safe-guarding their own property.
                    </Text>

                    <Text>
                      <b>Refunds</b>: All requests for registration cancellation
                      must be received via email on or before{" "}
                      <b>4:00PM Pacific May 31st , 2024 </b>in order for the
                      Participant to be eligible to receive a refund, less a{" "}
                      <b>15%</b>
                      administration fee. If a registration cancellation request
                      is received after <b>4:00PM Pacific on May 31st, 2024</b>,
                      the Participant will not be eligible for a refund. There
                      are no exceptions to this policy.
                    </Text>

                    <Text>
                      <b>Cancellation (Force Majeure):</b> TRI-2024 may postpone
                      or terminate the Conference or any of its obligations
                      hereunder without penalty in the event the designated
                      Conference facilities at UBC Robson becomes unavailable,
                      is destroyed or damaged, or if it becomes inadvisable,
                      impracticable, illegal, or impossible to hold the
                      Conference as scheduled due to any event beyond the
                      control of TRI-2024 or the UBC Robson. In such an event,
                      Participant hereby waives any and all damages and claims
                      for damages and agrees that the sole liability of TRI-2024
                      shall be to refund to the Participant the full
                      registration fee paid by the Participant to register for
                      the Conference.
                    </Text>

                    <Text>
                      <b>Indemnification and Liability:</b> The Participant
                      agrees to indemnify, defend and hold harmless TRI-2024,
                      the UBC Robson, and the City of Vancouver from all losses
                      arising from (a) any violation of any law, regulation or
                      ordinance by the Participant or any associated designated
                      Guest , (b) any failure by the Participant to comply
                      strictly with these Terms, and (c) personal injury or
                      property damage caused by the Participant or any
                      associated designated Guest, except to the extent that
                      such loss or damage is caused by the sole negligence or
                      intentional acts of TRI-2024, the UBC Robson, the City of
                      Vancouver: THE MAXIMUM LIABILITY OF TRI-2024 AND THE UBC
                      ROBSON FOR ANY REASON SHALL BE LIMITED TO THE AMOUNT OF
                      REGISTRATION FEES PAID BY PARTICIPANT. IN NO EVENT SHALL
                      TRI-2024 BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL,
                      PUNITIVE, OR INCIDENTAL DAMAGES, EVEN IF ADVISED OF THE
                      POSSIBILITY OF SUCH DAMAGES.  TRI-2024 MAKES NO WARRANTIES
                      OR REPRESENTATIONS, EXPRESS OR IMPLIED, REGARDING THE
                      CONFERENCE OR THE MATERIALS PRESENTED THEREIN, INCLUDING,
                      WITHOUT LIMITATION, WARRANTIES OR MERCHANTABILITY OR
                      FITNESS FOR A PARTICULAR PURPOSE.
                    </Text>
                    <Text>
                      <b>No Waiver:</b>  If any part of any provision of these
                      Terms or any subsequent amendments shall be invalid or
                      unenforceable in any respect, such part shall be
                      ineffective to the extent of such invalidity or
                      unenforceability only, without in any way affecting the
                      remaining parts of such provisions of these Terms.
                    </Text>

                    <Text>
                      <b>Dispute Resolution; Governing Law and Venue:</b> These
                      Terms and any subsequent amendments shall be construed,
                      interpreted and governed by the laws of the Province of
                      British Columbia, Canada.
                    </Text>

                    <Text>
                      Any controversy or claim arising out of or relating to
                      these Terms, or breach thereof, shall first be discussed
                      informally for an amicable settlement between the
                      Participant and TRI-2024. Should that not succeed the
                      parties shall attempt to resolve the matter by mediation.
                      Should mediation not resolve the matter, it shall be
                      settled by binding arbitration in the Province of British
                      Columbia, Canada by a single arbitrator pursuant to the
                      Arbitration Act RSBC 1996 as amended, or any successor
                      legislation. The arbitrator’s decision on all issues or
                      matters submitted to the arbitrator for resolution shall
                      be conclusive, final and bind the parties. The arbitrator
                      shall determine who shall bear the costs of arbitration or
                      in what proportions the costs shall be borne. The parties
                      hereto agree that the right to a trial by jury shall be
                      waived regarding any and all claims related to this
                      Conference. The parties hereto further agree that any
                      mediation meetings and/or trials, as the case may be,
                      shall all be situated in the region known, generally, as
                      the Lower Mainland, in the Province of British Columbia,
                      Canada.
                    </Text>

                    <Text>
                      <b>
                        Privacy Policy (updated and effective as of December 27,
                        2023):
                      </b>{" "}
                      TRI-2024 operates under The Ten Privacy Principles
                      outlined by the Canadian Standard Association in its Model
                      Code for the Protection of Personal Information. “Personal
                      Information” means information about an identifiable
                      individual. This may include, without limitation, the
                      individual’s name, home address, age, income, credit
                      history or other financial information, credit card
                      information, personal preferences and other information
                      about his or her family. Personal Information does not
                      include the name, title, business address or telephone
                      number of an employee of an organization. Canada’s
                      Personal Information Protection and Electronic Documents
                      Act (“PIPEDA”), includes the Ten Privacy Principles
                      outlined in the Canadian Standards Association Model Code
                      for the Protection of Personal Privacy. <br />
                      Those ten principles are:
                      <ol
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <li>
                          Accountability: An organization is responsible for
                          personal information under its control and shall
                          designate an individual or individuals who are
                          accountable for the organization’s compliance with the
                          following principles.
                        </li>
                        <li>
                          Identifying Purposes: The purposes for which personal
                          information is collected shall be identified by the
                          organization at or before the time the information is
                          collected.
                        </li>
                        <li>
                          Consent: The knowledge and consent of the individual
                          are required for the collection, use or disclosure of
                          personal information, except when inappropriate.
                        </li>
                        <li>
                          Limiting Collection: The collection of personal
                          information shall be limited to that which is
                          necessary for the purposes identified by the
                          organization. Information shall be collected by fair
                          and lawful means.
                        </li>
                        <li>
                          {" "}
                          Limiting Use, Disclosure, and Retention: Personal
                          information shall not be used or disclosed for
                          purposes other than those for which it was collected,
                          except with the consent of the individual or as
                          required by the law. Personal information shall be
                          retained only as long as necessary for fulfillment of
                          those purposes.
                        </li>
                        <li>
                          {" "}
                          Accuracy: Personal information shall be as accurate,
                          complete, and up-to-date as is necessary for the
                          purposes for which it is to be used.
                        </li>
                        <li>
                          {" "}
                          Safeguards: Personal information shall be protected by
                          security safeguards appropriate to the sensitivity of
                          the information.
                        </li>
                        <li>
                          Openness: An organization shall make readily available
                          to individuals specific information about its policies
                          and practices relating to the management of personal
                          information.
                        </li>
                        <li>
                          {" "}
                          Individual Access: Upon request, an individual shall
                          be informed of the existence, use and disclosure of
                          his or her personal information and shall be given
                          access to that information. An individual shall be
                          able to challenge the accuracy and completeness of the
                          information and have it amended as appropriate.
                        </li>
                        <li>
                          Challenging Compliance: An individual shall be able to
                          address a challenge concerning compliance with the
                          above principles to the designated individual or
                          individuals for the organization’s compliance.
                        </li>
                      </ol>
                      Like all other organizations, TRI-2024 is obliged to keep
                      Personal Information confidential except under the
                      following circumstances:
                    </Text>

                    <Text>(I) WHEN AUTHORIZED BY YOU</Text>
                    <Text>
                      The products and services offered by TRI-2024 require us
                      to obtain Personal Information about you in order to
                      deliver the products and services you have engaged us to
                      provide. We will always operate on the basis of consent
                      from you first. We will never use any information for
                      purposes other than those that we have told you about. You
                      may withdraw your consent at any time, subject to any
                      legal implications (which we will inform you about). In
                      some cases, if you do not consent to our use or disclosure
                      of certain Personal Information, we may be unable to
                      continue to provide all or part of the products and/or
                      services that you have requested or for which you are
                      registered.
                    </Text>
                    <Text>(II) WHEN REQUIRED BY LAW</Text>
                    <Text>
                      The type of information we are legally required to
                      disclose usually relates to government tax reporting
                      requirements. In some cases, however, such as under a
                      court order, we may be required to disclose certain
                      information to persons specified in the court order. We
                      will only provide the specific information requested and
                      only upon being satisfied that the authorities have
                      legitimate grounds to request the information.
                    </Text>
                    <Text>(III) WHEN PERMITTED BY LAW</Text>
                    <Text>
                      The legislation has provided certain situations where
                      TRI-2024 is legally permitted to disclose Personal
                      Information without your consent. Examples include
                      situations involving the collection of debt in arrears,
                      medical emergencies, or suspicion of illegal activities.
                    </Text>
                    <Text>
                      All hard-copy, aged records that are to be destroyed or
                      disposed-of are shredded/destroyed in compliance with
                      Section 35(2) of the Province of British Columbia’s
                      Personal Information Protection Act (PIPA) – “An
                      organization must destroy its documents containing
                      personal information, or remove the means by which the
                      personal information can be associated with particular
                      individuals, as soon as it is reasonable to assume that
                      (a) the purpose for which that personal information was
                      collected is no longer being served by retention of that
                      personal information, and (b) retention is no longer
                      necessary for legal or business purposes”.
                    </Text>

                    <Text>
                      <b>EU Data Subject Rights:</b> If you are a resident of
                      the European Economic Area (EEA), you have the right to:
                      (a) request access to your Personal Data and rectification
                      of inaccurate Personal Data; (b) request erasure of your
                      Personal Data; (c) request restrictions on the processing
                      of your Personal Data; (d) object to processing your
                      Personal Data; and/or (e) the right to data portability
                      ("collectively, "Requests"). We can only process Requests
                      from a user whose identity has been verified. To verify
                      your identity, please provide your email address when you
                      make a request. For more information about how to get
                      access to Personal Data and for exercising your rights,
                      you can submit a request to tri2024Vancouver@gmail.com and
                      indicate "I am an EU resident and would like to exercise
                      my individual rights" option. You also have the right to
                      lodge a complaint with a supervisory authority.
                    </Text>
                  </Flex>

                  <Flex
                    direction={"column"}
                    align={"flex-start"}
                    gap={"1rem"}
                    style={{
                      maxWidth: "40rem",
                      marginTop: "1rem",
                      color: "#0482c8",
                    }}
                  >
                    <Flex justify={"center"} align={"center"} gap={"1rem"}>
                      <Checkbox
                        checked={communicationConsent}
                        onChange={(event) =>
                          setCommunicationConsent(event.currentTarget.checked)
                        }
                      />
                      <Text className="" style={{ fontSize: "0.7rem" }}>
                        Having read and understood the Participation,
                        Cancellation, Refund, and Privacy Policies, I hereby
                        accept and agree that these terms are a fundamental
                        condition of my Conference participation.
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
                    </Flex>

                    <Flex justify={"center"} align={"center"} gap={"1rem"}>
                      <Checkbox
                        checked={conferenceParticipation}
                        required={true}
                        onChange={(event) =>
                          setConferenceParticipation(
                            event.currentTarget.checked
                          )
                        }
                      />
                      <Text className="" style={{ fontSize: "0.7rem" }}>
                        I hereby consent to the collection and use of my
                        Personal Information for the purposes of communications
                        for and about the Conference.
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
                    </Flex>

                    <Flex justify={"center"} align={"center"} gap={"1rem"}>
                      <Checkbox
                        checked={releaseInfo}
                        onChange={(event) =>
                          setReleaseInfo(event.currentTarget.checked)
                        }
                      />
                      <Text className="" style={{ fontSize: "0.7rem" }}>
                        I hereby consent to the release of my contact
                        information to TRI for future communications.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ),
              3: (
                <Flex
                  direction={"column"}
                  className="registration-form-nrs-flex-2"
                >
                  {paymentStatus === "done-stripe" ||
                  paymentStatus === "done-pp" ? (
                    <Flex direction={"column"} style={{ margin: "1rem" }}>
                      <Text>
                        Payment Completed For{" "}
                        {ticketType?.substring(0, ticketType.length - 9)}!
                      </Text>
                    </Flex>
                  ) : (
                    <Flex direction={"column"} style={{ margin: "1rem" }}>
                      <Payment title={"stripe-payment"} price={price * 1.05} />
                      <PayPalPayment
                        price={(price * 1.05).toString()}
                        desc={ticketType!}
                      />
                    </Flex>
                  )}
                </Flex>
              ),
            }[page]
          }

          <Flex
            justify={"space-between"}
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            <Button
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              disabled={page == 0}
              style={{ display: `${loading === "end" ? "none" : ""}` }}
            >
              PREV
            </Button>

            {loading === "loading" ? (
              <Loader></Loader>
            ) : loading === "end" ? (
              <Text
                style={{
                  maxWidth: "25rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                Thank you! Your registration for TRI 2024 is complete. You will
                receive a confirmation and receipt in your email inbox shortly.
              </Text>
            ) : (
              <div style={{ display: "none" }}></div>
            )}

            <Button
              onClick={() => {
                if (page < 3) {
                  setPage(page + 1);
                }
              }}
              disabled={nextDisabler()}
              type={page == 3 ? "submit" : "button"}
              style={{ display: `${loading === "end" ? "none" : ""}` }}
            >
              {page == 3 ? "SUBMIT" : "NEXT"}
            </Button>
          </Flex>
        </form>
      </div>
    </paymentCheckingObject.Provider>
  );
};

export default RegistrationFormNRS;
