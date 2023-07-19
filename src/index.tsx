import React, { createRef, createContext, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

// interface ContextTypeNavBarRef {
//   committeeRef: React.RefObject<HTMLDivElement>;
//   homeRef: React.RefObject<HTMLDivElement>;
//   conferenceProgramRef: React.RefObject<HTMLDivElement>;
//   registrationRef: React.RefObject<HTMLDivElement>;
//   // presentersRef?: React.RefObject<HTMLDivElement>;
//   sponsorshipRef: React.RefObject<HTMLDivElement>;
//   venueRef: React.RefObject<HTMLDivElement>;
//   faqRef: React.RefObject<HTMLDivElement>;
//   trinityRef: React.RefObject<HTMLDivElement>;
//   // contactUsRef?: React.RefObject<HTMLDivElement>;
// }

// export const OuterIndexContext = createContext<ContextTypeNavBarRef>({
//   committeeRef: createRef(),
//   homeRef: createRef(),
//   conferenceProgramRef: createRef(),
//   registrationRef: createRef(),
//   sponsorshipRef: createRef(),
//   venueRef: createRef(),
//   faqRef: createRef(),
//   trinityRef: createRef(),
// });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const comitteeRef = useRef<HTMLDivElement>(null);
// const homeRef = useRef<HTMLDivElement>(null);
// const conferenceProgramRef = useRef<HTMLDivElement>(null);
// const registrationRef = useRef<HTMLDivElement>(null);
// const sponsorshipRef = useRef<HTMLDivElement>(null);
// const venueRef = useRef<HTMLDivElement>(null);
// const faqRef = useRef<HTMLDivElement>(null);
// const trinityRef = useRef<HTMLDivElement>(null);
root.render(
  // <OuterIndexContext.Provider
  //   value={{
  //     committeeRef: comitteeRef,
  //     homeRef: homeRef,
  //     conferenceProgramRef: conferenceProgramRef,
  //     registrationRef: registrationRef,
  //     sponsorshipRef: sponsorshipRef,
  //     venueRef: venueRef,
  //     faqRef: faqRef,
  //     trinityRef: trinityRef,
  //   }}
  // >
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
  // </OuterIndexContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
