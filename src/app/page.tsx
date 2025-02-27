import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import Advantage from '@/view/sectionOne/Advantage';
import PreviewSection from "@/view/PreviewSection/PreviewSection";

export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        <Advantage />
      </MyLayoutContainer>
    </div>
  );
}
