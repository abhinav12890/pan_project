import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
};

const logoStyle = {
  flex: "0 0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "5rem",
  height: "5rem",
  borderRadius: "50%",
  borderTopColor: "#fff",
};

const titleStyle = {
  flex: "1 1 100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "3rem",
  color: "#007bff",
  marginLeft: "1rem",
};

const Preloader = () => {
  const titleVariants = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    initial: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.span style={logoStyle}>
        <img src="../../titlelogo.png" alt="logo" />
      </motion.span>
      <motion.h1
        style={titleStyle}
        variants={titleVariants}
        animate="animate"
        initial="initial"
      >
        Welcome to Pan India Pvt. Consultants Ltd.
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;
