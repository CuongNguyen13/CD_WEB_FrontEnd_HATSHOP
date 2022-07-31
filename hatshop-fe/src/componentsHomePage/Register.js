import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../api/registerApi';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "../css/Register.css";
import axios from 'axios';


function Register() {
    // redirect sang trang trước đó navigate(-1)
    const navigate = useNavigate();
    window.scrollTo(0, 0);
    
    const [check, setCheck] = useState(false);
    const CheckEmailExist = (email, values) => {
      registerApi.checkEmailExist(email).then(res => {
        
        console.log("res",check)
        setCheck(res)
        if (res) {
          setCheck(res)
        } else {
          console.log(values, "Dk")
          registerApi.createRegister(values).then(res => {
              console.log(res)
          }).catch(e => {
              console.log(e)
          });
          navigate("/")
          alert("Bạn đã đăng ký thành công.");     
        }
      }).catch(e => {
          console.log("e",e)
      });
  }

   
    //sử lý form
    const formik = useFormik({
      
      initialValues:{
        fistName : "",
        lastName : "",
        email : "",
        pass : "",
        province : "",
        address : "",
        date : ""
      },
      validationSchema: Yup.object({
        fistName: Yup.string().required("Tên không được trống!").min(2, "Tên tối thiểu 2 ký tự!"),
        lastName: Yup.string().required("Họ và tên đệm không được trống!").min(2, "Họ và tên đệm tối thiểu 2 ký tự!"),
        email : Yup.string().required("Trống!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "chưa phù hợp định dạng email!"),
        pass: Yup.string().required("Trống!").min(8, "Mật khẩu tối thiểu từ 8 ký tự!"),
        province: Yup.string().required("Trống!").min(3, "Nguyên quán tối thiểu 3 ký tự!"),
        address: Yup.string().required("Trống!").min(3, "Địa chỉ tối thiểu 3 ký tự!"),
      }),
     
      onSubmit: (values) => {
        CheckEmailExist(values.email, values)
        }
    })



    return (
      
      <div className="wrapper" style={{margin:"150px auto",width:"80%"}}>
        <div className="form-left">
        <h2 className="text-uppercase">Thông tin</h2>
        <p>
          Tạo tài khoản tại đây chúng tôi sẽ bảo mật tuyệt đối thôi tin tài khoản của quý khách. Cùng với đội ngũ Nhân viên nhiều năm kinh nghiệm sẽ hỗ trợ quý khách một cách tốt nhất.
        </p>
        <p className="text">
          <span>Sub Hear : </span>
          Create an account here, we will absolutely keep your account confidential. Along with a staff of many years of experience will support you in the best way.
        </p>
        <div className="form-field">
          <Link to="/Contact"> <input type="submit" className="account" value="Liên hệ" /></Link>
        </div>
      </div>
        <form className="form-right" style={{backgroundColor:""}} onSubmit={formik.handleSubmit}>
          <h2 className="text-uppercase">Đăng ký</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <input type="text" name="fistName" id="first_name" className="input-field"  placeholder='Tên' value={formik.values.fistName} onChange={formik.handleChange}/>
              <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.fistName}</span>
            </div>
            <div className="col-sm-6 mb-3">
              <input type="text" name="lastName" id="last_name" className="input-field" placeholder='Họ và tên đệm' value={formik.values.lastName} onChange={formik.handleChange}/>
              <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.lastName}</span>
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="input-field" name="email" id="email" required placeholder='Email' value={formik.values.email} onChange={formik.handleChange}/>
            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.email}</span>
            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{check?"Email này đã được đăng ký":""}</span>
          </div>
          <div className="mb-3">
            <input type="password" className="input-field input-pass" id="pass" name="pass" required placeholder='Mật khẩu' value={formik.values.pass} onChange={formik.handleChange}/>
            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.pass}</span>
          </div>
          <div className="mb-3">
            <input type="text" className="input-field" name="province" id="province" required placeholder='Quê quán' value={formik.values.province} onChange={formik.handleChange}/>
            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.province}</span>
          </div>
          <div className="mb-3">
            <input type="text" className="input-field" name="address" id="address" required placeholder='Địa chỉ' value={formik.values.address} onChange={formik.handleChange}/>
            <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.address}</span>
          </div>
          <div className="mb-3">
            <input type="date" id="date" className="input-field" name="date" required value={formik.values.date} onChange={formik.handleChange}/>
          </div>
          <div className="mb-3">
            <label className="option">tôi đồng ý với<a href="#">các Điều khoản và Điều kiện</a>
              <input id="option" type="checkbox" defaultChecked />
              <span className="checkmark" />
            </label>
            <span id="agree" style={{color:"red", display:"none", fontSize:"15px"}}>Quý khách phải đồng ý với cái điều khoản!</span>
          </div>
          <div className="form-field">
            <input type="submit" defaultValue="Đăng ký" className="register btn-register" name="register" />
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