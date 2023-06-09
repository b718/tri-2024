import React from "react";
import "./PageHolder.css";
import { Center, Image, Text } from "@mantine/core";
import { AspectRatio } from "@mantine/core";
import headImage from "../Images/TRI2024Logo_Nav.png";

const PageHolder = () => {
  return (
    <div className="page-holder-div">
      <Center>
        <Image width={180} src={headImage} className="page-holder-div-image" />
      </Center>

      <AspectRatio ratio={16 / 9} className="page-holder-aspect-ratio-frame">
        <iframe
          src="https://www.youtube.com/embed/Dorf8i6lCuk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
      <div className="page-holder-text-section">
        <h1 style={{ textAlign: "center", fontSize: "5rem" }}>
          TRI2024 is coming!
        </h1>
        <Center>
          <Text fz="sm" style={{ marginTop: "1rem" }}>
            Check back soon for an update!
          </Text>
        </Center>
      </div>
    </div>
  );
};

export default PageHolder;
