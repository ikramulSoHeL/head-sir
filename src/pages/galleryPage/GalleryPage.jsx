import React from "react";
import "./galleryPage.scss";

// components
import VideoCard from "../../components/cards/videoCard/VideoCard";
import SupportInfoSection from "../../cpmponents-ui/supportInfoSection/SupportInfoSection";

const GalleryPage = () => {
  return (
    <div className="galleryPage">
      <div className="wrapper gallery_conteiner">
        <div className="wrapper_layout content">
          <div className="header">
            <h1>সংবাদ / কার্যক্রম </h1>
            <span>
              হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি
              গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু
              আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি
              অন্তর্দৃষ্টি প্রদান করে।
            </span>
          </div>

          <div className="gallery_list">
            {Array.from({ length: 29 }).map((_, index) => (
              <VideoCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <SupportInfoSection contentPadding={true} />
    </div>
  );
};

export default GalleryPage;
