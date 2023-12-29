import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className=" contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14239.084838184637!2d75.76744290000002!3d26.84722835000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a20c452555%3A0xe0e9cd45c3d13c3!2sYashwant%20Nagar%2C%20Sector%20101%2C%20Sector%20105%2C%20Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1698738366608!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="col-6">
                <h3 className="contact-title">contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />{" "}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile number"
                    />{" "}
                  </div>
                  <div>
                    <textarea
                      name=""
                      className="w-100 form-control"
                      id=""
                      cols=""
                      rows="5"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button rounded-pill">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-6">
                <h3 className="contact-title">Get in Touch With US</h3>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiTwotoneHome  className="fs-5"/>
                    <address className="mb-0">Hno.277, Near Village chopal, Mandaura, Sonipat, Haryana</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiSolidPhoneCall className="fs-5" />
                    <a href="tel:+91 8264954234" >+91 8264954234</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail  className="fs-5"/>
                    <a href="mailto:yashvantjangid123@gmail.com">yashvantjangid123@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineInfoCircle  className="fs-5"/>
                    <p className="">Monday-Friday 10 AM-8 PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
