import React, { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./Carousel-Item/CarouselItem";
import { Text } from "@mantine/core";

const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);

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
      <div className="carousel-main-div">
        {/* <div className="carousel-circle-small"></div>
        <div className="carousel-circle-small-two"></div>
        <div className="carousel-circle-small-three"></div> */}

        <button
          className="carousel-button-arrow carousel-arrow-left"
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
            <div
              className="carousel-display-slide"
              //   style={{
              //     transform: `translateX(-${slide * 100}%)`,
              //   }}
            >
              {index === 0 ? (
                <div
                  className={`carousel-post-presentations${
                    slide === 0 ? "-active" : ""
                  }`}
                  //   style={{ height: `${slide === 0 ? "auto" : "0"}` }}
                >
                  <Text>Poster & Presentations Guidelines</Text>
                </div>
              ) : (
                <div
                  className={`carousel-slide${
                    slide === index ? "-active" : ""
                  }`}
                  //   style={{ height: `${slide === index ? "auto" : "0"}` }}
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
          className="carousel-button-arrow carousel-arrow-right"
          onClick={() => {
            if (slide + 1 >= carouselItemData.length) {
              setSlide(0);
            } else {
              setSlide(slide + 1);
            }
          }}
        >
          <span className="material-symbols-outlined">arrow_circle_right</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
