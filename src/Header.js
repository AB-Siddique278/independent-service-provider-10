import React from 'react';
import './Header.css'

import Customlink from './Customelink';


const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Dream Pictures</a>
                   
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav all-nav">
                        <Customlink to="/">Home</Customlink>
                        <Customlink to="/blog">Blogs</Customlink>
                        <Customlink to="/about">About</Customlink>
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;