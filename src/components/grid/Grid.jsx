import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { containers } from "../../formSource";
import "./grid.scss";

const Container = React.memo(({ image, text, link }) => {
  return (
    <div className="grid_container">
      <img src={image} alt={text} style={{ width: "100%", height: "100%" }} />
      <Link to={link}>
        <p className="container__text">{text}</p>
      </Link>
    </div>
  );
});

function Grid() {
  return (
    <motion.div className="grid_block" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
      {containers.map((container, index) => (
        <Container key={index} image={container.image} text={container.text} link={container.links} />
      ))}
    </motion.div>
  );
}

export default Grid;
