import { HeroSection } from "@/modules/home/HeroSection";
import { EducationSection } from "@/modules/home/EducationSection";
import { CreativeSection } from "@/modules/home/CreativeSection";
import { BrainSection } from "@/modules/home/BrainSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <CreativeSection />
      <BrainSection />
    </>
  );
}