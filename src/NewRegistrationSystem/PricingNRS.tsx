import React, { useContext } from "react";
import "./PricingNRS.css";
import useWindowDimensions from "../Components/useWindowsDimensions";
import { NavBarContext } from "../App";
import { Flex, Text } from "@mantine/core";
import EventComponent from "../Conference Program/ConferenceDropDownComponents/EventComponent/EventComponent";
import RegistrationComponent from "./RegistrationComponent";
const PricingNRS = () => {
  const { width, height } = useWindowDimensions();
  const registration = useContext(NavBarContext);
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  return (
    <div ref={registration.registrationRef}>
      <div className="pricing-nrs-main-div">
        <Flex
          direction={width < 730 ? "column" : "row"}
          align={width < 730 ? "center" : ""}
          justify={width < 730 ? "center" : ""}
        >
          <Flex
            direction={"column"}
            style={{ maxWidth: "fit-content" }}
            align={width < 730 ? "center" : ""}
            justify={width < 730 ? "center" : ""}
          >
            <Text className="pricing-nrs-main-text">Registration</Text>
            <Text
              className="pricing-nrs-registration-info"
              style={{ textAlign: `${width < 730 ? "center" : "left"}` }}
            >
              Registration is now open for the Tinnitus Research Initiative
              Conference from June 10 to 12, 2024 in Vancouver, Canada.
            </Text>
            <button className="pricing-nrs-register-button">
              REGISTER NOW
            </button>
          </Flex>

          {width < 730 ? (
            <div className="pricing-nrs-vertical-line-730"></div>
          ) : (
            <div className="pricing-nrs-vertical-line"></div>
          )}

          <Flex direction={"column"} align={"center"} justify={"center"}>
            <RegistrationComponent
              regPackage={"EARLY BIRD"}
              price={"$725 CAD"}
            />
            <RegistrationComponent regPackage={"Student"} price={"$575 CAD"} />
            <RegistrationComponent regPackage={"Regular"} price={"$875 CAD"} />
            <RegistrationComponent regPackage={"On-site"} price={"$1500 CAD"} />
            <RegistrationComponent
              regPackage={"One day, June 10 only"}
              price={"$575 CAD"}
            />
            <RegistrationComponent
              regPackage={"One day, June 11 only"}
              price={"$500 CAD"}
            />
            <RegistrationComponent
              regPackage={"One day, June 12 only "}
              price={"$500 CAD"}
            />
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default PricingNRS;
