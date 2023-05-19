import React from 'react';
import './MarqueeText.scss';

const MarqueeText = ({ text }) => {
  return (
    <div className="marquee">
      <span>{text}</span>
    </div>
  );
};

export default MarqueeText;
