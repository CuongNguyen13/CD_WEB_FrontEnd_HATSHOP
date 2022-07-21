import React, { Component ,useEffect, useState} from 'react';
import { cartApi } from '../api/cartAPI';
import ItemCart from './ItemCart';

function ShoppingCart() {
        const [cart,setCart] = useState();
        window.scrollTo(0, 0);
        const id = sessionStorage.getItem("id")
        useEffect(() => {
            cartApi.getlistCart(id)
                .then(res => {
                    setCart(res)
                    console.log(res)

                }).catch(e => {
                    console.log(e)
                });
        }, [])

const handleGetId = (id) => {
        console.log("id",id)
        setCart({... cart,cart:cart.filter(item => item.id !== id)})
        console.log(cart)
    }
   


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


                                                {cart && cart.map((item, index) => {
                                                    return (

                                                        <ItemCart onGetId={handleGetId} cart={item} key = {index}></ItemCart>
                                                        // <ContactTr onGetId={handleGetId} contact={item} key={index} />
                                                    )

                                                })
                                                }
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


export default ShoppingCart;