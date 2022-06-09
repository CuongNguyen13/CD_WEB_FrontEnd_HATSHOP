import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import ContactUs from './ContactUs';

class HeaderNavbar extends Component {
    render() {
        return (
            
            <div>
                    {/* Navbar Start */}
                    <div
                        className="container-fluid fixed-top px-0 wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        
                        <nav
                            className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
                            data-wow-delay="0.1s"
                        >
                            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                                <h1 className="fw-bold text-primary m-0">
                                    F<span className="text-secondary">oo</span>dy
                                </h1>
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler me-4"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto p-4 p-lg-0">
                                    <Link className="nav-item nav-link active" to = "/">
                                        Trang chủ
                                    </Link>
                                <Link to = "/product" className="nav-item nav-link">
                                        Sản phẩm
                                </Link>
                                    
                                    <Link to="/contact" className="nav-item nav-link">
                                        Liên hệ
                                    </Link>
                                </div>
                                <div className="d-none d-lg-flex ms-2">
                                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                        <small className="fa fa-search text-body" />
                                    </a>
                                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                        <small className="fa fa-user text-body" />
                                    </a>
                                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                        <small className="fa fa-shopping-bag text-body" />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* Navbar End */}
            
                        <Routes>
                          
                            <Route path="/" element={<Home></Home>}>
                                
                            </Route>
                            <Route path="/product" element={<Product></Product>}>

                            </Route>
                           <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
                        </Routes>
                    
                
            </div>
            
        );
    }
}

export default HeaderNavbar;