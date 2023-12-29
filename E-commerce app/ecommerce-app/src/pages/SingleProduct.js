import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";

const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(0);
  return (
    <>
      <Meta title={"Product Detail"} />
      <BreadCrumb title=" Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3>Kids Headphone Bulk 10 Pack Multi Colored For Student</h3>
                </div>

                <div className="border-bottom">
                  <p className="price">$ 100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn mb-2 mt-3">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-2">
                    <h3 className="product-heading">tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        s
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        m
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        l
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        xl
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center flex-row mt-2 gap-15  my-2">
                    <h3 className="product-heading">Quantity :</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className=""
                        style={{ width: "50px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0 rounded-pill">
                        Add to Card
                      </button>
                      <Link to="" className="button signup rounded-pill">
                        Buy It Now
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-4" /> to Comapare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-4" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  my-2">
                    <h3 className="product-heading"> Shipping & Returns</h3>
                    <p>
                      Free shipping and returns available on all orders! We ship
                      all Us domestic orders within 5-10 business Days!{" "}
                    </p>
                  </div>
                  <div className="d-flex gap-10  flex-column my-2">
                    <h3 className="product-heading"> Material</h3>
                    <p>
                      Free shipping and returns available on all orders! We ship
                      all Us domestic orders within 5-10 business Days!{" "}
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading my-3">Product Link:</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() =>
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        )
                      }
                    >Copy product Link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Description</h3>

              <div className="bg-white p-3">
                <p className="">
                  Using color to add meaning only provides a visual indication,
                  which will not be conveyed to users of assistive technologies
                  – such as screen readers. Ensure that information denoted by
                  the color is either obvious from the content itself (e.g. the
                  visible text), or is included through alternative means, such
                  as additional text hidden with the .sr-only class
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review" className="section-heading ">
                Reviews
              </h3>
              <div className="review-inner-wrapper">
                <div className="review-head1 d-flex justify-content-between">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />

                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>

                  {orderedProduct || (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write A Review</h4>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <form action="">
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows=""
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0 mt-3">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className=" d-flex gap-10 align-items-center">
                      <h6 className="">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="mt-3">
                      {" "}
                      not be conveyed to users of assistive technologies – such
                      as screen readers. Ensure that information denoted by the
                      color is either obvious from the content itself (e.g. the
                      visible text), or is included through alternative means,
                      such as additional text hidd
                    </p>
                  </div>
                  <div className="review mt-3">
                    <div className=" d-flex gap-10 align-items-center">
                      <h6 className="mt-3">Sumit Salotri</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={2}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="mt-3">
                      {" "}
                      not be conveyed to users of assistive technologies – such
                      as screen readers. Ensure that information denoted by the
                      color is either obvious from the content itself (e.g. the
                      visible text), or is included through alternative means,
                      such as additional text hidd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
