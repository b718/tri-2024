import React from "react";
import "./FaQ.css";
import { Text } from "@mantine/core";
import DropDownFaQ from "./DropDownFaQ/DropDownFaQ";

const FaQ = () => {
  return (
    <>
      <div className="faq-main-div">
        <Text className="faq-main-header">Event FAQs</Text>
        <hr />
        <DropDownFaQ
          title={"What you need to know: Vancouver 101"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
        />
        <DropDownFaQ
          title={"How to get here"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
        />
        <DropDownFaQ
          title={"How to get around town"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
        />
        <DropDownFaQ
          title={"How to find accommodations"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
        />
        <DropDownFaQ
          title={"Vancouver tourism"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
        />
      </div>
    </>
  );
};

export default FaQ;
