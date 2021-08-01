import React from 'react';
import './Product.css';
import ikigai from './ikigai.png';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Ikigai:The japaneese secret to a long and happy life</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src={ikigai} alt="product"/> 
            <button>Add to cart</button>          
        </div>
    )
}

export default Product
