import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let&apos;s discuss your idea</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} className="c-icon" alt="" />
              +1 (804) 236-6217
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              ayush@deeppointlab.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              245 King Street, Touterie Victoria 82912 America
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What&apos;s your story?</b>
            <br />
            <br /> Ready to take the next step? Reach out to us today to
            schedule a consultation or request more information. We are here to
            answer any questions you may have and discuss how our tech
            consultancy services can be tailored to meet your specific needs.
            Let's collaborate to unlock the full potential of your business in
            the digital age.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333", width: "100%" }}
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="mb-[20px]"
            />
            <input
              style={{ backgroundColor: darkMode && "#333", width: "100%" }}
              type="text"
              placeholder="Your Email"
              name="user_email"
              className="mb-[20px]"
            />
            <input
              style={{ backgroundColor: darkMode && "#333", width: "100%" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="mb-[30px]"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              className="mb-[30px] outline-dashed p-2"
            />
            <button className="bg-[#a4eef1] px-6">Submit</button>
            <br />
            <br />
            <b style={{ fontSize: "30px" }}>{done && "Thank you!"}</b>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
