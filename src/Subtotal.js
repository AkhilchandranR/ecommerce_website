import React from 'react';
import './Subtotal.css';

function Subtotal() {
    return (
        <div className="subtotal">
            <p>subtotal(0 items): $<strong>4000</strong></p>
            <input type="checkbox"/>This order contains a gift
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
