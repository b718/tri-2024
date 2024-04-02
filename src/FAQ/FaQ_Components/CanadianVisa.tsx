import React from "react";
import "./CanadianVisa.css";
import { Text } from "@mantine/core";

const CanadianVisa = () => {
  return (
    <div className="cv-main-div">
      <div className="cv-div-sections">
        <Text className="cv-div-title">
          VISA APPLICATIONS FOR INTERNATIONAL DELEGATES:
        </Text>
        <Text>
          Any countries listed on CIC website link would require a VISA to enter
          Canada and attend a conference.
        </Text>
        <ol type={"a"}>
          <li>
            Countries requiring VISA: www.cic.gc.ca/english/visit/visas.asp
          </li>
          <li>
            How to apply for VISA: www.cic.gc.ca/english/visit/business.asp
          </li>
          <li>
            Video showing how to apply for “Temporary Resident Visa” --
            www.cic.gc.ca/english/department/media/multimedia/video/complete-application/complete-
            application.asp
          </li>
          <li>
            Processing Times --
            http://www.cic.gc.ca/english/information/times/temp/visitors.asp
          </li>
        </ol>
      </div>
      <div className="cv-div-sections">
        <Text className="cv-div-title">
          ELECTRONIC TRAVEL AUTHORIZATION (eTA):
        </Text>
        <Text>
          Visa-exempt foreign nationals who fly or transit through Canada will
          need an Electronic Travel Authorization (eTA). Exceptions include U.S.
          citizens and travellers with a valid visa. Entry requirements for
          other methods of travel (land, sea) have not changed. Don’t wait until
          the last minute – apply NOW for an eTA.
        </Text>
        <ol type={"a"}>
          <li>
            Find out if you need an eTA:
            http://www.cic.gc.ca/english/visit/visas.asp
          </li>
          <li>
            What you need to know video:
            https://www.canada.ca/en/immigration-refugees-
            citizenship/news/video/electronic-travel-authorization-what-you-need-know.html
          </li>
          <li>
            Learn about eTAs in your own language:
            http://www.cic.gc.ca/english/visit/eta-facts-en.asp
          </li>
          <li>
            Apply on-line for your eTA:
            http://www.cic.gc.ca/english/visit/eta-start.asp
          </li>
        </ol>
        <Text>
          <b>• Reminder:</b> You don't need an eTA if you are a Canadian Citizen
          or a Citizen of the United States.
        </Text>
      </div>
    </div>
  );
};

export default CanadianVisa;
