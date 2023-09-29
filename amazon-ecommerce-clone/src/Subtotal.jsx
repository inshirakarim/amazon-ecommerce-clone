import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) =>(
            <>
                <p>
                    Subtotal {basket?.length} : <strong>0</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox" />This order contains a gift
                </small>
                <button className='subtotal_button'>Proceed to checkout</button>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
        />
    </div>
  )
}

export default Subtotal;