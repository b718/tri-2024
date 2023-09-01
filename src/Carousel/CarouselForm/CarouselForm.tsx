import React, { useState } from "react";
import "./CarouselForm.css";
import { FileInput, Flex, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
const CarouselForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const { width, height } = useWindowDimensions();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    setFile(file || null);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("pdfFile", file);

      const response = await fetch(
        "https://tri-2024-back-end.onrender.com/submit-poster-form",
        {
          method: "POST",
          body: formData,
        }
      );
    }
    setFile(null);
  };

  return (
    <div className="carousel-form-outer-div">
      <form
        className="carousel-form-inner-div"
        style={{
          padding: `${
            width < 500 ? "1rem 1rem 1rem 1rem" : "3rem 3rem 3rem 3rem"
          }`,
        }}
        onSubmit={onSubmit}
      >
        <Text className="carousel-form-title">
          Papers & posters submissions
        </Text>
        <Text className="carousel-form-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
          quam nec enim mollis lacinia. Morbi lobortis lectus mattis lectus
          laoreet, sed pretium nisi fermentum. Integer vulputate, leo eget
          fermentum luctus, tellus turpis gravida massa, non finibus tellus
          sapien ac arcu. Maecenas sit amet vulputate leo. Etiam nulla est,
          molestie in dolor egestas, rutrum feugiat felis. Curabitur ut dui
          quis.
        </Text>
        <Flex direction={"row"} gap={"2rem"}>
          <Flex direction={"column"}>
            <label
              htmlFor="fileUpload"
              className="carousel-form-button"
              style={{ fontSize: `${width < 545 ? "0.6rem" : "0.9rem"}` }}
            >
              ADD AN ATTACHMENT +
            </label>
            <input
              className="carousel-form-button"
              type={"file"}
              id="fileUpload"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            ></input>
          </Flex>

          <button
            className={`carousel-form-button${file ? "" : "-disable"}`}
            disabled={file ? false : true}
            type={"submit"}
            style={{ fontSize: `${width < 545 ? "0.6rem" : "0.9rem"}` }}
          >
            SUBMIT APPLICATION
          </button>
        </Flex>
        {file ? (
          <div className="carousel-form-upload-text-outer">
            <Text className="carousel-form-upload-text">
              Uploaded: {file.name}
            </Text>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
};

export default CarouselForm;
