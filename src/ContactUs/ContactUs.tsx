import React, { useContext, useState } from "react";
import "./ContactUs.css";
import { Button, Text, TextInput, Textarea, em } from "@mantine/core";
import { NavBarContext } from "../App";
import useWindowDimensions from "../Components/useWindowsDimensions";

const ContactUs = () => {
  const { width, height } = useWindowDimensions();
  const contactUs = useContext(NavBarContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkDisable = () => {
    return name && email;
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div ref={contactUs.contactUs}>
      <form className="contact-us-main-div" onSubmit={onSubmit}>
        <Text className="contact-us-title">Contact Us</Text>
        <TextInput
          label="Name"
          className="contact-us-label"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></TextInput>
        <TextInput
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
