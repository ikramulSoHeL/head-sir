import React from "react";
import "./newsCard.scss";

// assets
import newsCardImg from "../../../assets/images/news/newsCard.png";

const NewsCard = () => {
  return (
    <div className="news_card">
      <div className="newsImg">
        <img src={newsCardImg} alt="" />
      </div>

      <div className="newsContent">
        <h3>পবিত্র ওমরা পালনের উদ্দেশ্যে আমীরে জামায়াতের ঢাকা ত্যাগ</h3>
        <p>১৯ অক্টোবর ২০২৫ </p>
      </div>
    </div>
  );
};

export default NewsCard;
