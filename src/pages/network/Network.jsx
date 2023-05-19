import React, { useState } from 'react';
import './network.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { network } from '../../formSource';

const Network = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNetworkClick = (selectedNetwork) => {
    setSelectedNetwork(selectedNetwork);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedNetwork(null);
    setShowModal(false);
  };

  return (
    <div className="network">
      <div className="title">
        <h4>PAN INDIA Network</h4>
      </div>
      {showModal && selectedNetwork && (
        <div className="modal" onClick={closeModal}>
          <div className="description">
            <h2>{selectedNetwork.title}</h2>
            {selectedNetwork.description.map((desc, index) => (
              <div key={index}>
                <p>{desc.name}</p>
                <p>{desc.address}</p>
                <p>{desc.phone}</p>
                <p>{desc.email}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      )}
      <motion.div className="mid" variants={fadeIn('left', 0.3)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
        {network.map((item) => (
          <div key={item.id} className="container" onClick={() => handleNetworkClick(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <p className="container__text">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Network;
