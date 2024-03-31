import React from "react";
import "./MondayJune10th.css";
import { Text } from "@mantine/core";

const MondayJune10thRemote = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>
          <b>Presenter:</b>  Dr Richard Tyler, Professor, Department of
          Otolaryngology-Head and Neck Surgery and Communication Sciences and
          Disorders, The University of Iowa
        </Text>
      </div>

      <Text className="mj10-text">
        <b>Abstract:</b> As in the clinic, it is important initially to connect
        with the patients and let them explain where they are at.  Before the
        connection, have them complete the Tinnitus Primary Functions
        Questionnaire to determine where they need help, and severity.   Online
        images can be used to help with the counseling, but the personal
        interaction is very important.
      </Text>
    </div>
  );
};

export default MondayJune10thRemote;
