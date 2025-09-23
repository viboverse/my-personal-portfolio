import MySkills from "@/components/MySkills";
import HeroSection from "@/components/HeroSection";
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
