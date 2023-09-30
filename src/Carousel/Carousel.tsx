import React, { useContext, useState } from "react";
import "./Carousel.css";
import CarouselItem from "./Carousel-Item/CarouselItem";
import { Text } from "@mantine/core";
import { NavBarContext } from "../App";
import CarouselForm from "./CarouselForm/CarouselForm";

const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);
  const navBarRef = useContext(NavBarContext);

  const carouselItemData = [
    {
      title: "dummdy",
      paragraph: "Coming Soon",
      link: "https://www.google.ca/",
    },
    {
      title: "Posters",
      paragraph: "Guidelines will be coming soon.",
      link: "https://www.google.ca/",
    },
    {
      title: "Presentations",
      paragraph: "Guidelines will be coming soon.",
      link: "https://www.google.ca/",
    },
  ];

  return (
    <>
      <div className="carousel-main-div" ref={navBarRef.postersPapers}>
        <button
          className={`carousel-button-arrow carousel-arrow-left ${
            slide === 0 ? "carousel-arrow-left-zero" : ""
          }`}
          onClick={() => {
            if (slide - 1 <= 0) {
              setSlide(0);
            } else {
              setSlide(slide - 1);
            }
          }}
          style={{ display: `${slide === 0 ? "none" : ""}` }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: `${slide === 0 ? "0px" : "30px"}` }}
          >
            arrow_circle_left
          </span>{" "}
        </button>
        {carouselItemData.map((item, index) => {
          return (
            <div className="carousel-display-slide">
              {index === 0 ? (
                <div
                  className={`carousel-post-presentations${
                    slide === 0 ? "-active" : ""
                  }`}
                >
                  <Text className="carousel-main-text">
                    Poster & Presentations Guidelines
                  </Text>
                </div>
              ) : (
                <div
                  className={`carousel-slide${
                    slide === index ? "-active" : ""
                  }`}
                >
                  <CarouselItem
                    title={item.title}
                    paragraph={item.paragraph}
                    link={item.link}
                  />
                </div>
              )}
            </div>
          );
        })}

        <button
          className={` ${
            slide === 0
              ? "carousel-arrow-right-zero"
              : "carousel-button-arrow carousel-arrow-right"
          }`}
          onClick={() => {
            if (slide + 1 >= carouselItemData.length) {
              setSlide(0);
            } else {
              setSlide(slide + 1);
            }
          }}
        >
          <span
            className={`material-symbols-outlined`}
            style={{ fontSize: `${slide === 0 ? "80px" : "30px"}` }}
          >
            arrow_circle_right
          </span>
        </button>
        <CarouselForm />
      </div>
    </>
  );
};

export default Carousel;
