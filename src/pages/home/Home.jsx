import Carousel from "../../components/carousel/Carousel";
import Grid from "../../components/grid/Grid";
import Slider from "../../components/slider/Slider";
import Slider2 from "../../components/slider2/Slider2";
import { Link } from "react-router-dom";
import "./home.scss"
import { useState } from 'react';
import MarqueeText from "../../components/marquee/MarqueeText";
import ServiceGrid from "../../components/servicegrid/ServiceGrid";
import AddIcon from '@mui/icons-material/Add';
import { HashLink } from 'react-router-hash-link';
// import useFetch from "../../hooks/useFetch";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import { aboutcont } from "../../formSource";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleClick = () => {
    setIsActive(current => !current);
  };
  return (
    <div className="home" >
      <Carousel />
      <div className="title"><h4>How Can We Serve Your Needs?</h4></div>
      <Grid />
      <div className="title"><h4>WHAT WE DO - OUR SERVICES</h4></div>
      <div className="stattext">
        At Pan India Consultants, we are committed to assisting businesses throughout India, from fledgling startups to established companies. We offer a diverse range of services that help organisations take advantage of new opportunities, fulfil crucial business requirements, and meet the needs of their stakeholders. Our solutions are designed to support businesses in a rapidly-evolving world, empowering them to succeed in the present while creating long-term growth for the future. Choose Pan India consultants pvt.ltd. as your partner, and let us help you unlock your business's full potential.
      </div>
      <ServiceGrid />
      <div className="title"><h4>About Us</h4></div>
      <div className="stattext">
        Established in 1985, Pan India Group provides top-notch services in the oil and gas, mining, geographical management system (GSI), remote sensing, and photogrammetry industries. With a wide range of original equipment manufacturers (OEMs), the group serves a diverse range of discerning clients in India and neighbouring countries across various sectors. The group is renowned for introducing pioneering technologies from leading nations like the USA, Canada, UK, France, Italy, Germany, Russia, and Japan. <br /> With over 300 skilled professionals, Pan India Group delivers top-notch solutions to meet client requirements in system integration consultancy, marketing, and after-sales services. Experience our outstanding services by contacting us today. <br /> At our online platform, our team of highly professional experts upholds the highest standards of excellence by utilising the latest technology and innovative techniques. Customer satisfaction is the cornerstone of our success, and we ensure that we meet and exceed our customers' expectations at every step. With our expert guidance, your goals are accomplished in a timely and efficient manner. Explore our website and learn more about our services. Contact our support team should you require further information. Thank you for choosing Pan India Group - we look forward to serving you!
      </div>
      <div className="info" id="info" ref={ref}>
        <div className="box">
          <div className="num">
            {inView && <CountUp start={200} end={300} duration={3} />}
            <AddIcon className="add" />
          </div>
          <div className="desc">
            Employees
          </div>
        </div>
        <div className="box">
          <div className="num">
            {inView && <CountUp start={0} end={38} duration={3} />}
            <AddIcon className="add" />
          </div>
          <div className="desc">
            Years of Experience
          </div>
        </div>
        <div className="box">
          <div className="num">
            {inView && <CountUp start={50} end={100} duration={3} />}
            <AddIcon className="add" />
          </div>
          <div className="desc">
            Completed Projects
          </div>
        </div>
      </div>
      <motion.div className="mid" variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        {aboutcont.map((item) => (
          <div className="container" key={item.id}>
            <img src={item.image} alt={item.title} />
            <HashLink to={item.url} style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <p className="container__text">{item.title}</p>
            </HashLink>
          </div>
        ))}
      </motion.div>
      <div className="title"><h4>Why Choose Us</h4></div>
      <div className="stattext">
        At our company, we are proud to have a team with extensive experience working with major corporations as well as small businesses. We understand the challenges and pressures that weigh on business owners and senior decision-makers, whether they are managing a large corporation with complex operations or running a small business with limited resources.
        Our team has the expertise and knowledge to help our clients navigate the intricacies of today's business environment. We are committed to working closely with our clients to identify their unique needs and develop tailored solutions that drive growth and success.
        We understand that every business is different, and we take a personalised approach to our work. Whether our clients are facing tough decisions about their products, operations, or marketing strategy, we have the experience and know-how to help them make informed decisions that drive their business forward. <br />
        We are dedicated to staying up-to-date with the latest industry trends and best practices to ensure that our clients receive the most effective advice and support. With our deep expertise, we have a proven track record of helping businesses of all sizes achieve their goals and succeed in today's competitive marketplace.
      </div>
      <div className="title">
        <Link to="/partner" style={{ color: 'inherit', textDecoration: 'inherit' }}><h4>Global Partnership</h4></Link>
      </div>
      <div className="stattext">
        At our company, we pride ourselves on our strategic partnerships with some of the world's leading technology and service providers. By nurturing these relationships, we are able to create and offer our clients the best solutions available on the market today.
        Our partnerships are built on a foundation of trust, commitment, and collaboration. We work closely with our partners to ensure that we are always delivering the highest-quality solutions that meet the evolving needs of our clients.
        With our deep expertise and strong relationships, we are dedicated to providing our clients with the most effective and innovative solutions available. We believe that by working together with our partners and clients, we can achieve greater success and drive positive change in the global marketplace.
      </div>
      <Slider />
      <div className="title">
        <Link to="/clients" style={{ color: 'inherit', textDecoration: 'inherit' }}><h4>Major Customers</h4></Link>
      </div>
      <div className="stattext">
        At our company, we take great pride in our many happy clients. Our clients are our most important assets, and we are proud to have many repeat customers who trust us to provide top-quality services for their development, support, and maintenance needs.
        We believe that our success is built on our clients' satisfaction. That's why we are committed to providing the highest level of service and support to each and every client, no matter the size or scope of their project.
        With our expertise and dedication to customer satisfaction, we are confident that we can meet and exceed our clients' expectations. We are grateful for the trust our clients have placed in us and are committed to continuing to provide the highest-quality services available in the industry.
      </div>
      <Slider2 />
      <div className="title">
        <h4>MAKE IN INDIA</h4>
      </div>
      <div className="stattext">
        Make in India promotes domestic manufacturing and incentivizes indigenous participation. Through indigenization, the government is facilitating domestic manufacturing in the defence sector and encouraging Indian ownership. As a registered participant, Pan India serves as a ship integrator and developer of data acquisition systems under the Make in India Project. Our commitment to the program supports India's economy while meeting our clients' evolving needs.
      </div>
      <div className="banner" style={{ visibility: isActive ? 'hidden' : '', color: isActive ? 'visible' : '', }} >
        <div className="head">
          <span> ISO 9001:2015 Certification</span>
        </div>
        <MarqueeText text="Processing of Spatial/Non-Spatial Data (Indexing, Scanning, Digitization & DMS), Geo Physical/Geo-Informatics(GIS/RS), Field Survey and Mapping Services, Sales, Technical Support & Repairs of Hydrographic, Oceanographic, Geophysical, Land Survey, Hydrology Survey & various other Equipment, Software Development and Customization." />
        <span className="cross" onClick={handleClick} style={{ visibility: isActive ? 'hidden' : '', color: isActive ? 'visible' : '', }}>X</span>
      </div>
    </div>
  );
};
export default Home;
