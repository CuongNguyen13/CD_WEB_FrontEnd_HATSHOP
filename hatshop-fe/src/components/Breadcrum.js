import React, { Component } from 'react';

class Breadcrum extends Component {
    render() {
        return (
            <div>
                <div
                    className="container-fluid page-header mb-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <div className="container">
                        <h1 className="display-3 mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a className="text-body" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-body" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li className="breadcrumb-item text-dark active" aria-current="page">
                                    About Us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

            </div>
        );
    }
}

export default Breadcrum;