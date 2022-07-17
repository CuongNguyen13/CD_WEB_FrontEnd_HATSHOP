import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../api/registerApi';
import "../css/Register.css";


function Register() {
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
    // console.log(input, "handleChange",handleChange)

    const handleSubmit = (event) => {
        event.preventDefault();

        //gọi api login
        //send form to service
        console.log(input, "Dk")
        registerApi.createRegister(input).then(res => {
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
    }

    return (
      
      <div className="wrapper" style={{margin:"150px auto",width:"80%"}}>
        <div className="form-left">
        <h2 className="text-uppercase">information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
        </p>
        <p className="text">
          <span>Sub Head:</span>
          Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
        </p>
        <div className="form-field">
          <input type="submit" className="account" defaultValue="Have an Account?" />
        </div>
      </div>
        <form className="form-right" style={{backgroundColor:""}} onSubmit={handleSubmit}>
          <h2 className="text-uppercase">Registration form</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <input type="text" name="fistName" id="first_name" className="input-field"  placeholder='First Name' value={input.fistName || ""} onChange={handleChange}/>
            </div>
            <div className="col-sm-6 mb-3">
              <input type="text" name="lastName" id="last_name" className="input-field" placeholder='Last Name' value={input.lastName || ""} onChange={handleChange}/>
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="input-field" name="email" required placeholder='Email' value={input.email || ""} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <input type="password" className="input-field input-pass" name="pass" required placeholder='Password' value={input.pass || ""} onChange={handleChange}/>
          </div>
          <div class="invalid-feedback err-from-pass">
                    Trường này không được trống !
                </div>
          <div className="mb-3">
            <input type="text" className="input-field" name="province" required placeholder='Province'value={input.province || ""} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <input type="text" className="input-field" name="address" required placeholder='Address' value={input.address || ""} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <input type="date" className="input-field" name="date" required value={input.date || ""} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="option">I agree to the <a href="#">Terms and Conditions</a>
              <input type="checkbox" defaultChecked />
              <span className="checkmark" />
            </label>
          </div>
          <div className="form-field">
            <input type="submit" defaultValue="Register" className="register btn-register" name="register" />
          </div>
          {/* {Object.keys(errors).length != 0 && (
          <ul className='error-container'>
            {errors.name?.type == 'required' && <li>Name is required</li>}
            {errors.pass?.type == 'required' && <li>Password is required</li>}
            {errors.pass?.type == 'minLength' && <li>Password must be 6 characters long</li>}
          </ul>
          )} */}

        </form>
      </div>
    );
}


export default Register;