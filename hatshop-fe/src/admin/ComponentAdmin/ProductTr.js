import React, { Component, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { productApi } from '../../api/productApi';

function ProductTr(props) {
    const { id, name, linkImage1, date, kind, price, quantity } = props.product;
    const [modal, setModal] = useState(false);
    // let params = {
    //     id,
    //     status: 0
    // }

    const handlDelete = () => {
        productApi.deleteProduct(id).then(res => {
            console.log("id", res);
            // check success
            if (res) {

                //  ở đây gọi hàm cho thằng cha cập nhật lại list
                // nó truyền qua props
                props.onGetId(id);
                //  đó là vậy
                setModal(false)
            }
            else {

            }
        }).catch(e => { console.log(e) })

        // call api

    }



    return (
        <tr>
            <td>{id}</td>

            <td><img style={{ maxWidth: '5em' }} className='rounded rounded-circle float-start' src={linkImage1}></img></td>
            <td>{name}</td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>{kind}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> <NavLink className='btn btn-primary' to={`/admin/editProduct${id}`}>
                Chỉnh sửa
            </NavLink>
            </td>
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
                                <h6>    Bạn có muốn xóa sản phẩm {name}!!!
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


export default ProductTr;