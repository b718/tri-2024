import React, { createRef, createContext, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Committee from "./Committee/Committee";
import SpeakerSection from "./Conference Program/SpeakersComponent/SpeakerSection";
import ConferenceProgram from "./Conference Program/ConferenceProgram";
import Registration from "./Registration/Registration";

interface ContextTypeNavBarRef {
  committeeRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  conferenceProgramRef: React.RefObject<HTMLDivElement>;
  registrationRef: React.RefObject<HTMLDivElement>;
  // presentersRef?: React.RefObject<HTMLDivElement>;
  // sponsorshipRef?: React.RefObject<HTMLDivElement>;
  // venueRef?: React.RefObject<HTMLDivElement>;
  // contactUsRef?: React.RefObject<HTMLDivElement>;
}
export const NavBarContext = createContext<ContextTypeNavBarRef>({
  committeeRef: createRef(),
  homeRef: createRef(),
  conferenceProgramRef: createRef(),
  registrationRef: createRef(),
});

function App() {
  const comitteeRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const conferenceProgramRef = useRef<HTMLDivElement>(null);
  const registrationRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBarContext.Provider
        value={{
          committeeRef: comitteeRef,
          homeRef: homeRef,
          conferenceProgramRef: conferenceProgramRef,
          registrationRef: registrationRef,
        }}
      >
        <Navbar />
        <Home />
        <Committee />
        <ConferenceProgram />
        <Registration />
      </NavBarContext.Provider>
    </>
  );
}

export default App;
