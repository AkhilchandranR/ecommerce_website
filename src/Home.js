import React from 'react';
import Header from './Header';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Header/>

            {/* banner */}
            <div className="banner">
                
            </div>
            {/* banner ends */}

            {/* product section */}
            <div className="home__row">
            <Product/>
            <Product/>
            </div>
            <div className="home__row">
            <Product/>
            <Product/>
            <Product/>
            </div>
            <div className="home__row">
            <Product/>
            </div>
            {/* product section ends */}
        </div>
    )

}

export default Home
