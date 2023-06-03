import React from "react";
import "./PageHolder.css";
import { Center, Image, Text } from "@mantine/core";
import headImage from "../Images/head-image-transformed.png";

const PageHolder = () => {
  return (
    <div className="page-holder-div">
      <Center>
        <Image width={180} src={headImage} className="page-holder-div-image" />
      </Center>

      <div className="page-holder-text-section">
        <h1 style={{ textAlign: "center", fontSize: "5rem" }}>
          Something is coming ...
        </h1>
        <Center>
          <Text fz="sm" style={{ marginTop: "1rem" }}>
            We're working on it! Check back soon for an update!
          </Text>
        </Center>
      </div>
    </div>
  );
};

export default PageHolder;
