import React from 'react';
import { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import { productApi } from '../api/productApi';
import ProductTr from './ComponentAdmin/ProductTr';

function ProductAdmin (){
    
    const [pageData, setPageData] = useState({
        totalPages: 0,
        totalItems: 0,
        currentPage: 1,
        list: []
    })

    const handleGetId = (id) => {
        console.log("id", id)
        // chỗ này xóa thằng nào có id = id đã truyền vào
        // sử dụng hàm filter cho lẹ, xóa thằng đó có nghĩa là lọc
        // ra những thằng có id khác với id của thằng đó là được


        setPageData({ ...pageData, list: pageData.list.filter(item => item.id !== id) })
    }


    //phân trang
    const handlePageClick = (value) => {
        const currentPage = value.selected + 1;
        setPageData({ ...pageData, currentPage })
    }

    //gọi api 
    useEffect(() => {
        productApi.getListProductAdmin(5, pageData.currentPage)
            .then(res => {
                console.log("data", res)
                setPageData(res);

            }).catch(e => {

                console.log(e)
            });
    }, [pageData.currentPage])
        return (
            <div className="white-box w-100">
                <h3 className="box-title">Sản phẩm</h3>

                <div className="table-responsive w-100">
                    <table className="table text-nowrap">
                        <thead>
                            <tr>
                                <th className="border-top-0">ID</th>
                                <th className="border-top-0">Tên</th>
                                <th className="border-top-0"></th>
                                <th className="border-top-0">Ngày thêm</th>
                                <th className="border-top-0">Loại</th>
                                <th className="border-top-0">Giá bán</th>
                                <th className="border-top-0">Số lượng</th>
                                
                                <NavLink to='/admin/productAdd'  >
                                    <button type="button" class="btn btn-success">Thêm sản phẩm</button>
                                </NavLink>
                            </tr>
                        </thead>
                        <tbody>
                            {pageData.list && pageData.list.map((item, index) => {
                                return (
                                    <ProductTr onGetId={handleGetId}  key={index} product = {item}
                                
                                    ></ProductTr>
                                  
                                )

                            })
                            }

                        </tbody>

                    </table>

                </div>
                <ReactPaginate
                    className='pagination navigation'
                    breakLabel="..."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageData.totalPages}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    previousLinkClassName='page-link'
                    activeClassName='active'
                />

            </div>
        );
    }


export default ProductAdmin;