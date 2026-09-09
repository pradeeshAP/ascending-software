import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { RollingStatement } from "@/components/sections/RollingStatement";
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
      <RollingStatement
        eyebrow="Our Name Says It"
        word="ASCENDING"
        description="Every system we build is designed to keep climbing with you — not to be rebuilt the moment you outgrow it."
        textColor="var(--olive)"
      />
      <TechStack />
      <WhyChooseUs />
      <Industries />
      <FinalCTA />
    </>
  );
}
