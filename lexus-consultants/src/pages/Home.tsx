import { Reveal } from "../components/motion";
import {
  Hero, IndustriesMarquee, About, Services, WhyCompliance, BeforeAfter, Industries, WhyUs, Process, Laws, Presence, FAQ, CTA,
} from "../components/Sections";
import { Journey, HealthCheck, Insights } from "../components/Premium";
import { Newsletter } from "../components/Page";
import { PracticalSupport } from "../components/home/PracticalSupport";
import { ViewAllInsightsLink } from "../components/home/ViewAllInsightsLink";
import { ViewAllFaqsLink } from "../components/home/ViewAllFaqsLink";

export function Home() {
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal><IndustriesMarquee /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Journey /></Reveal>
      <Reveal><WhyCompliance /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><BeforeAfter /></Reveal>
      <Reveal><HealthCheck /></Reveal>
      <Reveal><Industries /></Reveal>
      <Reveal><WhyUs /></Reveal>
      <Reveal><Process /></Reveal>

      <Reveal><PracticalSupport /></Reveal>

      <Reveal><Laws /></Reveal>
      <Reveal><Insights /></Reveal>
      <Reveal><ViewAllInsightsLink /></Reveal>
      <Reveal><Presence /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><ViewAllFaqsLink /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Newsletter /></Reveal>
    </>
  );
}
