import React, { useState } from "react";
import "./CarouselForm.css";
import { Center, Flex, Loader, Text, TextInput, em } from "@mantine/core";
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
  const [email, setEmail] = useState("");

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
      email.length > 0 &&
      file !== null
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
      formData.append("postal", postal);
      formData.append("country", country);
      formData.append("title", title);
      formData.append("topic", topic);
      formData.append("keyWords", keyWords);
      formData.append("email", email);
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
        setLoading("submitted");
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
    setEmail("");
    setFile(null);
  };

  return (
    <div className="carousel-form-outer-div">
      <form
        className="carousel-form-inner-div"
        style={{
          padding: `${
            width < 500 ? "1rem 1rem 1rem 1rem" : "5rem 5rem 5rem 5rem"
          }`,
        }}
        onSubmit={onSubmit}
      >
        <Text className="carousel-form-title">Abstract Submissions</Text>
        {/* <Text style={{ fontStyle: "italic" }}>
          Deadline extended to March 1st!
        </Text> */}

        <Text>Submissions are now closed.</Text>
      </form>
    </div>
  );
};

export default CarouselForm;
