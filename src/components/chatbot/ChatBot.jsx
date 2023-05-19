import React, { useState, useEffect } from "react";
import './chatbot.scss'

const ChatBot = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollPercentage);
    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  });

  const calculateScrollPercentage = () => {
    const { documentElement, body } = document;
    const totalHeight = documentElement.scrollHeight - documentElement.clientHeight;
    const scrolled = (body.scrollTop || documentElement.scrollTop) / totalHeight * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    if (scrollPercentage === 0) {
      setGreeting("Welcome to our website!");
    } else if (scrollPercentage > 0 && scrollPercentage <= 20) {
      setGreeting("Keep scrolling, To explore our services");
    } else if (scrollPercentage > 20 && scrollPercentage <= 50) {
      setGreeting("Reason to choose us");
    } else if (scrollPercentage > 50 && scrollPercentage <= 80) {
      setGreeting("Global partners and Major customers");
    } else if (scrollPercentage > 80) {
      setGreeting("Make sure to stay connected on our socials");
    }
  }, [scrollPercentage]);

  return (
    <div className="chat-bot">
      <p>{greeting}</p>
    </div>
  );
};

export default ChatBot;
