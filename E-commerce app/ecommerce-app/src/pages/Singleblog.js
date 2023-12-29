import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { BsFacebook, BsInstagram, BsLinkedin, BsFillArrowLeftCircleFill } from "react-icons/bs";
import blog from '../images/blog-1.jpg';
const Singleblog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="A Delighted Day Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="blog-card single-blog">
                <h3>A beautiful Sunday Morning renaissance</h3>
                <div className="card-image">
                  <img src={blog} className="img-fluid" alt="" />
                </div>
                <p className="paragraph">
                  When $enable-gradients is set to true, you’ll be able to use
                  .bg-gradient- utility classes. By default, $enable-gradients
                  is disabled and the example below is intentionally broken.
                  This is done for easier customization from the moment you
                  start using Bootstrap. Learn about our Sass options to enable
                  these classes and more.
                </p>
                <div className="blog-content d-flex ">
                  <p className="date ">1 Dec, 2022</p>
                  <p className="date mx-3">Kajol Sharma</p>
                </div>
                 <div className="d-flex justify-content-between"> 
                  <div>
                 
                  <Link to="/blogs" className=" text-secondary">
                  <BsFillArrowLeftCircleFill className="mx-3"/>
                  Back to blog
                  </Link>
                  </div>
                  <div>
                  <BsLinkedin  className='mx-3'/>
                  <BsInstagram className='mx-3'/> 
                  <BsFacebook className='mx-3'/> 
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
