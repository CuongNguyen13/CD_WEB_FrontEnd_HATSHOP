import React, { Component } from 'react';
import '../style/main.css';
import '../style/util.css';
import '../style/index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import About from './About';
import Home from './Home';

class HeaderNavbar extends Component {
    render() {
        return (
            <div>
                
                    <div>
                    <div className="container-menu-desktop trans-03">
                        <div className="wrap-menu-desktop">
                            <nav className="limiter-menu-desktop p-l-45">
                                {/* Logo desktop */}
                                {/* <a href="#" className="logo">
                                    <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                                </a> */}
                                {/* Menu desktop */}
                                <div className="menu-desktop">
                                    <ul className="main-menu">
                                        <li className="active-menu">
                                            <a href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="index.html">Homepage 1</a>
                                                </li>
                                                <li>
                                                    <a href="home-02.html">Homepage 2</a>
                                                </li>
                                                <li>
                                                    <a href="home-03.html">Homepage 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="product.html">Shop</a>
                                        </li>
                                        <li className="label1" data-label1="hot">
                                            <a href="shoping-cart.html">Features</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Icon header */}
                                <div className="wrap-icon-header flex-w flex-r-m h-full">
                                    <div className="flex-c-m h-full p-r-24">
                                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                                            <i className="zmdi zmdi-search" />
                                        </div>
                                    </div>
                                    <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
                                        <div
                                            className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart"
                                            data-notify={2}
                                        >
                                            <i className="zmdi zmdi-shopping-cart" />
                                        </div>
                                    </div>
                                    <div className="flex-c-m h-full p-lr-19">
                                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                                            <i className="zmdi zmdi-menu" />
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>


            
                        <Routes>
                            <Route path="/about" element={<About></About>}>

                            </Route>
                            <Route path="/" element={<Home></Home>}>
                                
                            </Route>
                        </Routes>
                    </div>
                
            </div>
        );
    }
}

export default HeaderNavbar;