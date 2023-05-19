import './eng.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { eng } from "../../formSource";

const Eng = () => {

  return (
    <div className='eng'>
      <div className="banner">
        <img src="./assets/headers/engineering.png" alt="engineering" width="500" height="150" />
      </div>
      <div className="mid">
        <div className="title" id='eng'>
          Engineering Solutions
        </div>
        <div className="stattext">
          Pan India’s engineering division is a trusted provider of cutting-edge mechanical and electro-mechanical technologies for various industries across India, including railways, metros, BHEL, BEML, steel plants, power sectors, and mines. Our dedicated team continuously strives to introduce state-of-the-art advancements, providing solutions to complex engineering challenges. <br />
          Our portfolio of completed projects includes prestigious turnkey projects, such as rolling stock and plant & machinery for Indian Railways’ production units, including Rail Coach Factory in Kapurthala and Rail Wheel Factory in Bangalore. <br />
          Our customer-centric approach ensures that we provide innovative and customised solutions that exceed expectations. At Pan India, we are committed to maximising efficiency and minimising downtime for our clients. Experience the difference with our engineering solutions team today.
        </div>
        <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} >
          <div className="image-gallery">
            {eng.map(({ src, title, content }) => (
              <div className="container" key={title}>
                <ImageContainer src={src} title={title} content={content} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Eng
