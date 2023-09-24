import React, { useContext, useState } from "react";
import { Flex, Image, Text } from "@mantine/core";
import "./CommiteeSection.css";
import CommitteeDropDown from "./CommitteDropDown/CommitteeDropDown";
import CommiteeBios from "./ComponentsDropDown/CommiteeBios";
import { useInView } from "react-intersection-observer";
import debbieKonrad from "../Images/debbie-konrad-KChBIglfJkA-unsplash_small.jpg";
import dannyJong from "../Images/danny-jongerius-YpFV-5OVLp0-unsplash_small.jpg";
import mikeBenna from "../Images/mike-benna-PvAzebLejKU-unsplash_small.jpg";
import ScientificCommittee from "./ScientificCommittee/ScientificCommittee";
import ProgrammeCommitee from "./ProgrammeCommitee/ProgrammeCommitee";

const CommiteeSection = () => {
  const [debbie, setDebbie] = useState(false);
  const [danny, setDanny] = useState(false);
  const [mike, setMike] = useState(false);

  const { ref: debbieDiv, inView: debbieDivVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: dannyDiv, inView: dannyDivVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: mikeDiv, inView: mikeDivVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div className="commitee-section-main-div">
        <Text className="commitee-section-max-header">Committee</Text>

        <div className="commitee-section-main-div-under-text">
          <hr style={{ maxWidth: "98vw" }}></hr>
          <CommitteeDropDown
            title={"Conference Hosts"}
            Component={CommiteeBios}
          />
          <CommitteeDropDown
            title={"Scientific commitee"}
            Component={ScientificCommittee}
          />
          <CommitteeDropDown
            title={"Programme commitee"}
            Component={ProgrammeCommitee}
          />
        </div>

        <Flex direction={"column"} className="commitee-section-flex-images">
          <Flex align={"center"} justify={"center"} gap={"3rem"}>
            <div>
              <Image
                src={dannyJong}
                fit="contain"
                onMouseEnter={() => setDanny(true)}
                onMouseLeave={() => setDanny(false)}
                ref={dannyDiv}
                className={`committee-section-image-appear${
                  dannyDivVisible ? "-active" : ""
                }`}
              ></Image>
              <Text
                className={`committee-section-rollover-text${
                  danny ? "-active" : ""
                }`}
              >
                © Danny Jong
              </Text>
            </div>

            <div style={{ marginLeft: "2rem" }}>
              {" "}
              <Image
                src={mikeBenna}
                fit="contain"
                onMouseEnter={() => setMike(true)}
                onMouseLeave={() => setMike(false)}
                ref={mikeDiv}
                className={`committee-section-image-appear${
                  mikeDivVisible ? "-active" : ""
                }`}
              ></Image>
              <Text
                className={`committee-section-rollover-text${
                  mike ? "-active" : ""
                }`}
              >
                © Mike Benna
              </Text>
            </div>
          </Flex>
          <div className="commitee-section-bottom-image">
            <div>
              <Image
                src={debbieKonrad}
                fit="contain"
                width={400}
                onMouseEnter={() => setDebbie(true)}
                onMouseLeave={() => setDebbie(false)}
                ref={debbieDiv}
                className={`committee-section-image-appear${
                  debbieDivVisible ? "-active" : ""
                }`}
              ></Image>
              <Text
                className={`committee-section-rollover-text${
                  debbie ? "-active" : ""
                }`}
              >
                © Debbie Konrad
              </Text>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CommiteeSection;
