import React from 'react';
import { FaSearchengin } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect';

const Jumbotron1 = () => {
    var ReactRotatingText = require('react-rotating-text');

    return(
        <div className="jumbotron1 darken-overlay">
            <div className="heading">
                <div className="heading1">    
                    <h1>
                        Explore: 
                        <ReactRotatingText items={[
                            ' DJI DRONES', 
                            ' THE NEW PHANTOM 4', 
                            ' THE NEW INSPIRE', 
                            ' FPV GOGGLES', 
                            ' THE NEW OSMO ACTION', 
                            ' ROBOMASTER', 
                            ' THE NEW PHANTOM 4 WITH RTK', 
                            ' P4 MULTISPECTRAL', 
                            ' AGRAS', 
                            ' MATRICE', 
                            ' THE NEW MAVIC', 
                            ' EVERYTHING .....', 
                            ]} />
                    </h1>
                <br/>
                    <a className="btn-big" href='/searchpage'>
                        START EXPLORING &nbsp;<FaSearchengin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron1;