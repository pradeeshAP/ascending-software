import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { TechStack } from "@/components/sections/TechStack";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <SolutionsGrid />
      <TechStack />
      <WhyChooseUs />
      <Industries />
      <FinalCTA />
    </>
  );
}
