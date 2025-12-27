import PortfolioHeader from "@/components/custom-ui/navigation-menu/portfolioHeader";
import Hero3 from "@/components/custom-ui/hero/hero3";
import ProfessionalTimeline from "@/components/custom-ui/timeline/professionalTimeline";
import TimelinePage3 from "@/components/custom-ui/timeline/professionalTimeline2";
import Divider from "@/components/custom-ui/divider/divider";

export default function Home() {
  return (
    <div>
      <PortfolioHeader />
      <Hero3 />
      <ProfessionalTimeline />
      <Divider variant="dashed" />
      <TimelinePage3 />
    </div>
  );
}
