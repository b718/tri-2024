import React, { useContext } from "react";
import "./FaQ.css";
import { Image, Text } from "@mantine/core";
import DropDownFaQ from "./DropDownFaQ/DropDownFaQ";
import RogersArenaPicture from "../Images/nicolas-savignat-UxK-LXQraJ4-unsplash.jpg";
import { NavBarContext } from "../App";
import $ from "jquery";

const FaQ = () => {
  const faqRef = useContext(NavBarContext);

  $(window).scroll(function () {
    var y = 0;
    var scroll = $(window).scrollTop();
    var win = $(window).height();
    var height = $(".faq-parallax-rogers").height();
    var offset = $(".faq-parallax-rogers").offset()!.top;
    y =
      (100 * scroll!) / (height! + win!) +
      (100 * (win! - offset)) / (height! + win!);
    if (y > 100) {
      y = 100;
    } else if (y < 0) {
      y = 0;
    }
    y = 80 - y;
    var out = String(y) + "px";
    $(".faq-parallax-rogers").css("background-position-y", out);
  });
  return (
    <>
      <div className="faq-main-div" ref={faqRef.faqRef}>
        <Text className="faq-main-header">Event FAQs</Text>
        <hr />
        <DropDownFaQ
          title={"What you need to know: Vancouver 101"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
          url="https://www.google.ca/"
        />
        <DropDownFaQ
          title={"How to get here"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
          url="https://www.google.ca/"
        />
        <DropDownFaQ
          title={"How to get around town"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
          url="https://www.google.ca/"
        />
        <DropDownFaQ
          title={"How to find accommodations"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
          url="https://www.google.ca/"
        />
        <DropDownFaQ
          title={"Vancouver tourism"}
          text={
            "Lorem ipsum dolor sit amet, pro quem omnis conclusionemque et. Mel verterem mediocrem adversarium cu, ne vix erat postulant definiebas, sed sale erroribus liberavisse ne. Dicta assueverit vel at. Doctus albucius cu eos. Scripta copiosae mediocritatem ei qui, eos bonorum corrumpit elaboraret ea. Te sit summo aliquando, te quo possim explicari, diceret nominavi repudiare est et."
          }
          links={"INFORMATION LINK"}
          url="https://www.google.ca/"
        />
        <div className="faq-rogers-arena-picture">
          {/* <Image width={500} fit="contain" src={RogersArenaPicture} /> */}
          <div className="faq-parallax-rogers"></div>
          <Text className="faq-roger-roll-over">© Nicolas Savignat</Text>
        </div>{" "}
      </div>
    </>
  );
};

export default FaQ;
