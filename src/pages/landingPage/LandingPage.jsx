import React from "react";
import "./landingPage.scss";

// components
import HeroSection from "../../cpmponents-ui/heroSection/HeroSection";
import LeadershipIntro from "../../cpmponents-ui/leadershipIntro/LeadershipIntro";
import NewsSection from "../../cpmponents-ui/newsSection/NewsSection";
import VideoGallerySection from "../../cpmponents-ui/videoGallerySection/VideoGallerySection";
import CarouselSection from "../../cpmponents-ui/carouselSection/CarouselSection";
import SupportInfoSection from "../../cpmponents-ui/supportInfoSection/SupportInfoSection";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <HeroSection />
      <LeadershipIntro />
      <NewsSection />
      <CarouselSection />
      <VideoGallerySection />
      <SupportInfoSection />
    </div>
  );
};

export default LandingPage;
