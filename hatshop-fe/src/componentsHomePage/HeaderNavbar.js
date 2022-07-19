import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,NavLink
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import ContactUs from './ContactUs';
import Login from './Login';
import DetailProduct from './DetailProduct';
import ShoppingCart from './ShoppingCart';
import Search from './Search';
import Register from './Register';
import Otp from './Otp';
import Forgetpass from './Forgetpass';

class HeaderNavbar extends Component {
    render() {
        return (

            <div>
                {/* Navbar Start */}
                <div
                    className="container-fluid fixed-top wow fadeIn"
                    data-wow-delay="0.1s"
                >

                    <nav
                        style={{ marginTop: "1em" }}
                        className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-8 wow fadeIn"
                        data-wow-delay="0.1s"
                    >
                        <NavLink to="/" className="navbar-brand ms-4 ms-lg-0">
                            <h1 className="fw-bold text-primary m-0">
                                Hat<span className="text-secondary">Sh</span>op
                            </h1>
                        </NavLink>
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
                                <NavLink className="nav-item nav-link " to="/">
                                    Trang chủ
                                </NavLink>
                                <NavLink to="/product" className="nav-item nav-link">
                                    Sản phẩm
                                </NavLink>

                                <NavLink to="/contact" className="nav-item nav-link">
                                    Liên hệ
                                </NavLink>
                                <NavLink to="/login" className="nav-item nav-link">
                                    Đăng nhập
                                </NavLink>
                            </div>
                            <div className="d-none d-lg-flex ms-2">
                                <NavLink to="/search" className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                    <small className="fa fa-search text-body" />
                                </NavLink>

                                <NavLink to="/cart" className="btn-sm-square bg-white rounded-circle ms-3" href="">
                                    <small className="fa fa-shopping-bag text-body" />
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Navbar End */}

                <Routes>

                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/product" element={<Product></Product>}></Route>
                    <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/detailProduct:id" element={<DetailProduct></DetailProduct>}></Route>
                    <Route path='/cart' element={<ShoppingCart></ShoppingCart>}></Route>
                    <Route path='/search' element={<Search></Search>}></Route>
                    <Route path='/Register' element={<Register></Register>}></Route>
                    <Route path='/Forgetpass' element={<Forgetpass></Forgetpass>}></Route>
                    <Route path='/OTP' element={<Otp></Otp>}></Route>
                </Routes>


            </div>

        );
    }
}

export default HeaderNavbar;