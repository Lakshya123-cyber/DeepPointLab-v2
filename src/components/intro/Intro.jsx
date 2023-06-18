import React from "react";
import "./intro.css";
import Img from "../../img/hand.png";
import About from "../about/About";
import ProductList from "../productList/ProductList";
import Testimonials from "../testimonials/Testimonials";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";

import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Intro = () => {
  return (
    <>
      <div data-aos="fade-down">
        <div className="i">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Consulting Businesses</h2>
              <h1 className="i-name">To Grow.</h1>
              <br />
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">
                    Technology Training and Support
                  </div>
                  <div className="i-title-item">
                    IT Infrastructure Optimization
                  </div>
                  <div className="i-title-item">
                    Data Analysis and Business Intelligence
                  </div>
                  <div className="i-title-item">Mobile App Development</div>
                  <div className="i-title-item">UI/UX Design</div>
                  <div className="i-title-item">Digital Transformation</div>
                </div>
              </div>
              <br />
              <p className="i-desc">
                Deep Point Lab specializes in expert tech consultancy services
                that empower businesses in the digital landscape. We deliver
                tailored solutions for growth, efficiency, and innovation,
                helping your business reach new heights.
              </p>
            </div>
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              stroke="black"
              className="i-scroll"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="scroll">
                <path
                  id="Vector"
                  d="M40.5 15L34.5 9L28.5 15"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M28.5 24L34.5 30L40.5 24"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group">
                  <path
                    id="Vector_3"
                    d="M9 37.5H60"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <path
                  id="Vector_4"
                  d="M34.5 27V9"
                  stroke-width="2.9895"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="Group_2">
                  <path
                    id="Vector_5"
                    d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </div>
          {/* <div className="i-right">
            <div className="i-bg"></div>
            <img src={Img} alt="" className="i-img" />
          </div> */}
          <div className="i-right">
            <Spline
              scene="https://prod.spline.design/jmCKfd-xG14UYY5S/scene.splinecode/"
              className="spline"
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-down">
        <ProductList />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <div data-aos="fade-down">
        <Blog />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
    </>
  );
};

export default Intro;
