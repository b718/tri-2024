import React, { useContext, useEffect, useState, useRef } from "react";
import "./Committee.css";
import { Center, Grid, Image, Text, Flex } from "@mantine/core";
import { NavBarContext } from "../App";
import TriCommitteePicture from "../Images/Logos/TRI2024 Full Logo/TRI2024_Logo_Medium.png";
import CommitteBridgePicture from "../Images/divit-sharma-9mvjJFDLYzg-unsplash.jpg";
import CommitteeStairsPicture from "../Images/alexander-serzhantov-xN0zxqQSdCk-unsplash.jpg";
import { Parallax, useParallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../Components/useWindowsDimensions";
import CommiteePage from "../CommiteePage/CommiteePage";
import ScientificCommitee from "../ScientificCommitee/ScientificCommitee";

const Committee = () => {
  const committeeRef = useContext(NavBarContext);
  const { width, height } = useWindowDimensions();
  const [hoverStairs, setHoverStairs] = useState(false);
  const [hoverBridge, setHoverBridge] = useState(false);

  const { ref: mainCommitteeDiv, inView: mainCommitteeDivVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: westCoastCommitteeDiv, inView: westCoastCommitteeDivVisible } =
    useInView({
      triggerOnce: true,
    });

  const { ref: bridgePicture, inView: bridgePictureVisible } = useInView({
    triggerOnce: true,
  });

  const { ref: triCommitteePhoto, inView: triCommitteePhotoVisible } =
    useInView({
      triggerOnce: true,
    });

  const { ref: stairsPicture, inView: stairsPictureVisible } = useInView({
    triggerOnce: true,
  });
  // const stairs = useParallax<HTMLDivElement>({
  //   // rotateX: [0, 40],
  //   rotateY: [-40, 0],
  //   // rotateZ: [0, 40],
  // });

  // const bridge = useParallax<HTMLDivElement>({
  //   // rotateX: [0, 40],
  //   rotateY: [0, 40],
  //   // rotateZ: [0, 40],
  // });

  const triCommitteePictureSize = () => {
    if (width > 1040) {
      return 400;
    } else if (width < 400) {
      return 250;
    } else if (width < 620) {
      return 350;
    } else if (width < 961) {
      return 400;
    } else {
      return 320;
    }
    //961
  };

  const triCommitteeBridgeSize = () => {
    if (width > 1040) {
      return 650;
    } else if (width < 501) {
      return 350;
    } else if (width < 620) {
      return 500;
    } else if (width < 961) {
      return 500;
    } else {
      return 650;
    }
    //650
  };
  return (
    <div className="committee-outer-container" ref={committeeRef.committeeRef}>
      <div className="committee-contain-div">
        <Center>
          {width > 961 ? (
            <Grid columns={8} className="committee-grid" grow={true}>
              <Grid.Col span={4} className="committee-grid-column-left">
                <div
                  className={`committee-text-left${
                    mainCommitteeDivVisible ? "-active" : ""
                  }`}
                  ref={mainCommitteeDiv}
                >
                  <Text className="committee-text-left-header">
                    A Warm Welcome
                  </Text>
                  <Text className="committee-text-left-paragraph">
                    We are thrilled to return after the cancellation of TRI
                    2020, reinvigorated and honoured to host the first-ever TRI
                    Conference in Canada. TRI 2024 is a momentous occasion not
                    only for our conference series but for tinnitus and
                    hyperacusis research worldwide, as we gather an impressive
                    international community of scientists to collaborate.{" "}
                    <br></br>
                    <br></br>
                    TRI 2024 invites the global scientific community to engage
                    in a complete, packed program exploring the diverse
                    landscapes of tinnitus and hyperacusis research. Vibrant
                    discussions, debates, and the exchange of ideas to improve
                    the lives of our clients will take place over the
                    conference’s two days as we work to bridge the gaps between
                    research, clinical practice, and the experiences of those
                    affected by tinnitus and hyperacusis.
                    <br></br>
                    <br></br>
                    We look forward to seeing you here in beautiful Vancouver,
                    where international collaboration and transformative
                    discussions will take center stage.
                  </Text>

                  <Text className="committee-text-left-footer">
                    Carol Lau, Conference Organizer & Host <br></br>Sylvie
                    Hébert, Scientific Program Chair{" "}
                  </Text>
                </div>
              </Grid.Col>
              <Grid.Col span={4} className="committee-grid-column-right">
                <Image
                  width={triCommitteePictureSize()}
                  src={TriCommitteePicture}
                  className={`committee-grid-right-image${
                    triCommitteePhotoVisible ? "-active" : ""
                  }`}
                  ref={triCommitteePhoto}
                />
              </Grid.Col>
            </Grid>
          ) : (
            <Flex justify="center" align="center" direction="column">
              {" "}
              <Image
                width={triCommitteePictureSize()}
                src={TriCommitteePicture}
                className={`committee-grid-right-image${
                  triCommitteePhotoVisible ? "-active" : ""
                }`}
                ref={triCommitteePhoto}
              />{" "}
              <div
                className={`committee-text-left${
                  mainCommitteeDivVisible ? "-active" : ""
                }`}
                ref={mainCommitteeDiv}
              >
                <Text className="committee-text-left-header">
                  A Warm Welcome
                </Text>
                <Text className="committee-text-left-paragraph">
                  We are thrilled to return after the cancellation of TRI 2020,
                  reinvigorated and honoured to host the first-ever TRI
                  Conference in Canada. TRI 2024 is a momentous occasion not
                  only for our conference series but for tinnitus and
                  hyperacusis research worldwide, as we gather an impressive
                  international community of scientists to collaborate.{" "}
                  <br></br>
                  <br></br> TRI 2024 invites the global scientific community to
                  engage in a complete, packed program exploring the diverse
                  landscapes of tinnitus and hyperacusis research. Vibrant
                  discussions, debates, and the exchange of ideas to improve the
                  lives of our clients will take place over the conference’s two
                  days as we work to bridge the gaps between research, clinical
                  practice, and the experiences of those affected by tinnitus
                  and hyperacusis.
                  <br></br>
                  <br></br> We look forward to seeing you here in beautiful
                  Vancouver, where international collaboration and
                  transformative discussions will take center stage.
                </Text>

                <Text className="committee-text-left-footer">
                  Carol Lau, Conference Organizer & Host <br></br>Sylvie Hébert,
                  Scientific Program Chair{" "}
                </Text>
              </div>
            </Flex>
          )}
        </Center>
        <CommiteePage />
        <ScientificCommitee />
        <div
          // ref={stairs.ref}
          className={`committee-image-stairs${
            stairsPictureVisible ? "-active" : ""
          }`}
          ref={stairsPicture}
        >
          {/* <div className="committee-parallax-stairs"></div> */}
          <Image
            width={triCommitteePictureSize()}
            fit="contain"
            src={CommitteeStairsPicture}
            onMouseEnter={() => setHoverStairs(true)}
            onMouseLeave={() => setHoverStairs(false)}
          />
          <Text
            className={`committee-text-roll-over${
              hoverStairs ? "-active" : ""
            }`}
          >
            © Alexander Serzhantov
          </Text>
        </div>
        {/* <div className="committee-west-coast-grid-div"> */}
        {width > 961 ? (
          <Flex
            justify="center"
            align={"flex-end"}
            direction={"column"}
            className="committee-flex-before-961"
          >
            <div
              className={`committee-west-coast-text${
                westCoastCommitteeDivVisible ? "-active" : ""
              }`}
              ref={westCoastCommitteeDiv}
            >
              <Text className="committee-west-coast-text-header">
                Experience the West Coast
              </Text>
              <Text className="committee-west-coast-text-paragraph">
                Nestled on Canada's picturesque West Coast, Vancouver welcomes
                travellers with open arms – whether it's your first visit or a
                cherished return. From exploring Stanley Park's greenery, taking
                Alaskan cruises from its bustling port, or embarking on the
                scenic Rocky Mountain train journey, Vancouver promises an
                unforgettable summer adventure amid breathtaking natural beauty.
                <br></br>
                <br></br>
                Our conference venue at Robson Square is nestled in the heart of
                downtown Vancouver, with easy access to shopping, dining, and
                entertainment nearby. It's a dynamic focal point for both locals
                and visitors seeking diverse experiences in the city. Cycle
                along the Seawall, savour diverse cuisine, shop along Robson
                Street, and much more. Vancouver's summer invites you to
                experience the best of the city and nature in one captivating
                destination.
              </Text>
            </div>
            <div
              ref={bridgePicture}
              className={`committee-image-bridge${
                bridgePictureVisible ? "-active" : ""
              }`}
            >
              <Image
                width={650}
                fit="contain"
                src={CommitteBridgePicture}
                onMouseEnter={() => setHoverBridge(true)}
                onMouseLeave={() => setHoverBridge(false)}
              />
              <Text
                className={`committee-bridge-roll-over${
                  hoverBridge ? "-active" : ""
                }`}
              >
                © Divit Sharma
              </Text>
            </div>
          </Flex>
        ) : (
          <Flex justify="center" align="center" direction="column">
            {" "}
            <div
              className={`committee-west-coast-text${
                westCoastCommitteeDivVisible ? "-active" : ""
              }`}
              ref={westCoastCommitteeDiv}
            >
              <Text className="committee-west-coast-text-header">
                Experience the West Coast
              </Text>
              <Text className="committee-west-coast-text-paragraph">
                Nestled on Canada's picturesque West Coast, Vancouver welcomes
                travellers with open arms – whether it's your first visit or a
                cherished return. From exploring Stanley Park's greenery, taking
                Alaskan cruises from its bustling port, or embarking on the
                scenic Rocky Mountain train journey, Vancouver promises an
                unforgettable summer adventure amid breathtaking natural beauty.
                <br></br>
                <br></br>
                Our conference venue at Robson Square is nestled in the heart of
                downtown Vancouver, with easy access to shopping, dining, and
                entertainment nearby. It's a dynamic focal point for both locals
                and visitors seeking diverse experiences in the city. Cycle
                along the Seawall, savour diverse cuisine, shop along Robson
                Street, and much more. Vancouver's summer invites you to
                experience the best of the city and nature in one captivating
                destination.
              </Text>
            </div>
            <div
              // ref={bridge.ref}
              ref={bridgePicture}
              className={`committee-image-bridge${
                bridgePictureVisible ? "-active" : ""
              }`}
            >
              <Image
                width={triCommitteeBridgeSize()}
                fit="contain"
                src={CommitteBridgePicture}
                onMouseEnter={() => setHoverBridge(true)}
                onMouseLeave={() => setHoverBridge(false)}
              />
              <Text
                className={`committee-bridge-roll-over${
                  hoverBridge ? "-active" : ""
                }`}
              >
                © Divit Sharma
              </Text>
            </div>
          </Flex>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Committee;

{
  /* <div className="committee-parallax-container-stairs">
            <div
              className="committee-parallax-image-stairs"
              style={{
                backgroundPositionY: `calc(50% + ${scrollPosition * 0.5}px)`,
              }}
            />
          </div>
          <Text className="committee-text-roll-over">
            © Alexander Serzhantov
          </Text> */
}

{
  /* <div className="committee-parallax-bridge"></div> */
}
