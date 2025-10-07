import React, { useRef } from "react";
import "./VideoPlayer.css";

import campus_video from "../../assets/college-life.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    e.target === player.current ? setPlayState(false) : setPlayState(true);
  };

  return (
    <div className={`video-player ${playState ? "active" : ""}`} ref={player} onClick={closePlayer}>
      <video src={campus_video} autoPlay muted controls preload="none"></video>
    </div>
  );
};

export default VideoPlayer;
