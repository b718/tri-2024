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
    <div>
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
        <Text className="faq-main-header" ref={faqRef.faqRef}>
          Tourism & Venue
        </Text>
        <hr style={{ maxWidth: "98vw" }} />
        <DropDownFaQ
          title={"What you need to know: Vancouver 101"}
          text={"COMING SOON"}
          links={"INFORMATION LINK"}
          url="https://www.tri2024.com/"
        />
        <DropDownFaQ
          title={"How to get here"}
          text={"COMING SOON"}
          links={"INFORMATION LINK"}
          url="https://www.tri2024.com/"
        />
        <DropDownFaQ
          title={"How to get around town"}
          text={"COMING SOON"}
          links={"INFORMATION LINK"}
          url="https://www.tri2024.com/"
        />
        <DropDownFaQ
          title={"How to find accommodations"}
          text={"COMING SOON"}
          links={"INFORMATION LINK"}
          url="https://www.tri2024.com/"
        />
        <DropDownFaQ
          title={"Vancouver tourism"}
          text={"COMING SOON"}
          links={"INFORMATION LINK"}
          url="https://www.tri2024.com/"
        />
        <Venue />
      </div>
    </div>
  );
};

export default FaQ;
