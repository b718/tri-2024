import React, { useContext, useState } from "react";
import "./Carousel.css";
import CarouselItem from "./Carousel-Item/CarouselItem";
import { Text } from "@mantine/core";
import { NavBarContext } from "../App";

const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);
  const navBarRef = useContext(NavBarContext);

  const carouselItemData = [
    {
      title: "dummdy",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat mauris, rhoncus accumsan lacus sed, posuere fringilla elit. Donec eleifend tellus porta, elementum augue sed, suscipit lectus. Vivamus vitae tortor sit amet diam malesuada feugiat vel eget metus. Aenean vulputate leo in volutpat lacinia. In nec mauris purus. Sed nunc dolor, mollis iaculis dictum tristique, ornare blandit nulla. Nunc tincidunt mauris sit amet nulla volutpat pretium.",
      link: "https://www.google.ca/",
    },
    {
      title: "Posters",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat mauris, rhoncus accumsan lacus sed, posuere fringilla elit. Donec eleifend tellus porta, elementum augue sed, suscipit lectus. Vivamus vitae tortor sit amet diam malesuada feugiat vel eget metus. Aenean vulputate leo in volutpat lacinia. In nec mauris purus. Sed nunc dolor, mollis iaculis dictum tristique, ornare blandit nulla. Nunc tincidunt mauris sit amet nulla volutpat pretium.",
      link: "https://www.google.ca/",
    },
    {
      title: "Presentations",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat mauris, rhoncus accumsan lacus sed, posuere fringilla elit. Donec eleifend tellus porta, elementum augue sed, suscipit lectus. Vivamus vitae tortor sit amet diam malesuada feugiat vel eget metus. Aenean vulputate leo in volutpat lacinia. In nec mauris purus. Sed nunc dolor, mollis iaculis dictum tristique, ornare blandit nulla. Nunc tincidunt mauris sit amet nulla volutpat pretium.",
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
          <span className="material-symbols-outlined">arrow_circle_left</span>{" "}
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
                  <Text>Poster & Presentations Guidelines</Text>
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
          className={`carousel-button-arrow carousel-arrow-right ${
            slide === 0 ? "carousel-arrow-right-zero" : ""
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
            style={{ fontSize: `${slide === 0 ? "40px" : ""}` }}
          >
            arrow_circle_right
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
