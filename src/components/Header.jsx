import React from 'react';
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { carts } = useSelector((state) => state.allcart);  

  return (
    <>
      <div className="header pt-2 pb-2 bg-dark text-white sticky-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6"><Link to={'/'} className="logo"><h1>ShoppingCart</h1></Link></div>
            <div className="col-6 text-end"><Link to={'/cart'} className="cart"><button type="button" className="btn btn-success position-relative">

           <BsFillHandbagFill style={{fontSize:'30px'}}/>
        
            
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carts.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button></Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;