import { useState } from "react";
import "./events.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { events } from '../../formSource';

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="events">
      <div className="title">
        <h4>Events</h4>
      </div>
      {events.map((event) => (
        <div className="event" key={event.id}>
          <h2 className="event__title">{event.title}</h2>
          <div className="event__details">
            <div className="event__details__date">{event.date}</div>
            <div className="event__details__description">
              {event.description}
            </div>
          </div>
          <motion.div className="event__images" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
            {event.images.map((image, index) => (
              <img
                src={image}
                alt={`${event.title} pic ${index + 1}`}
                key={index}
                className="event__images__image"
                onClick={() => openModal(image)}
              />
            ))}
          </motion.div>
        </div>
      ))}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt={selectedImage}
            className="modal__content"
          />
        </div>
      )}
    </div>
  );
};

export default Events;
