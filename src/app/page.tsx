import MyLayoutContainer from "@/components/MyLayoutContainer/MyLayoutContainer";
import PreviewSection from "@/view/PreviewSection/PreviewSection";

export default function Home() {
  return (
    <div>
      <PreviewSection />
      <MyLayoutContainer>
        {/* Свои компоненты добавляй сюда */}
      </MyLayoutContainer>
    </div>
  );
}
