import './marine.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { marine } from "../../formSource";

const Marine = () => {
    return (
        <div className='marine'>
            <div className="banner">
                <img src="./assets/headers/oceanography.png" alt="oceanography" width="500" height="150" />
            </div>
            <div className="mid">
                <div className="title" id='marine'>
                    Oceanography Solutions
                </div>
                <div className="stattext">
                    Pan India specialises in marine equipment and surveying with a team of dedicated professionals, including OEM certified engineers. <br />
                    We sell and distribute marine equipment such as multi-beam and single-beam echo sounders, ADCPs, sonars, autonomous underwater vehicles, and ROVs. With our extensive knowledge and experience in hydrography, oceanography, engineering, marine construction, and positioning and navigation solutions and services, we help organisations achieve their goals. <br />
                    Our capabilities include maintenance of highly specialised equipment. We offer AMC/CAMC services for optimal performance and reliability. Our highly skilled team provides installation and commissioning services.
                    At Marine Survey Solutions, we offer prompt and efficient sales and technical support. Contact us today to learn more about our innovative solutions and cutting-edge technology to meet your needs.
                </div>
                <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                    <div className="image-gallery">
                        {marine.map(({ src, title, content }) => (
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

export default Marine
