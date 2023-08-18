import { Flex, Select, Text, TextInput } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import "./AttendeeContactInformation.css";
import { contactObjectContext } from "../../PaymentForm";
const AttendeeContactInformation = () => {
  const [profession, setProfession] = useState("");
  const [professionClicked, setProfessionClicked] = useState(false);
  const [address, setAddress] = useState("");
  const [addressClicked, setAddressClicked] = useState(false);

  const [title, setTitle] = useState("");
  const [titleClicked, setTitleClicked] = useState(false);
  const [first, setFirst] = useState("");
  const [firstClicked, setFirstClicked] = useState(false);
  const [last, setLast] = useState("");
  const [lastClicked, setLastClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailClicked, setEmailClicked] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneNumClicked, setPhoneNumClicked] = useState(false);
  const [affliation, setAffliation] = useState("");

  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressClicked, setStreetAddressClicked] = useState(false);

  const [city, setCity] = useState("");
  const [cityClicked, setCityClicked] = useState(false);

  const [province, setProvince] = useState("");
  const [provinceClicked, setProvinceClicked] = useState(false);

  const [postal, setPostal] = useState("");
  const [postalClicked, setPostalClicked] = useState(false);

  const [country, setCountry] = useState("");
  const [countryClicked, setCountryClicked] = useState(false);

  const paymentFormContactObject = useContext(contactObjectContext);

  useEffect(() => {
    let newObject = {
      name: title + "." + " " + first + " " + last,
      profession: profession,
      email: email,
      phoneNum: phoneNum,
      affliation: affliation,
      streetAddress: streetAddress,
      city: city,
      province: province,
      postal: postal,
      country: country,
    };

    paymentFormContactObject.setContactObject(newObject);
  }, [
    profession,
    address,
    title,
    first,
    last,
    email,
    phoneNum,
    affliation,
    streetAddress,
    city,
    province,
    postal,
    country,
  ]);
  const clickChecker = (bool: boolean, str: string) => {
    if (bool) {
      return str.length > 0;
    } else {
      return true;
    }
  };

  const phoneChecker = (bool: boolean, str: string) => {
    if (bool) {
      return str.length >= 10;
    } else {
      return true;
    }
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const emailClickChecker = () => {
    if (emailClicked) {
      return email.length > 0 && validateEmail(email);
    } else {
      return true;
    }
  };
  return (
    <>
      <Flex direction={"column"} className="attendee-contact-info-main-flex">
        <div>
          <Flex>
            <Text className="attendee-contact-info-main-text">Name</Text>
            <Text style={{ color: "red", marginLeft: "0.5rem" }}>*</Text>
          </Flex>
          <Flex gap={"md"}>
            <TextInput
              label="Title"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
              value={title}
              onChange={(e) => {
                setTitle(e.currentTarget.value);
              }}
              onClick={() => {
                setTitleClicked(true);
              }}
              error={
                clickChecker(titleClicked, title) ? "" : "This is required."
              }
            ></TextInput>
            <TextInput
              label="First"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
              value={first}
              onChange={(e) => {
                setFirst(e.currentTarget.value);
              }}
              onClick={() => {
                setFirstClicked(true);
              }}
              error={
                clickChecker(firstClicked, first) ? "" : "This is required."
              }
            ></TextInput>
            <TextInput
              label="Last"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
              value={last}
              onChange={(e) => {
                setLast(e.currentTarget.value);
              }}
              onClick={() => {
                setLastClicked(true);
              }}
              error={clickChecker(lastClicked, last) ? "" : "This is required."}
            ></TextInput>
          </Flex>
        </div>

        <div className="attendee-contact-information-profession-section">
          <Select
            label="Profession/Attendee Type"
            searchable
            withAsterisk={true}
            onSearchChange={setProfession}
            searchValue={profession}
            nothingFound="No options"
            required={true}
            transitionProps={{
              transition: "pop-top-left",
              duration: 80,
              timingFunction: "ease",
            }}
            onClick={() => {
              setProfessionClicked(true);
            }}
            data={["Audiologist", "Counsellor", "Educator"]}
            className="attendee-contact-info-inputs"
            error={
              clickChecker(professionClicked, profession)
                ? ""
                : "This is required."
            }
          />
          <Text className="attendee-contact-info-italic">
            This will appear on your name badge at the conferece.
          </Text>
        </div>

        <div className="attendee-contact-information-email-section">
          <Flex direction={"column"} gap={"md"}>
            <TextInput
              label="Email"
              withAsterisk
              required={true}
              className="attendee-contact-info-inputs"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              onClick={() => {
                setEmailClicked(true);
              }}
              error={emailClickChecker() ? "" : "Invalid Email."}
            ></TextInput>
            <TextInput
              label="Phone Number"
              withAsterisk
              required={true}
              className="attendee-contact-info-inputs"
              value={phoneNum}
              onChange={(e) => {
                setPhoneNum(e.currentTarget.value);
              }}
              onClick={() => {
                setPhoneNumClicked(true);
              }}
              error={
                phoneChecker(phoneNumClicked, phoneNum)
                  ? ""
                  : "Must be at least 10 digits."
              }
            ></TextInput>
            <TextInput
              label="Affiliation/Organization"
              className="attendee-contact-info-inputs"
              value={affliation}
              onChange={(e) => {
                setAffliation(e.currentTarget.value);
              }}
            ></TextInput>
          </Flex>
        </div>

        <div>
          <Flex direction={"column"} gap={"md"}>
            <Flex style={{ marginTop: "1rem" }}>
              {" "}
              <Text className="attendee-contact-info-main-text">Address</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Flex>
            <Select
              label="My Address Is"
              searchable
              withAsterisk={true}
              onSearchChange={setAddress}
              searchValue={address}
              nothingFound="No options"
              required={true}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              onClick={() => {
                setAddressClicked(true);
              }}
              data={["Home Address", "Work Address", "Academic Address"]}
              className="attendee-contact-info-inputs"
              error={
                clickChecker(addressClicked, address) ? "" : "This is required."
              }
            />
            <TextInput
              label="Street Address"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
              value={streetAddress}
              onChange={(e) => {
                setStreetAddress(e.currentTarget.value);
              }}
              onClick={() => {
                setStreetAddressClicked(true);
              }}
              error={
                clickChecker(streetAddressClicked, streetAddress)
                  ? ""
                  : "This is required."
              }
            ></TextInput>
            <Flex gap={"md"}>
              <TextInput
                label="City"
                withAsterisk={true}
                required={true}
                className="attendee-contact-info-inputs"
                value={city}
                onChange={(e) => {
                  setCity(e.currentTarget.value);
                }}
                onClick={() => {
                  setCityClicked(true);
                }}
                error={
                  clickChecker(cityClicked, city) ? "" : "This is required."
                }
              ></TextInput>
              <TextInput
                label="State/Region/Province"
                withAsterisk={true}
                required={true}
                className="attendee-contact-info-inputs"
                value={province}
                onChange={(e) => {
                  setProvince(e.currentTarget.value);
                }}
                onClick={() => {
                  setProvinceClicked(true);
                }}
                error={
                  clickChecker(provinceClicked, province)
                    ? ""
                    : "This is required."
                }
              ></TextInput>
            </Flex>
            <Flex gap={"md"}>
              <TextInput
                label="Postal/Zip Code"
                withAsterisk={true}
                required={true}
                className="attendee-contact-info-inputs"
                value={postal}
                onChange={(e) => {
                  setPostal(e.currentTarget.value);
                }}
                onClick={() => {
                  setPostalClicked(true);
                }}
                error={
                  clickChecker(postalClicked, postal) ? "" : "This is required."
                }
              ></TextInput>
              <TextInput
                label="Country"
                withAsterisk={true}
                required={true}
                className="attendee-contact-info-inputs"
                value={country}
                onChange={(e) => {
                  setCountry(e.currentTarget.value);
                }}
                onClick={() => {
                  setCountryClicked(true);
                }}
                error={
                  clickChecker(countryClicked, country)
                    ? ""
                    : "This is required."
                }
              ></TextInput>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default AttendeeContactInformation;
