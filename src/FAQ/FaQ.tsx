import React, { useContext, useState } from "react";
import "./FaQ.css";
import { Image, Text } from "@mantine/core";
import DropDownFaQ from "./DropDownFaQ/DropDownFaQ";
import RogersArenaPicture from "../Images/nicolas-savignat-UxK-LXQraJ4-unsplash.jpg";
import { NavBarContext } from "../App";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../Components/useWindowsDimensions";
import Venue from "../Venue/Venue";

const FaQ = () => {
  const faqRef = useContext(NavBarContext);
  const [hoverFAQ, setHoverFAQ] = useState(false);
  const { width, height } = useWindowDimensions();

  const { ref: rogersPicture, inView: rogersPictureVisible } = useInView({
    triggerOnce: true,
  });

  const triCommitteeRogersSize = () => {
    if (width < 400) {
      return 300;
    } else if (width < 500) {
      return 350;
    } else if (width < 580) {
      return 400;
    } else {
      return 500;
    }
    //961
    //500
  };

  const { ref: mainFaqDiv, inView: mainFaqDivVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={faqRef.faqRef}>
      <div
        className={`faq-main-div${mainFaqDivVisible ? "-active" : ""}`}
        ref={mainFaqDiv}
      >
        <div
          // ref={rogersArena.ref}
          className={`faq-rogers-arena-picture${
            rogersPictureVisible ? "-active" : ""
          }`}
          ref={rogersPicture}
        >
          <Image
            width={triCommitteeRogersSize()}
            fit="contain"
            src={RogersArenaPicture}
            onMouseEnter={() => setHoverFAQ(true)}
            onMouseLeave={() => setHoverFAQ(false)}
          />
          {/* <div className="faq-parallax-rogers"></div> */}
          <Text className={`faq-roger-roll-over${hoverFAQ ? "-active" : ""}`}>
            © Nicolas Savignat
          </Text>
        </div>{" "}
        <Text className="faq-main-header">Tourism & Venue</Text>
        <hr style={{ maxWidth: "98vw" }} />
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
        <Venue />
      </div>
    </div>
  );
};

export default FaQ;
