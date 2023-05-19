import './sec.scss'
import { useState } from 'react';
// import useFetch from '../../hooks/useFetch';
import Service from '../../components/service/Service';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { sec } from "../../formSource";

const Sec = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
    };

    return (
        <div className='sec'>
            <div className="banner">
                <img src="./assets/headers/security.png" alt="security" width="500" height="150" />
            </div>
            <div className="mid">
                <div className="title" id='sec'>
                    Security Solutions
                </div>
                <div className="stattext"></div>
                <motion.div className='soft' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
                    {sec.map((member, index) => (
                        <Service
                            key={index}
                            name={member.text}
                            image={member.src}
                            desc={member.desc}
                            onClick={() => handleMemberClick(member)}
                        />
                    ))}
                </motion.div>
                {selectedMember && (
                    <div className='modal'>
                        <div className='modal-content'>
                            <div className='close' onClick={handleCloseModal}>
                                X
                            </div>
                            <h2>{selectedMember.text}</h2>
                            <p>{selectedMember.about}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sec;
