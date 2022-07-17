import React, { Component, useState } from 'react';
import axios from 'axios';
import { contactAdminApi } from '../../api/contactAdminApi';
function ContactTr(props) {
    const { id, email, dateSend, content, title } = props.contact;
    let params = {
        id,
        status: 0
    }
    const mail = email;
    const [modal, setModal] = useState(false);

    const [input, setInputs] = useState({});

    const [modelSend, setModalSend] = useState(false);

    const [loading, setLoading] = useState(false);

    const [checkSend,setCheckSend] = useState(false);
    const modalSend = checkSend ? 'Đã gửi!' : 'Vui lòng thử lại!';


    const hanldModalSend = () => {
        setModalSend(true);
    }

    const handlModal = () => {
        setModal(true);
    }


    const handlDelete = () => {
        // console.log("params", params)
        contactAdminApi.updateStatus(params).then(res => {
            console.log(res);
            // check success
            if (res) {
                
                //  ở đây gọi hàm cho thằng cha cập nhật lại list
                // nó truyền qua props
                setModal(false)
                
                props.onGetId(id);
                //  đó là vậy
               
            }
            else {

            }
        }).catch(e => { console.log(e) })

        // call api

    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value,email:email }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //gọi api login
        //send form to service
        // console.log( "sendmail",input)
        setModalSend(false)
        setLoading(true);
        contactAdminApi.sendMail(input).then(res => {
           
           if(res){
                setLoading(false)
                setCheckSend(true)
                handlDelete()
           }else{
                setCheckSend(false)
           }



        }).catch(e => {
            console.log(e)
        });
    }


    return (

        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{new Date(dateSend).toLocaleDateString()}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td> <button className='btn btn-success' onClick={hanldModalSend}>
                Trả lời
            </button>
            </td>
            <td><button type='button' className='btn btn-danger' onClick={handlModal}>
                Xóa
            </button>
            </td>

            {/* popup xóa*/}
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                {modal && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setModal(false)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <h6>    Bạn có muốn xóa phản hồi này!!!
                                    </h6>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setModal(false) }}>Đóng</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handlDelete() }}>Xóa</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>



            {/* popup gửi mail/}
            <div>
                {/* Button trigger modal */}

            {/* Modal */}
            {modelSend && (
                <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Trả lời</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setModalSend(false)} aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    </div>
                                  
                                    {/* content input */}
                                    <div className="form-outline mb-3">
                                        <textarea
                                            type="text"
                                            name="content"

                                            id="form3Example4"
                                            className="form-control form-control-lg"
                                            placeholder="Nhập nội dung phản hồi"
                                            required
                                            value={input.content || ""}
                                            onChange={handleChange}
                                        />

                                    </div>
                                  
                                  
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setModalSend(false) }}>Đóng</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={handleSubmit}>Gửi</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}


            {checkSend && (
                <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setCheckSend(false)} aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <h3>  {

                                    modalSend
                                }
                                </h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setCheckSend(false) }}>Đóng</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}


            {loading && (
                <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setCheckSend(false)} aria-label="Close" /> */}
                            </div>
                            <div className="modal-body">
                                <h3>    
                                    Đang gửi
                                </h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setLoading(false) }}>Đóng</button>

                            </div>
                        </div>
                    </div>
                </div>
            )}



        </tr >

    );
}


export default ContactTr;