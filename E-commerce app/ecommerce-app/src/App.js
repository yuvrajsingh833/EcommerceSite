
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermAndConditions from './pages/TermAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='store' element={<OurStore />}/>
            <Route path='product/:id' element={<SingleProduct />}/>
            <Route path='blogs' element={<Blog />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='compare-product' element={<CompareProduct />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='login' element={<Login />}/>
            <Route path='forgot-password' element={<Forgetpassword />}/>
            <Route path='sign-up' element={<Signup />}/>
            <Route path='reset-password' element={<Resetpassword />}/>
            <Route path='single-blog' element={<Singleblog />}/>
            <Route path='privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='refund-policy' element={<RefundPolicy />}/>
            <Route path='shipping-policy' element={<ShippingPolicy />}/>
            <Route path='term-conditions' element={<TermAndConditions />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;