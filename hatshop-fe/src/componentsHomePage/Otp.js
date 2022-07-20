import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { otpApi } from '../api/otpApi';
import "../css/otp.css";


function Otp() {
    // redirect sang trang trước đó navigate(-1)
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    //sử lý form
    const [input, setInputs] = useState({});
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const handleChange = (event) => {
        const countString = "";
        const name = event.target.name;
        const value = event.target.value;
        // countString+=value+""
        // console.log(countString);
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        //gọi api login
        //send form to service
        console.log(input, "Dk")
        otpApi.createOTP(input).then(res => {
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }

    const email = sessionStorage.getItem("email");
    console.log(email);

    return (
        <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center container">
        <div className="card1 py-5 px-3">
          <h5 className="m-0">Xác minh qua email</h5><span className="mobile-text">Nhập mã chúng tôi vừa gửi trên email của bạn<b className="text-danger">{email}</b></span>
          <div className="d-flex flex-row mt-5">
          <input type="text" name='in1' className="form-control" autofocus value={input.in1 || ""}  onChange={handleChange} />
          <input type="text" name='in2' className="form-control" value={input.in2 || ""}  onChange={handleChange}/>
          <input type="text" name='in3' className="form-control" value={input.in3 || ""}  onChange={handleChange}/>
          <input type="text" name='in4' className="form-control" value={input.in4 || ""}  onChange={handleChange}/>
          <input type="text" name='in5' className="form-control" value={input.in5 || ""}  onChange={handleChange}/>
          <input type="text" name='in6' className="form-control" value={input.in6 || ""}  onChange={handleChange}/></div>
          <div className="text-center mt-5"><span className="d-block mobile-text">Không nhận được mã?</span>
          <Link to="/sendOTP2"><span className="font-weight-bold text-danger cursor">Gửi lại</span></Link></div>
        </div>
      </div>
      </form>
    );
}

export default Otp;
