import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';


const Resetpassword = () => {
  return (
    <>
       <Meta title={'Reset Password'} />
    <BreadCrumb title='Reset Password' />
    <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                  <h3 className='text-center mb-3'>Reset  Password</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                    <div>
                            <input type='password' placeholder='Password'  className='form-control'/>
                        </div>
                    <div>
                            <input type='password' placeholder='Confirm-Password'  className='form-control'/>
                        </div>
                        
                        <div>
                            <div className='d-flex mt-3 flex-column justify-content-center  align-items-center'>
                                <button className='button border-0 rounded-pill' type='submit'>OK</button>
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

export default Resetpassword;