import React, { Component } from 'react';

class SlideshowHome extends Component {
    render() {
        return (
            <div>
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7">
                                    <h1 className="display-2 mb-5 animated slideInDown">
                                        Organic Food Is Good For Health
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideshowHome;