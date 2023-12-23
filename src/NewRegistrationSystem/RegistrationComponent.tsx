import React, { FunctionComponent } from "react";
import "./RegistrationComponent.css";
import { Flex, Text } from "@mantine/core";

interface RegistrationComponent {
  regPackage: string;
  price: string;
}

const RegistrationComponent: FunctionComponent<RegistrationComponent> = ({
  regPackage,
  price,
}) => {
  return (
    <div className="registration-component-main-div">
      {" "}
      <Flex gap={"2rem"}>
        <Flex direction={"column"} style={{ minWidth: "10rem" }}>
          <Text className="registration-component-package">{regPackage}</Text>
        </Flex>
        <Flex style={{ minWidth: "10rem" }} justify={"flex-start"}>
          <Text className="registration-component-price">{price}</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default RegistrationComponent;
