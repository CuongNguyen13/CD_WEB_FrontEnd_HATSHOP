import React, { Component, useEffect, useState } from 'react';
import { contactApi } from '../api/contactApi';


function ContactUs() {
    //sử lý form
    const [input, setInputs] = useState({});
    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const modal = isDisplayModal ? 'Đã gửi!' : 'Vui lòng thử lại!';

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //gọi api contact
        //send form to service
        contactApi.createContact(input).then(res => {
            // console.log("kết quả:", res)
            if (res) {
                setIsDisplayModal(true)
                setInputs("");
            }
            else {
                setIsDisplayModal(false);
            }
            console.log(res)

        }).catch(e => {
            console.log(e)
        });
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
                                                name="name"
                                                value={input.name || ""}
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
                                                name="email"
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
                                                name="title"
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
                                                name="content"
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
            {/* thông báo thành công */}
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                {isDisplayModal && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setIsDisplayModal(false)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <h3>  {

                                        modal
                                    }
                                    </h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setIsDisplayModal(false) }}>Đóng</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default ContactUs;