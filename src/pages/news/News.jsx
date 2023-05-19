// import useFetch from "../../hooks/useFetch";
import "./news.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { newsItems } from '../../formSource';

const News = () => {

  const lastItem = newsItems?.[newsItems.length - 1];
  const otherItems = newsItems?.slice(0, newsItems.length - 1);

  return (
    <div className="news">
      <div className="title">NEWS</div>
      <div className="news-items" >
        <motion.div className="news-item" variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
          <h2 className="item-heading">{lastItem?.heading}</h2>
          <img
            src={
              lastItem?.imageUrl
            }
            alt={lastItem?.heading}
            className="item-image"
          />
          <p className="item-content">{lastItem?.content}</p>
        </motion.div>
        <motion.div className="column-items" variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
          {otherItems?.map((item, index) => (
            <div className="news-item" key={index}>
              <h2 className="item-heading">{item?.heading}</h2>
              <img
                src={
                  item?.imageUrl
                }
                alt={item?.heading}
                className="item-image"
              />
              <p className="item-content">{item?.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default News;
