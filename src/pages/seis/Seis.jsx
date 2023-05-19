import './seis.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { seis } from "../../formSource";

const Seis = () => {

  return (
    <div className='seis'>
      <div className="banner">
        <img src="./assets/headers/seismic.png" alt="seismic" width="500" height="150" />
      </div>
      <div className="mid">
        <div className="title" id='seis'>
          Seismic Solutions
        </div>
        <div className="stattext">
          Pan India's mission is to provide cutting-edge seismic equipment and services to the oil and gas industry. As a leading provider in the industry, we understand the importance of delivering superior products and services to our customers. Our strategic partnerships with premier manufacturers allow us to stay ahead of the curve and bring you the latest in seismic technology. Our extensive range of products is designed to meet the diverse needs of our clients, and our team of experts is dedicated to providing customised solutions to suit your specific requirements. We pride ourselves on our commitment to excellence and providing unparalleled service and support to our customers. Trust Seismic Solutions to deliver innovative and reliable seismic solutions to help you achieve your business objectives.
        </div>
        <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
          <div className="image-gallery" >
            {seis.map(({ src, title, content }) => (
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

export default Seis
