import React from 'react';
import './Header.css'

import Customlink from './Customelink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';


const Header = () => {
    const [user] = useAuthState(auth)
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
                        <Customlink to="/service">Service</Customlink>
                        { 
                            user?
                            <button>Sign out</button>
                            :
                             <Customlink to="/login">Login</Customlink> 
                        }
                        
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;