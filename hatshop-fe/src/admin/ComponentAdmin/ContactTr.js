import React, { Component, useState } from 'react';
import axios from 'axios';
import { contactAdminApi } from '../../api/contactAdminApi';
function ContactTr(props) {
    const { id, email, dateSend, content, title } = props.contact;
    let params = {
        id,
        status: 0
    }

    const [modal,setModal] = useState(false);

    const handlModal=()=>{
        setModal(true);
    }


    const handlDelete = () => {
        // console.log("params", params)
        contactAdminApi.updateStatus(params).then(res=>{
            // check success
            if(res){

                //  ở đây gọi hàm cho thằng cha cập nhật lại list
                // nó truyền qua props
                props.onGetId(id);
                //  đó là vậy
                setModal(false)
            }
            else{

            }
        }).catch(e=>{console.log(e)})

        // call api

    }

    



    return (

        <tr>
            <td>{props.number+1}</td>
            <td>{email}</td>
            <td>{dateSend}</td>
            <td>{title}</td>
            <td>{content}</td>
            <td> <button className='btn btn-success'>
                Trả lời
            </button>
            </td>
            <td><button type='button' className='btn btn-danger' onClick={handlModal}>
                Xóa
            </button>
            </td>
           
            {/* thông báo thành công */}
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
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handlDelete()}}>Xóa</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </tr>

    );
}


export default ContactTr;