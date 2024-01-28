import React from "react";
import "./TuesdayJune11th.css";
import { Text } from "@mantine/core";

const TuesdayJune11th = () => {
  return (
    <div>
      <div className="mj10-host">
        <Text>CHAIR:</Text>
        <Text>Hazel Goedhart,</Text>
        <Text>Tinnitus Hub, The Netherlands</Text>
      </div>

      <div className="mj10-list">
        <Text>SPEAKERS: </Text>
        <ol className="mj10-inner-list">
          <li>Hazel Goedhart, Tinnitus Hub, the Netherlands</li>
          <li>Josef Rauschecker, Georgetown University, United States</li>
          <li>Inge Stegeman, University of Utrecht, The Netherlands</li>
          <li>Diane Smit, University of Utrecht, The Netherlands</li>
        </ol>
      </div>

      <Text className="mj10-text">
        Most clinical trials for tinnitus use the Tinnitus Functional Index
        (TFI) or Tinnitus Handicap Inventory (THI) to measure success. Both of
        these are standardized questionnaires taken at various points before,
        during, and after an intervention. But how reliable and valid are these
        metrics as outcome measures? What are the right and wrong applications
        of these metrics? And what do they truly represent in terms of patient
        outcomes in the real world?
      </Text>

      <Text className="mj10-text">
        Specifically, some of the downsides of using the TFI/THI are:
        <br />
        - From a statistical perspective, TFI/THI should be used to determine
        sample sizes, not necessarily to measure improvement.
        <br />- Thresholds for 'clinical significance' do not reflect a sizable
        improvement and thus can lead to misleading communication and marketing
        of trial results.
        <br />- Certain aspects of tinnitus that patients care about, such as
        the variability of one's tinnitus, are not reflected in the TFI/THI.
        <br />- We know from patient engagement (e.g. surveys) that patients
        expect a tinnitus intervention to reduce the loudness of their tinnitus.
        Continuing use of the TFI/THI, which mostly reflect distress, detracts
        from the need to target and measure loudness reduction.
        <br />- It is questionable, overall, whether TFI/THI meaningfully
        reflect patient improvement, vis-à-vis for instance simply asking the
        patient "how much did this intervention help you?"
      </Text>

      <Text className="mj10-text">
        In sum, the development of a new set of outcome measures is required to
        meaningfully assess the success of tinnitus trials and interventions.
        These outcome measures need to be statistically rigorous, transparent,
        and reflect patient expectations.
      </Text>
    </div>
  );
};

export default TuesdayJune11th;
