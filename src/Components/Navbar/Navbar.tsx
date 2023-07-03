import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Flex, Text, Center, Image, Grid } from "@mantine/core";
import { NavBarContext } from "../../App";
import NavBarImage from "../../Images/Logos/TRI2024 NAV/TRI2024_Logo_Nav2.png";

const Navbar = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const navBarScrollRefs = useContext(NavBarContext);
  {
    /*
    About
    Trinity
    Committee
    Registration
    Speakers
    Program
    Guidelines
    Awards
    Socials
    PPI
    Sponsors
    FAQ
    Location
*/
  }
  return (
    <>
      <nav className="nav-bar-for-access">
        <Center>
          <div className="nav-bar-container">
            {" "}
            <Flex direction="row">
              <Image
                width={200}
                src={NavBarImage}
                className="nav-bar-picture"
              />
              <Flex
                mih={50}
                gap="1.3rem"
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
                  About
                </Text>
                <Text
                  className="nav-bar-different-sections"
                  onClick={() =>
                    scrollToSection(navBarScrollRefs.conferenceProgramRef)
                  }
                >
                  Trinity
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
                    scrollToSection(navBarScrollRefs.registrationRef)
                  }
                >
                  Registration
                </Text>
                <Text className="nav-bar-different-sections">Speakers</Text>
                <Text className="nav-bar-different-sections">Program</Text>
                <Text className="nav-bar-different-sections">Guidelines</Text>
                <Text className="nav-bar-different-sections">Awards</Text>
                <Text className="nav-bar-different-sections">Socials</Text>
                <Text className="nav-bar-different-sections">PPI</Text>

                <Text
                  className="nav-bar-different-sections"
                  onClick={() =>
                    scrollToSection(navBarScrollRefs.sponsorshipRef)
                  }
                >
                  Sponsorship
                </Text>
                <Text className="nav-bar-different-sections">FAQ</Text>
                <Text className="nav-bar-different-sections">Location</Text>
              </Flex>
            </Flex>
          </div>
        </Center>
      </nav>
    </>
  );
};

export default Navbar;
