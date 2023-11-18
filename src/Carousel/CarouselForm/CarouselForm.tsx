import React, { useState } from "react";
import "./CarouselForm.css";
import { Center, Flex, Loader, Text, TextInput } from "@mantine/core";
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

  const [author, setAuthor] = useState("");
  const [street, setStreet] = useState("");
  const [state, setstate] = useState("");
  const [suite, setSuite] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [keyWords, setKeyWords] = useState("");

  const checkUpload = () => {
    return (
      author.length > 0 &&
      street.length > 0 &&
      state.length > 0 &&
      postal.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      title.length > 0 &&
      topic.length > 0 &&
      keyWords.length > 0 &&
      file
    );
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      console.log(file);
      formData.append("author", author);
      formData.append("street", street);
      formData.append("state", state);
      formData.append("suite", suite);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("title", title);
      formData.append("topic", topic);
      formData.append("keyWords", keyWords);
      formData.append("pdfFile", file);

      setLoading("loading");
      const response = await fetch(
        "https://tri-2024-back-end.onrender.com/submit-poster-form",
        // "http://localhost:3001/submit-poster-form",
        {
          method: "POST",
          body: formData,
        }
      ).then(() => {
        setLoading("start");
      });
    }
    setAuthor("");
    setStreet("");
    setstate("");
    setSuite("");
    setPostal("");
    setCity("");
    setCountry("");
    setTitle("");
    setTopic("");
    setKeyWords("");
    setFile(null);
  };

  return (
    <div className="carousel-form-outer-div">
      <form
        className="carousel-form-inner-div"
        style={{
          padding: `${
            width < 500 ? "1rem 1rem 1rem 1rem" : "6rem 6rem 6rem 6rem"
          }`,
        }}
        onSubmit={onSubmit}
      >
        <Text className="carousel-form-title">Abstract Submissions</Text>

        <Flex direction={"column"} style={{ marginTop: "2rem" }}>
          <Text className="">Author</Text>
          <TextInput
            placeholder="Author (name, affiliation, email address)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <Text style={{ marginTop: "2rem" }}>Address</Text>
          <Flex gap={"3rem"}>
            <Flex direction={"column"} gap={"1rem"}>
              <TextInput
                placeholder="Street Address"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <TextInput
                placeholder="Apartment, suite"
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
              />
              <TextInput
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Flex>
            <Flex direction={"column"} gap={"1rem"}>
              <TextInput
                placeholder="Province/State"
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
              <TextInput
                placeholder="Postal Code"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
              />
              <TextInput
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Flex>
          </Flex>

          <Flex direction={"column"}>
            <Text className="" style={{ marginTop: "2rem" }}>
              Title Of Abstract
            </Text>
            <TextInput
              maxLength={120}
              placeholder="Title of abstract (120 characters max)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Text className="" style={{ marginTop: "1rem" }}>
              Primary Topic
            </Text>
            <TextInput
              placeholder="Primary Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Text className="" style={{ marginTop: "1rem" }}>
              Keywords
            </Text>
            <TextInput
              placeholder="Keywords (5 max)"
              value={keyWords}
              onChange={(e) => setKeyWords(e.target.value)}
            />
          </Flex>
        </Flex>
        <Text style={{ marginTop: "2rem" }}>
          Upload abstract through the form below (500 words max)
        </Text>
        <Flex direction={"row"} gap={"2rem"}>
          <button
            className="carousel-form-button"
            style={{ fontSize: `${width < 545 ? "0.6rem" : "0.8rem"}` }}
          >
            <a
              href="triMainPdf.pdf"
              download="tri-2024-save-the-date"
              className="carousel-download-a"
            >
              DOWNLOAD FORM
            </a>
          </button>
          <Flex direction={"column"}>
            <label
              htmlFor="fileUpload"
              className={`carousel-form-button`}
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
              onChange={handleFileChange}
            ></input>
          </Flex>
        </Flex>

        <hr
          style={{
            border: "1px solid lightgray",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        />

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

        <button
          className={`carousel-form-button${checkUpload() ? "" : "-disable"}`}
          disabled={checkUpload() ? false : true}
          type={"submit"}
          style={{ fontSize: `${width < 545 ? "0.6rem" : "0.8rem"}` }}
        >
          SUBMIT APPLICATION
        </button>
      </form>
    </div>
  );
};

export default CarouselForm;
