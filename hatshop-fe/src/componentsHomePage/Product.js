import React, { Component } from 'react';

class Product extends Component {
    render() {
        window.scroll(0,0);
        return (
            <div>
                <>
                    {/* Product Start */}
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="row g-0 gx-5 align-items-end">
                                <div className="col-lg-6">
                                    
                                </div>
                                
                                <div
                                    style={{marginTop:"5em"}}
                                    className="col-lg-6 text-start text-lg-end wow slideInRight"
                                    data-wow-delay="0.1s"
                                >
                                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                        <li className="nav-item me-2">
                                            <a
                                                className="btn btn-outline-primary border-2 active"
                                                data-bs-toggle="pill"
                                                href="#tab-1"
                                            >
                                                Vegetable
                                            </a>
                                        </li>
                                        <li className="nav-item me-2">
                                            <a
                                                className="btn btn-outline-primary border-2"
                                                data-bs-toggle="pill"
                                                href="#tab-2"
                                            >
                                                Fruits{" "}
                                            </a>
                                        </li>
                                        <li className="nav-item me-0">
                                            <a
                                                className="btn btn-outline-primary border-2"
                                                data-bs-toggle="pill"
                                                href="#tab-3"
                                            >
                                                Fresh
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content">
                              



                              
                            </div>
                        </div>
                    </div>
                    {/* Product End */}
                </>

            </div>
        );
    }
}

export default Product;