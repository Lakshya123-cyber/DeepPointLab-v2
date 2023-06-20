import "./about.css";
import Img from "../../img/work1.jpeg";
import { useEffect } from "react";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Us</h1>
        <p className="a-sub">
          Client-Centric Tech Consultancy Solutions for Your Success
        </p>
        <p className="a-desc">
          At Deep Point Lab, we are a team of passionate technologists and
          consultants who are dedicated to driving your success. With a strong
          foundation in the industry and a deep understanding of emerging
          trends, we are well-equipped to navigate the complexities of the
          digital landscape. Our expertise spans various domains, and our
          commitment to excellence ensures that we deliver exceptional value to
          every client we serve.
        </p>
      </div>
    </div>
  );
};

export default About;
