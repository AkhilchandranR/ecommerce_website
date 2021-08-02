import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                {/* <img className="checkout__ad"
                src="https://www.eiffeldesign.com/media_products/RFE_BannerAd01_2_w600.jpg"
                alt="checkout_ad"/> */}
                <div className="checkout__title">
                    <h2>Your shopping cart</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
