import { Text } from "@mantine/core";
import React from "react";
import "./CarouselIntroduction.css";
import CarouselDropDown from "../Carousel-DropDown/CarouselDropDown";
import Topics from "../CarouselDropDownComponents/Topics";

const CarouselIntroduction = () => {
  return (
    <div>
      <div className="carousel-introduction-main-div">
        <Text className="carousel-introduction-title">
          Paper + Poster Guidelines
        </Text>
        <div className="carousel-introduction-main-text">
          <Text>
            The Tinnitus Research Initiative 2024 Program Committee invites
            clinicians and researchers to submit an abstract for presentation to
            the next annual meeting that will be held for the first time in
            Canada, in the vibrant city of Vancouver, June 10th-12th 2024, under
            the theme “The Science of Tinnitus”.
          </Text>
          <Text style={{ marginBottom: "2rem" }}>
            The Committee invites submissions for abstracts relevant to tinnitus
            and hyperacusis in basic science, translational, and clinical
            research in audiology, neuroscience, otolaryngology, and psychology.
            Speakers will be invited for oral presentations or for posters.
          </Text>
        </div>
      </div>
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <hr style={{ maxWidth: "45rem" }} />

        <CarouselDropDown title={"TOPICS"} Component={Topics} />
      </div>
    </div>
  );
};

export default CarouselIntroduction;
