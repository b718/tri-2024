import React, { useContext, useState } from "react";
import "./ContactUs.css";
import { Button, Loader, Text, TextInput, Textarea, em } from "@mantine/core";
import { NavBarContext } from "../App";
import useWindowDimensions from "../Components/useWindowsDimensions";

const ContactUs = () => {
  const { width, height } = useWindowDimensions();
  const contactUs = useContext(NavBarContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("start");

  const checkDisable = () => {
    return name && email;
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const contactObject = {
      name: name,
      email: email,
      message: message,
    };

    setLoading("loading");
    const x = await fetch("https://tri-2024-back-end.onrender.com/contact-us", {
      method: "POST",
      body: JSON.stringify({
        contactObject,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setLoading("start");
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div ref={contactUs.contactUs}>
      <form className="contact-us-main-div" onSubmit={onSubmit}>
        <Text className="contact-us-title">Contact Us</Text>
        <Text className="contact-us-label" style={{ color: "rgb(26 65 119)" }}>
          Vancouver Tinnitus and Hyperacusis Clinic
        </Text>
        <Text className="contact-us-label" style={{ color: "rgb(26 65 119)" }}>
          Business Number: 868162389
        </Text>
        <TextInput
          required={true}
          label="Name"
          className="contact-us-label"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextInput>
        <TextInput
          required={true}
          label="Email"
          className="contact-us-label"
          style={{ marginTop: "1rem" }}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></TextInput>
        <Textarea
          label="Message"
          autosize
          minRows={2}
          className="contact-us-label"
          style={{ marginTop: "1rem" }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        >
          {" "}
        </Textarea>
        <button
          className={`contact-us-button${!checkDisable() ? "-disable" : ""}`}
          style={{ fontSize: `${width < 545 ? "0.6rem" : "0.9rem"}` }}
          type={"submit"}
          disabled={!checkDisable()}
        >
          Submit{" "}
          {loading === "loading" ? (
            <Loader
              color="gray"
              size="0.8rem"
              style={{
                marginLeft: "0.5rem",
                maxWidth: "fit-content",
              }}
            />
          ) : (
            <div></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
