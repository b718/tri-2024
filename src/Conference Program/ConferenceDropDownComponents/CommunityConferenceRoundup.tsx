import { Flex, Image } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import communityConferenceSchedule from "../../Images/TRI2024_CommunityEvent_Mailer-1.png";
import confirmedCommunityConferenceSchedule from "../../Images/confirmed_agenda.png";
const CommunityConferenceRoundup = () => {
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
            src={communityConferenceSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
          <Image
            src={confirmedCommunityConferenceSchedule}
            fit={"cover"}
            width={triCommitteeRogersSize()}
          />
        </div>
      </Flex>
    </div>
  );
};

export default CommunityConferenceRoundup;
