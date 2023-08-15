import { Flex, Select, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";

const AttendeeContactInformation = () => {
  const [profession, setProfession] = useState("");

  return (
    <>
      <Flex direction={"column"}>
        <div>
          <Flex>
            <Text>Name</Text>
            <Text style={{ color: "red" }}>*</Text>
          </Flex>
          <Flex gap={"md"}>
            <TextInput label="Title"></TextInput>
            <TextInput label="First" required={true} withAsterisk></TextInput>
            <TextInput label="Last" required={true} withAsterisk></TextInput>
          </Flex>
        </div>

        <div>
          <Select
            label="Profession/Attendee Type"
            searchable
            withAsterisk={true}
            onSearchChange={setProfession}
            searchValue={profession}
            nothingFound="No options"
            required={true}
            data={["Audiologist", "Counsellor", "Educator"]}
          />
          <Text style={{ fontStyle: "italic" }}>
            This will appear on your name badge at the conferece.
          </Text>
        </div>

        <div>
          <Flex direction={"column"} gap={"md"}>
            <TextInput label="Email" withAsterisk required={true}></TextInput>
            <TextInput
              label="Phone Number"
              withAsterisk
              required={true}
            ></TextInput>
            <TextInput label="Affiliation/Organization"></TextInput>
          </Flex>
        </div>

        <div>
          <Flex direction={"column"} gap={"md"}>
            <Select
              label="My Address Is"
              searchable
              withAsterisk={true}
              onSearchChange={setProfession}
              searchValue={profession}
              nothingFound="No options"
              required={true}
              data={["Home Address", "Work Address", "Academic Address"]}
            />
          </Flex>
        </div>

        <div>
          <Flex direction={"column"} gap={"md"}>
            <Flex>
              {" "}
              <Text>Address</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Flex>
            <TextInput
              label="Street Address"
              required={true}
              withAsterisk
            ></TextInput>
            <Flex gap={"md"}>
              <TextInput label="City"></TextInput>
              <TextInput label="State/Region/Province"></TextInput>
            </Flex>
            <Flex gap={"md"}>
              <TextInput label="Portal/Zip Code"></TextInput>
              <TextInput label="Country"></TextInput>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default AttendeeContactInformation;
