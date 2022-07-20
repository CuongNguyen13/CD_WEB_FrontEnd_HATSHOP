import React, { Component ,useState} from 'react';
import axios from 'axios';

function UserTr (props){
    const [modal, setModal] = useState(false);
    const { id, email, firstName, lastName, enable, address, province } = props.user;
    const handlDelete = () => {
      
        // call api
        props.onGetId(id);
    }
        return (
            <tr>
                <td>{id}</td>
                <td>{email}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{address}</td>
            
                <td>{enable?"Khóa":"Mở"}</td>
               
                
                <td><button onClick={() => { setModal(true) }} type='button' className='btn btn-danger'>
                    Xóa
                </button>
                </td>


                {/* thông báo xóa */}
                {modal && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setModal(false)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <h6>    Bạn có muốn khóa {email}!!!
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

            </tr>
        );
    }


export default UserTr;