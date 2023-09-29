import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate()
  return (
    <div className='header'>
    <Link to="/">
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className= 'header_logo' alt='amazon-logo' />
    </Link>

    <div className='header_search'>
        <input className='header_searchInput' type='text'  />
        <SearchIcon className='header_searchIcon' />
    </div>

    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>Hello Guest</span>
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
            <ShoppingBasketIcon className= "shopping_basket" onClick = {() => {
                navigate("/checkout")
            }} />
            <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
        </div>
    </div>
    </div>
  )
}

export default Header