import React from "react";
import "./supportPage.scss";

// icons
import takaSvg from "../../assets/icons/taka.svg";

// components
import VideoGallerySection from "../../cpmponents-ui/videoGallerySection/VideoGallerySection";

const SupportPage = () => {
  return (
    <div className="supportPage">
      <div className="wrapper support_container">
        <div className="wrapper_layout content">
          <div className="header">
            <h1>সাপোর্ট করুন</h1>

            <span>
              আপনার মূল্যবান পরামর্শ, মতামত ও অভিযোগ আমার কাছে অত্যন্ত
              গুরুত্বপূর্ণ। আমি প্রতিটি বার্তা মনোযোগ সহকারে পর্যালোচনা করি,
              যাতে আমার সেবাকে আরও উন্নত ও কার্যকর করা যায়। আপনার সহযোগিতা আমার
              আগামী পথচলাকে আরও স্বচ্ছ, সুন্দর এবং সফল করে তুলবে।
            </span>
          </div>

          <div className="support_container">
            <div className="support_content">
              <div className="support_header">
                <h4>নওগাঁ ০১ এর উন্নয়নে সাপোর্ট করুন </h4>

                <span>
                  শিক্ষা, ন্যায় ও উন্নয়নের এই মহতী প্রকল্পে শামিল হোন। আপনার
                  সহযোগিতা হয়ে উঠতে পারে নওগাঁ-০১ এর পরিবর্তন।
                </span>
              </div>

              <div className="support_amounts">
                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>১০০ </span>
                </div>

                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>৫০০</span>
                </div>

                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>১,০০০</span>
                </div>

                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>১,৫০০</span>
                </div>

                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>২,০০০</span>
                </div>

                <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>৫,০০০</span>
                </div>

                {/* <div className="amount">
                  <img src={takaSvg} alt="" />
                  <span>যে কোনো পরিমাণ </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoGallerySection />
    </div>
  );
};

export default SupportPage;
