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
    // console.log(input, "handleChange",handleChange)

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
        <div className="container height-100 d-flex justify-content-center align-items-center"> <div className="position-relative"> 
        <div className="card p-2 text-center"> <h6>Please enter the one time password <br /> to verify your account</h6> 
        <form onSubmit={handleSubmit}>
            <div> <span>A code has been sent to</span> <small>{email}</small> </div> <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
            <input className="m-2 text-center form-control rounded" type="number" name='first' id="first" maxLength={1} value={input.first || ""}  onChange={handleChange}/> 
            <input className="m-2 text-center form-control rounded" type="number" name='second' id="second" maxLength={1}value={input.second || ""}  onChange={handleChange} />
            <input className="m-2 text-center form-control rounded" type="number" name='third' id="third" maxLength={1}value={input.third || ""}  onChange={handleChange} /> 
            <input className="m-2 text-center form-control rounded" type="number" name='fourth' id="fourth" maxLength={1}value={input.fourth || ""}  onChange={handleChange} />
            <input className="m-2 text-center form-control rounded" type="number" name='fifth' id="fifth" maxLength={1} value={input.fifth || ""}  onChange={handleChange}/>
            <input className="m-2 text-center form-control rounded" type="number" name='sixth' id="sixth" maxLength={1}value={input.sixth || ""}  onChange={handleChange} />
            </div>
            <div className="mt-4"> <button className="btn btn-danger px-4 validate">Validate</button> </div> 

        </form>
        </div> <div className="card-2"> <div className="content d-flex justify-content-center align-items-center"> 
        <span>Didn't get the code</span> <a href="#" className="text-decoration-none ms-3">Resend(1/3)</a> </div> </div> </div>
        </div>
    );
}

export default Otp;
