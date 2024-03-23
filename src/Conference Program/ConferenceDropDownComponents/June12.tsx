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
import AbstractDropDown from "../../AbstractPages/AbstractDropDown";
import June12thMorning from "../../AbstractPages/WednesdayJune12th/June12thMorning";
import June12thOticon from "../../AbstractPages/WednesdayJune12th/June12thOticon";
import June12thPhysicalLinks from "../../AbstractPages/WednesdayJune12th/June12thPhysicalLinks";
import June12thRoundTable from "../../AbstractPages/WednesdayJune12th/June12thRoundTable";
import June12thSuccessful from "../../AbstractPages/WednesdayJune12th/June12thSuccessful";

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

      <AbstractDropDown
        title={"TINNITUS ASSESSMENT AND COMORBIDITIES"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"8:00 - 9:00"}
        type={"Opening Session:"}
        Component={June12thMorning}
      />

      <AbstractDropDown
        title={"THE SUCCESSFUL TINNITUS AUDIOLOGIST"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"9:00 - 9:30"}
        type={"Workshop:"}
        Component={June12thSuccessful}
      />

      <AbstractDropDown
        title={"NAVIGATING OTICON'S TINNITUS SOUND SUPPORT IN THE GENIE 2.0"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"10:30 - 11:00"}
        type={"Sponsorship Session:"}
        Component={June12thOticon}
      />

      <AbstractDropDown
        title={"TINNITUS AND PHYSICAL LINKS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"10:30 - 12:00"}
        type={"Symposium:"}
        Component={June12thPhysicalLinks}
      />

      <AbstractDropDown
        title={"HETEROGENIETY OF TINNITUS"}
        date={"WEDNESDAY, JUNE 12th"}
        time={"3:00 - 4:00"}
        type={"Round Table:"}
        Component={June12thRoundTable}
      />
    </div>
  );
};

export default June12;
