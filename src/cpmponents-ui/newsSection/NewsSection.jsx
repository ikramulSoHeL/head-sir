import React from "react";
import "./newsSection.scss";

// components
import NewsCard from "../../components/cards/newsCard/NewsCard";
import { Link } from "react-router-dom";

const NewsSection = () => {
  return (
    <div className="newsSection wrapper">
      <div className="wrapper_layout content">
        <div className="headerSection">
          <h2>সংবাদ / কার্যক্রম </h2>

          <span>
            হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি
            গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু আলাইহি
            ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি
            প্রদান করে।
          </span>
        </div>

        <div className="news_section">
          <div className="news_cards">
            {Array.from({ length: 8 }).map((_, index) => (
              <NewsCard key={index} />
            ))}
          </div>

          <div className="button_container">
            <Link to="/news" className="button">
              <span>সকল সংবাদ/কার্যক্রম</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
