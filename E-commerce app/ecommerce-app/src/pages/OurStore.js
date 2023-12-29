import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import { Link, useLocation } from "react-router-dom";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  let location = useLocation();
  //    alert(grid)
  return (
    <>
      <Meta title="Our Store " />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htlmFor="">
                      In Stock(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock(0)
                    </label>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="d-flex flex-wrap">
                    <ul className="colors">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M(2)
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        s(2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Tablet
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Oppo
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Speaker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      vivo
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones Bulk 10 Pack Multi Colored For..</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones Bulk 10 Pack Multi Colored For..</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select className="form-control form-select" id="" name="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-decending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-decending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-ascending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5  ">
                <div className="d-flex flex-wrap gap-10">
                  <div
                    className={`${
                      location.pathname === "/store" ? `gr-${grid}` : "col-3"
                    }`}
                  >
                    <Link className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <Link>
                          <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                      </div>
                      <div className="product-image">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src="images/catbanner-02.jpg"
                          className="img-fluid"
                          alt="wishlist"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                          It enables the creation of single-page web or mobile
                          apps that allow navigating  without<br/> refreshing the
                          page. It also allows us to use browser history
                          features while preserving the right application view.
                        </p>
                        <p className="price">$100.00</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                          </Link>
                          <Link>
                            <img src="images/view.svg" alt="view" />
                          </Link>
                          <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/store" ? `gr-${grid}` : "col-3"
                    }`}
                  >
                    <Link className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <Link>
                          <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                      </div>
                      <div className="product-image">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src="images/catbanner-02.jpg"
                          className="img-fluid"
                          alt="wishlist"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                          It enables the creation of single-page web or mobile
                          apps that allow navigating  without <br/>refreshing  the
                          page. It also allows us to use browser history
                          features while preserving the right application view.
                        </p>
                        <p className="price">$100.00</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                          </Link>
                          <Link>
                            <img src="images/view.svg" alt="view" />
                          </Link>
                          <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/store" ? `gr-${grid}` : "col-3"
                    }`}
                  >
                    <Link className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <Link>
                          <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                      </div>
                      <div className="product-image">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src="images/catbanner-02.jpg"
                          className="img-fluid"
                          alt="wishlist"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                          It enables the creation of single-page web or mobile
                          apps that allow navigating without<br/> refreshing the
                          page. It also allows us to use browser history
                          features while preserving the right application view.
                        </p>
                        <p className="price">$100.00</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                          </Link>
                          <Link>
                            <img src="images/view.svg" alt="view" />
                          </Link>
                          <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/store" ? `gr-${grid}` : "col-3"
                    }`}
                  >
                    <Link className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <Link>
                          <img src="images/wish.svg" alt="wishlist" />
                        </Link>
                      </div>
                      <div className="product-image">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                        <img
                          src="images/catbanner-02.jpg"
                          className="img-fluid"
                          alt="wishlist"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                          Kids headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                          It enables the creation of single-page web or mobile
                         apps that allow navigating  without <br/> refreshing the
                          page. It also allows us to use browser history
                          features while preserving  the right application view.
                        </p>
                        <p className="price">$100.00</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                          </Link>
                          <Link>
                            <img src="images/view.svg" alt="view" />
                          </Link>
                          <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                          </Link>
                        </div>
                      </div>
                    </Link>
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

export default OurStore;
