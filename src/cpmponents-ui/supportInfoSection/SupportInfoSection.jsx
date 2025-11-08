import React from "react";
import "./supportInfoSection.scss";

// assets
import supportInfoVector from "../../assets/icons/support-vector.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg";

const SupportInfoSection = ({ contentPadding }) => {
  return (
    <div className="supportInfoSection">
      <div className={contentPadding ? "content contentPadding" : "content"}>
        <div className="content_container">
          <img src={supportInfoVector} alt="" />

          <div className="left">
            <h2>আপনার সার্বিক সহযোগিতা আমাদের একান্ত কাম্য </h2>

            <span>
              বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ
              দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট
              বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়।
            </span>

            <button>
              <span>যোগাযোগ করুন</span>
              <img src={arrowRight} alt="" />
            </button>
          </div>

          <div className="right">
            <button>
              <span>স্বেচ্ছাসেবক হোন</span>
            </button>
            <button>
              <span>সাপোর্ট করুন</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInfoSection;
