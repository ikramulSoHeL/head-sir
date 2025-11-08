import React from "react";
import "./newsPage.scss";
import NewsCard from "../../components/cards/newsCard/NewsCard";
import SupportInfoSection from "../../cpmponents-ui/supportInfoSection/SupportInfoSection";

const NewsPage = () => {
  return (
    <div className="newsPage">
      <div className="wrapper news_container">
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

          <div className="news_list">
            {Array.from({ length: 32 }).map((_, index) => (
              <NewsCard key={index} />
            ))}
          </div>
        </div>
      </div>

      <SupportInfoSection contentPadding={true} />
    </div>
  );
};

export default NewsPage;
