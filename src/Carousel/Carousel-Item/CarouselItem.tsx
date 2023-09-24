import React, { FunctionComponent } from "react";
import "./CarouselItem.css";
import { Flex, Grid, Image, Text } from "@mantine/core";
import TestImage from "../../Images/Carousel/TRI2024_Poster.png";
interface CI {
  title: string;
  paragraph: string;
  link: string;
}
const CarouselItem: FunctionComponent<CI> = ({ title, paragraph, link }) => {
  return (
    <>
      <Flex
        className="carousel-item-display"
        style={{ width: "100%" }}
        gap={"1rem"}
      >
        <Image src={TestImage} width={200} className="carousel-item-image" />

        <Flex
          justify="center"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <Text className="carousel-item-title">{title}</Text>
          <Text className="carousel-item-para">{paragraph}</Text>
          <a
            href={link}
            style={{ color: "white", textDecoration: "none" }}
            target="blank"
          >
            <Flex>
              <Text
                className="carousel-item-link"
                style={{ marginRight: "0.2rem" }}
              >
                +
              </Text>
              <Text className="carousel-item-link">READ MORE</Text>
            </Flex>
          </a>
        </Flex>
      </Flex>
    </>
  );
};

export default CarouselItem;
