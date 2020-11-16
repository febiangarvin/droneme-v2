import React, { Fragment } from 'react';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from "react-icons/fa"

const Disclaimer = () => {
    return (
        <Fragment>
            <div className="about darken-overlay4">
                <h2>DISCLAIMER!</h2>
                <h4>THIS IS A PROTOTYPE WEBSITE. NOT A REAL WORLD E-COMMERCE APPPLICATION.</h4>
                <br />
                <p>
                    I have, in no way, intent to steal nor to edit a data, image, price, items, etc. This is just a website for the developer's portfolio. Please use at your own risk.
                </p>
                <br/>
            </div>

            <div className='mouse-center'>
                <div className='mouse-layout'/>
                <p className='mouse-text'>Scroll Down</p>
            </div>

            <div className="about darken-overlay4">
                <h2>GET TO KNOW THE DEVELOPER</h2>
                <br /><br />
                <h4>
                    HELLO WORLD! My name is Febian Garvin Abidin!
                </h4>
                <p>
                "Work hard, smart, and sincerely" has always been my principle. I am a full-time learner that would not stop educating myself until my last breath. Has previously received a bachelor's degree in Geography in the focus of geographical information systems. Upon graduating, I have worked for private city development companies in a position on geographical information systems engineer and land surveys.<br/>
                Currently, I have elevated my education through a coding school. Learning the fundamentals of becoming a web and mobile developer. And on to this day, coding has been my hobby with HTML, CSS, JavaScript and its framework as my best-friend - well sort of, we do have this love-hate relationship. But I am enjoying my life and always striving to be the best version of myself. 
                <br /><br />
                </p>

                <div className="id-card">
                    <span className="id-surface"></span>
                    <h1>Febian Garvin Abidin</h1>
                    <h3>Hover Me!</h3>
                    <a className='fab fa-social' href='https://www.linkedin.com/in/febian-garvin-abidin-182a79171/'><FaLinkedin/></a>
                    <a className='fab fa-social' href='https://github.com/febiangarvin'><FaGithubSquare/></a>
                    <a className='fab fa-social' href="mailto:info.iklim@bmkg.go.id"><FaEnvelope/></a>
                </div>

                <br/>
            </div>

            <div className='timeline-container'>
                <h2>My Career</h2>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Jul 2018</h3>
                        <p>Geography Information Systems Engineer - PT. Shiddiq Sarana Mulya</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Oct 2018</h3>
                        <p>Geography Information Systems Engineer - PT. Handal Selaras</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Jan 2019</h3>
                        <p>Research and Development - PT. Buka Media Teknologi</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Jul 2020</h3>
                        <p>Web Developer - PT. Infimap Geospatial Sistem</p>
                    </div>
                </div>
            </div>

            <div className='timeline-container'>
                <h2>My Education</h2>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Elementary</h3>
                        <p>SDN Beji 06</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Junior Highschool</h3>
                        <p>SMPIT Ummul Quro</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Highschool</h3>
                        <p>SMAN 02 Depok (Science)</p>
                    </div>
                </div>
                <div className='right text-wrapper'>
                    <div className='text'>
                        <h3>Undergraduate - Bachelor of Science</h3>
                        <p>Geography, University of Indonesia</p>
                    </div>
                </div>
                <div className='left text-wrapper'>
                    <div className='text'>
                        <h3>Web and Mobile Programming Studies</h3>
                        <p>Purwadhika Digital Technology School</p>
                    </div>
                </div>
            </div>

            <div className='glowing-button'>
                <a href='/'>Back to Home</a>
            </div>
        </Fragment>
    )
}

export default Disclaimer