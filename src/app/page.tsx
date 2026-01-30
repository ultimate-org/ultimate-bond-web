import {Main, UnderLyingCauses, Statistics,LifeChanging,UltimateFeatureVideoSection, UltimateFeatureSection, WhyUltimateSection, UltimateFrameWork, RegretAndOutcome, UltimateSample, AdvisoryBoard, Header, ParentTestimony, EndTagLine, } from "@/index"

export const metadata = {
  title:"UltiMate Parenting Smart App for Daily Child & Family Bonding",
  description:"Ultimate Parenting app offers daily activities, storytelling, mantras, habits, and live workshops to support confident and emotionally strong children."
}

function Landing() {
  return <>
    <Header secondaryLogo="/images/logo/Your-Parenting-Partner-Logo.png"></Header>
    <Main></Main>
    <Statistics></Statistics>
    <UnderLyingCauses></UnderLyingCauses>
    {/* <ConeOfLearning></ConeOfLearning> */}
    <UltimateFrameWork></UltimateFrameWork>
    <LifeChanging></LifeChanging>
    <UltimateSample></UltimateSample>
    <RegretAndOutcome></RegretAndOutcome>
    <UltimateFeatureVideoSection></UltimateFeatureVideoSection>
    <UltimateFeatureSection></UltimateFeatureSection>
    <WhyUltimateSection></WhyUltimateSection>
    <ParentTestimony></ParentTestimony>
    <AdvisoryBoard></AdvisoryBoard>
    <EndTagLine></EndTagLine>
    {/* <BlogSection></BlogSection> */}
  </>
}

export default Landing;