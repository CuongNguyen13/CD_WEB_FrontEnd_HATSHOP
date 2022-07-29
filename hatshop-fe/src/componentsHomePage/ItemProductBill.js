import React, { Component } from 'react';

function ItemProductBill(props){

    let { quantity, products } = props.cart;

    
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })

    return (
        <div>
            <div className="card mb-2 ">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div>
                                <img
                                    src={products.linkImage1}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: 65 }}
                                />
                            </div>
                            <div className="ms-3">
                                <h5>{products.name}</h5>

                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <div style={{ width: 200, marginRight: '4em' }}>
                                <h5 className="fw-normal me-0">Số lượng: {quantity}</h5>
                            </div>
                            <div>
                                <h5 className="mb-0">{formatter.format(products.price)}</h5>
                            </div>
                           
                        </div>


                    </div>
                    
                </div>
            </div>
        </div>
    );
}




export default ItemProductBill;