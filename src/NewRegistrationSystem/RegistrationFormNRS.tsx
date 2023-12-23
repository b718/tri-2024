import React, { createContext, useState } from "react";
import "./RegistrationFormNRS.css";
import { Button, Flex, Text } from "@mantine/core";
import AttendeeContactInformation from "../PaymentForm/PaymentFormSections/AttendeeContactInformation/AttendeeContactInformation";

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
  const [contactObject, setContactObject] = useState<any>({});
  const [page, setPage] = useState<number>(0);

  const ComponentDisplay = (comp: number) => {
    switch (page) {
      case 0:
        return <AttendeeContactInformation />;
    }
  };

  return (
    <contactObjectContext.Provider value={{ contactObject, setContactObject }}>
      <div>
        <div className="registration-form-nrs-main-div">
          <Text className="registration-form-nrs-main-text">
            TRI 2024 Registration
          </Text>
          <Flex>
            <Flex direction={"column"}>
              <Text>Attendee Contact Information</Text>
              <Text>*Registration is NOT transferable</Text>
            </Flex>
            <progress value={0.5} />
          </Flex>

          {ComponentDisplay(page)}

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
        </div>
      </div>
    </contactObjectContext.Provider>
  );
};

export default RegistrationFormNRS;
