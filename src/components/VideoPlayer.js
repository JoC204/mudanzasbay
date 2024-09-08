// src/components/VideoPlayer.js
import React, { useEffect, useRef, useState } from 'react';
import '../style/VideoPlayer.css';

const VideoPlayer = ({ src, poster, startAt = 0 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.muted = true;
    videoElement.currentTime = startAt;
  }, [startAt]);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="custom-video-container">
      <video
        ref={videoRef}
        src={src}
        className="custom-video"
        onClick={handlePlayPause}
        poster={poster}
        controls
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;

