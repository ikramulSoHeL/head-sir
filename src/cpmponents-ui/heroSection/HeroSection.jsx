import React from "react";
import "./heroSection.scss";

// assets
import BannerImage from "../../assets/images/heroSection/banner.png";
import LayerImage from "../../assets/images/heroSection/layer.png";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="banner_bg">
        <img src={BannerImage} alt="" />

        <div className="layer">
          <img src={LayerImage} alt="" />
        </div>

        <div className="banner_contentContainer">
          <div className="banner_content">
            <h2>শিক্ষা, ন্যায় ও উন্নয়নের পথে এক প্রতিশ্রুতিশীল নেতৃত্ব</h2>

            <span>
              অধ্যক্ষ মাহবুবুল আলম একজন শিক্ষাবিদ, সমাজসংগঠক ও জননেতা দীর্ঘদিন
              ধরে তিনি শিক্ষা ও মানবকল্যাণের উন্নয়নে কাজ করে যাচ্ছেন তার
              নেতৃত্বের লক্ষ্য — একটি ন্যায্য, সমৃদ্ধ ও সচেতন সমাজ গঠন, যেখানে
              প্রত্যেক মানুষ মর্যাদা ও সুযোগের সমান অধিকার ভোগ করবে।
            </span>

            <button>সাপোর্ট করুন</button>
          </div>
        </div>
      </div>

      {/* <div className="heroSection_content">
        <div className="banner">
          <div className="banner_left">
            <h1>শিক্ষা, ন্যায় ও উন্নয়নের পথে এক প্রতিশ্রুতিশীল নেতৃত্ব</h1>

            <span>
              অধ্যক্ষ মাহবুবুল আলম একজন শিক্ষাবিদ, সমাজসংগঠক ও জননেতা দীর্ঘদিন
              ধরে তিনি শিক্ষা ও মানবকল্যাণের উন্নয়নে কাজ করে যাচ্ছেন তার
              নেতৃত্বের লক্ষ্য — একটি ন্যায্য, সমৃদ্ধ ও সচেতন সমাজ গঠন, যেখানে
              প্রত্যেক মানুষ মর্যাদা ও সুযোগের সমান অধিকার ভোগ করবে।
            </span>
          </div>

          <div className="banner_right">
            <img src="" alt="" />
          </div>
        </div>

        <div className="d"></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
