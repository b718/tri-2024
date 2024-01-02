import React, { useContext, useState } from "react";
import "./FaQ.css";
import { Image, Text } from "@mantine/core";
import DropDownFaQ from "./DropDownFaQ/DropDownFaQ";
import RogersArenaPicture from "../Images/nicolas-savignat-UxK-LXQraJ4-unsplash.jpg";
import { NavBarContext } from "../App";
import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../Components/useWindowsDimensions";
import Venue from "../Venue/Venue";

const FaQ = () => {
  const faqRef = useContext(NavBarContext);
  const [hoverFAQ, setHoverFAQ] = useState(false);
  const { width, height } = useWindowDimensions();

  const { ref: rogersPicture, inView: rogersPictureVisible } = useInView({
    triggerOnce: true,
  });

  const triCommitteeRogersSize = () => {
    if (width < 400) {
      return 300;
    } else if (width < 500) {
      return 350;
    } else if (width < 580) {
      return 400;
    } else {
      return 500;
    }
    //961
    //500
  };

  const { ref: mainFaqDiv, inView: mainFaqDivVisible } = useInView({
    triggerOnce: true,
  });

  const GetStarted = [
    ["DESTINATION CANADA", "https://www.destinationvancouver.com/"],
    ["HELLO BC", "https://www.hellobc.com/places-to-go/vancouver/"],
    [
      "CITY OF VANCOUVER",
      "https://vancouver.ca/guides/visiting-vancouver.aspx",
    ],
    [
      "TRIP ADVISOR",
      "https://www.tripadvisor.ca/Tourism-g154943-Vancouver_British_Columbia-Vacations.html",
    ],
  ];

  const GetAround = [
    [
      "CAR RENTALS",
      "https://www.yvr.ca/en/passengers/transportation/car-rentals",
    ],
    ["TRANSLINK–PUBLIC TRANSIT", "https://www.translink.ca/"],
    ["BC FERRIES", "https://www.bcferries.com/"],
  ];

  const GetHousing = [
    [
      "DESTINATION CANADA—PLACES TO STAY",
      "https://www.destinationvancouver.com/places-to-stay/",
    ],
    ["AIRBNB", "https://www.airbnb.ca/vancouver-canada/stay"],
    [
      "VRBO",
      "https://www.vrbo.com/en-ca/vacation-rentals/canada/british-columbia/greater-vancouver/vancouver",
    ],

    [
      "TRIwP ADVISOR–HOTELS",
      "https://www.tripadvisor.ca/Hotels-g154943-Vancouver_British_Columbia-Hotels.html",
    ],
  ];

  const GetTourism = [
    [
      "DESTINATION CANADA—ARTS + CULTURE",
      "https://www.destinationvancouver.com/activities/arts-culture/",
    ],
    [
      "TRIP ADVISOR–CULTURAL TOURS",
      "https://www.tripadvisor.ca/Attractions-g154943-Activities-c42-t225-Vancouver_British_Columbia.html",
    ],
    [
      "HELLO BC–MUST-EXPERIENCE ATTRACTIONS",
      "https://www.hellobc.com/stories/be-a-tourist-in-your-own-town-with-these-must-experience-attractions?ds_rl=1265163&ds_rl=1283778&ds_rl=1265163&&&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw2UYQMgNDr8txv9FOC8Y6R9L6BUMeoI6kIYvfVgYdOLUxPDrPk5W6saAp0tEALw_wcB&gclsrc=aw.ds",
    ],
    [
      "ALASKAN CRUISES",
      "https://www.affordabletours.com/cruises/d/port/alaska-all/vancouver-canada/",
    ],
    ["ROCKY MOUNTAINEER", "https://www.rockymountaineer.com/"],
    [
      "JUNE CALENDAR OF EVENTS",
      "https://www.destinationvancouver.com/events/calendar-of-events/vancouver-events-in-june/",
    ],
  ];

  return (
    <div>
      <div
        className={`faq-main-div${mainFaqDivVisible ? "-active" : ""}`}
        ref={mainFaqDiv}
      >
        <div
          // ref={rogersArena.ref}
          className={`faq-rogers-arena-picture${
            rogersPictureVisible ? "-active" : ""
          }`}
          ref={rogersPicture}
        >
          <Image
            width={triCommitteeRogersSize()}
            fit="contain"
            src={RogersArenaPicture}
            onMouseEnter={() => setHoverFAQ(true)}
            onMouseLeave={() => setHoverFAQ(false)}
          />
          {/* <div className="faq-parallax-rogers"></div> */}
          <Text className={`faq-roger-roll-over${hoverFAQ ? "-active" : ""}`}>
            © Nicolas Savignat
          </Text>
        </div>{" "}
        <Text className="faq-main-header" ref={faqRef.faqRef}>
          Travel + Tourism
        </Text>
        <hr style={{ maxWidth: "98vw" }} />
        <DropDownFaQ
          title={"What you need to know: Vancouver 101"}
          text={
            "Vancouver is best known for its stunning local scenery, with the city surrounded by mountains, water and diverse wildlife. This beautiful landscape offers no shortage of things to do. Learn about the history of Vancouver and its natural surroundings, explore colourful neighbourhoods, local hikes, the renowned culinary scene, or book an excursion out of town for the ultimate adventure. Some helpful sites linked below will get you covered on all the basics and have you looking forward to your trip."
          }
          links={GetStarted}
        />
        <DropDownFaQ
          title={"How to get around town"}
          text={
            "Whether by car, rideshare, public transit, bike or foot, Vancouver is an easily commutable city. Car rentals are available at the YVR Airport for those with plans far and wide, otherwise, public transit will bring you anywhere you need to go. Become familiar with the SkyTrain (light rail) and SeaBus ferry (connecting Downtown to the mountainous North Shore). For further adventures to Vancouver Island, enjoy sailing over the water on BC Ferries. "
          }
          links={GetAround}
        />
        <DropDownFaQ
          title={"How to find accommodations"}
          text={
            "There are a variety of great neighbourhoods and places to stay in Vancouver. Book a hotel Downtown to be close to all the action (and our venue at Robson Square), the West End for proximity to Stanley Park and the seawall, an AirBnb in Yaletown near packed blocks of chic restaurants, plus many more options. "
          }
          links={GetHousing}
        />
        <DropDownFaQ
          title={"Vancouver tourism"}
          text={
            "Vancouver has long been a popular tourist destination known for its natural beauty, outdoor activities, cultural attractions, and culinary scene. Learn about the local First Nations people on a walking tour, explore art and theatre on Granville Island, take a whale-watching tour off the coast, and much more. For travellers going the extra mile, Alaskan cruises and train rides on the Rocky Mountaineer are easily accessible from the city."
          }
          links={GetTourism}
        />
        <Venue />
      </div>
    </div>
  );
};

export default FaQ;
