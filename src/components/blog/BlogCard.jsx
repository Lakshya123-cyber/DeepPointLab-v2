import React from "react";
import { blogs } from "../../data";
import Img from "../../img/card.png";
import "./blog.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import BlogPost from "./BlogPost";

const BlogCard = () => {
  return (
    <>
      {blogs.map((val) => {
        return (
          <div className="items shadow" key={val.id}>
            <div className="img">
              <img src={Img} alt="" />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <label htmlFor="">{val.date}</label>
                </span>
                <span>
                  <label htmlFor="">{val.com}</label>
                </span>
              </div>
              <h1 onClick={() => {}}>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
