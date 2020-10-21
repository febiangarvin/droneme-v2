import React from "react";
import TwitterTab from './twitterTab'
import Logo from '../assets/icons/logo.png'
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import "../styles.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <TwitterTab />
                <div className="footer-left">
                    <div className='nav-logo'>
                        <img src={Logo} alt='logo' />
                        droneMe
                    </div>
                    <br/>
                    <p className="footer-company-about">
                        <span>About Us</span>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ad nesciunt est, dolores vitae inventore culpa nobis illo eaque commodi error corrupti et itaque temporibus doloribus quas adipisci esse odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam odit dolorum accusamus ex aut eum fuga corporis dolore optio aspernatur, minus saepe quibusdam non architecto.
                    </p>
                    <br/>
                    <p className="footer-company-name">The droneME Shop © 2020</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i><FaMapMarkerAlt/></i>
                        <p>
                            Sebuah Menara Besar Di Pusat Kota
                            <br /> Kec. Pusat, Kota Terindah,
                            <br /> Daerah Khusus Terindah 88888
                        </p>
                        <br /><br />
                    </div>
                    <div>
                        <i><FaPhone/></i>
                        <p>(+62)21 88888888</p>
                        <br /><br />
                    </div>
                    <div>
                        <i><FaEnvelope/></i>
                        <p><a href="mailto:info.iklim@bmkg.go.id">shop.droneme@gmail.com</a></p>
                        <br /><br />
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/"><FaFacebookF/></a>
                        <a href="https://twitter.com/"><FaTwitter/></a>
                        <a href="https://www.youtube.com/"><FaYoutube/></a>
                        <a href="https://www.instagram.com/"><FaInstagram/></a>
                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;