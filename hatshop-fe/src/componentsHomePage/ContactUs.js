import React, { Component, useState } from 'react';


function ContactUs  () {
       
        const [input, setInputs] = useState({});
      
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("input", input);
        }

       
        return (
            <div>
                <div className="container-xxl py-6">
                    <div className="container">
                        <div
                            className="section-header text-center mx-auto mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: 500 }}
                        >
                            <h1 className="display-5 mb-3">Liên hệ</h1>
                            <p>
                               Vui lòng đóng góp ý kiến của bạn
                            </p>
                        </div>
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                                    <h5 className="text-white">Số điện thoại</h5>
                                    <p className="mb-5">
                                        <i className="fa fa-phone-alt me-3" />
                                        0367225111
                                    </p>
                                    <h5 className="text-white">Email</h5>
                                    <p className="mb-5">
                                        <i className="fa fa-envelope me-3" />
                                        
                                    </p>
                                    <h5 className="text-white">Địa chỉ</h5>
                                    <p className="mb-5">
                                        <i className="fa fa-map-marker-alt me-3" />
                                        Linh Xuân, Thủ Đức, Hồ Chí Minh
                                    </p>
                                   
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    required 
                                                    placeholder="Your Name"
                                                    name = "name"
                                                    value={input.name||""}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="name">Họ và tên</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    name = "email"
                                                    required 
                                                    value={input.email || ""}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    name = "title"
                                                    required 
                                                    value={input.title || ""}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="subject">Tiêu đề</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 200 }}
                                                    defaultValue={""}
                                                    name = "content"
                                                    required 
                                                    value={input.content || ""}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="message">Nội dung</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-primary rounded-pill py-3 px-5"
                                                type="submit"
                                               
                                            >
                                                Gửi
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


export default ContactUs;