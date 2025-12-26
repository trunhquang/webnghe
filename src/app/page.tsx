// import { Header } from "@/modules/core/components/layout/Header";
// import { Footer } from "@/modules/core/components/layout/Footer";
// import { HeroSection } from "@/modules/home/components/HeroSection";
// import { EduHubSection } from "@/modules/home/components/EduHubSection";
// import { CreativeZoneSection } from "@/modules/home/components/CreativeZoneSection";
// import { FeatureHighlightSection } from "@/modules/home/components/FeatureHighlightSection";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col font-inter">
//       <Header />

//       <main className="flex-1">
//         <HeroSection />
//         <EduHubSection />
//         <CreativeZoneSection />
//         <FeatureHighlightSection />
//       </main>

//       <Footer />
//     </div>
//   );
// }

import { HeroSection } from "@/modules/home/HeroSection";
import { EducationSection } from "@/modules/home/EducationSection";
import { CreativeSection } from "@/modules/home/CreativeSection";
import { BrainSection } from "@/modules/home/BrainSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <EducationSection />
      <CreativeSection />
      <BrainSection />
    </main>
  );
}