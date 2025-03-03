import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import About from "@/view/About/About";
import Feedback from "@/view/Feedback/Feedback";
import Multifunctionality from "@/view/Multifunctionality/Multifunctionality";
import PreviewSection from "@/view/PreviewSection/PreviewSection";
import Price from "@/view/Price/Price";
import YMapProvider from "@/view/YMapProvider/YMapProvider";

export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        <About />
        <Multifunctionality />
        <Price />
        <Feedback />
      </MyLayoutContainer>
      <YMapProvider />
    </div>
  );
}
