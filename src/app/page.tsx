import Advisors from "@/components/advisors/Advisors";
import Aicte from "@/components/aicte/Aicte";
import AiRoadmap from "@/components/aiRoadMap/AiRoadMap";
import Consequences from "@/components/consequences/Consequences";
import CtaFooter from "@/components/ctaFooter/CtaFooter";
import FeaturesRadar from "@/components/featureRadar/FeatureRadar";
import Journey from "@/components/journey/Journey";
import ParentingPulse from "@/components/parentingPulse/ParentingPulse";
import Problem from "@/components/problem/Problem";
import Science from "@/components/science/Science";
import Solution from "@/components/solution/Solution";
import SpaceWhy from "@/components/spaceWhy/SpaceWhy";
import Why from "@/components/why/Why";
import {Main, Header} from "@/index"

// import {Main, UnderLyingCauses, Statistics,LifeChanging,UltimateFeatureVideoSection, UltimateFeatureSection, WhyUltimateSection, UltimateFrameWork, RegretAndOutcome, UltimateSample, AdvisoryBoard, Header, ParentTestimony, EndTagLine, } from "@/index"
// import { Star } from "lucide-react";

export const metadata = {
  title:"UltiMate Parenting Smart App for Daily Child & Family Bonding",
  description:"Ultimate Parenting app offers daily activities, storytelling, mantras, habits, and live workshops to support confident and emotionally strong children."
}

function Landing() {
  return <>
  
    <Header></Header>
    <Main></Main>
    <Aicte/>
    <SpaceWhy/>
    <Problem/>
    <Consequences/>
    <Science/>
    <Solution/>
    <Journey/>
    <FeaturesRadar/>
    <ParentingPulse/>
    <AiRoadmap/>
    <Why/>
    <Advisors/>
    <CtaFooter/>
    {/* <Problem/> */}
    {/* {/* <Statistics></Statistics> */}
    {/* <UnderLyingCauses></UnderLyingCauses> */} 
    {/* <ConeOfLearning></ConeOfLearning> */}
    {/* <UltimateFrameWork></UltimateFrameWork>
    <LifeChanging></LifeChanging>
    <UltimateSample></UltimateSample>
    <RegretAndOutcome></RegretAndOutcome>
    <UltimateFeatureVideoSection></UltimateFeatureVideoSection>
    <UltimateFeatureSection></UltimateFeatureSection>
    <WhyUltimateSection></WhyUltimateSection>
    <ParentTestimony></ParentTestimony>
    <AdvisoryBoard></AdvisoryBoard>
    <EndTagLine></EndTagLine> */}
    {/* <BlogSection></BlogSection> */}
  </>
}

export default Landing;