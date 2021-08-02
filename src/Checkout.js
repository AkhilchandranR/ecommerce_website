import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://www.eiffeldesign.com/media_products/RFE_BannerAd01_2_w600.jpg"
                alt="checkout_ad"/>
                <div className="checkout__title">
                    <h2>Your shopping cart</h2>
                </div>
            </div>
            <div className="checkout__right">
                <h2>subtotal component</h2>
            </div>
        </div>
    )
}

export default Checkout
