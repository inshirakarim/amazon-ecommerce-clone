import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { onAuthStateChanged } from 'firebase/auth';
import Subtotal from "./Subtotal"
import { auth } from './firebase';

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

  const [{ basket, user }, dispatch] = useStateValue();

  // Function to extract the part before "@" in the email
  const extractUsername = (email) => {
    const parts = email.split('@');
    if (parts.length > 0) {
      return parts[0];
    }
    return email; // Return the full email if "@" is not found
  };

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-ad-img"
        />

        <h3>Hello, {authUser ? extractUsername(authUser.email) : 'Guest'}</h3>

        <div className="checkout_title">
          <h2>YOUR SHOPPING BASKET:-</h2>
          {basket.map((item) => (
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

      <div className="checkout_right">
      <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
