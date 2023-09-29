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
          scrollToSection(navBarContext.symposiaRef);
        }}
      >
        <Text className="new-news-moving-text">
          {" "}
          SUBMIT YOUR SYMPOSIUM PROPOSALS NOW – CLOSING DEADLINE OCTOBER 31ST
          2023
        </Text>
      </div>
    </div>
  );
};

export default NewNews;
