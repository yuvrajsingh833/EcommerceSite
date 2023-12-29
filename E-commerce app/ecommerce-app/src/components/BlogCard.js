import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
     
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid" alt="" />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2022</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              a valid value to be accessible. Provide a valid, navigable address
              as the href value. 
            </p>
            <Link to='/single-blog' className="button">Read More</Link>
          </div>
        </div>
    </>
  );
};

export default BlogCard;
