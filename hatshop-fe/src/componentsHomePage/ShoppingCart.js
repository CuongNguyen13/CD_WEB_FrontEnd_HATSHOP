import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartApi } from '../api/cartAPI';
import ItemCart from './ItemCart';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    window.scrollTo(0, 0);
    const id = sessionStorage.getItem("id")
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        cartApi.checkEmpty(id)
            .then(res => {
                console.log("res", res);
                if (!res) {

                    setModal(true)
                }
            }).catch(e => {
                console.log(e)
            });


        cartApi.getlistCart(id)
            .then(res => {
                if (res != null) {
                    setCart(res)
                }
                else {
                    alert("Giỏ hàng trống!")
                }

            }).catch(e => {
                console.log(e)
            });
    }, [])


    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })

    const totalPrice = () => {
        let rs = 0;
        cart.forEach(item => {
            rs += item.quantity * item.products.price;
        })
        return formatter.format(rs);
    }








    const handleGetId = (id) => {
        console.log("id", id)
        setCart(cart.filter(item => item.id !== id))
        console.log(cart)
    }





    return (
        <div>

            <section className="h-100 h-custom" style={{ marginTop: "5em" }}>
                <div className="container py-4 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className=" p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h3>Giỏ hàng</h3>

                                            {cart && cart.map((item, index) => {
                                                return (

                                                    <ItemCart onGetId={handleGetId} cart={item} key={index}></ItemCart>
                                                    // <ContactTr onGetId={handleGetId} contact={item} key={index} />

                                                )


                                            })
                                            }
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card text-black rounded-3" style={{ background: "#E8E8E8" }}>
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
                                                        <h4 className="mb-2">Tổng tiền</h4>
                                                        <h4 className="mb-2" style={{ color: "red" }}>{totalPrice()}</h4>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-block btn-lg"
                                                    >
                                                        Thanh toán


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
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                {modal && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setModal(false)} aria-label="Close" /> */}
                                </div>
                                <div className="modal-body">
                                    <h6>   Giỏ hàng trống!!!
                                    </h6>
                                </div>
                                <div className="modal-footer">
                                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setModal(false) }}>Đóng</button> */}
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { navigate("/product") }}>Mua ngay</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}


export default ShoppingCart;