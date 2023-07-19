import React, { useContext, useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Flex, Text, Center, Image, Grid } from "@mantine/core";
import { BurgerContext, NavBarContext } from "../../App";
import NavBarImage from "../../Images/Logos/TRI2024 NAV/TRI2024_Logo_Nav2.png";
import useWindowDimensions from "../useWindowsDimensions";

const Navbar = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  const navBarScrollRefs = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();
  const burgerContext = useContext(BurgerContext);

  useEffect(() => {
    if (width > 890) {
      burgerContext.setBurger(false);
    }
  }, [width]);

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
    if smaller than 853 width we switch to hamburger
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
                // style={{ marginRight: `${width < 890 ? "10vw" : ""}` }}
              />
              {width > 890 ? (
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
                      scrollToSection(navBarScrollRefs.committeeRef)
                    }
                  >
                    Trinity
                  </Text>
                  <Text
                    className="nav-bar-different-sections"
                    onClick={() =>
                      scrollToSection(navBarScrollRefs.committeeRef)
                    }
                  >
                    Committee
                  </Text>
                  <Text
                    className="nav-bar-different-sections"
                    // onClick={() =>
                    //   scrollToSection(navBarScrollRefs.registrationRef)
                    // }
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
                    // onClick={() =>
                    //   scrollToSection(navBarScrollRefs.sponsorshipRef)
                    // }
                  >
                    Sponsorship
                  </Text>
                  <Text
                    className="nav-bar-different-sections"
                    onClick={() => scrollToSection(navBarScrollRefs.faqRef)}
                  >
                    FAQ
                  </Text>
                  <Text
                    className="nav-bar-different-sections"
                    onClick={() => scrollToSection(navBarScrollRefs.venueRef)}
                  >
                    Location
                  </Text>
                </Flex>
              ) : (
                <div className="">
                  <div className="nav-bar-hamburger-div">
                    {" "}
                    <div
                      onClick={() => {
                        burgerContext.setBurger(!burgerContext.burger);
                      }}
                    >
                      <svg
                        viewBox="0 0 100 100"
                        stroke="#184176"
                        width="40"
                        height="40"
                        style={{
                          marginRight: "1rem",
                        }}
                        className={`drop-down-svg-burger-div${
                          burgerContext.burger ? "-active" : ""
                        }`}
                      >
                        <rect
                          className={`drop-down-burger-line-rotate-top${
                            burgerContext.burger ? "-active" : ""
                          } drop-burger-line `}
                          width="80"
                          height="5"
                          x="10"
                          y="25"
                          rx="5"
                          fill="#184176"
                        />
                        <rect
                          className={`drop-down-burger-line-rotate-middle${
                            burgerContext.burger ? "-active" : ""
                          } drop-burger-line `}
                          width="80"
                          height="5"
                          x="10"
                          y="45"
                          rx="5"
                          fill="#184176"
                        />

                        <rect
                          className={`drop-down-burger-line-rotate-middle-two${
                            burgerContext.burger ? "-active" : ""
                          } drop-burger-line `}
                          width="80"
                          height="5"
                          x="10"
                          y="45"
                          rx="5"
                          fill="#184176"
                        />
                        <rect
                          className={`drop-down-burger-line-rotate-bottom${
                            burgerContext.burger ? "-active" : ""
                          } drop-burger-line `}
                          width="80"
                          height="5"
                          x="10"
                          y="65"
                          rx="5"
                          fill="#184176"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </Flex>
          </div>
        </Center>
        {/* <div
          className="nav-bar-burger-overlay"
          // ref={parentRef}
          style={
            burgerContext.burger
              ? {
                  width: "100%",
                }
              : {
                  width: "0%",
                }
          }
        >
          <Flex
            mih={50}
            gap="1.3rem"
            justify="center"
            align="flex-start"
            direction="column"
            wrap="wrap"
            className="nav-bar-burger-version"
          >
            <Text
              className="nav-bar-different-sections-burger"
              onClick={() => {
                scrollToSection(navBarScrollRefs.homeRef);
                burgerContext.setBurger(false);
              }}
            >
              About
            </Text>
            <Text
              className="nav-bar-different-sections-burger"
              onClick={() => {
                scrollToSection(navBarScrollRefs.committeeRef);
                burgerContext.setBurger(false);
              }}
            >
              Trinity
            </Text>
            <Text
              className="nav-bar-different-sections-burger"
              onClick={() => {
                scrollToSection(navBarScrollRefs.committeeRef);
                burgerContext.setBurger(false);
              }}
            >
              Committee
            </Text>

            <Text
              className="nav-bar-different-sections-burger"
              // onClick={() =>
              //   scrollToSection(navBarScrollRefs.registrationRef)
              // }
            >
              Registration
            </Text>
            <Text className="nav-bar-different-sections-burger">Speakers</Text>
            <Text className="nav-bar-different-sections-burger">Program</Text>
            <Text className="nav-bar-different-sections-burger">
              Guidelines
            </Text>
            <Text className="nav-bar-different-sections-burger">Awards</Text>
            <Text className="nav-bar-different-sections-burger">Socials</Text>
            <Text className="nav-bar-different-sections-burger">PPI</Text>
            <Text
              className="nav-bar-different-sections-burger"
              // onClick={() =>
              //   scrollToSection(navBarScrollRefs.sponsorshipRef)
              // }
            >
              Sponsorship
            </Text>
            <Text
              className="nav-bar-different-sections-burger"
              onClick={() => scrollToSection(navBarScrollRefs.faqRef)}
            >
              FAQ
            </Text>
            <Text
              className="nav-bar-different-sections-burger"
              onClick={() => scrollToSection(navBarScrollRefs.venueRef)}
            >
              Location
            </Text>
          </Flex>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
