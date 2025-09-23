import MySkills from "@/components/my-skills";
import HeroSection from "@/components/hero-section";
import AboutMe from "@/components/about-me";

export default function Home() {
   return (
      <div>
         <HeroSection />
         <AboutMe />
         <MySkills />
      </div>
   );
}
