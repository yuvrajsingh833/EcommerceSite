import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main Banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 or
                      <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>BUY IPAD AIR</h5>
                    <p>
                      From $599.00 or
                      <br /> $49.91/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>SMART WATCH</h5>
                    <p>From $999.00 or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small Banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback <br />& ultra-low-distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="services" />
                  <div className="">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprice offers</h6>
                    <p className="mb-0">Save upto 25% Off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className=" categories d-flex flex-wrap  justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>SmartWatches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>4 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>5 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>6 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg" alt="famous"/>
                <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h5>Smart Watch Series 7</h5>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="https://www.cnet.com/a/img/resize/4137990e1424c999972855784d3985a89ec82b84/hub/2020/03/20/915b14cf-24e0-4634-a7ea-8a3b61c9301b/macbook-pro-16-late-2019-1-de-8.jpg?auto=webp&fit=crop&height=675&width=1200" alt="famous"/>
                <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h5>Smart Watch Series 7</h5>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg" alt="famous"/>
                <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h5>Smart Watch Series 7</h5>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img className="img-fluid" src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg" alt="famous"/>
                <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h5>Smart Watch Series 7</h5>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <h3 className="section-heading">Special Product</h3>
            </div>
          </div>
          <div className="row">
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
          </div>
        </div>
      </section>
      <section  className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
        </section>
      <section  className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feature components</h3>
          </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
        </section>
      <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src="images/brand-01.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-02.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-03.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-04.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-05.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-06.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-07.png" alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-08.png" alt="brand"/>
              </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section  className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard/>
            </div>
            <div className="col-3">
            <BlogCard/>
            </div>
            <div className="col-3">
            <BlogCard/>
            </div>
            <div className="col-3">
            <BlogCard/>
            </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
