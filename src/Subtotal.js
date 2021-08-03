import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';


function Subtotal() {
    const[{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <p>subtotal({basket?.length} items): $<strong>{basket?.reduce((amount,item)=>item.price + amount, 0)}</strong></p>
            <input type="checkbox"/>This order contains a gift
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
