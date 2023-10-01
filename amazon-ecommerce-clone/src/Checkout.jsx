import React from 'react'
import './Checkout.css'
// import Subtotal from './Subtotal'
 import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function Checkout() {
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
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout_left'>
        <img className='checkout_ad' 
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt='checkout-ad-img'></img>

        <h3>Hello, {authUser?.email}</h3>

        <div className='checkout_title'>
            <h2>
                YOUR SHOPPING BASKET:-
            </h2>
           {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
            />
           ))}
        </div>
    </div> 

        <div className='checkout_right'>
            {/* <Subtotal /> */}
        </div>
    

</div>
  )
}

export default Checkout