import React, { createRef, createContext, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Committee from "./Committee/Committee";

interface ContextTypeNavBarRef {
  committeeRef: React.RefObject<HTMLDivElement>;
  homeRef: React.RefObject<HTMLDivElement>;
  // conferenceProramRef?: React.RefObject<HTMLDivElement>;
  // registrationRef?: React.RefObject<HTMLDivElement>;
  // presentersRef?: React.RefObject<HTMLDivElement>;
  // sponsorshipRef?: React.RefObject<HTMLDivElement>;
  // venueRef?: React.RefObject<HTMLDivElement>;
  // contactUsRef?: React.RefObject<HTMLDivElement>;
}
export const NavBarContext = createContext<ContextTypeNavBarRef>({
  committeeRef: createRef(),
  homeRef: createRef(),
});

function App() {
  const comitteeRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBarContext.Provider
        value={{ committeeRef: comitteeRef, homeRef: homeRef }}
      >
        <Navbar />
        <Home />
        <Committee />
      </NavBarContext.Provider>
    </>
  );
}

export default App;
