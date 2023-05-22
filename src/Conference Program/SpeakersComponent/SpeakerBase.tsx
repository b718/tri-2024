import React, { FunctionComponent, useState, useRef } from "react";
import "./SpeakerBase.css";
import { Center, Image, Text, Flex } from "@mantine/core";
interface SpeakerBaseProps {
  picture: string;
  name: string;
  school: string;
  spec: string;
  about: string;
  titleAbout: string;
}
const SpeakerBase: FunctionComponent<SpeakerBaseProps> = ({
  picture,
  name,
  school,
  spec,
  about,
  titleAbout,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Center>
        <div className="speaker-base-drop-down">
          <Center>
            <Flex
              mih={50}
              justify="center"
              align="center"
              direction="column"
              wrap="wrap"
              onClick={() => setClick(!click)}
              className="speaker-base-flex-click"
            >
              <Image height={130} fit="contain" src={picture} />
              <Text fz="md" fw={500}>
                {name}
              </Text>
              <Text fz="xs">{school}</Text>
              <Text fz="md" fw={500} style={{ marginTop: "0.3rem" }}>
                {spec}
              </Text>
            </Flex>
          </Center>
          <div
            className="speaker-base-drop-down-content"
            ref={parentRef}
            style={
              click
                ? {
                    height: parentRef.current?.scrollHeight,
                  }
                : {
                    height: "0px",
                  }
            }
          >
            <Text fz="lg" fw={500} className="speaker-base-title-about">
              {titleAbout}
            </Text>
            <Text fz="md" className="speaker-base-about-text">
              {about}
            </Text>
          </div>
        </div>
      </Center>
    </>
  );
};

export default SpeakerBase;
