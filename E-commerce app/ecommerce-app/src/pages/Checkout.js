import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from '../images/watch.jpg';

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-7">
              <div className="checkout-lest-data">
                <h3 className="website-name">Dev Corner</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  arial-lable="beadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <Link to='/cart' className="text-dark total-price">Cart</Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item  total-price active" aria-current="page">
                      Information
                    </li> &nbsp;/
                    <li className="breadcrumb-item">
                    <Link to='/cart' className="text-secondary total-price">Shipping</Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  Yashvant Jangid (yashvantjangid123@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <section
                      name=""
                      className="form-control form-select"
                      id=""
                    >
                         <option value="" selected disabled>
                        Select Country
                      </option>
                    </section>
                  </div >
                  <div className="w-50">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="w-50">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Adderss"/>
                  </div>
                  <div className="w-100">
                    <input type="text" className="form-control" placeholder="Appartment, Suite, etc"/>
                  </div>
                  <div className="">
                    <input type="text" className="form-control" placeholder="City"/>
                  </div>
                  <div className="">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" className="form-control" placeholder="Zipcode"/>
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <Link to='/cart' className="text-dark"><BiArrowBack  className="me-2"/>Return to Cart</Link>
                        <Link to='/cart' className='button'>Continue to shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4">
                    <div className="d-flex gap-10 align-items-center">
                    <div className="w-75 d-flex gap-10 mb-2 ">
                        <div className="w-25 position-relative">
                            <span style={{top:"0px", right:"0px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                1
                            </span>
                            <img className="img-fluid" src={watch} alt="product" />
                        </div>
                        <div>
                            <h5 className="title">gh</h5>
                            <p>556/ #ghhh</p>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h5 className="total">$100</h5>
                    </div>
                    </div>
                    <div className="d-flex gap-10 align-items-center">
                    <div className="w-75 d-flex gap-10 ">
                        <div className="w-25 position-relative">
                            <span style={{top:"0px", right:"0px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                2
                            </span>
                            <img className="img-fluid" src={watch} alt="product" />
                        </div>
                        <div>
                            <h5 className="total">gh</h5>
                            <p>8/ #ghhh</p>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h5>$100</h5>
                    </div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="total-price">SubTotal</p>
                    <p className="total">$ 10000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 total-price">Total</p>
                    <p className="mb-0 total">$1000</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-nav-item">
                    <h4 className="total">Total</h4>
                    <h5 className="total">$ 10000</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
