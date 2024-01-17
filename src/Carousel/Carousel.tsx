import React, { useContext, useState } from "react";
import "./Carousel.css";
import CarouselItem from "./Carousel-Item/CarouselItem";
import { Text } from "@mantine/core";
import { NavBarContext } from "../App";
import CarouselForm from "./CarouselForm/CarouselForm";
import CarouselIntroduction from "./Carousel-Introduction/CarouselIntroduction";

const Carousel = () => {
  const [slide, setSlide] = useState<number>(0);
  const navBarRef = useContext(NavBarContext);

  return (
    <>
      <div className="carousel-main-div" ref={navBarRef.postersPapers}>
        <CarouselIntroduction />
        <CarouselForm />
      </div>
    </>
  );
};

export default Carousel;
