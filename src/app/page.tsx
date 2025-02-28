import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import About from "@/view/About/About";
import PreviewSection from "@/view/PreviewSection/PreviewSection";

export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        <About />
      </MyLayoutContainer>
    </div>
  );
}
