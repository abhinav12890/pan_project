import './geophy.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { geop } from "../../formSource";

const Geophy = () => {

    return (
        <div className='geop'>
            <div className="banner">
                <img src="./assets/headers/geophysical.png" alt="geophysical" width="500" height="150" />
            </div>
            <div className="mid">
                <div className="title" id='geop'>
                    Geophysical Solutions
                </div>
                <div className="stattext">
                    Pan India is a trusted provider of geophysical solutions with unparalleled expertise in the field. Our comprehensive services cater to clients across India, offering complete solutions and support. We prioritise innovation and optimise project workflows from survey design to delivery of the final data product. <br />
                    Our experienced team offers recommendations on the best instrument to meet your needs. We specialise in geophysical solutions for hydrology, and offer non-seismic options including IP resistivity metres, GPR, and NMR-based equipment. We also undertake seismic data archival and management projects, as well as the digitization of various geophysical data, such as seismic, well logs, and geological/base maps. <br />
                    At Pan India, we prioritise professionalism and expertise, working with clients to develop customised geophysical solutions tailored to their specific requirements. Our customer-centric approach ensures our team stands by you throughout the project lifecycle. Contact us today to learn more about our unparalleled geophysical solutions.
                </div>
                <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                    <div className="image-gallery">
                        {geop.map(({ src, title, content }) => (
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

export default Geophy
