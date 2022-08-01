import React, { Component } from 'react';
import HeaderNavbar from './HeaderNavbar';
import NewProduct from './NewProduct';
import Product from './Product';
import SlideshowHome from './SlideshowHome';

class Home extends Component {
    render() {
        return (
            <div>
                {/* product */}
                <NewProduct></NewProduct>
                    {/* Carousel Start */}
                    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                        <div
                            id="header-carousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <SlideshowHome></SlideshowHome>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#header-carousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#header-carousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    {/* Carousel End */}


               
               

               

            </div>
        );
    }
}

export default Home;