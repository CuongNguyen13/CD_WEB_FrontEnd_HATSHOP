import React, { Component } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
const DetailProduct =()=> {

        let i = useParams();
        
        window.scrollTo(0, 0);
        return (
            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                    <img className="img-fluid w-100" src="img/about.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-5 mb-4">id: </h1>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                            
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }






export default(DetailProduct);