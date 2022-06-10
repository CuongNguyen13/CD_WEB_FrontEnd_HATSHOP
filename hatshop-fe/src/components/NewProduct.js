import React, { Component } from 'react';
import ProductItem from './ProductItem';

class NewProduct extends Component {
    render() {
        return (
            <div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div
                                    className="section-header text-start mb-5 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ maxWidth: 500 }}
                                >
                                    <h1 className="display-5 mb-3">Sản phẩm mới</h1>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="1"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="2"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="3"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="4"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="5"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="6"></ProductItem>
                                    <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="7"></ProductItem>

                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                   
                                    <div
                                        className="col-12 text-center wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                       
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-1.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-2.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-3.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-4.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-5.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-6.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-7.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-8.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                            Browse More Products
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-1.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-2.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-3.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-4.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-5.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-6.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-7.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6">
                                        <div className="product-item">
                                            <div className="position-relative bg-light overflow-hidden">
                                                <img
                                                    className="img-fluid w-100"
                                                    src="img/product-8.jpg"
                                                    alt=""
                                                />
                                                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                                    New
                                                </div>
                                            </div>
                                            <div className="text-center p-4">
                                                <a className="d-block h5 mb-2" href="">
                                                    Fresh Tomato
                                                </a>
                                                <span className="text-primary me-1">$19.00</span>
                                                <span className="text-body text-decoration-line-through">
                                                    $29.00
                                                </span>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="w-50 text-center border-end py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-eye text-primary me-2" />
                                                        View detail
                                                    </a>
                                                </small>
                                                <small className="w-50 text-center py-2">
                                                    <a className="text-body" href="">
                                                        <i className="fa fa-shopping-bag text-primary me-2" />
                                                        Add to cart
                                                    </a>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewProduct;