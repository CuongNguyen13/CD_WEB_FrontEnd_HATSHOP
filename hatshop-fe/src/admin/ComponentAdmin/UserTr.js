import React, { Component ,useEffect,useState} from 'react';
import axios from 'axios';
import { userApi } from '../../api/userApi';

function UserTr (props){
    const [modal, setModal] = useState(false);
    const { id, email, firstName, lastName, enable, address, province } = props.user;
    const [enableU,setEnableU] = useState(enable);
 
    const handlDelete = () => {
        setModal(false)
      userApi.blockUser(id).then(res =>{
            if(res){
                const mess = enable?"Mở thành công": "Khóa thành công" 
                alert(mess)
                if(enableU){
                    setEnableU(false)
                }else{
                    setEnableU(true)
                }

            }else{
               
                alert("Vui lòng thử lại!")
            }
      })
    }
        return (
            <tr>
                <td>{id}</td>
                <td>{email}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{address}</td>
            
                <td>{enableU?"Khóa":"Mở"}</td>
               
                
                <td><button onClick={() => { setModal(true) }} type='button' className={enableU ? "btn btn-danger" : "btn btn-success"}>
                    {enableU?"Mở":"Khóa"}
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
                                    <button type="button" className={enable ? "btn btn-danger" : "btn btn-success"} data-bs-dismiss="modal" onClick={() => { handlDelete() }}>{enableU ? "Mở" : "Khóa"}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </tr>
        );
    }


export default UserTr;