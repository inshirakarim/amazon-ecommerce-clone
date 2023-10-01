import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

function Header() {
    const [authUser, setAuthUser] = useState(null);
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });
  
      return () => {
        listen();
      };
    }, []);
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
        })
        .catch((error) => console.log(error));
    };

    const extractUsername = (email) => {
      const parts = email.split('@');
      if (parts.length > 0) {
        return parts[0];
      }
      return email; // Return the full email if "@" is not found
    };
  

    const [{basket , user}, dispatch] = useStateValue();
    const navigate = useNavigate()

    // const handleAuthenticaton = () => {
    //   if (user) {
    //     auth.signOut();
    //   }
    // }
    // const name = authUser.email;
    // name.split("@gmail.com");
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
    <Link to = {!authUser && '/login'}>

        <div onClick={userSignOut} className='header_option'>
            <span className='header_optionLineOne'>Hello {!authUser ? 'Guest' : extractUsername(authUser.email)}</span>
            <span className='header_optionLineTwo'>{authUser ? 'Sign Out' : 'Sign In'}</span>
        </div>
    </Link>
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