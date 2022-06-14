import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            
                                <div className="col-12 text-center">
                                            <Link to="/product" className="btn btn-primary rounded-pill py-3 px-5" href="">
                                                Xem thêm
                                            </Link>
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