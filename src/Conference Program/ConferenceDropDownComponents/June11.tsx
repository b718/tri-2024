import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import { Flex, Image } from "@mantine/core";
import June11th8AM from "../HelperComponents/June11th8AM";
import June11th1030AM from "../HelperComponents/June11th1030AM";
import June11th1PM from "../HelperComponents/June11th1PM";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import June11thSchedule from "../../Images/Tuesday June 11.png";
import June11thScheduleTwo from "../../Images/june11th-2.png";
import NewJune11thSchedule from "../../Images/june11th-new.png";
import C440June11th9AM from "../HelperComponents/C440-June11th9AM";
import C440June11th1PM from "../HelperComponents/C440June11th1PM";
import C440June11th230PM from "../HelperComponents/C440June11th230PM";

const June11 = () => {
  const { width, height } = useWindowDimensions();

  const triCommitteeRogersSize = () => {
    if (width < 400) {
      return 300;
    } else if (width < 500) {
      return 350;
    } else if (width < 580) {
      return 400;
    } else {
      return 700;
    }
    //961
    //500
  };
  return (
    <div>
      {" "}
      <Flex direction={"column"}>
        <div
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <Image
            src={June11thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>
    </div>
  );
};

export default June11;
