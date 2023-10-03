import React, { useState } from "react";
import "./CarouselForm.css";
import { Center, FileInput, Flex, Loader, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
const CarouselForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const { width, height } = useWindowDimensions();
  const [loading, setLoading] = useState("start");
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

      setLoading("loading");
      const response = await fetch(
        "https://tri-2024-back-end.onrender.com/submit-poster-form",
        {
          method: "POST",
          body: formData,
        }
      ).then(() => {
        setLoading("start");
      });
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
          Papers + posters submissions
        </Text>
        <Text className="carousel-form-text">Coming Soon</Text>
        <Flex direction={"row"} gap={"2rem"}>
          <Flex direction={"column"}>
            <label
              htmlFor="fileUpload"
              className="carousel-form-button"
              style={{ fontSize: `${width < 545 ? "0.6rem" : "0.8rem"}` }}
            >
              ADD AN ATTACHMENT +
            </label>
            <input
              className="carousel-form-button"
              type={"file"}
              id="fileUpload"
              accept=".pdf"
              style={{ display: "none" }}
              disabled={true}
              onChange={handleFileChange}
            ></input>
          </Flex>

          <button
            className={`carousel-form-button${file ? "" : "-disable"}`}
            disabled={file ? false : true}
            type={"submit"}
            style={{ fontSize: `${width < 545 ? "0.6rem" : "0.8rem"}` }}
          >
            SUBMIT APPLICATION
          </button>
        </Flex>
        {file ? (
          <div className="carousel-form-upload-text-outer">
            <Text className="carousel-form-upload-text">
              Uploaded: {file.name}
            </Text>
            {loading === "loading" ? (
              <Center>
                <Loader color="gray" />
              </Center>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
};

export default CarouselForm;
