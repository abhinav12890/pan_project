import React, { useEffect, useRef } from 'react';
import './video.scss';

const Video = () => {
  const videoBannerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const resizeVideoBanner = () => {
      const aspectRatio = videoRef.current.videoWidth / videoRef.current.videoHeight;
      const bannerWidth = videoBannerRef.current.offsetWidth;
      const bannerHeight = bannerWidth / aspectRatio;

      if (bannerHeight < 220) {
        videoBannerRef.current.style.setProperty('--video-height', `${bannerHeight}px`);
      } else {
        videoBannerRef.current.style.setProperty('--video-height', '220px');
      }
    };

    videoRef.current.addEventListener('loadedmetadata', resizeVideoBanner);
    window.addEventListener('resize', resizeVideoBanner);

    const currentVideoRef = videoRef.current;

    return () => {
      currentVideoRef.removeEventListener('loadedmetadata', resizeVideoBanner);
      window.removeEventListener('resize', resizeVideoBanner);
    };
  }, []);

  return (
    <div className="video-banner" ref={videoBannerRef} style={{'--video-height': '220px'}}>
      <video autoPlay loop muted playsInline ref={videoRef}>
        {/* <source src="/assets/vid.mp4" type="video/mp4" /> */}
        <source src="/assets/vid1.webm" type="video/webm" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default Video;
