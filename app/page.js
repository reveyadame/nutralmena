import HeroSlider from "@/components/HeroSliderV2";
import About from "@/components/About";
import Products from "@/components/Products";
import InfoBanners from "@/components/InfoBanners";
import GraficoBanners from "@/components/GraficoBanners";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Contact = dynamic(() => import("@/components/Contact"), { 
  loading: () => <div style={{ height: "600px", background: "#f9f9f9" }}></div> 
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Products />
        <InfoBanners />
        <GraficoBanners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
