import React, { Component } from 'react';
import { Link, Routes,Route, NavLink } from 'react-router-dom';
import ContactAdmin from './ContactAdmin';
import EditProductAdmin from './EditProductAdmin';
import ProductAdmin from './ProductAdmin';
import Static from './Static';

class HeaderAdmin extends Component {
    render() {
        return (

            <div className=' container row' style={{maxWidth:"100%"}}>
                <div className='col-3' style={{ backgroundColor: '#DDDDDD' }}>
                    <ul className="nav nav-pills mb-3 flex-column w-100" id="pills-tab" role="tablist">
                        <li class="nav-item ">
                            <NavLink to="/admin/static" className="nav-link" >Thống kê</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/admin/product" className="nav-link" href="#">Sản phẩm</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/admin/contact" className="nav-link" href="#">Phản hồi </NavLink>
                        </li>
                        
                    </ul>


                </div>
                <div className='col-9 '>
                   <Routes>
                        <Route path="/admin/contact" element={<ContactAdmin></ContactAdmin>}></Route>
                        <Route path="/admin/static" element={<Static></Static>}></Route>
                        <Route path="/admin/product" element={<ProductAdmin/>}></Route>
                        <Route path="/admin/editProduct:id" element={<EditProductAdmin></EditProductAdmin>}></Route>
                    </Routes>
                </div>
            </div>

        );
    }
}

export default HeaderAdmin;