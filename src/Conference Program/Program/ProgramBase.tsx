import { Center, Text } from "@mantine/core";
import React, { FunctionComponent, useState, useRef } from "react";
import "./ProgramBase.css";

interface ProgramBaseProps {
  title: string;
  information: string;
}
const ProgramBase: FunctionComponent<ProgramBaseProps> = ({
  title,
  information,
}) => {
  const [click, setClick] = useState<Boolean>(false);
  const parentRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="program-base-drop-down">
        <Text
          className="program-base-text-title"
          fz="md"
          fw={500}
          onClick={() => setClick(!click)}
        >
          {title}
        </Text>
        <div
          className="program-base-drop-down-content"
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
          <Text fz="md" className="program-base-about-text">
            {information}
          </Text>
        </div>
      </div>
    </>
  );
};

export default ProgramBase;
