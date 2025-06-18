import HeaderSection from "@/components/HeaderSection";
import ProductCatalogSection from "@/components/ProductCatalogSection";
import FooterSection from "@/components/FooterSection";
import CyberGrid from "@/components/CyberGrid";

const Index = () => {
  return (
    <div className="dark relative min-h-screen">
      <CyberGrid />
      <HeaderSection />
      <ProductCatalogSection />
      <FooterSection />
    </div>
  );
};

export default Index;
