import "./contact.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = ({ content }) => {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;

    if (!emailRegex.test(formState.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const emailConfig = {
      SecureToken: "f625f2bd-31ce-45fb-a79d-3ef172b41b3d",// secured token from smtpjs
      To: "assassin2624@gmail.com", // receiver's email id
      From: "abhinavkumarpal890@gmail.com",// email entered from smtpjs, sender's email id
      Subject: `Contact form message from ${formState.name}`,
      Body: `Message:<br>${formState.message}<br><br>Yours faithfully,<br>${formState.name} ${formState.lname}<br>${formState.phone}<br>${formState.email}`,
    };

    const response = await window.Email.send(emailConfig);

    if (response === "OK") {
      toast.success(`Email sent successfully!`);
    } else {
      console.error(response);
      toast.error(`Failed to send email`);
    }
    setFormState({});
  };


  return <div className="contact">
    <ToastContainer position="top-right" />
    <div className="title">
      <h1>WE WOULD LOVE TO HEAR FROM YOU</h1>
    </div>
    <div className="content">
      If you have a project or an idea that we can help you to implement or if you want to discuss your project with us or if you have any comment, suggestion just drop a line... or if you don't like forms... give us a call!
    </div>
    <div className="container">
      <div className="contactInfo">
        {content.map((content) => (
          <div key={content.title}>
            <h2>{content.title}</h2>
            <ul className="info">
              <li>
                <span><LocationOnIcon className="img" /></span>
                <span>
                  {content.address}
                </span>
              </li>
              <li>
                <span><EmailIcon className="img" /></span>
                <span>
                  {content.email}
                </span>
              </li>
              <li>
                <span><PhoneIcon className="img" /></span>
                <span>
                  {content.contact}
                </span>
              </li>
              <li>
                <span><FaxIcon className="img" /></span>
                <span>
                  {content.fax}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <form className="contactform" onSubmit={submitHandler}>
        <h2> Send a message</h2>
        <div className="formBox">
          <div className="inputBox w50">
            <input type="text" name="name" value={formState.name || ""} required onChange={changeHandler} />
            <span>First Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="lname" value={formState.lname || ""} required onChange={changeHandler} />
            <span>Last Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="email" value={formState.email || ""} required onChange={changeHandler} />
            <span>Email</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="phone" value={formState.phone || ""} required onChange={changeHandler} />
            <span>Phone</span>
          </div>
          <div className="inputBox w100">
            <textarea name="message" cols="30" rows="10" value={formState.message || ""} onChange={changeHandler} required></textarea>
            <span>
              Write Your Message Here...
            </span>
          </div>
          <div className="inputBox w100">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  </div>;
};
export default Contact;
