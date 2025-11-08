import React from "react";
import "./videoCard.scss";

// assets
import videoCardImg from "../../../assets/images/news/newsCard.png";
import playIcon from "../../../assets/icons/Play.svg";

const VideoCard = () => {
  return (
    <div className="videoCard">
      <img src={videoCardImg} alt="" />

      <img className="icon" src={playIcon} alt="" />
    </div>
  );
};

export default VideoCard;
