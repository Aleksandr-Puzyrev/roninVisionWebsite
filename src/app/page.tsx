import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import Advantage from '@/view/sectionOne/Advantage';
import PreviewSection from "@/view/PreviewSection/PreviewSection";
import TechnicalSpecifications from '@/view/SectionTwo/TechnicalSpecifications';
import BlockDocumentation from '@/view/SectionThree/BlockDocumentation';
import Clients from '@/view/SectionFour/Clients';



export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        <Advantage />
        <TechnicalSpecifications />
        <BlockDocumentation />
        <Clients />
      </MyLayoutContainer>
    </div>
  );
}
