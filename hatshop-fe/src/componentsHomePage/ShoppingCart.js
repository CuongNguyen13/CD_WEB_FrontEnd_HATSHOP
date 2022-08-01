import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartApi } from '../api/cartAPI';
import { userApi } from '../api/userApi';
import ItemCart from './ItemCart';
import {prepaymentApi} from '../api/prepaymentApi'
import { useFormik } from 'formik';
import * as Yup from "yup";

function ShoppingCart() {
   
    const [cart, setCart] = useState([]);
    window.scrollTo(0, 0);
    const id = sessionStorage.getItem("id")
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        cartApi.checkEmpty(id)
            .then(res => {
                if (!res) {
                    setModal(true)
                }
            }).catch(e => {
                console.log(e)
            });

        userApi.userPayment(id)
            .then(res => {
                console.log("User", res)
                formik.setValues(({ ...res, name: res.firstName + " " + res.lastName, address: res.address, email: res.email, phone: res.phone, userId: id, description: res.description })
                )

            }).catch(e => {
                console.log(e)
            });


        cartApi.getlistCart(id)
            .then(res => {
                if (res != null) {
                    setCart(res)
                }
                else {
                    alert("Vui lòng thử lại!")
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
       
        return rs;
    }

    const handleGetId = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    // const [input, setInputs] = useState();
   
    const handleSubmit = (values) => {
           prepaymentApi.save(values).then(res => {
               if (res!=null) {
                    const id = res
                   navigate(`/bill${id}`)
               } else {
                   alert("Hệ thống đang bận, vui lòng thử lại")
               }
           }).catch(e => {
               console.log(e)
           });
        console.log("Value ",values)
    }

    const formik = useFormik({
        initialValues:{
          name : "",
          phone : 0,
          email : "",
          address : "",
          description : "",
          userId: 0,
          total : 0,
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Tên không được trống!").min(2, "Tên tối thiểu 2 ký tự!").matches(/^[a-zA-Z\s]*$/, "Tên không được là số"),
          email : Yup.string().required("Email không được trống!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Chưa phù hợp định dạng email!"),
          phone: Yup.string().required("Số điện thoại không được trống!").min(10, "Số điện thoại tối thiểu 10 ký tự!").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Không phải định dạng số điện thoại VN"),
          address: Yup.string().required("Địa chỉ không được trống!").min(3, "Địa chỉ tối thiểu 3 ký tự!"),
        }),
        
        onSubmit: (values) => {
            console.log(values)
            const newInput = { ...values, total: totalPrice()}
            console.log(totalPrice(), "Total")
            handleSubmit(newInput)
          }
      })


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
                                                    <form className="mt-4" onSubmit={formik.handleSubmit}>
                                                        <div className="form-outline form-white mb-4">
                                                             <label className="form-label" htmlFor="typeText">
                                                               Tên
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="typeText"
                                                                required
                                                                className="form-control form-control-lg"
                                                                placeholder="Tên"
                                                                name='name'
                                                                value={formik.values.name} onChange={formik.handleChange}
                                                            />
                                                            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.name}</span>

                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <label className="form-label" htmlFor="typeText">
                                                                Số điện thoại
                                                            </label>
                                                            <input
                                                                type="phone"
                                                                id="typeText"
                                                                required
                                                                className="form-control form-control-lg"
                                                                siez={10}
                                                                minLength={10}
                                                                maxLength={10}
                                                                name='phone'
                                                                value={formik.values.phone} onChange={formik.handleChange}
                                                            />
                                                             <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.phone}</span>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <label className="form-label" htmlFor="typeText">
                                                                Địa chỉ
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="typeText"
                                                                required
                                                                className="form-control form-control-lg"
                                                                placeholder="Địa chỉ"
                                                                name='address'
                                                                value={formik.values.address} onChange={formik.handleChange}
                                                            />
                                                             <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.address}</span>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <label className="form-label" htmlFor="typeText">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                id="typeText"
                                                                className="form-control form-control-lg"
                                                                required
                                                                placeholder="Email"
                                                                name='email'
                                                                value={formik.values.email} onChange={formik.handleChange}
                                                            />
                                                             <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.email}</span>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <label className="form-label" htmlFor="typeText">
                                                                Mô tả
                                                            </label>
                                                            <textarea
                                                                type="text"
                                                                id="typeText"
                                                                className="form-control form-control-lg"
                                                                placeholder="Mô tả"
                                                                name='description'
                                                                value={formik.values.description} onChange={formik.handleChange}
                                                            />
                                                            
                                                        </div>
                                                        <hr className="my-4" />
                                                        <div className="d-flex justify-content-between">
                                                            <h4 className="mb-2">Tổng tiền</h4>
                                                            <h4 className="mb-2" style={{ color: "red" }}>{formatter.format(totalPrice())}</h4>
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn-block btn-lg"
                                                        >
                                                            Thanh toán
                                                        </button>
                                                    </form>
                                                   
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