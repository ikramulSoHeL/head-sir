import React from "react";
import "./carouselSection.scss";

// assets
import quoteWhite from "../../assets/icons/quote-white.svg";
import carouselVector from "../../assets/icons/carousel_vector.svg";

const CarouselSection = () => {
  return (
    <div className="carouselSection wrapper">
      <div className="wrapper_layout content">
        <div className="carouselCard">
          <img src={quoteWhite} alt="" />

          <h2>
            ধর্ম যার যার, দেশ সবার। আমরা মিলেমিশে সামনে একটা হিন্দু, বৌদ্ধ,
            খ্রিষ্টান, মুসলমান সবাই মিলে একটা সুন্দর দেশ গড়বো- যেখানে কোনো
            দুর্নীতি থাকবেনা, কোনো হানাহানি থাকবেনা। মানুষ নিরাপদের সাথে থাকবে।{" "}
          </h2>

          <img className="vector" src={carouselVector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
