import React from 'react';
import './slider2.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { logo2 } from '../../formSource';

const Slider2 = React.memo(() => {
    return (
        <motion.div className="slider2" variants={fadeIn('left', 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
            <Link to="/clients" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div className="slide-track-2">
                    {logo2.map((client, index) => (
                        <div key={index} className="slide">
                            <img
                                src={client.imgsrc}
                                alt={`${index + 1}`}
                                width="200"
                                height="150"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </Link>
        </motion.div>
    );
}, () => true);

export default Slider2;
