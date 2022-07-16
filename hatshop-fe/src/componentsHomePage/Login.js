import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../api/loginApi';

function Login() {
    // redirect sang trang trước đó navigate(-1)
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    //sử lý form
    const [input, setInputs] = useState({});
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //gọi api login
        //send form to service
        console.log(input, "cc")
        loginApi.createLogin(input).then(res => {
            sessionStorage.setItem("userName", res);
            navigate("/cart")
            
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }
    //xử lý đăng nhập
    //if(seccess)
    // localstoge = userName Nhận từ get api ("/login"), trả về home
    //else (fail) cho popup thông báo sai tài khoản

    return (
        <div>
            <>
                {/* Hello world */}
                <section className="vh-100 mx-auto" style={{ marginTop: "9em" }}>
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid"
                                    alt="Sample image"
                                />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    </div>
                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control form-control-lg"
                                            placeholder="Nhập email"
                                            name="email"
                                            required
                                            value={input.email || ""}
                                            onChange={handleChange}
                                        />

                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            name="pass"

                                            id="form3Example4"
                                            className="form-control form-control-lg"
                                            placeholder="Nhập mật khẩu"
                                            required
                                            value={input.pass || ""}
                                            onChange={handleChange}
                                        />

                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* Checkbox */}
                                        <div className="form-check mb-0">
                                            {/* <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example3"
                                                /> */}
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        >
                                            Login
                                        </button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                            Don't have an account?{" "}
                                            <a href="#!" className="link-danger">
                                                Register
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </>

        </div>
    );
}


export default Login;