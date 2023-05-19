import './land.scss';
import ImageContainer from '../../components/imagecontainer/ImageContainer';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { land } from "../../formSource";

const Land = () => {
  return (
    <div className="land">
      <div className="banner">
        <img src="./assets/headers/geospatial.png" alt="geospatial" width="500" height="150" />
      </div>
      <div className="mid">
        <div className="title" id="land">
          Geospatial Solutions
        </div>
        <div className="stattext">
          Pan India offers leading land survey and geospatial solutions. We use our experience and knowledge of the latest survey technologies to provide cost-effective solutions that produce optimal results for our clients. <br />
          By integrating sensors, field applications, real-time communications, and back-office processing, we provide rich and accurate data with higher levels of accuracy. Our skilled engineers use their knowledge of geometry, trigonometry, regression analysis, and engineering to provide tailored solutions for conventional surveying markets.
          Our product portfolio includes GNSS, Optical Total Station, Auto Level, Digital Auto Level, data collection hardware, Terrestrial Scanner, Mobile Lidar, UAV Lidar, Unmanned Aerial Vehicle, and field and surveying software to achieve desired survey results.
          Choose Pan India for reliable, accurate, and cost-effective surveying and geospatial solutions to meet your needs.
        </div>
        <motion.div className="grid" variants={fadeIn('left', 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
          <div className="image-gallery">
            {land.map(({ src, title, content }) => (
              <div className="container" key={title}>
                <ImageContainer src={src} title={title} content={content} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Land;
