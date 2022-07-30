import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentTr(props) {
    const navigate = useNavigate();
    const { userId, name, phone, address, description, total, email, date, status } = props.order;
    const [key, setKey] = useState([]);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })

  const  setStatus=()=> {
        if (status == 1) {
           return "Đã xác nhận"
        } else if (status == 0) {
           return "Đang chờ"
        } else {
            return "Đã hủy"
        }
   }
   
   
   
   
   
   
   



    return (
        <tr>
            <td>{userId}</td>
            <td>{name}</td>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td>{phone}</td>
            <td>{address}</td>
            <td>{
                setStatus()
            }</td>
            <td>{description}</td>
            <td style={{ color: 'red' }}>{formatter.format(total)}</td>
            <td><button className='btn btn-primary' onClick={()=>{navigate(`/admin/billOrder${userId}`)}}>
              Chi tiết
            </button></td>

        </tr>
    );
}

export default PaymentTr;