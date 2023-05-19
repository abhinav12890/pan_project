import { useState } from 'react';
import './about.scss';
import Team from '../../components/team/Team';
import { Link } from "react-router-dom";
// import useFetch from '../../hooks/useFetch';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { teamMembers, accolades } from '../../formSource';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const [selectedAccolade, setSelectedAccolade] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAccoladeClick = (accolade) => {
    setSelectedAccolade(accolade);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedAccolade(null);
    setShowModal(false);
  };
  // const { data: teamMembers, loading: teamMembersLoading, error: teamMembersError } = useFetch("team-members?populate=img&populate=*");
  // const { data: accolades, loading: accoladesLoading, error: accoladesError } = useFetch("accolades?populate=img&populate=*");

  // if (teamMembersLoading || accoladesLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (teamMembersError || accoladesError) {
  //   return <div>Error: {teamMembersError?.message || accoladesError?.message}</div>;
  // }
  const filteredMembers = teamMembers.filter(member => member.id === 1 || member.id === 2);
  const firstTwoMembers = filteredMembers.slice(0, 2);
  const restTeamMembers = teamMembers.slice(2);

  return (
    <div className='about'>
      <div className='title' id='team'>
        <h4>Our Team</h4>
      </div>
      <motion.div className='teams1' variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        {firstTwoMembers.map((member, index) => (
          <Team
            key={index}
            name={member.text}
            image={member.src}
            designation={member.designation}
            onClick={() => handleMemberClick(member)}
          />
        ))}
        <style>
          {
            `
          .teams1 > :first-child .profile-card {
            background-color:#2D5F5D;
          }
          .teams1 > :nth-child(2){
            width:60%;
          }
          @media only screen and (max-width: 1298px){
            .teams1 > :nth-child(2){
              width:70%;
            }
          }
          @media only screen and (max-width: 768px){
            .teams1 > :nth-child(2){
              width:80%;
            }
          }
          `
          }
        </style>
      </motion.div>
      <motion.div className='teams' variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        {restTeamMembers.map((member, index) => (
          <Team
            key={index}
            name={member.text}
            image={member.src}
            designation={member.designation}
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
      <div className='content'>
        <div className='title' id='about'>
          <h4>About Us</h4>
        </div>
        <div className='text'>Pan India Group, started operations in 1985, Provides Services in Oil & Gas, Mining, Geographical Management System (GSI), Remote Sensing and Photogrammetry and represents a wide spectrum of OEMs covering diverse customer base including Railways, Oil, Gas, Defence, Power, Nuclear, Space, Scientific Labs and Research organization, Public & Private Sector in India and neighbouring countries. The Group has been instrumental in bringing new technologies into India from countries like USA, Canada, UK, France, Italy, Germany , Russia and Japan backed by a complete range of start-up and support services, facilitating absorption of state-of-the-art technology. The Group today has a large pool of talent in the areas of system integration consultancy, marketing and after sales services. The group employs over 300 motivated staff.</div>
      </div>
      <div className='content'>
        <div className='title'>
          <h4>PROJECT MANAGEMENT</h4>
        </div>
        <div className='text'>The key to ensuring the total success of any program is good project management. All advanced, highly technical system require the use of well-defined and practiced project management skills and a professionally committed group. <br /><br />
          Pan India uses a formalized and proven project management system for its operations and projects. The Pan India project management plan provides both the client and Pan India management with complete visibility into the progress of each project. Additionally, it provides strict management control for the containment of technical cost and schedule risks. <br /><br />
          The Pan India divisions offer expertise in Oil & Gas, GIS, RS and Photogrammetry, electronics, computer engineering, surveying, marine science and specialized electronics equipments. Pan India Consultants is also providing serving major customers like National Oil Companies, DGH, Department of Space, Regional and State Remote Sensing Centres, Central and State Government Agencies, National Hydrographic Office ships/Indian Navy comprehensive maintenance under contract from Ministry of Defence for Hydro data logging system, DGPS, Side Scan Sonar, Dynamic Motion Sensors, ROV, Divers Sonars. In addition, extensive sales & support of equipment related to earth sciences are being undertaken for various organizations in India. In fact, Pan India Consultants is a well-known in the market place as a leading system integrator supplier for providing complete solutions timely and thereafter providing a high degree of technical support through our engineers trained at OEM bases. It is also a trusted partner for providing services in GIS, RS and Photogrammetry to various Central and state Agencies for implementing National Projects.</div>
      </div>
      <div className='content'>
        <div className='title'>
          <h4>CORPORATE CAPABILITIES</h4>
        </div>
        <div className='text'>Pan India has successfully executed numerous projects of National Importance in Oil & Gas, GIS, RS and Photogrammetry owing to its meticulous planning and execution by monitoring it from its inception to conclusion by professional and experienced team. <br /> <br />
          Pan India credits its success as a Systems Integrator to the use of proven project management techniques, teamwork, experience and the high level of skill sets demonstrated in all the critical areas. Pan India provides proper attention to the important functions of project management, contract administration, financial management, cost and scheduling, procurement, effective systems engineering, quality assurance, after sales support, HAT/SAT, logistics support, training and documentation.</div>
      </div>
      <div className='title' id='accolades'>
        <h4>Accolades</h4>
      </div>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedAccolade.image} alt={selectedAccolade.title} />
        </div>
      )}
      <motion.div className="mid" variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }}>
        {accolades.map((accolade) => (
          <div key={accolade.id} className="container" onClick={() => handleAccoladeClick(accolade)}>
            <img src={accolade.image} alt={accolade.title} />
            <p className="container__text">{accolade.title}</p>
          </div>
        ))}
      </motion.div>
      <div className='title'>
        <Link to="/network" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <h4>Our Networks </h4>
        </Link>
      </div>
    </div>
  );
};

export default About;
