import React, {
  createRef,
  createContext,
  useRef,
  useState,
  useContext,
} from "react";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completion from "./Payment-Stripe/Unused/Completion";
import Payment from "./Payment-Stripe/Payment";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from "./PayPal/PayPalPayment";
import RegistrationUpdated from "./Registration/RegistrationUpdated";
import PaymentForm from "./PaymentForm/PaymentForm";
import Symposia from "./Symposia/Symposia";

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
  const overlayRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };

  const initialOptionsPaypal = {
    clientId:
      "ATaCJVQLin6ENA2I6kB6EU3lc5Xlo8cioqjFpM4pp4BSFWTGYef-M3c2w-m4ydc0SgZkF97KYvqWFXy4",
    currency: "CAD",
    intent: "capture",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptionsPaypal}>
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
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Navbar />
                    <div
                      className="nav-bar-burger-overlay"
                      ref={overlayRef}
                      style={
                        burger
                          ? {
                              width: "100vw",
                            }
                          : {
                              width: "0%",
                            }
                      }
                    >
                      {/* <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(homeRef);
                          setBurger(false);
                        }}
                      >
                        About
                      </Text> */}
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(comitteeRef);
                          setBurger(false);
                        }}
                      >
                        WELCOME
                      </Text>
                      {/* <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version  nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(comitteeRef);
                          setBurger(false);
                        }}
                      >
                        Committee
                      </Text> */}
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(registrationRef);
                          setBurger(false);
                        }}
                      >
                        REGISTRATION
                      </Text>
                      {/* <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        Speakers
                      </Text>
                      <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        Program
                      </Text> */}
                      <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        SUBMISSIONS
                      </Text>
                      {/* <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        Awards
                      </Text>
                      <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        Socials
                      </Text>
                      <Text className="nav-bar-different-sections-burger nav-bar-burger-version ">
                        PPI
                      </Text> */}
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => scrollToSection(sponsorshipRef)}
                      >
                        SPONSORSHIP
                      </Text>
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(faqRef);
                          setBurger(false);
                        }}
                      >
                        VENUE + TOURISM
                      </Text>
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(venueRef);
                          setBurger(false);
                        }}
                        // style={{ paddingBottom: "2rem", marginBottom: "2rem" }}
                      >
                        LOCATION
                      </Text>
                      <Text
                        className="nav-bar-different-sections-burger nav-bar-burger-version "
                        onClick={() => {
                          scrollToSection(venueRef);
                          setBurger(false);
                        }}
                        style={{ paddingBottom: "2rem", marginBottom: "2rem" }}
                      >
                        CONTACT US
                      </Text>
                    </div>
                    <Home />
                    <Committee />
                    <RegistrationUpdated />
                    <Symposia />
                    <Sponsorships />
                    <FaQ />
                    <Footer />
                  </div>
                }
              />
              <Route path="/register" element={<PaymentForm />} />
            </Routes>
          </BurgerContext.Provider>
        </NavBarContext.Provider>
      </PayPalScriptProvider>
    </>
  );
}

{
  /* <Venue /> */
}
{
  /* <ConferenceProgram />
        <Registration />
        <Sponsorships /> */
}
{
  /* <PageHolder /> */
}
{
  /* <Carousel /> */
}
{
  /* <Payment /> */
}

export default App;
