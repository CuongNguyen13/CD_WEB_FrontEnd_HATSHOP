import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../api/loginApi';
import { useFormik } from 'formik';
import * as Yup from "yup";
function Login() {
    // redirect sang trang trước đó navigate(-1)
    const navigate = useNavigate();

    window.scrollTo(0, 0);
    const [check, setCheck] = useState(false);

    const handleSubmit = (values) => {
        //gọi api login
        //send form to service
        console.log(values, "cc")
        loginApi.createLogin(values).then(res => {
            sessionStorage.setItem("id",res.id)
            sessionStorage.setItem("userName", res);
            console.log(res)
           
            const user = res;
            console.log(user)
            if(user.email == null){
                setCheck(true);
                navigate("/Login")
                setCheck(true);
                console.log(check)
            } else{

            if(user.role){
                console.log("123");
                sessionStorage.setItem("admin", user);
                navigate("/admin/static")
                setCheck(false);
                window.location.reload();
            }else{
                navigate("/cart")
                window.location.reload();

            }
        }

        }).catch(e => {
            console.log(e)
        });
    }
    const formik = useFormik({
      
        initialValues:{
          email : "",
          pass : "",
        },
        validationSchema: Yup.object({
          email : Yup.string().required("Email không được trống!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "chưa phù hợp định dạng email!"),
          pass: Yup.string().required("Mật khẩu không được trống!").min(8, "Mật khẩu tối thiểu từ 8 ký tự!"),
        }),
       
        onSubmit: (values) => {
            handleSubmit(values)
          }
      })

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
                                <form onSubmit={formik.handleSubmit}>
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
                                            value={formik.values.email} onChange={formik.handleChange}
                                        />
                                        <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.email}</span>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            name="pass"
                                            value={formik.values.pass} onChange={formik.handleChange}
                                            id="form3Example4"
                                            className="form-control form-control-lg"
                                            placeholder="Nhập mật khẩu"
                                            required
                                        />
                                        <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.pass}</span>
                                        <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{check?"Mật khẩu hoặc tài khoản không đúng":""}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center" style={{display:"flex", clear:"both"}}>
                                        {/* Checkbox */}
                                        {/* <div className="form-check mb-0">
                                            <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example3"
                                                />
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                Remember me
                                            </label>
                                        </div> */}
                                        <Link to="/Forgetpass" className="text-body">
                                            Quyên mật khẩu
                                        </Link>
                                    </div>
                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        >
                                            Đăng nhập
                                        </button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">
                                           Không có tài khoản?{" "}
                                            <Link to="/Register" className="link-danger">
                                                Đăng ký
                                            </Link>
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