import { Flex, Select, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import "./AttendeeContactInformation.css";
const AttendeeContactInformation = () => {
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <Flex direction={"column"} className="attendee-contact-info-main-flex">
        <div>
          <Flex>
            <Text className="attendee-contact-info-main-text">Name</Text>
            <Text style={{ color: "red" }}>*</Text>
          </Flex>
          <Flex gap={"md"}>
            <TextInput
              label="Title"
              className="attendee-contact-info-inputs"
            ></TextInput>
            <TextInput
              label="First"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
            ></TextInput>
            <TextInput
              label="Last"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
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
            data={["Audiologist", "Counsellor", "Educator"]}
            className="attendee-contact-info-inputs"
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
            ></TextInput>
            <TextInput
              label="Phone Number"
              withAsterisk
              required={true}
              className="attendee-contact-info-inputs"
            ></TextInput>
            <TextInput
              label="Affiliation/Organization"
              className="attendee-contact-info-inputs"
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
              data={["Home Address", "Work Address", "Academic Address"]}
              className="attendee-contact-info-inputs"
            />
            <TextInput
              label="Street Address"
              required={true}
              withAsterisk
              className="attendee-contact-info-inputs"
            ></TextInput>
            <Flex gap={"md"}>
              <TextInput
                label="City"
                className="attendee-contact-info-inputs"
              ></TextInput>
              <TextInput
                label="State/Region/Province"
                className="attendee-contact-info-inputs"
              ></TextInput>
            </Flex>
            <Flex gap={"md"}>
              <TextInput
                label="Portal/Zip Code"
                className="attendee-contact-info-inputs"
              ></TextInput>
              <TextInput
                label="Country"
                className="attendee-contact-info-inputs"
              ></TextInput>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default AttendeeContactInformation;
