import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductBenefits from "@/components/ProductBenefits";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navbar />
    <HeroSection />
    <ProductBenefits />
    <Footer />
  </div>
);

export default Index;
