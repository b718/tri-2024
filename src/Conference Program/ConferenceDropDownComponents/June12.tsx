import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import React from "react";
import EventComponent from "./EventComponent/EventComponent";
import June12th8AM from "../HelperComponents/June12th8AM";
import June12th1030AM from "../HelperComponents/June12th1030AM";
import June12thScheduleTwo from "../../Images/june12th-2.png";
import NewJune12thSchedule from "../../Images/june12th-new.png";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import C440June12th9AM from "../HelperComponents/C440June12th9AM";
import C440June12th930AM from "../HelperComponents/C440June12th930AM";
import C440June12th1PM from "../HelperComponents/C440June12th1PM";
import C440June12th2PM from "../HelperComponents/C440June12th2PM";
import June12thSchedule from "../../Images/Wednesday June 12.png";

const June12 = () => {
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
      <Flex direction={"column"}>
        <div
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <Image
            src={June12thSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>
    </div>
  );
};

export default June12;
