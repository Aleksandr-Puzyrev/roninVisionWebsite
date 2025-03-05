import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import Advantage from '@/view/sectionOne/Advantage';
import PreviewSection from "@/view/PreviewSection/PreviewSection";
import TechnicalSpecifications from '@/view/SectionTwo/TechnicalSpecifications';
import BlockDocumentation from '@/view/SectionThree/BlockDocumentation';
import Clients from '@/view/SectionFour/Clients';
import About from "@/view/About/About";
import Feedback from "@/view/Feedback/Feedback";
import Multifunctionality from "@/view/Multifunctionality/Multifunctionality";
import Price from "@/view/Price/Price";
import YMapProvider from "@/view/YMapProvider/YMapProvider";

export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        <About />
        <Advantage />
        <Multifunctionality />
        <Price />
        <TechnicalSpecifications />
        <BlockDocumentation />
        <Clients />
        <Feedback />
      </MyLayoutContainer>
      <YMapProvider />
    </div>
  );
}
