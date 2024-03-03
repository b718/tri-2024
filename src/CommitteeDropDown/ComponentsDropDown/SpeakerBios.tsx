import React from "react";
import "./ComponentsCommitee.css";
import { Center, Flex, Grid, Image, Text } from "@mantine/core";
import useWindowDimensions from "../../Components/useWindowsDimensions";
import DJPHeadshot from "../../Images/PawelJastreboff.png";
import DRTHeadshot from "../../Images/drt-headshot.jpg";
import hazelHart from "../../Images/Goedhart-Photo.jpeg";
import husain from "../../Images/Husain-Photo.png";
import michesl from "../../Images/Michiels-Photo.jpg";
import mcmahan from "../../Images/McMahan Photo.jpg";
import norena from "../../Images/Norena Photo.jpg";
import dirk from "../../Images/De Ridder Headshot.jpg";
import jaste from "../../Images/JastreboffM Photo.jpg";
import carol from "../../Images/Carol-Lau.jpg";
import slyvie from "../../Images/sylvieHS.png";

const SpeakerBios = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <Grid
        columns={width < 720 ? 1 : 8}
        justify={"center"}
        align={"flex-start"}
      >
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              DE RIDDER, Dirk
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Professor Dr. Dirk De Ridder is a Neurosurgery professor at the
                Dunedin School of Medicine, University of Otago in New Zealand,
                where he has been conducting research on neuromodulation and
                teaching neuroscience for the past 10 years.
              </div>
              <div style={{ marginTop: "1rem" }}>
                His research focuses on the common characteristics of conditions
                such as thalamocortical dysrhythmias (pain, tinnitus,
                Parkinson&#39;s disease, depression, slow-wave epilepsy) and
                dysfunctions of the reward system (addiction, OCD, personality
                disorders, etc.).
              </div>
              <div style={{ marginTop: "1rem" }}>
                Since September 2022, he has been appointed as &#39;adjunct
                faculty&#39; in the physiotherapy department at Manipal Academy
                of Higher Education in India, where he leads research projects
                on neuromodulation for rehabilitation. Since March 2023, he has
                been appointed as a co-opted Professor in Neurosurgery in the
                &quot;Stereotactic and Functional Neurosurgery&quot; department
                at the University of Bonn in Germany. Together with Prof Dr.
                Maciaczyk, he conducts research on new brain implantation and
                brain stimulation techniques for neurological and psychiatric
                disorders. Prof Dr. De Ridder teaches applied neuroscience at
                the Bonn International Graduate Schools. He has authored over 40
                book chapters, co-edited the book &quot;Textbook of
                Tinnitus,&quot; and three other books on tinnitus. He is the
                author or co-author of more than 300 scientific articles. He
                serves as a reviewer for over 100 international scientific
                journals.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={dirk} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              GOEDHART, Hazel
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
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={hazelHart} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              HÉBERT, Sylvie
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Sylvie Hébert Sylvie Hébert is Professor and Program director of
                Audiology at Université de Montréal, where she teaches
                evidence-based practice in audiology and specialized courses on
                tinnitus and hyperacusis. She is a member of the BRAMS
                (International Laboratory for research on Brain, Music, and
                Sound) and of the Center of Research on Brain, Language, and
                Music (CRBLM). Her research expertise includes auditory and
                non-auditory factors involved in loudness perception, tinnitus
                and hyperacusis, and objective measures of tinnitus.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={slyvie} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              HUSAIN, Fatima
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
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={husain} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              JASTREBOFF, Margaret
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Dr. Margaret M. Jastreboff received her Ph.D. in Biological
                Sciences from the Polish Academy of Sciences (1982), and
                postdoctoral training in pharmacology and molecular biology at
                Yale University School of Medicine. She has been involved in
                tinnitus research since 1984, and on a full-time basis since
                1991 while working at University of Maryland School of Medicine.
                Her experimental work encompassed the study of the mechanisms of
                tinnitus using molecular biology, pharmacology, and behavioral
                techniques, including testing drugs for their effectiveness for
                tinnitus attenuation. She has been involved in clinical work for
                over 15 years as well, while working first as an Associate
                Professor at Emory University and later as a Visiting Research
                Professor at Towson University and currently in a clinic of
                non-profit foundation. She has organized and lectured in in 40
                courses on Tinnitus Retraining Therapy in the USA and close to
                100 courses abroad. She is a co-author of over 65 papers and 100
                abstracts. In 1993 she shared with Dr. Pawel J. Jastreboff
                Robert W. Hocks award for her contribution to the field of
                tinnitus.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={jaste} height={160} fit="contain"></Image>
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
        style={{ marginTop: "1rem" }}
      >
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              JASTREBOFF, Pawel J.
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
                <Image src={DJPHeadshot} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              LAU, Carol
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Carol Lau is an audiologist and owner of a private practice
                clinic, Sound idEARS Hearing & Listening Clinic and the
                Vancouver Tinnitus & Hyperacusis Clinic in Vancouver since 1998.
                Specialty areas are tinnitus, decreased sound tolerance,
                auditory processing disorders and amplification in adults,
                seniors and children.
              </div>
              <div style={{ marginTop: "1rem" }}>
                As TRI-2024 conference host and organizer, Carol welcomes you to
                a mixing point for researchers, clinicians, and the public where
                participants will delve into “The Science of Tinnitus”.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={carol} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              MCMAHAN, Emily
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Dr. Emily E. McMahan is an audiologist and the owner of Alaska
                Hearing &amp; Tinnitus Center in Anchorage. In addition to her
                physical practices in Alaska she serves high needs tinnitus
                patients via Telehealth and in-person field clinics across the
                United States.  She holds multi-state licensure in order to help
                patients receive access to care closer to home. She is
                passionate about tinnitus patient care, audiology, and best
                practices.  She  dedicates a considerable amount of time to
                educating audiologists on evidence-based tinnitus care and how
                to establish a tinnitus clinic. Dr. McMahan earned her Doctorate
                in Audiology and graduated from Salus University.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={mcmahan} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              MICHIELS, Sarah
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                Sarah Michiels is Assistant Professor in Musculoskeletal
                Rehabiliation at REVAL Rehabilitation Research Center of Hasselt
                University. After graduating as a Master in Physiotherapy in
                2005 she obtained an additional Master in Manual Therapy at the
                Free University of Brussels. After working fulltime as a
                physiotherapist in her private practice for four years, Sarah
                started teaching physiotherapy students in 2009, at the
                University of Antwerp.
              </div>
              <div style={{ marginTop: "1rem" }}>
                After successfully completing her PhD, studying neck-related
                tinnitus complaints, in 2015, she continued studying somatic
                tinnitus, now focusing on temporomandibular-related tinnitus
                complaints.
              </div>
              <div style={{ marginTop: "1rem" }}>
                In 2020 she joined the Faculty of Rehabilitation Sciences and
                Physiotherapy of Hasselt University as Assistant Professor,
                teaching physiotherapy students and continuing her research on
                tinnitus complaints and other head and neck-related conditions.
              </div>
              <div style={{ marginTop: "1rem" }}>
                In the meantime, she also continues her clinical work in the
                multidisciplinary tinnitus team of the Antwerp University
                Hospital, where she is responsible for diagnostic assessment and
                treatment of patients with somatic tinnitus and other neck or
                jaw-related ENT complaints.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={michesl} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              NORENA, Arnaud
            </Text>
            <Text className="components-commitee-style-text">
              <div>
                I am Professor in Marseille, France, working on both humans and
                animals. My work focuses on trying to understand the mechanisms
                of &quot;normal&quot; audiitory perception and the auditory
                perception disorders such as tinnitus, hyperacusis and
                misophonia.
              </div>
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={norena} height={160} fit="contain"></Image>
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
        <Grid.Col span={width < 720 ? 1 : 6}>
          <Flex direction={"column"}>
            <Text
              className="components-commitee-style-text-title"
              style={{
                marginBottom: "0rem",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              TYLER, Richard
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
        <Grid.Col span={width < 720 ? 1 : 2}>
          <Center>
            <div
              className={`${
                width < 720
                  ? "componenets-commitee-image-middle"
                  : "componenets-commitee-image"
              }`}
            >
              <Image src={DRTHeadshot} height={160} fit="contain"></Image>
            </div>
          </Center>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SpeakerBios;
