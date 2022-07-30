import React, { Component } from 'react';
import { Link, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import AddProductAdmin from './AddProductAdmin';
import ContactAdmin from './ContactAdmin';
import EditProductAdmin from './EditProductAdmin';
import OrderBill from './OrderBill';
import Payment from './Payment';
import ProductAdmin from './ProductAdmin';
import Static from './Static';
import UploadFile from './UploadFile';
import UserAdmin from './UserAdmin';
function HeaderAdmin() {
    const navigate = useNavigate();
    window.scrollTo(0, 0)
    const hanldeClick = () => {
        sessionStorage.clear();
        navigate("/")
        window.location.reload();

    }
    return (

        <div className=' container row' style={{ maxWidth: "100%" }}>
            <div className='col-3' style={{ backgroundColor: '#DDDDDD' }}>
                <ul className="nav nav-pills mb-3 flex-column w-100" id="pills-tab" role="tablist">
                    <li class="nav-item mt-5">
                        <NavLink to="/admin/static" className="nav-link" >Thống kê</NavLink>
                    </li>
                    <li class="nav-item mt-2">
                        <NavLink to="/admin/user" className="nav-link" href="#">Quản lý tài khoản</NavLink>
                    </li>
                    <li class="nav-item mt-2">
                        <NavLink to="/admin/order" className="nav-link" href="#">Quản lý đơn hàng</NavLink>
                    </li>
                    <li class="nav-item mt-2">
                        <NavLink to="/admin/product" className="nav-link" href="#">Quản lý sản phẩm</NavLink>
                    </li>
                    <li class="nav-item mt-2">
                        <NavLink to="/admin/contact" className="nav-link" href="#">Quản lý phản hồi </NavLink>
                    </li>

                </ul>

                <button style={{ marginTop: '20em' }} className='btn btn-danger' type='button' onClick={hanldeClick}>
                    Đăng xuất
                </button>


            </div>
            <div className='col-9' style={{ marginTop: '2em' }}>
                <Routes>
                    <Route path='/admin/user' element={<UserAdmin />}></Route>
                    <Route path='/admin/productAdd' element={<AddProductAdmin />}></Route>
                    <Route path="/admin/contact" element={<ContactAdmin></ContactAdmin>}></Route>
                    <Route path="/admin/static" element={<Static></Static>}></Route>
                    <Route path="/admin/product" element={<ProductAdmin />}></Route>
                    <Route path="/admin/order" element={<Payment />}></Route>
                    <Route path="/admin/billOrder:id" element={<OrderBill/>}></Route>
                    <Route path="/admin/editProduct:id" element={<EditProductAdmin></EditProductAdmin>}></Route>
                    
                </Routes>
            </div>
        </div>

    );
}


export default HeaderAdmin;