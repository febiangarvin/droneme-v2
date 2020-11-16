import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {ImEnter} from "react-icons/im"
import {FcDisclaimer} from "react-icons/fc"
import { FaUserAstronaut, FaUserSecret, FaShoppingCart, FaUserPlus, FaSignOutAlt, FaRegEdit, FaPlane, FaCashRegister, FaShoppingBag } from "react-icons/fa"
import Logo from '../assets/icons/logo.png'
import "../styles.css";

import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2DA100" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div className='bg-dark'>

        <ul className="nav nav-tabs justify-content-between" style={{height:75}}>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    <div className='nav-logo'>
                        <img src={Logo} alt='logo' />
                        droneME
                    </div>
                </Link>
            </li>

            <li className="nav mt-3 mr-3">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/disclaimer")}
                        to="/disclaimer"
                    >
                        Read Me!
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/cart")}
                        to="/cart"
                    >
                        <FaShoppingCart/>{" "}
                        <sup>
                            <small>{itemTotal()}</small>
                        </sup>
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/user/dashboard")}
                            to="/user/dashboard"
                        >
                            <FaUserAstronaut/>
                        </Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            <FaUserSecret/>
                        </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signin")}
                                to="/signin"
                            >
                                <ImEnter/>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signup")}
                                to="/signup"
                            >
                                <FaUserPlus/>
                            </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: "pointer", color: "#ffffff" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })
                            }
                        >
                            <FaSignOutAlt/>
                        </span>
                    </li>
                )}
            </li>

        </ul>
    </div>
);

export default withRouter(Menu);
