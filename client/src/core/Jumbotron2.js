import React from 'react';
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import { FaShoppingBasket } from "react-icons/fa";

const Jumbotron2 = () => {
    return(
        <div className='jumbotron2'>
            <div className="row">
                <div className="col-md-6 produk">
                    <img className='d-block w-100 produk-img' src={product1} alt='drone' />
                    <div className="produk-caption">
                        <h2><span>Shop The Latest Drones</span></h2>
                        <br />
                        <h3><span>DJI Phantom 4 Pro is available today!</span></h3>
                        <br /><br />
                        <a href='/shop' className="btn-big">Shop Drones <FaShoppingBasket /></a>
                    </div>
                </div>
                <div className="col-md-6 produk">
                    <img className='d-block w-100 produk-img' src={product2} alt='goggles' />
                    <div className="produk-caption">
                        <h2><span>Shop The Latest Accessories</span></h2>
                        <br />
                        <h3><span>DJI RE Googles is available today!</span></h3>
                        <br /><br />
                        <a href='/shop' className="btn-big">Shop Accessories <FaShoppingBasket /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron2;