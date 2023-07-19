import React, {
  createRef,
  createContext,
  useRef,
  useState,
  useContext,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Committee from "./Committee/Committee";
import SpeakerSection from "./Conference Program/SpeakersComponent/SpeakerSection";
import ConferenceProgram from "./Conference Program/ConferenceProgram";
import Registration from "./Registration/Registration";
import Sponsorships from "./Sponsorship/Sponsorships";
import PageHolder from "./PageHolder/PageHolder";
import FaQ from "./FAQ/FaQ";
import Venue from "./Venue/Venue";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";
import MeshGradientOrb from "./MeshGradientOrb/MeshGradientOrb";
import MeshGradientSvg from "./MeshGradientOrb/MeshGradient";
import { Flex, Text } from "@mantine/core";

interface ContextTypeNavBarRef {
  committeeRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  conferenceProgramRef: React.RefObject<HTMLDivElement>;
  registrationRef: React.RefObject<HTMLDivElement>;
  // presentersRef?: React.RefObject<HTMLDivElement>;
  sponsorshipRef: React.RefObject<HTMLDivElement>;
  venueRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
  trinityRef: React.RefObject<HTMLDivElement>;

  // contactUsRef?: React.RefObject<HTMLDivElement>;
}

interface ContextBurger {
  burger: boolean;
  setBurger: Function;
}
export const NavBarContext = createContext<ContextTypeNavBarRef>({
  committeeRef: createRef(),
  homeRef: createRef(),
  conferenceProgramRef: createRef(),
  registrationRef: createRef(),
  sponsorshipRef: createRef(),
  venueRef: createRef(),
  faqRef: createRef(),
  trinityRef: createRef(),
});

export const BurgerContext = createContext<ContextBurger>({
  burger: false,
  setBurger: () => {},
});

function App() {
  // const navBarScrollRefs = useContext(NavBarContext);
  const comitteeRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const conferenceProgramRef = useRef<HTMLDivElement>(null);
  const registrationRef = useRef<HTMLDivElement>(null);
  const sponsorshipRef = useRef<HTMLDivElement>(null);
  const venueRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const trinityRef = useRef<HTMLDivElement>(null);
  const [burger, setBurger] = useState<boolean>(false);

  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBarContext.Provider
        value={{
          committeeRef: comitteeRef,
          homeRef: homeRef,
          conferenceProgramRef: conferenceProgramRef,
          registrationRef: registrationRef,
          sponsorshipRef: sponsorshipRef,
          venueRef: venueRef,
          faqRef: faqRef,
          trinityRef: trinityRef,
        }}
      >
        <BurgerContext.Provider value={{ burger, setBurger }}>
          <Navbar />

          <div
            className="nav-bar-burger-overlay"
            style={
              burger
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
                  scrollToSection(homeRef);
                  setBurger(false);
                }}
              >
                About
              </Text>
              <Text
                className="nav-bar-different-sections-burger"
                onClick={() => {
                  scrollToSection(comitteeRef);
                  setBurger(false);
                }}
              >
                Trinity
              </Text>
              <Text
                className="nav-bar-different-sections-burger"
                onClick={() => {
                  scrollToSection(comitteeRef);
                  setBurger(false);
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
              <Text className="nav-bar-different-sections-burger">
                Speakers
              </Text>
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
                onClick={() => scrollToSection(faqRef)}
              >
                FAQ
              </Text>
              <Text
                className="nav-bar-different-sections-burger"
                onClick={() => scrollToSection(venueRef)}
              >
                Location
              </Text>
            </Flex>
          </div>
          <Home />
          <Committee />
          {/* <FaQ />
        <Venue />
        <Footer /> */}
          {/* <ConferenceProgram />
        <Registration />
        <Sponsorships /> */}
          {/* <PageHolder /> */}
          {/* <Carousel /> */}
        </BurgerContext.Provider>
      </NavBarContext.Provider>
    </>
  );
}

export default App;
