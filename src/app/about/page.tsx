import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { OurStory } from "@/components/sections/OurStory";
import { Pillars } from "@/components/sections/Pillars";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Industries } from "@/components/sections/Industries";
import { SolidCTA } from "@/components/sections/SolidCTA";

export const metadata: Metadata = {
  title: "About | Ascending Software",
  description:
    "We're a software & digital solutions studio that has spent over a decade helping businesses turn operational friction into systems that just work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ascending Software"
        title="Crafting tomorrow's intelligent software, today."
        description="We're a software & digital solutions studio that has spent over a decade helping businesses turn operational friction into systems that just work."
      />

      <OurStory />

      <div className="pb-20">
        <Pillars />
      </div>

      <div className="pb-20">
        <StatsBar />
      </div>

      <WhyChooseUs narrative />
      <ProcessSteps />
      <Industries />

      <SolidCTA
        eyebrow="Let's Work Together"
        title="Ready to build the system your business actually needs?"
        buttonLabel="Get In Touch"
        buttonHref="/contact"
      />
    </>
  );
}
