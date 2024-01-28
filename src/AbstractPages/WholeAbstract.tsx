import React, { useEffect } from "react";
import "./WholeAbstract.css";
import { Text } from "@mantine/core";
import AbstractPages from "./AbstractPages";
import MondayJune10th from "./MondayJune10th/MondayJune10th";
import TuesdayJune11th from "./TuesdayJune11th/TuesdayJune11th";
import June12thPhysicalLinks from "./WednesdayJune12th/June12thPhysicalLinks";
import TuesdayRealWorld from "./TuesdayJune11th/TuesdayRealWorld";
const WholeAbstract = () => {
  const scrollToSection = (elementRef: any): void => {
    let offSetTopInc = 0;
    window.scrollTo({
      top: offSetTopInc,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToSection(null);
  }, []);

  const margin = "3rem";
  return (
    <div className="whole-abstract-main-div">
      {" "}
      <Text
        style={{
          fontSize: "2.5rem",
          color: "#194177",
          marginTop: "3rem",
          marginLeft: "1rem",
        }}
      >
        Abstracts
      </Text>
      <AbstractPages
        date={"MONDAY, JUNE 10"}
        time={"08:00 - 09:00"}
        location={"Theatre"}
        type={"Symposium"}
        title={
          "Sound Tolerance Disorders and Tinnitus: Investigating Hyperacusis and Misophonia"
        }
        Component={MondayJune10th}
      />
      <hr style={{ marginTop: `${margin}` }} />
      <AbstractPages
        date={"TUESDAY, JUNE 11"}
        time={"11:00 - 12:00"}
        location={"Theatre"}
        type={"Symposium"}
        title={
          "How Should We Measure the Success of Tinnitus Trials and Interventions?"
        }
        Component={TuesdayJune11th}
      />
      <hr style={{ marginTop: `${margin}` }} />
      <AbstractPages
        date={"TUESDAY, JUNE 11"}
        time={"13:00 - 15:00"}
        location={"Theatre"}
        type={"Symposium"}
        title={
          "Real World Evidence for Multimodal Treatment Approaches for Tinnitus"
        }
        Component={TuesdayRealWorld}
      />
      <hr style={{ marginTop: `${margin}` }} />
      <AbstractPages
        date={"WEDNESDAY, JUNE 12"}
        time={"11:00 - 12:00"}
        location={"Theatre"}
        type={"Symposium"}
        title={"Tinnitus and Physical Links"}
        Component={June12thPhysicalLinks}
      />
    </div>
  );
};

export default WholeAbstract;
