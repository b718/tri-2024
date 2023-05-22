import React from "react";
import "./ConferenceProgram.css";
import SpeakerSection from "./SpeakersComponent/SpeakerSection";
import Program from "./Program/Program";
const ConferenceProgram = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <SpeakerSection />
      <Program />
    </div>
  );
};

export default ConferenceProgram;
