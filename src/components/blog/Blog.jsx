import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <h1 style={{ "margin-left": "725px", fontSize: "3rem" }}>Our Blogs</h1>
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
