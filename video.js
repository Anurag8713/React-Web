import React from "react";
import video from "./images/video.mp4";

export default function Video(props) {
  const { style } = props;

  const videomainwidth = {
    width: "270px",
    marginBottom: "70px",
  };

  const videomainwidth2 = {
    width: "300px",
    marginBottom: "70px",

    height: "300px",
  };

  const videoimg = {
    width: "270px",
  };

  const videoimg1 = {
    width: "300px",
  };

  return (
    <div
      className="video-main"
      style={style ? videomainwidth2 : videomainwidth}
    >
      <img
        src={props.img}
        className="video-img video-img2"
        style={style ? videoimg1 : videoimg}
      ></img>

      <div className="video-detail">
        <img src={props.img1} className="user-img"></img>
        <h6 className="video-title">{props.title}</h6>
      </div>
      <h6 className="video-channel" style={{ color: "gray" }}>
        {props.channel}
      </h6>

      <h6 className="view" style={{ color: "gray" }}>
        {props.detail}
      </h6>
    </div>
  );
}
