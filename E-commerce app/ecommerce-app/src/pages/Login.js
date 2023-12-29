import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
     <Meta title={'Login'} />
    <BreadCrumb title='Login' />
    <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3 '>Login</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='email' placeholder='Email' name="email" className='form-control'/>
                        </div>
                        <div>
                            <input type='password' placeholder='Password' name="password" className='form-control'/>
                        </div>
                        <div>
                            <Link to='/forgot-password' className='text-dark d-block'>Forgot Password?</Link>
                            <Link to='/reset-password' className='text-dark'>Reset-Password</Link>
                            <div className='d-flex mt-3 justify-content-center gap-15 align-items-center'>
                                <button className='button border-0 rounded-pill'>Login</button>
                                <Link to="/sign-up" className='button signup rounded-pill'>SignUp</Link>
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

export default Login;