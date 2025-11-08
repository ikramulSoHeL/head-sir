import React from "react";
import "./supportInfoSection.scss";

// assets
import supportInfoVector from "../../assets/icons/support-vector.svg";

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
              বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়।{" "}
            </span>

            <button>যোগাযোগ করুন</button>
          </div>

          <div className="right">
            <button>স্বেচ্ছাসেবক হোন </button>
            <button>সাপোর্ট করুন</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportInfoSection;
