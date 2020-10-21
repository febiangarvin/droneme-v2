import React, { Fragment } from "react";
import Menu from "./Menu";
import Jumbotron1 from "./Jumbotron1";
import Jumbotron2 from "./Jumbotron2";
import Jumbotron3 from "./Jumbotron3";
import Jumbotron4 from "./Jumbotron4";
import Footer from "./Footer";

const Home = () => {
    return(
        <Fragment>
            <Menu/>
            <Jumbotron1/>
            <Jumbotron2/>
            <Jumbotron3/>
            <Jumbotron4/>
            <Footer/>
        </Fragment>
    )
}

export default Home;