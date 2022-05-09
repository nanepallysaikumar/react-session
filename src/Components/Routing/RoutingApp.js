import React from 'react';
import {
    Routes,
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';
import {HomePage} from "./Pages/HomePage";
import {ContactUsPage} from './Pages/ContactUsPage';
import {AboutUs} from './Pages/Aboutus';
import "./RoutingApp.css"


function BasicRouting() {
    return(
        <Router>
            <div>
                <ul>
                    <li><Link className='link-style' to="/">Home</Link></li>
                    <li><Link className='link-style' to="/contact-us">Contact us</Link></li>
                    <li><Link className='link-style' to="/about">About</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/contact-us" element={<ContactUsPage/>} />
                    <Route path="/about" element={<AboutUs/>} />
                </Routes>
            </div>
        </Router>
    )
}

export {BasicRouting}