import React from 'react'
import Menu from './Menu'

const NotFound = () => {
        return (
            <div>
                <Menu />
                <div id="error-page">
                    <div id="error-inner">
                        <h1> Sorry, the page might be under maintenance or not found</h1>
                        <div className="pesan-eror">404</div>
                        <p className="balik-home"><a href="/">RETURN TO HOME</a></p><br />
                    </div>
                </div>
            </div>
        )
    }

export default NotFound