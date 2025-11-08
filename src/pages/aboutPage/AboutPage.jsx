import React from "react";
import "./aboutPage.scss";
import NewsSection from "../../cpmponents-ui/newsSection/NewsSection";
import SupportInfoSection from "../../cpmponents-ui/supportInfoSection/SupportInfoSection";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="wrapper about_container">
        <div className="wrapper_layout content">
          <div className="header">
            <span>আমার সম্পর্কে</span>
            <h2>শিক্ষা, ন্যায় ও উন্নয়নের পথে এক প্রতিশ্রুতিশীল নেতৃত্ব</h2>
            <p>
              অধ্যক্ষ মাহবুবুল আলম একজন শিক্ষাবিদ, সমাজসংগঠক ও জননেতা দীর্ঘদিন
              ধরে তিনি শিক্ষা ও মানবকল্যাণের উন্নয়নে কাজ করে যাচ্ছেন তার
              নেতৃত্বের লক্ষ্য — একটি ন্যায্য, সমৃদ্ধ ও সচেতন সমাজ গঠন, যেখানে
              প্রত্যেক মানুষ মর্যাদা ও সুযোগের সমান অধিকার ভোগ করবে।
            </p>
          </div>
        </div>
      </div>

      <NewsSection />
      <SupportInfoSection contentPadding={true} />
    </div>
  );
};

export default AboutPage;
