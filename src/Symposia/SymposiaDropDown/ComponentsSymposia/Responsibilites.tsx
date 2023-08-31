import React from "react";
import "./ComponentSymposia.css";
import { Text } from "@mantine/core";

const Responsibilites = () => {
  return (
    <div>
      <Text className="general-information-main-div">
        All symposia must have a lead organizer who serves as the primary point
        of contact for the ProgramCommittee.
      </Text>
      <Text className="general-information-main-div">
        We will also ask you to name two alternate contacts.
      </Text>
      <Text className="general-information-main-div">
        We will provide meeting space and onsite logistical support for all
        symposia. However, the conference is not able to provide any travel or
        accommodation assistance, registration subsidies or waivers, or any
        other forms of support for the organizers or individual speakers named
        in any of the proposals. All participants will be required to register
        and pay for the conference and to cover their own travel expenses.
      </Text>
      <Text className="general-information-main-div">
        Symposium organizers are responsible for serving as the primary point of
        contact with their invited speakers throughout the planning process.
        Organizers will need to help ensure that all of their speakers submit
        abstracts through the online submission form before the specified
        deadline, and that all of their speakers register for the conference
        before the deadline for presenter registration. Speakers who fail to
        register by this date may be excluded from the conference program. We
        encourage symposium organizers to proactively communicate with their
        speakers about any updates or changes affecting their session, such as
        scheduling details, cancellations, and other circumstances as they
        arise.
      </Text>
    </div>
  );
};

export default Responsibilites;
