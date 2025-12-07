import MySkills from "@/components/my-skills";
import HeroSection from "@/components/hero-section";
import AboutMe from "@/components/about-me";
import VisitorTracker from "@/components/visitor-tracker";

export default function Home() {
   return (
      <div>
         <VisitorTracker />
         <HeroSection />
         <AboutMe />
         <MySkills />
      </div>
   );
}
