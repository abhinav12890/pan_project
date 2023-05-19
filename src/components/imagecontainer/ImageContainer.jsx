import React, { useState } from 'react';
import './imagecontainer.scss';

const ImageContainer = React.memo(({ title, content, src }) => {
  const [showContent, setShowContent] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [hoverOff, setHoverOff] = useState(false);

  const handleContainerClick = () => {
    setShowContent(!showContent);
    setHideImage(!hideImage);
    setHoverOff(true);
  }

  const handleMouseEnter = () => {
    if (!showContent) {
      setHoverOff(false);
    }
  }

  const handleMouseLeave = () => {
    if (!showContent) {
      setHoverOff(true);
    }
  }
  const openPdf = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className={`image-container-box ${showContent ? 'show-content' : ''} ${hoverOff ? 'hover-off' : ''}`} onClick={handleContainerClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overlay">
        <h2>{title}</h2>
      </div>
      <img src={src} alt="your" className={`${hideImage ? 'hide-image' : ''}`} loading="lazy" />
      {showContent && (
        <div className="content">
          <h4>{title}</h4>
          <ul>
            {content.map(({ id, label, link }) => (
              <li key={id}>
                {link ? (
                  <span onClick={() => openPdf(link)}>{label}</span>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default ImageContainer;
