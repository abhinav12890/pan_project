import './services.scss'
import ImageContainer from '../../components/imagecontainer/ImageContainer'
import Service from '../../components/service/Service';
import { useState } from 'react';
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Geoinformatics, software } from "../../formSource"
const Services = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };
  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className='services'>
      <div className="title" id='kpo'>
        <h1>Knowledge Process Outsourcing (KPO) services</h1>
      </div>
      <div className='content'>
        <div className='text'>Our Knowledge Process Outsourcing (KPO) services cater to the critical Oil and Gas sector, including Exploration and Oil Field developments.
          Servicing some of the global giants from Gurgaon, our facility boasts of top of line infrastructure and best in class features. Our facilities are Certified for Information Security Management System ( ISMS ) and complies with the requirement of ISO/IEC : 27001 : 2005. We provide Knowledge Process Outsourcing, Consulting, Research, Quantiative Analysis and Advance Customer Support for these strategic domains of oil & gas.Our services are designed to help companies gain and maintain a key competitive advantage in the marketplace. These include:
          <ul>
            <li>E&P Data Management,</li>
            <li>Digitization of Well-Logs,</li>
            <li>Indexing,</li>
            <li>Depth Registration,</li>
            <li>Preliminary Processing,</li>
            <li>Digitization of Seismic and other E&P Data,</li>
            <li>Format Conversion, and</li>
            <li>Data Conditioning.</li>
          </ul>
          We proudly follow SEG and POSC (ENERGISTIC) standards for all our projects.
        </div>
      </div>
      <div className="title" id='geoinformatics'>
        <h1>GeoInformatics</h1>
      </div>
      <div className='content'>
        <div className='text'>Pan India is a leading provider of high-quality services in thematic mapping, topographical mapping, surveying, and spatial data analysis. Our team uses cutting-edge technology such as remote sensing, photogrammetry, GPS, LIDAR, and Geographic Information System (GIS) to provide innovative solutions that cater to the diverse needs of our clients. <br />
          Our expertise in geoinformatics has made us a valuable partner for decision-making in various global domains, including governance, urbanisation, transportation, communication, natural resource management, agriculture, and environmental protection. Our commitment to excellence and customer satisfaction is evident in every project we undertake, and we strive to deliver exceptional results that exceed expectations. <br />
          Trust us to use state-of-the-art tools to provide revolutionary data analysis and support for your business needs. Let Geoinformatics Solutions Pan India help you unlock the potential of geospatial information to drive growth and success for your business.
        </div>
      </div>
      <motion.div className="grid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="image-gallery">
          {Geoinformatics.map(({ src, title, content }) => (
            <div className="container" key={title}>
              <ImageContainer src={src} title={title} content={content} />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="title" id='software'>
        <h1>Software Solutions</h1>
      </div>
      <div className="content">
        <div className="text">
          Pan India Consultants understands the significance of having a skilled team of developers to bring innovative ideas to fruition. Our team has several years of experience in software development, and we are equipped with the technical proficiency and knowledge necessary to transform your vision into reality.
          Our holistic approach takes into account all facets of your business's objectives and requirements to deliver comprehensive software solutions that can enhance productivity and simplify your operations.
          As your partner in success, we do not limit ourselves to design or development; rather, we offer end-to-end support, from ideation to implementation. To learn more about how our software solutions can benefit your business, contact us today.
        </div>
      </div>
      <motion.div className="soft" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        {software.map((member) => (
          <Service
            key={member.id}
            name={member.text}
            image={member.src}
            desc={member.desc}
            onClick={() => handleMemberClick(member)}
          />
        ))}
      </motion.div>
      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={handleCloseModal}>
              X
            </div>
            <h2>{selectedMember.text}</h2>
            <p>{selectedMember.about}</p>
          </div>
        </div>
      )}
      <div className="title" id='exploration'>
        <h1>Exploration & Production</h1>
      </div>
      <div className="content">
        <div className="text">
          At Pan India Consultants Private Limited, Exploration & Production we are proud to hold a participating interest in the highly prospective CB-ONN-2010/5 exploration block under NELP-IX, which is located in Gujarat's prolific Cambay Basin. Our company operates this block, surrounded by other acreages with numerous discoveries. We have already drilled four exploratory wells, with the latest well exhibiting promising results. Currently, we are in the advanced stages of planning an additional three wells for the next phase, as we are committed to ongoing appraisal and exploration programs to fully unlock the potential of this block. Our experienced team utilises the latest technologies to ensure optimal exploration outcomes, and we aim to achieve maximum value for our clients. Trust us to provide innovative solutions for your exploration and production needs.
        </div>
      </div>
      <div className='content'>
        <div className="head">BLOCK CB-ONN-2010/5</div>
        <div className='text'>Pan India Consultants Private Limited has participating interest in the Exploration Block CB-ONN-2010/5 under NELP-IX. The block is located in the petroliferous Cambay Basin in Gujarat. The block is surrounded by acreages with some discoveries. Pan India Consultants Private Limited is the Operator for this block. In Initial Exploration Period 4 Exploratory wells have been drilled and in one there is some success. In 2nd Phase 3 more Wells are planned. Further appraisal and exploration programmes are under progress.
        </div>
      </div>
      <motion.div className='content' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">General Information:</div>
        <div className="box ">
          <div className='text'>
            <ul>
              <li>Production Sharing Contract was signed on 28 Mar 2012</li>
              <li>Area of Block – 49 sq km + 19.14 Sq. KM</li>
              <li>Current Phase – Subsequent exploration Phase</li>
            </ul>
            The operation in the block is managed as per Good International Petroleum Industry Practices in environmentally manner.
          </div>
          <div className="image"><img src="../assets/images/exploration/oilblock.jpg" alt="oil block" loading="lazy" /></div>
        </div>
      </motion.div>
      <motion.div className='content' variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">Environmental Clearances and Compliances -</div>
        <div className="box ">
          <div className='text'>
            <ul>
              <li>Granted for EC for 3D seismic Acquisition and Drilling of FOUR Expl Wells in the Block during 2016.</li>
              <li>Environmental Monitoring was carried out while drilling of wells as well as testing / test production times.</li>
              <li>Periodic Compliance Submission</li>
              <li>Submitted for EC For Drilling EIGHT wells and Establishment of Early Prod System (EPS)</li>
              <li>Submitted for EC to SEAIA, Gujarat for Drilling TWO Expl Wells</li>
            </ul>
          </div>
          <div className="image"><img src="../assets/images/exploration/oilrig.jpg" alt="oilrig.jpg" loading="lazy" /></div>
        </div>
      </motion.div>
      <motion.div className='content' variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">Environmental Protection Related Documents–</div>
        <div className="box ">
          <div className='text'>
            <ul>
              <li>Environmental Clearance</li>
              <li>Environmental Clearance Compliance Status Reports.</li>
            </ul>
          </div>
          <div className="image"><img src="../assets/images/exploration/well.gif" alt="well" loading="lazy" /></div>
        </div>
      </motion.div>
      <motion.div className='content' variants={fadeIn('left', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">Environmental Protection Initiatives –</div>
        <div className="box ">
          <div className='text'>
            <ul>
              <li>Plantation of 50 to 70 samples during 2019 and 2020 respectively</li>
              <li>Usage of Solar Water Heater for Hot Water Circulation</li>loading="lazy"
              <li>Usage of Solar Street Lights</li>
              <li>Usage of Solar Evaporated Effluent Water Treatment Tank</li>
              <li>Usage of Solar Lights for Security Work</li>
            </ul>
          </div>
          <div className="image"><img src="../assets/images/exploration/crude.jpg" alt="crude" loading="lazy" /></div>
        </div>
      </motion.div>
      <div className='content'>
        <div className="head">BLOCK CB-ONN-2010/5</div>
        <div className="box ">
          <div className='text'>
            <ul>
              <li>Donation to Village Temples for development</li>
              <li>Distribution of Grocery Kit for Villagers during COVID Pandemic situation</li>
              <li>Distribution of Books & Stationery to School Kids during 2020</li>
              <li>Shelter for School Kids from Weather Escape during Tution in Aug 2020</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="title" id='repair'>
        <h1>Specialized Repair Services</h1>
      </div>
      <div className="content">
        <div className="text">
          Pan India Consultants Pvt. Ltd. offers high-quality circuit board repair services that meet the highest standards of professionalism. Our team of certified and factory-trained technicians is committed to delivering exceptional results through precision revamping of your instruments. Our repair process involves replacing components with high failure rates and repairing failed components, guaranteeing optimal performance of your instruments.
          At Pan India Consultants Pvt. Ltd., we maintain strict quality assurance measures by subjecting your device to rigorous testing and analysis. Our team provides specialised repair services that deliver the perfect solution to any repair challenge you face.
          Choose Pan India Consultants Pvt. Ltd. for all your circuit board repair needs and experience our unmatched expertise and professionalism. Contact us today to schedule your repair and benefit from our top-notch services.
        </div>
      </div>
      <div className='content'>
        <div className="head">WE CAN HELP WITH REPAIR SERVICE</div>
        <div className='text'>At Pan India Consultants Pvt. Ltd., we have everything you need a quality repair service. Our combination of certified, factory-trained technicians and a carefully refined repair process allows us to provide high-quality circuit board repair services. We review the whole instrument , replacing components with high failure rates and repairing failed components. We also thoroughly test and analyze your device using a variety of methods, such as the curve tracer signature device.</div>
      </div>
      <motion.div className='content' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">WARRANTY & MAINTENANCE PLANS</div>
        <div className="box">
          <div className='text'>Pan India provides a standard warranty for commercial products, and full maintenance plans thereafter. Plans typically include on-site repair, annual preventive maintenance inspections and software upgrades. Pan India delivers:
            <ul>
              <li>Remote technical assistance and support around the clock</li>
              <li>Notification of solutions to known operational and software issues as they become available</li>
              <li>On-site repair services from a certified field service specialist, along with remote diagnostics</li>
              <li>Annual preventive maintenance, where needed.</li>
            </ul>
          </div>
          <div className="image"><img src="../assets/images/repairservices/Deso30.jpg" alt="Deso30" loading="lazy" /></div>
        </div>
      </motion.div>
      <motion.div className='content' variants={fadeIn('left', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">PRODUCT SUPPORT OPTIONS</div>
        <div className="box">
          <div className='text'>Our highly responsive support team takes pride in providing timely solutions, working hard to meet expectations around the clock. We strongly believe that providing an industry-leading survey solution is only the beginning. In fact, our relationship deepens after delivery, as Pan India Technical Solutions provides training and technical support to ensure the highest return from your investment.Our highly experienced field, hardware, and software specialists will:
            <ul>
              <li>Assist and train your staff during installation and surveys</li>
              <li>Perform on-site maintenance and repairs</li>
              <li>Perform remote diagnostics</li>
              <li>Deliver on-demand assistance for lidar and camera surveying issues as they arise.</li>
            </ul>
          </div>
          <div className="image"><img src="../assets/images/repairservices/Bathy500.jpg" alt="Bathy500" loading="lazy" /></div>
        </div>

      </motion.div>
      <motion.div className='content' variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        <div className="head">OUT OF WARRANTY</div>
        <div className='text'>Clients not under warranty should call our main Technical Solutions Lines at (+91 (124) 4013954, +91 (124) 4300950) and email at:
          <a className='link' href="mailto:support@panindiagroup.com"><span>support@panindiagroup.com</span></a></div>
      </motion.div>
    </div>

  )
}

export default Services
