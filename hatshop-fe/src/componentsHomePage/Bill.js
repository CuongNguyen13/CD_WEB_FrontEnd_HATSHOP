import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prepaymentApi } from '../api/prepaymentApi'
import { useParams } from 'react-router-dom';
import ItemProductBill from './ItemProductBill'
function Bill() {
    const navigate = useNavigate()
    const [bill, setBill] = useState({
        cart:[]
    });
    let params = useParams();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        // gọi api chỗ này
        prepaymentApi.bill(params.id)
            .then(res => {
                if (res != null) {
                    console.log(res)
                    setBill(res);
                
                } else {
                    alert("Vui lòng thử lại");
                    navigate("/")
                }


            }).catch(e => {
                alert("Vui lòng thử lại");
                navigate("/")
            });
    }, [])

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })


    return (
        <div className='container-sm text-black rounded-3 mb-5' style={{ background: "#E8E8E8", marginTop: '5em' }}>
            <h1>Hóa đơn</h1>
            <h5 className="fw-bold text-primary m-0">
                (Hat<span className="text-secondary">Sh</span>op)
            </h5>
            <h4 className='text-start'>Xin chào: <span style={{ color: "blue" }}>{bill&&bill.name}</span></h4>
            <h6 className='text-start'>Đơn hàng của bạn đã được đặt thành công vào ngày: <span style={{ color: "blue" }}>{new Date(bill &&bill.date).toLocaleDateString()}</span></h6>
            <h6 className='text-start'>Tình trạng đơn hàng: <i className='text-primary'>{bill && bill.status?"Chưa xác nhận":"Đã xác nhận"}</i></h6>
            <hr style={{ color: 'black', fontSize: '15px' }}></hr>
            <h4 className='text-start'>Thông tin đơn hàng:</h4>
            <div className='center'>

                <div className='row ms-5'>
                    <div className='col-6'>
                        <h6 className='text-start'>Tên khách hàng: <i>{bill &&bill.name}</i></h6>
                        <h6 className='text-start'>Địa chỉ: <i >{bill &&bill.address}</i></h6>

                    </div>
                    <div className='col-6'>
                        <h6 className='text-start'>Email: <i>{bill &&bill.email}</i></h6>
                        <h6 className='text-start'>Số điện thoại: <i>{bill &&bill.phone}</i></h6>
                    </div>
                    <h6 className='text-start'>Mô tả: <i>{bill && bill.description != null ? bill &&bill.description : "Không có"}</i></h6>
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

                    <h4 className='text-end'>Tổng giá: <span style={{ color: "red" }}>{formatter.format(bill &&bill.total)}</span> </h4>
                </div>





            </div>





        </div>
    );
}


export default Bill;