import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prepaymentApi } from '../api/prepaymentApi'
import { useParams } from 'react-router-dom';
import ItemProductBill from '../componentsHomePage/ItemProductBill';

function OrderBill() {
    const navigate = useNavigate()
    const [bill, setBill] = useState({
        cart: []
    });
    let params = useParams();

    const [status, setStatus] = useState([])
    const [checkStatus, setCheckStatus] = useState([])
    
    const [modal, setModal] = useState(false);

    useEffect(() => {
        // gọi api chỗ này
        prepaymentApi.bill(params.id)
            .then(res => {
                if (res != null) {
                    console.log("bill", res)
                    setBill(res);


                    if (res.status == "1") {
                        setStatus("Đã xác nhận")
                    } else if (res.status == "0") {
                        setStatus("Đang chờ xác nhận")
                    } else {
                        setStatus("Đơn hàng đã hủy")
                    }


                } else {
                    alert("Vui lòng thử lại");
                    navigate("/")
                }


            }).catch(e => {
                alert("Vui lòng thử lại");
                navigate("/")
            });
    }, [checkStatus&&checkStatus])

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })

    const handlStatusCancel = () => {
      
        prepaymentApi.updateStatus(params.id, 2).then(res => {
         
          if (res) {
              setModal(res);
              setStatus("Đã hủy")
            } else {

                alert("Vui lòng thử lại!")
            }
        })
    }




    const handlStatusSuccess = () => {

        prepaymentApi.updateStatus(params.id, 1).then(res => {
            
            if (res) {
                setModal(res);
                setStatus("Đã xác nhận")
            } else {

                alert("Vui lòng thử lại!")
            }
        })
    }


    return (
        <div className='container text-black rounded-3 w-100' style={{ background: "#E8E8E8" }}>
            <div className='row'>
                <div className='col-2'>
                    <button className='btn btn-danger text-start' onClick={() => { navigate(-1) }}>Quay lại</button>
                </div>
                <div className='col-4'>

                </div>
                <div className='col-2'>
                    {/* <button className='btn btn-danger text-start' onClick={() => { navigate(-1) }}>Hủy</button> */}
                </div>
                <div className='col-2'>
                    <button className='btn btn-danger' onClick={handlStatusCancel}>Hủy đơn</button>
                </div>
                <div className='col-2'>
                    <button className='btn btn-success' onClick={handlStatusSuccess}>Xác nhận</button>
                </div>
            </div>
            <h1 className='mt-2'>Chi tiết đơn hàng</h1>
            <h4 className='text-start'>Người mua: <span style={{ color: "blue" }}>{bill && bill.name}</span></h4>
            <h6 className='text-start'>Ngày đặt hàng: <span style={{ color: "blue" }}>{new Date(bill && bill.date).toLocaleDateString()}</span></h6>
            <h6 className='text-start'>Tình trạng đơn hàng: <i className='text-primary'>{status}</i></h6>
            <hr style={{ color: 'black', fontSize: '15px' }}></hr>
            <h4 className='text-start'>Thông tin đơn hàng:</h4>
            <div className='center'>

                <div className='row ms-5'>
                    <div className='col-6'>
                        <h6 className='text-start'>Tên khách hàng: <i>{bill && bill.name}</i></h6>
                        <h6 className='text-start'>Địa chỉ: <i >{bill && bill.address}</i></h6>

                    </div>
                    <div className='col-6'>
                        <h6 className='text-start'>Email: <i>{bill && bill.email}</i></h6>
                        <h6 className='text-start'>Số điện thoại: <i>{bill && bill.phone}</i></h6>
                    </div>
                    <h6 className='text-start'>Mô tả: <i>{bill && bill.description != null ? bill && bill.description : "Không có"}</i></h6>
                </div>


            </div>
            <hr style={{ color: 'black', fontSize: '15px' }}></hr>
            <div>
                <h5 className='text-start'>Danh sách sản phẩm:</h5>

                <div>
                    <div>
                        {bill && bill.cart.map((item, index) => {
                            return (
                                <ItemProductBill cart={item} key={index}></ItemProductBill>

                            )
                        })
                        }
                    </div>
                    <hr style={{ color: 'black', fontSize: '15px' }}></hr>

                    <h4 className='text-end'>Tổng giá: <span style={{ color: "red" }}>{formatter.format(bill && bill.total)}</span> </h4>
                </div>





            </div>
            {modal && (
                <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setModal(false)} aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <h6>    Thay đổi trạng thái thành công!!!
                                </h6>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setModal(false) }}>Đóng</button>
                                {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { handlDelete() }}>Xóa</button> */}

                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='row'>
                <div className='col-6'>

                </div>
            </div>


        </div>
    );
}


export default OrderBill;