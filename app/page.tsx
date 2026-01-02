// import PortfolioHeader from "@/components/custom-ui/navigation-menu/portfolioHeader";
import Hero3 from "@/components/custom-ui/hero/hero3";
import ProfessionalTimeline from "@/components/custom-ui/timeline/professionalTimeline";
import TimelinePage3 from "@/components/custom-ui/timeline/professionalTimeline2";
import OrbitingSkills from "@/components/custom-ui/orbiting/orbiting";
import Footer2 from "@/components/custom-ui/footer/footer-minimal";
import "../public/css/cyberpattern.css";

export default function Home() {
  return (
    <div className="">
      <Hero3 />

      <ProfessionalTimeline />

      <TimelinePage3 />

      <OrbitingSkills />
    </div>
  );
}
