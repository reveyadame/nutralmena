import HeroSlider from "@/components/HeroSliderV2";
import About from "@/components/About";
import Products from "@/components/Products";
import InfoBanners from "@/components/InfoBanners";
import GraficoBanners from "@/components/GraficoBanners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
