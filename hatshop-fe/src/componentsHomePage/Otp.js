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
    const email = sessionStorage.getItem("email");
    console.log(email);

    const handleChange = (event) => {
        const countString = "";
        const name = event.target.name;
        const value = event.target.value;
        // countString+=value+""
        // console.log(countString);
        setInputs(values => ({ ...values, [name]: value, email : email }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        //gọi api login
        //send form to service
        console.log("Dk", input)
        otpApi.createOTP(input).then(res => {
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }

    const Otp = (event) => {
        event.preventDefault();
        otpApi.resendOtp(email).then(res => {
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center align-items-center container">
        <div className="card1 py-5 px-3">
          <h5 className="m-0">Xác minh qua email</h5><span className="mobile-text">Nhập mã chúng tôi vừa gửi trên email của bạn<b className="text-danger">{email}</b></span>
          <div className="d-flex flex-row mt-3">
            <input type="text" style={{display:'none'}} name='email' className="form-control" value={email}/>
            <input type="text" name='otp1' className="form-control" autofocus value={input.otp1 || ""}  onChange={handleChange} />
            <input type="text" name='otp2' className="form-control" value={input.otp2 || ""}  onChange={handleChange}/>
            <input type="text" name='otp3' className="form-control" value={input.otp3 || ""}  onChange={handleChange}/>
            <input type="text" name='otp4' className="form-control" value={input.otp4 || ""}  onChange={handleChange}/>
            <input type="text" name='otp5' className="form-control" value={input.otp5 || ""}  onChange={handleChange}/>
            <input type="text" name='otp6' className="form-control" value={input.otp6 || ""}  onChange={handleChange}/>
          </div>
          <div className='mt-3'>
            <label style={{float:'left',margin:'8px 0 0 0', fontSize:'15px'}}>New Password :</label>
            <input type="text" name='newPass' className="form-control" value={input.newPass || ""} style={{margin:'10px auto', width:'60%'}} onChange={handleChange}></input>
          </div>
          <input type="submit" className='btn btn-danger mt-3' style={{margin:"0 auto"}} value="Gửi"></input>
          <div className="text-center mt-3"><span className="d-block mobile-text">Không nhận được mã?</span>
          <Link to="/resetOTP2?email={email}"><span className="font-weight-bold text-danger cursor">Gửi lại</span></Link></div>
        </div>
      </div>
      </form>
    );
}

export default Otp;
