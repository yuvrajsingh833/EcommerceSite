import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 ">
              <p className="text-white mb-0">
                {" "}
                Free Shipping Over $100 & Free Returns{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel:+91-8264954234">
                  +91-8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Developers</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group ">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="https://w7.pngwing.com/pngs/998/204/png-transparent-computer-icons-arrow-rotation-arrow-text-black-desktop-wallpaper-thumbnail.png"
                      alt="Compare"
                    />
                    <p className="mb-0">
                      {" "}
                      <small>
                        {" "}
                        Compare <br /> Products{" "}
                      </small>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="https://logowik.com/content/uploads/images/like-heart2255.logowik.com.webp"
                      alt=""
                    />
                    <p className="mb-0">
                      <small>
                        {" "}
                        Favourite <br /> Wishlist
                      </small>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmL_db62k8JH_uZuQi3IWja7VdudVSJAf6fIC7bPadex8GmodDpBFO7MLHpquflN_KS0o&usqp=CAU"
                      alt=""
                    />
                    <p className="mb-0">
                      <small>
                        {" "}
                        Log in <br /> My Account{" "}
                      </small>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZS17zqVp15IyfvcPRuOGaD8yWV04VAVaE2w&usqp=CAU"
                      alt=""
                    />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">
                        {" "}
                        <small>$ 500 </small>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     <img  className="image2"src="https://icon-library.com/images/dialpad-icon/dialpad-icon-10.jpg" alt=""/>
                      <span className="me-5 d-inline-block">Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="" to="/">
                      Home
                    </NavLink>
                    <NavLink className="" to="/store">
                      our Store
                    </NavLink>
                    <NavLink className="" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
