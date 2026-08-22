import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HotItemSection from "@/components/landing/HotItemSection";

function LandingPage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <HotItemSection />

      <Footer />
    </>
  );
}

export default LandingPage;
