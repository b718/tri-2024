import { Flex, Text } from "@mantine/core";
import React, { useContext } from "react";
import SpeakerBase from "./SpeakerBase";
import speaker1 from "../../Images/Speakers/speaker-1.png";
import speaker2 from "../../Images/Speakers/speaker-2.png";
import speaker3 from "../../Images/Speakers/speaker-3.png";
import speaker4 from "../../Images/Speakers/speaker-4.png";
import speaker5 from "../../Images/Speakers/speaker-5.png";
import speaker6 from "../../Images/Speakers/speaker-6.png";
import { NavBarContext } from "../../App";
import "./SpeakerSection.css";

const SpeakerSection = () => {
  const conferenceProgramRef = useContext(NavBarContext);

  return (
    <div className="speaker-section-div">
      <Text
        fz="xl"
        fw="600"
        style={{ marginLeft: "10%", marginBottom: "1rem" }}
        ref={conferenceProgramRef.conferenceProgramRef}
      >
        Speakers
      </Text>
      <div>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <SpeakerBase
            picture={speaker1}
            name="Prof. Claire Gillan"
            school="TRINITY COLLEGE DUBLIN"
            spec="Digital health & Citizen Science"
            titleAbout="Using the Internet for Longitudinal, Predictive and Treatment-Oriented Research"
            about="Cross-sectional research has helped us identify candidate mechanisms that may put people at risk for mental health problems and could be promising targets for treatment. But despite considerable investment, clinical translation of core findings has not happened in psychiatry. This is likely because without prospective data, the immediate clinical value is simply not there. In terms of slower kinds of translation – for example, where basic insights inform novel treatments – this has also not meaningfully occurred, possibly because correlation and causation cannot be distinguished in cross-sectional designs. Why then do we continue to produce so much cross-sectional research? The answer, of course, is that appropriately powered longitudinal, and treatment-oriented research is much more challenging to conduct; It is slow, expensive, and difficult to do outside of consortia. In this talk, I will highlight how Internet-based research methods are changing the research landscape, facilitating rich and repeated assessments of individuals over time, in their real lives and during treatment. From archives of language data on social media, to experience-sampling of mood and cognition in daily life, to following patients through weeks of digital therapy. I will make the case that the proliferation of online methods is opening new doors for research, dramatically increasing the scale and scope of what is possible."
          />

          <SpeakerBase
            picture={speaker2}
            name="Prof. Gerhard Anderson"
            school="LINKÖPING UNIVERSITY"
            spec="Online behavioral therapy for tinntius"
            titleAbout="Internet-delivered CBT for tinnitus: state of the art"
            about="Providing evidence-based treatments for tinnitus can be a challenge. One way to handle poor access is to provide treatment using modern information technology and the internet. Cognitive behaviour therapy can be delivered in a self-help format using the internet and the first study on tinnitus was conducted already in the late 1990's. In this talk I will describe the treatment format and provide an overview of the research done in different countries and languages. I will also comment on difficulties and challenges for the future. One example is the lack of research on younger persons with tinnitus. Overall, there findings from the early years in Sweden have been replicated and long-terms effects in terms of reducing tinnitus distress have been documented several times. The possibility to combine treatments but also tailoring of the treatment based on comorbid problems should be explored."
          />

          <SpeakerBase
            picture={speaker3}
            name="Prof. Antonio Lopez Escamez"
            school="UNIVERSITY OF SYDNEY"
            spec="Genetics & Tinnitus"
            titleAbout="Genetic landscape of tinnitus and tinnitus disorder"
            about="Twins, familial aggregation, and adoptees studies support that tinnitus is a multifactorial condition mediated by genetic and environmental factors. Tinnitus is a heterogeneous condition reported by more than 15% of the population and it is usually associated with hearing and/or brain disorders with a complex genetic structure. However, tinnitus disorder is a better defined entity associated with emotional distress, cognitive dysfunction, and/or autonomic arousal, leading to behavioral changes and functional disability. Severe bilateral tinnitus is a complex disorder that has a polygenic structure with rare variants showing a strong effect size in certain genes and probably common variants with pleiotropic effects on several traits associated with severe tinnitus, including hyperacusis, headache and hearing loss. By selecting individuals with extreme phenotype for tinnitus, our group has identified a burden or rare variation on several genes including ANK2, TSC2 and AKAP9. This burden involves different types of coding variants in constrained regions (missense single nucleotide variants, large structural variants) targeting several genes such as CACNA1E, NAV2, and TMEM132D. This suite of genes starts to outline the molecular phenotypes associated with severe tinnitus, including anxiety and cognition."
          />

          <SpeakerBase
            picture={speaker4}
            name="Prof. Shaowen Bao"
            school="THE UNIVERSITY OF ARIZONA"
            spec="Inflammation & Tinnitus"
            titleAbout="Neuroinflammation and Neurodegeneration Model of Tinnitus"
            about="Tinnitus is widely considered a pathological consequence of maladaptive neural plasticity. Preventing or reversing such maladaptive plasticity has been a focus of research. One form of such maladaptive plasticity is noise-induced reduction of cortical inhibition, which involves microglial activation and TNF-α signaling. Recent studies revealed a reduction of cortical parvalbumin, but not somatostatin or VIP, neuron density in mice following the same noise trauma protocol. I will discuss these findings and our current work showing the role of TNF-α signaling in noise-induced PV neuron death and dysfunction, and present a neuroinflammation and neurodegeneration model of chronic tinnitus."
          />

          <SpeakerBase
            picture={speaker5}
            name="Prof. Sonia Bishop"
            school="UC BERKELEY"
            spec="Computional Psychiatry"
            titleAbout="Mechanisms of attentional bias and impoverished control in anxiety"
            about="Anxiety disorders show elevated prevalence in tinnitus populations. The presence of comorbid anxiety has been linked to tinnitus severity and subjective quality of life. The mechanistic basis of this relationship remains unclear. The sound perceived in tinnitus is often subjectively aversive. In anxiety, attention is captured by aversive stimuli irrelevant to ongoing activities. Our findings show this is linked to increased amygdala activity to aversive distractors and reduced engagement of frontal control mechanisms. Individuals with high trait anxiety also show impoverished recruitment of frontal mechanisms during sustained attention tasks. Here, attentional lapses are linked to increased functional connectivity between dorsolateral prefrontal cortex and default-mode regions. This potentially reflects attention being ‘captured’ by internal stimuli such as task-unrelated thoughts. On a computational level, high trait anxiety is linked to failure to differentiate aversive outcomes that reflect changes in the statistics of the world from those that are merely ‘noise’ in stable contingencies. In addition, trait anxious individuals have a bias towards integrating negative information more strongly than positive information. I will discuss how we can theoretically integrate these findings and whether the neural and computational mechanisms linked to trait anxiety might predispose individuals to a longer, more aversive, experience of tinnitus."
          />

          <SpeakerBase
            picture={speaker6}
            name="Prof. Jos Eggermont"
            school="THE AAGE MOLLER DISTINGUISHED LECTURE"
            spec="The future of Tinnitus"
            titleAbout="Tinnitus models: Interaction of bottom-up and top-down mechanisms"
            about="For most researchers, a theory is an instrument for making predictions, often using regression models, or probabilistic ones such as Bayesian or predictive coding models. For others, a theory must also serve as an explanation of the phenomenon under study, e.g., filling-in models for tinnitus explain the tinnitus pitch and often loudness, with less effort to make detailed predictions. It is helpful to consider that prediction is not equal to explanation, i.e., emphasizing the underlying structural and functional changes in the auditory system. Most models are bottom-up, putting the blame for tinnitus on loss of auditory input, some are top-down and are about preventing the effects of the subcortical or cortical changes such as increased spontaneous firing to reach consciousness. The distinction between the bottom up and top-down models is not very strict: nearly all models are based on the effects of deafferentation, i.e., bottom up changes. But the emphasis in bottom-up models is on the modulatory role of the nonclassical auditory and nonauditory systems on activity leading to tinnitus. I will use this frame work to illustrate what we know and the large amount of work that we have still to do."
          />
        </Flex>
      </div>
    </div>
  );
};

export default SpeakerSection;
