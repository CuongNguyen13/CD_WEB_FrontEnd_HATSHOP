import React, { Component, useEffect, useState, useRef } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useNavigate,
    Routes, NavLink
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
import Profile from './Profile';
import { searchApi } from '../api/searchApi';
import ItemSearch from './ItemSearch';
import Bill from './Bill'


function HeaderNavbar() {
    const [input, setInputs] = useState();
    var checkUserName = sessionStorage.getItem("userName");
    console.log("userName", checkUserName)
    const [product,setProudct] = useState()

    window.scrollTo(0, 0);


    useEffect(() => {
        document.addEventListener("click", handleClickOutsize, true)
        // document.getElementById('SearchText').addEventListener('keydown', detectKeyDown, true)

        searchApi.checkSearchInput(input)
            .then(res => {
                setProudct(res)
            }).catch(e => {
                console.log(e)
            });
    }, [input])

    const detectKeyDown = (e) => {
        if(e.key === "Enter") {
            sessionStorage.setItem("nameSearch",input)
            const myString = document.getElementById("SearchText");
            const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            
            console.log("Mystring", myString.value.trim().length);
            if (myString.value.trim().length < 1) {
                document.getElementById("message1").style.display = 'block';
                document.getElementById("message2").style.display = 'none';
            } else if(regex.test(myString.value.trim())) {
                document.getElementById("message1").style.display = 'none';
                document.getElementById("message2").style.display = 'block';
            } 
            else {
                handleSubmit();
            }
        }
    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(input, "Dk")
        document.getElementById("message1").style.display = 'none';
        document.getElementById("message2").style.display = 'none';
        searchApi.checkSearchInput(input).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        });
        navigate("/search");
    }

    // useRef(() => {
    //     document.addEventListener("click", handleClickOutsize, true)
    // }, [])
    const refOne = useRef(null);

    const ClickbuttonSearch = () => {
        document.getElementById("SearchText").style.display = "block";
    }

    const handleClickOutsize = (e) => {
        if(!refOne.current.contains(e.target)) {
            document.getElementById("SearchText").style.display = "none"
            document.getElementById("detailProduct").style.display = "none"
            document.getElementById("message1").style.display = 'none';
            document.getElementById("message2").style.display = 'none';
        } else{
            document.getElementById("SearchText").style.display = "block"
            document.getElementById("detailProduct").style.display = "block"
        }
    }


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
                            <NavLink to={checkUserName !== null ? "/Profile" : "/login"} className="nav-item nav-link">
                                {checkUserName !== null ? "Cá nhân" : "Đăng nhập"}
                            </NavLink>
                        </div>
                            <div className="d-none d-lg-flex ms-2">
                                <input type="text" placeholder='Tìm kiếm' name='name' id='SearchText' style={{ display: "none" }} onChange={(event)=>{setInputs(event.target.value)}} ref={refOne} onKeyDown={detectKeyDown}></input>
                                <div id='message1' style={{display:"none", color:"red", position:"fixed", margin:"30px 0 0 0"}}>Trường đang trống!</div>
                                <div id='message2' style={{display:"none", color:"red", position:"fixed", margin:"30px 0 0 0"}}>Trường có kí tự đặc biệt!</div>
                                <div style={{float:"clear",clear:"left", position:"fixed",marginTop:"30px"}} id="detailProduct">
                                        {product && product.map((item, index) => {
                                            return (
                                                <div style={{clear:"both", display:"block",backgroundColor:"white",border:"1px solid black",width:"205px"}}>
                                                    <ItemSearch key={index} product={item}></ItemSearch>
                                                </div>

                                            )
                                        })
                                        }
                                </div>
                                <button className="btn-sm-square bg-white rounded-circle ms-3" onClick={ClickbuttonSearch}>
                                    <small className="fa fa-search text-body" />
                                </button>
                                <NavLink to={checkUserName !== null ? "/cart" : "/login"} className="btn-sm-square bg-white rounded-circle ms-3" href="">
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
                <Route path='/Profile' element={<Profile></Profile>}></Route>
                <Route path='/bill:id' element={<Bill></Bill>}></Route>
            </Routes>


        </div>

    );
}

export default HeaderNavbar;