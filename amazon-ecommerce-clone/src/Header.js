import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
  return (
    <div className='header'>
    <Link to="/">
    <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className= 'header_logo' alt='amazon-logo' />
    </Link>

    <div className='header_search'>
      <input className='header_searchInput' type='text' />
      <SearchIcon className='header_serachIcon' />
    </div>

    <div className='header_nav'>
      <div className='header_option'>
        <span className='header_optionLineOne'>Hello</span>
        <span className='header_optionLineTwo'>Sign In</span>
      </div>

      <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>& Orders</span>
      </div>

      <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
      </div>

      <div className='header_optionBasket'>
            <ShoppingBasketIcon className='shopping_basket' onClick = {() => {
              navigate("/checkout")
            }} />
            <span className='headerOptionLineTwo headerbasketCount'>0</span>
        </div>

    </div>
  </div>
  )
}

export default Header
