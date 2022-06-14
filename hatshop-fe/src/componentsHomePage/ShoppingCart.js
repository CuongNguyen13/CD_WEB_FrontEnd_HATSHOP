import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <div>
                
                <section className="h-100 h-custom" style={{ marginTop:"5em"}}>
                    <div className="container py-4 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card">
                                    <div className=" p-4">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <div>
                                                        <p className="mb-1">Giỏ hàng</p>
                                                        <p className="mb-0">Tổng số sản phẩm: </p>
                                                    </div>
                                                    
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Iphone 11 pro</h5>
                                                                    <p className="small mb-0">256GB, Navy Blue</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">2</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$900</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Samsung galaxy Note 10 </h5>
                                                                    <p className="small mb-0">256GB, Navy Blue</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">2</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$900</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>Canon EOS M50</h5>
                                                                    <p className="small mb-0">Onyx Black</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$1199</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3 mb-lg-0">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                                                        className="img-fluid rounded-3"
                                                                        alt="Shopping item"
                                                                        style={{ width: 65 }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>MacBook Pro</h5>
                                                                    <p className="small mb-0">1TB, Graphite</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: 50 }}>
                                                                    <h5 className="fw-normal mb-0">1</h5>
                                                                </div>
                                                                <div style={{ width: 80 }}>
                                                                    <h5 className="mb-0">$1799</h5>
                                                                </div>
                                                                <a href="#!" style={{ color: "#cecece" }}>
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card text-black rounded-3" style={{ background:"#E8E8E8"}}>
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                                            <h5 className="mb-0">Thông tin khách hàng</h5>
                                                            
                                                        </div>
                                                        <form className="mt-4">
                                                            <div className="form-outline form-white mb-4">
                                                                <input
                                                                    type="text"
                                                                    id="typeName"
                                                                    className="form-control form-control-lg"
                        
                                                                    placeholder="Tên khách hàng"
                                                                />
                                                                <label className="form-label" htmlFor="typeName">
                                                                    Tên khách hàng
                                                                </label>
                                                            </div>
                                                            <div className="form-outline form-white mb-4">
                                                                <input
                                                                    type="phone"
                                                                    id="typeText"
                                                                    className="form-control form-control-lg"
                                                                    siez={10}
                                                                    placeholder="099xxxxxxxx"
                                                                    minLength={10}
                                                                    maxLength={10}
                                                                />
                                                                <label className="form-label" htmlFor="typeText">
                                                                    Số điện thoại
                                                                </label>
                                                            </div>
                                                            <div className="form-outline form-white mb-4">
                                                                <input
                                                                    type="text"
                                                                    id="typeText"
                                                                    className="form-control form-control-lg"
                                                                    
                                                                    placeholder="hcm"
                                                                    
                                                                />
                                                                <label className="form-label" htmlFor="typeText">
                                                                    Địa chỉ
                                                                </label>
                                                            </div>
                                                            
                                                        </form>
                                                        <hr className="my-4" />
                                                        <div className="d-flex justify-content-between">
                                                            <p className="mb-2">Tổng tiền</p>
                                                            <p className="mb-2">200vnđ</p>
                                                        </div>
                                                        
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn-block btn-lg"
                                                        >
                                                            <div className="d-flex justify-content-between">
                                                                <span>$4818.00</span>
                                                                <span>
                                                                    Checkout{" "}
                                                                    <i className="fas fa-long-arrow-alt-right ms-2" />
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default ShoppingCart;