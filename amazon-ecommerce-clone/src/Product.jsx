import React from 'react'
import './Product.css'

function Product({id, title, price, rating , image}) {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {/* {Array(rating).fill().map((  , i) => (
                  <p>⭐️</p>
                ))} */}
                {'⭐️'.repeat(rating)}
            </div>
        </div>
        <img src={image} alt='product-display'></img>
        <button>Add To Basket</button>

    </div>
  )
}

export default Product;