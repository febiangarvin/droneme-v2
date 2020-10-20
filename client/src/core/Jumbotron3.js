import React from 'react';
// import carpenter from "../assets/icons/carpenter.png";
import lifetime from "../assets/icons/lifetime.png";
import tracking from "../assets/icons/tracking.png";

const Jumbotron3 = () => {
    return(
        <div className="jumbotron3 darken-overlay2">
            <div className="heading">
                <div className="heading2">
                    <h1>Why Us?</h1>
                    <div className="benefit">
                    <img src={lifetime} alt=''/>
                        <p>We guarantee that our products are reliable and tested before shipment.
                                <br />But if something goes wrong, we provide you with our award-winning lifetime warranty.
                        </p>
                    </div>
                    <div className="benefit">
                    <img src={tracking} alt=''/>
                        <p>We offer free shipping to you throughout Indonesia.
                            <br />And our packaging comes with a protected harden wood, for extra protection.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron3;