import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Forgetpassword = () => {
  return (
    <>
    <Meta title={'Forget Password'} />
    <BreadCrumb title='Forget Password' />
    <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                  <h3 className='text-center mb-3'>Reset Your Password</h3>
                  <h6 className='text-center mb-4'>We will send you an email to reset your password</h6>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='email' placeholder='Email' name="email" className='form-control'/>
                        </div>
                        
                        <div>
                            <div className='d-flex mt-3 flex-column justify-content-center  align-items-center'>
                                <button className='button border-0 rounded-pill' type='submit'>Submit</button>
                                <Link to='/login' className='text-dark mt-3 fs-6'>Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Forgetpassword;