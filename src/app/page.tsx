import Advisors from "@/components/advisors/Advisors";
// import Aicte from "@/components/aicte/Aicte";
// import BondMeter from "@/components/bondMeter/BondMeter";
import AiRoadmap from "@/components/aiRoadMap/AiRoadMap";
// import BeyondAcademics from "@/components/beyondAcademics/BeyondAcademics";
// import Consequences from "@/components/consequences/Consequences";
import CtaFooter from "@/components/ctaFooter/CtaFooter";
import FeaturesRadar from "@/components/featureRadar/FeatureRadar";
import Journey from "@/components/journey/Journey";
import ParentingPulse from "@/components/parentingPulse/ParentingPulse";
// import Problem from "@/components/problem/Problem";
import Science from "@/components/science/Science";
// import Solution from "@/components/solution/Solution";
// import SpaceWhy from "@/components/spaceWhy/SpaceWhy";
// import Stars from "@/components/star/Star";
import TransformationJourney from "@/components/transformations/Transformations";
import WhatsAppButton from "@/components/whatsappButton/WhatsappButton";
import LiveMomentsStack from '@/components/liveMomentStock/Livemomentstock';

// import Why from "@/components/why/Why";
import {Main, Header, ParentTestimony} from "@/index"
import RealityCheck from "@/components/realityCheck/RealityCheck";
import InvisibleConsequences from "@/components/invinsibleConsequences/InvinsibleConsequences";

// import {Main, UnderLyingCauses, Statistics,LifeChanging,UltimateFeatureVideoSection, UltimateFeatureSection, WhyUltimateSection, UltimateFrameWork, RegretAndOutcome, UltimateSample, AdvisoryBoard, Header, ParentTestimony, EndTagLine, } from "@/index"
// import { Star } from "lucide-react";

export const metadata = {
  title:"UltiMate Parenting Smart App for Daily Child & Family Bonding",
  description:"Ultimate Parenting app offers daily activities, storytelling, mantras, habits, and live workshops to support confident and emotionally strong children."
}

function Landing() {
  return <>
  {/* <Stars/> */}
    <div className="[--nav-h:80px] lg:[--nav-h:80px]">
  <Header />
  <Main />
</div>
    <TransformationJourney/>
    {/* <BondMeter />
    <Aicte/> */}
    {/* <BeyondAcademics/> */}
    <RealityCheck/>
    <InvisibleConsequences/>
    {/* <SpaceWhy/> */}
    {/* <Problem/>
    <Consequences/> */}
    <Science/>
    {/* <Solution/> */}
    <Journey/>
    <FeaturesRadar/>
    <ParentingPulse/>
    <AiRoadmap/>
    {/* <Why/> */}
    <Advisors/>
    <ParentTestimony/>
    <CtaFooter/>
    <WhatsAppButton/>
    <LiveMomentsStack/>
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