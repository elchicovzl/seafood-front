import BannerStatisticsSection from "../components/BannerStatisticsSection";
import BgBannerRightBoxSection from "../components/BgBannerRightBoxSection";
import BoxIconSection from "../components/BoxIconSection";
import HeroSection from "../components/HeroSection";
import MansorySection from "../components/MansorySection";
import OurProductsSection from "../components/OurProductsSection";
import TextLeftRigthImageStatisticsSection from "../components/TextLeftRigthImageStatisticsSection";
import WelcomeSection from "../components/WelcomeSection";

export function sectionRenderer(section: any, index: number, navbar: any) {
  console.log("secciones")
  console.log(section)
  switch (section.__component) {
    case "sections.hero":
      return <HeroSection data={section} navbar={{links: navbar.links, logoUrl:navbar.navbarLogo.logoImg.data.attributes.url}} />;
    case "sections.welcome-section":
      return <WelcomeSection data={section} />
    case "sections.mansory-section":
      return <MansorySection />
    case "sections.box-icon-section":
      return <BoxIconSection />
    case "sections.bg-banner-right-box-section":
      return <BgBannerRightBoxSection />
    case "sections.text-left-rigth-image-statistics-section":
      return <TextLeftRigthImageStatisticsSection />
    case "sections.banner-statistics-section":
      return <BannerStatisticsSection />
    case "sections.our-products-section":
      return <OurProductsSection />
    default:
      return null;
  }
}
