import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <>
      <h1 className="h1">Our Blogs</h1>
      <section className="blog padding">
        <div className="container grid2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
