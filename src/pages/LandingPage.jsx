import Footer from "@/components/common/Footer";
import LandingNavbar from "@/components/landingPageComponents/LandingNavbar";
import HeroSection from "@/components/landingPageComponents/HeroSection";
import HotItemSection from "@/components/landingPageComponents/HotItemSection";
import SearchSection from "@/components/landingPageComponents/SearchSection";
import RegisterSection from "@/components/landingPageComponents/RegisterSection";
import TrustSection from "@/components/landingPageComponents/TrustSection";
function LandingPage() {
  return (
    <>
      <LandingNavbar />

      <HeroSection />

      <HotItemSection />

      <SearchSection />

      <RegisterSection />

      <TrustSection />

      <Footer />
    </>
  );
}

export default LandingPage;
