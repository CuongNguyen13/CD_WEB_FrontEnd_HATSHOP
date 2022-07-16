import React, { Component } from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import ContactAdmin from './ContactAdmin';
import Static from './Static';

class HeaderAdmin extends Component {
    render() {
        return (

            <div className=' container row'>
                <div className='col-3' style={{ backgroundColor: '#DDDDDD' }}>
                    <ul className="nav nav-pills mb-3 flex-column w-100" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <Link to="/admin/static" class="nav-link active" >Thống kê</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin/contact" class="nav-link" href="#">Phản hồi </Link>
                        </li>
                  
                    </ul>


                </div>
                <div className='col-9'>
                   <Routes>
                        <Route path="/admin/contact" element={<ContactAdmin></ContactAdmin>}></Route>
                   </Routes>
                    <Routes>
                        <Route path="/admin/static" element={<Static></Static>}></Route>
                    </Routes>
                </div>
            </div>

        );
    }
}

export default HeaderAdmin;