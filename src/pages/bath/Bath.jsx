import './bath.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { bath } from "../../formSource";

const Bath = () => {

  return (
    <div className='bath'>
      <div className="banner">
        <img src="./assets/headers/bathymetric.png" alt="bathymetric" width="500" height="150" />
      </div>
      <div className="mid">
        <div className="title" id='dismoni'>
          Bathymetric Solutions
        </div>
        <div className="stattext"></div>
        <div className="grid" >
          <motion.div className="image-gallery" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            {bath.map(({ src, title, content }) => (
              <div className="container" key={title}>
                <ImageContainer src={src} title={title} content={content} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Bath
