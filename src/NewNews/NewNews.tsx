import React, { useContext } from "react";
import "./NewNews.css";
import { Text } from "@mantine/core";
import { NavBarContext } from "../App";
const NewNews = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = elementRef!.current!.offsetTop - 130;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };

  const navBarContext = useContext(NavBarContext);
  return (
    <div>
      <div
        className="new-news-main"
        onClick={() => {
          scrollToSection(navBarContext.registrationRef);
        }}
      >
        <div className="marquee enable-animation">
          <ul className="marquee__content">
            <li>
              {" "}
              <Text className="new-news-moving-text">
                {" "}
                conference registration is open now - be ready for launch
              </Text>
            </li>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
            <li>
              {" "}
              <Text className="new-news-moving-text">
                {" "}
                conference registration is open now - be ready for launch
              </Text>
            </li>
          </ul>
        </div>
        {/* <div className="new-news-animation-state">
          <Text className="new-news-moving-text">
            {" "}
            SUBMIT YOUR SYMPOSIUM PROPOSALS NOW – CLOSING DEADLINE OCTOBER 31ST
            2023
          </Text>
        </div> */}
      </div>
    </div>
  );
};

export default NewNews;
