import './constr.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { constr } from "../../formSource";

const Constr = () => {

    return (
        <div className='constr'>
            <div className="banner">
                <img src="./assets/headers/construction.png" alt="construction" width="500" height="150" />
            </div>
            <div className="mid">
                <div className="title" id='constr'>
                    Construction Solutions
                </div>
                <div className="stattext"></div>
                <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                    <div className="image-gallery">
                        {constr.map(({ src, title, content }) => (
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

export default Constr;
