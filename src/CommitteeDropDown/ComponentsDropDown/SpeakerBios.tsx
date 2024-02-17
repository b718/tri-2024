import React from "react";
import "./ComponentsCommitee.css";
import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import DJPHeadshot from "../../Images/PawelJastreboff.png";
import DRTHeadshot from "../../Images/drt-headshot.jpg";
import hazelHart from "../../Images/Goedhart-Photo.jpeg";
import husain from "../../Images/Husain-Photo.png";

const SpeakerBios = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"flex-start"}
        style={{ marginTop: "1rem" }}
      >
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Dr Pawel Jastreboff
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Pawel J. Jastreboff, Ph.D., Sc.D., M.B.A., is currently
                Professor Emeritus at Department of Otolaryngology, Emory
                University School of Medicine, and Visiting Professor sine die
                at University College London, London, UK. He is Founder and CEO
                of Jastreboff Hearing Disorders Foundation, Inc., where he
                continues his research on tinnitus and decreased sound tolerance
                (DST) and provides clinical services to patients with a variety
                of hearing disorders. He continues to be involved in teaching
                professionals, including providing intensive courses on
                Management of Tinnitus and Decreased Sound Tolerance with
                Tinnitus Retraining Therapy (TRT) and has thus far offered more
                than 50 courses in the U.S.A. and over 90 internationally.
              </div>{" "}
              <div style={{ marginTop: "1rem" }}>
                Dr. Jastreboff received a Ph.D. in Neurophysiology and Doctor of
                Sciences Degree (habilitation) in Neuroscience from the Polish
                Academy of Sciences. He did his Postdoctoral training at the
                University of Tokyo, Japan. He received an M.B.A. from Goizueta
                Business School at Emory University. He has been a Visiting
                Professor at University of Tokyo and at Yale University and
                Adjunct Professor at Salus University teaching tinnitus and
                hyperacusis class in the Au.D. program. He is a co-author of
                over 140 papers, 180 abstracts and three books. In 1993 he
                received the prestigious Robert W. Hocks award for his
                contribution to the field of tinnitus and in 2014, at 11th
                International Tinnitus Seminar the Award for Clinical
                Excellence, for 25 years work of TRT.
              </div>{" "}
              <div style={{ marginTop: "1rem" }}>
                Dr. Jastreboff is recognized for his development of the first
                accepted animal model of tinnitus, the neurophysiological model
                of tinnitus and based on its clinical method of tinnitus and DST
                treatment, known as TRT. Furthermore, collaborating closely with
                his wife and colleague, Dr. Margaret M. Jastreboff, Ph.D., he
                proposed a concept, name, and treatment for specific a version
                of DST - misophonia - when patients exhibit negative reactions
                to specific for a given patient patterns of sound.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <Flex
              direction={"column"}
              justify={"flex-start"}
              align={"flex-start"}
            >
              <div
                className={`${
                  width < 720
                    ? "componenets-commitee-image-middle"
                    : "componenets-commitee-image"
                }`}
              >
                <Image
                  src={DJPHeadshot}
                  height={160}
                  fit="contain"
                  // className="componenets-commitee-image"
                ></Image>
              </div>
            </Flex>
          </Center>
        </Grid.Col>
      </Grid>

      <hr
        style={{
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
      />

      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"flex-start"}
      >
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Dr Richard Tyler
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Richard Tyler graduated as one of the first clinical
                audiologists in Canada at The University of Western Ontario. He
                completed a Ph.D. in Psychoacoustics at The University of Iowa
                and followed that with three years at the Medical Research
                Council in England.
              </div>
              <div style={{ marginTop: "1rem" }}>
                Dr. Tyler then returned to the University of Iowa as a faculty
                member in both the Department of Otolaryngology Head and Neck
                Surgery and in the Department of Communication Sciences and
                Disorders. His research contributions in audiology, cochlear
                implants, tinnitus, and hyperacusis are recognized the
                world-over.
              </div>
              <div style={{ marginTop: "1rem" }}>
                His scientific work includes the quantification of tinnitus,
                necessary for its investigation, as well as the investigation of
                different treatments. Dr. Tyler sees tinnitus patients weekly
                and hosts an international conference on the management of
                tinnitus and hyperacusis patients to educate clinicians on
                cutting-edge evaluation and management strategies. He has edited
                The Tinnitus Handbook (2000), Tinnitus Treatments: Clinical
                Protocols Tyler, R.S. (Ed.). (2006), and The Consumer Handbook
                on Tinnitus (2008, 2016).
              </div>
              <div style={{ marginTop: "1rem" }}>
                It is an honor to welcome him as a keynote speaker to the first
                Tinnitus Research Initiative conference held in Canada.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image
                src={DRTHeadshot}
                height={160}
                fit="contain"
                // className="componenets-commitee-image"
              ></Image>
            </div>
          </Center>
        </Grid.Col>
      </Grid>

      <hr
        style={{
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
      />

      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"flex-start"}
      >
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Hazel Goedhart
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Hazel received her Bachelor’s degree in Geology and Master’s
                degree in Political Science, both from the Free University of
                Amsterdam. She started her career in the non-profit sector
                working on human rights and sustainability issues.
              </div>
              <div style={{ marginTop: "1rem" }}>
                For the past twelve years Hazel has worked for Sustainalytics, a
                company that provides environmental, social and governance (ESG)
                data to institutional investors. She initially worked as an ESG
                analyst researching companies in the healthcare and chemicals
                sector. She then ventured into more operational roles, focusing
                on project management and team management. She currently leads a
                team of client service experts and is building a new team to
                facilitate client communications.
              </div>
              <div style={{ marginTop: "1rem" }}>
                In 2018, Hazel developed tinnitus, and struggled for months to
                find a way to cope with a condition that can be debilitating for
                some. She started volunteering for Tinnitus Hub, a non- profit
                patient organization that aims to improve the lives of people
                suffering from tinnitus. She currently manages Tinnitus Hub – in
                a volunteer capacity, next to her day job — together with Markku
                Vesala, the founder.
              </div>
              <div style={{ marginTop: "1rem" }}>
                Her volunteer work for Tinnitus Hub has made Hazel passionate
                about representing the voice of the patient, empowering people
                with tinnitus through education, influencing the medical
                community to take tinnitus more seriously, and advocating for
                more cure focused tinnitus research. She strongly believes in
                the power of online communities to affect change.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image
                src={hazelHart}
                height={160}
                fit="contain"
                // className="componenets-commitee-image"
              ></Image>
            </div>
          </Center>
        </Grid.Col>
      </Grid>

      <hr
        style={{
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
      />

      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"flex-start"}
      >
        <Grid.Col span={width < 720 ? 1 : 5}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Dr. Fatima T. Husain{" "}
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Dr. Fatima T. Husain is an auditory cognitive neuroscientist by
                training and a Professor at the University of Illinois
                Urbana-Champaign, USA, where she is affiliated with the
                Department of Speech and Hearing Science, the Neuroscience
                Program, and the Beckman Institute for Advanced Science and
                Technology. She also presently serves as the Associate Dean for
                Diversity, Equity, and Inclusion in the College of Applied
                Health Sciences. Dr. Husain uses behavioral studies, advanced
                brain imaging, and computational modeling to better understand
                brain function as related to all aspects of hearing.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image
                src={husain}
                height={160}
                fit="contain"
                // className="componenets-commitee-image"
              ></Image>
            </div>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SpeakerBios;
