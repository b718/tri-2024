import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Flex, Text, Center } from "@mantine/core";
import { NavBarContext } from "../../App";

const Navbar = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const navBarScrollRefs = useContext(NavBarContext);

  return (
    <>
      <nav className="nav-bar-for-access">
        <Center>
          <div className="nav-bar-container">
            <Text className="nav-bar-tri-text">TRI 2024</Text>
            <Flex
              mih={50}
              gap="1.2rem"
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap"
              className="nav-bar-whole"
            >
              <Text
                className="nav-bar-different-sections"
                onClick={() => scrollToSection(navBarScrollRefs.homeRef)}
              >
                Home
              </Text>
              <Text
                className="nav-bar-different-sections"
                onClick={() => scrollToSection(navBarScrollRefs.committeeRef)}
              >
                Committee
              </Text>
              <Text
                className="nav-bar-different-sections"
                onClick={() =>
                  scrollToSection(navBarScrollRefs.conferenceProgramRef)
                }
              >
                Conference Program
              </Text>
              <Text
                className="nav-bar-different-sections"
                onClick={() =>
                  scrollToSection(navBarScrollRefs.registrationRef)
                }
              >
                Registration
              </Text>
              <Text className="nav-bar-different-sections">Presenters</Text>
              <Text className="nav-bar-different-sections">Sponsorship</Text>
              <Text className="nav-bar-different-sections">Venue</Text>
              <Text className="nav-bar-different-sections">Contact Us</Text>
            </Flex>
          </div>
        </Center>
      </nav>
    </>
  );
};

export default Navbar;
