import React from "react";
import "./leadershipIntro.scss";
import { Link } from "react-router-dom";

// assets
import comaIcon from "../../assets/icons/coma.svg";
import { socialData } from "../../assets/data/socialData";

const LeadershipIntro = () => {
  return (
    <div className="leadershipIntro">
      <div className="wrapper content first">
        <div className="wrapper_layout content_layout">
          <div className="left_content">
            <img src={comaIcon} alt="" />

            <h2>শিক্ষা, ন্যায় ও উন্নয়নের পথে এক প্রতিশ্রুতিশীল নেতৃত্ব</h2>

            <span>
              বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ
              দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট
              বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও
              শিক্ষকদের জন্যও সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা
              প্রদান করতে চাইছেন।
            </span>
          </div>

          <div className="right_content">
            <div className="video">
              <img
                src="https://media.istockphoto.com/id/1370510901/vector/play-button-icon-on-transparent-background-video-player-sign-circle-start-arrow-symbol-in.jpg?s=612x612&w=0&k=20&c=7N9__DxoKnS_676qQZ09cJofFl_CztUB6rRS0KpgEwY="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper content second">
        <div className="wrapper_layout content_layout reverse">
          <div className="right_content">
            <div className="video">
              <img
                src="https://media.istockphoto.com/id/1370510901/vector/play-button-icon-on-transparent-background-video-player-sign-circle-start-arrow-symbol-in.jpg?s=612x612&w=0&k=20&c=7N9__DxoKnS_676qQZ09cJofFl_CztUB6rRS0KpgEwY="
                alt=""
              />
            </div>
          </div>

          <div className="left_content">
            <img src={comaIcon} alt="" />

            <h2>শিক্ষা, ন্যায় ও উন্নয়নের পথে এক প্রতিশ্রুতিশীল নেতৃত্ব</h2>

            <span className="span_2">
              বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ
              দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট
              বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও
              শিক্ষকদের জন্যও সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা
              প্রদান করতে চাইছেন।
            </span>

            <div className="socials">
              {socialData?.map((item, index) => {
                return (
                  <Link to={item.link} className="social" key={index}>
                    <item.icon />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipIntro;
