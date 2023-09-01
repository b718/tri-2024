import React, { useContext } from "react";
import CarouselForm from "./CarouselForm/CarouselForm";
import { NavBarContext } from "../App";
import "./CarouselSection.css";
import PostImage from "../Images/Carousel/TRI2024_Poster.png";
import { Flex, Image, Text } from "@mantine/core";
import useWindowDimensions from "../Components/useWindowsDimensions";
const CarouselSection = () => {
  const navBarRef = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();
  return (
    <>
      <div className="carousel-section-main-div" ref={navBarRef.postersPapers}>
        {" "}
        <div className="carousel-section-main-div">
          <Text className="carousel-section-max-header">
            Papers & Posters Guidelines
          </Text>
          <Flex gap={"3rem"} direction={`${width < 550 ? "column" : "row"}`}>
            <Flex direction={"column"}>
              <Image
                src={PostImage}
                fit={"contain"}
                height={160}
                className="carousel-section-poster-image"
              />
              <Text className="carousel-section-poster-guide-title">
                Papers
              </Text>
              <Text className="carousel-section-poster-guide">
                Lorem ipsum dolor sit amet, ei nam eros aeque, sea id illum
                debet similique. Duo ei iudico iriure consulatu, eu pro diceret
                fabellas pericula. At his verterem perpetua assueverit. Qui ea
                accusata platonem vituperata, mei eripuit invenire ex. An habeo
                minim usu, cu pri alia dicta. Id eos tation graecis. Cum in
                corpora blandit, facilisi recteque voluptatum ut pro. Dolor
                phaedrum in per.
              </Text>
            </Flex>
            <Flex direction={"column"}>
              <Image
                src={PostImage}
                fit={"contain"}
                height={160}
                className="carousel-section-poster-image"
              />
              <Text className="carousel-section-poster-guide-title">
                Posters
              </Text>
              <Text className="carousel-section-poster-guide">
                The goal of the poster presentations is to provide researchers
                to showcase their work and create valuable opportunities receive
                feedback, and expand their network. The two poster sessions are
                organised on June 7 or 8. Look at the program to find out when
                you have your poster presentation. Each poster has its unique
                number that is linked to the poster board. At the day of the
                presentation you can place your poster on the poster board
                during the morning before the poster presentation. During the
                poster presentation please stand next to your poster to guide
                colleageaus throguh your poster and to answer questions. The
                poster can have a maximum size of A0, portrait style (see figure
                for guidance).
              </Text>
            </Flex>
          </Flex>
        </div>
        <CarouselForm />
      </div>
    </>
  );
};

export default CarouselSection;
