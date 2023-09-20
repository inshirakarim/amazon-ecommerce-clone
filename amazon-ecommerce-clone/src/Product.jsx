import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='product'>
    <div className='product_info'>
        <p>The Lean Startup</p>
        <p className='product_price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product_rating'>
            <p>⭐️</p>
        </div>
    </div>
    <img src='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg' alt="product_display"></img>
    <button>Add To Basket</button>

    </div>
  )
}

export default Product