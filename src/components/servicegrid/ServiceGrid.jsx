import React from "react";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { services } from "../../formSource";
import "./servicegrid.scss";

const Container = React.memo(({ image, text, link }) => {
  return (
    <div className="service_grid_container">
      <img src={image} alt={text} style={{ width: "100%", height: "100%" }} />
      <HashLink to={link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <p className="service_container__text">{text}</p>
      </HashLink>
    </div>
  );
});

function ServiceGrid() {
  return (
    <motion.div className="service_block" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
      {services.map((container, index) => (
        <Container key={index} image={container.image} text={container.text} link={container.links} />
      ))}
    </motion.div>
  );
}

export default ServiceGrid;
