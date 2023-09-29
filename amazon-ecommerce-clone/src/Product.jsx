import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id , title, price, rating , image}) {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id : id,
        title : title,
        image : image,
        price : price,
        rating : rating,
      },
    });
  };
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='productrating'>
                {/* {Array(rating).fill().map((  , i) => (
                  <p>⭐️</p>
                ))} */}
                {'⭐️'.repeat(rating)}
            </div>
        </div>
        <img src={image} alt='product-display'></img>
        <button onClick={addToBasket}>Add To Basket</button>

    </div>
  )
}

export default Product;