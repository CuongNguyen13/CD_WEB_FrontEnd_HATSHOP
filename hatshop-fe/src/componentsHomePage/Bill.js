import React, { Component } from 'react';

class Bill extends Component {
    render() {
        return (
            <div className='container card text-black rounded-3' style={{ background: "#E8E8E8",marginTop:'5em' } }>
                <h1>Hóa đơn</h1>
                <h5 className="fw-bold text-primary m-0">
                    (Hat<span className="text-secondary">Sh</span>op)
                </h5>
                <h4 className='text-start'>Xin chào: Cương</h4>
                <h6 className='text-start'>Đơn hàng của bạn đã được đặt thành công vào ngày</h6>
                <h6 className='text-start'>Tình trạng đơn hàng: <i className='text-primary'>Đang xác nhận</i></h6>
                <hr style={{color:'black',fontSize:'15px'}}></hr>
                <h4 className='text-start'>Thông tin đơn hàng:</h4>
                <div className='center'>
                    
                    <div className='row ms-5'>
                        <div className='col-6'>
                            <h6 className='text-start'>Tên khách hàng: <i>Đang xác nhận</i></h6>
                            <h6 className='text-start'>Địa chỉ: <i >Đang xác nhận</i></h6>

                        </div>
                        <div className='col-6'>
                            <h6 className='text-start'>Email: <i>Đang xác nhận</i></h6>
                            <h6 className='text-start'>Số điện thoại: <i>Đang xác nhận</i></h6>
                        </div>
                        <h6 className='text-start'>Mô tả: <i>Đang xác nhận</i></h6>
                    </div>
                    

                </div>
                <hr style={{ color: 'black', fontSize: '15px' }}></hr>
                <div className='container'>
                    <h5 className='text-start'>Danh sách sản phẩm:</h5>
                    
                </div>







            </div>
        );
    }
}

export default Bill;