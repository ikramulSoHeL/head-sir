import React from "react";
import "./videoGallerySection.scss";

// assets

import arrowLeft from "../../assets/icons/ArrowLeft.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg";
import VideoCard from "../../components/cards/videoCard/VideoCard";
import { Link } from "react-router-dom";

const VideoGallerySection = () => {
  return (
    <div className="videoGallerySection wrapper">
      <div className="wrapper_layout content">
        <div className="headerBtn">
          <div className="header">
            <h2>ভিডিও গ্যালারী</h2>
            <span>
              হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি
              গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু
              আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি
              অন্তর্দৃষ্টি প্রদান{" "}
            </span>
          </div>

          <div className="carouselBtns">
            <button>
              <img src={arrowLeft} alt="" />
            </button>
            <button>
              <img src={arrowRight} alt="" />
            </button>
          </div>
        </div>

        <div className="videoGallery_carousel">
          {Array.from({ length: 3 }).map((_, index) => (
            <VideoCard key={index} />
          ))}
        </div>

        <div className="button_container">
          <Link to="/gallery" className="button">
            <span>সকল ভিডিও</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoGallerySection;
