import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin,BsGithub, BsYoutube, BsInstagram,  } from 'react-icons/bs';
import newsletter from '../images/newsletter.png';

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src={newsletter} alt='news letter'/> 
            <h2 className='mb-0 text-white'>Sign Up for News Letter</h2>
            </div>
            </div>
            <div className='col-7 d-flex'>
            <div class="input-group ">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4  className='text-white mb-4'>Conatct Us</h4>
            <div>
              <address className='text-white '>
                H no.:277 Near Vill chopal, <br/> Sonipat, Haryana <br/>
                Pin Code: 131103
              </address>
              <a href='tel:+91 8264954234' className='mt-2 d-block mb-2 text-white'>
                +91 8264954234
              </a>
              <a href='mailto:Yashvantjangid123@gmail.com' className='mt-2 d-block mb-2 text-white'>
              
              </a>
              <div className='social_icons d-flex align-items-center gap-30'>
                 <a href='' className='text-white'>
                 <BsLinkedin  className=''/>
                 </a>
                 <a href='' className='text-white'>
                 <BsInstagram className=''/> 
                 </a>
                 <a href='' className='text-white'>
                <BsGithub className=''/> 
                 </a>
                 <a href='' className='text-white'>
                 <BsYoutube className=''/>
                 </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to='/refund-policy' className="text-white py-2 mb-1">refund Policy</Link>
              <Link  to='/shipping-policy' className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to='/term-conditions' className="text-white py-2 mb-1">Term & Conditions</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Conatct</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}; Powered By Developers</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;