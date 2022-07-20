import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { forgetpassApi } from '../api/forgetpassApi';
import "../css/otp.css";


function Forgetpass() {
    // redirect sang trang trước đó navigate(-1)
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    //sử lý form
    const [input, setInputs] = useState({});
    const [isDisplayModal, setIsDisplayModal] = useState(false);
     
    sessionStorage.setItem("email", input.email);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input, "Dk")
        forgetpassApi.createForgetpass(input).then(res => {
            navigate("/Otp")
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }

    return (
            <div className="login-page bg-light" style={{margin:"150px auto"}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                <h3 className="mb-3">Quyên mật khẩu ?</h3>
                <div className="bg-white shadow rounded">
                    <div className="row">
                    <div className="col-md-7 pe-0">
                        <div className="form-left h-100 py-5 px-5">
                        <form className="row g-4" onSubmit={handleSubmit}>
                            <div className="col-12">
                            <label>Email<span className="text-danger">*</span></label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="bi bi-person-fill" /></div>
                                <input type="text" className="form-control" placeholder="Nhập Email" name='email' value={input.email || ""}  onChange={handleChange} />
                            </div>
                            </div>
                            <div className="col-12">
                            <button type="submit" className="btn btn-primary px-4 float-end mt-4">Gửi Mail</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-5 ps-0 d-none d-md-block">
                        <div className="form-right h-100 bg-primary text-white text-center pt-5">
                        <h2 className="fs-1">Mừng trở lại!!!</h2>
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


export default Forgetpass;
