import React,{useState} from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import wishlsit from '../images/wishlist.svg';
import watch from '../images/watch.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';

const ProductCard = (props) => {
  const  {grid} = props;
  let location = useLocation();
 
  return (
    <>
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to='product/:id' className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src={watch}
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
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
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
    </>
  );
};

export default ProductCard;
