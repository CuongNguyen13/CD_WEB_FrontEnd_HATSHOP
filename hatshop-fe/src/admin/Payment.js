import React, { Component } from 'react';
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import { prepaymentApi } from '../api/prepaymentApi';
import PaymentTr from './ComponentAdmin/PaymentTr';
function Payment() {
    

    const [pageData, setPageData] = useState({
        totalPages: 0,
        totalItems: 0,
        currentPage: 1,
        list: []
    })

    const handleGetId = (id) => {
        setPageData({ ...pageData, list: pageData.list.filter(item => item.id !== id) })
    }


    //phân trang
    const handlePageClick = (value) => {
        const currentPage = value.selected + 1;
        setPageData({ ...pageData, currentPage })
    }

    //gọi api 
    useEffect(() => {
        prepaymentApi.orderAdmin(5, pageData.currentPage)
            .then(res => {
                console.log("data", res)
                setPageData(res);

            }).catch(e => {

                console.log(e)
            });
    }, [pageData.currentPage])
    return (
        <div className="white-box w-100">
            <h3 className="box-title">Đơn hàng</h3>

            <div className="table-responsive w-100">
                <table className="table text-nowrap table-hover">
                    <thead>
                        <tr>
                            <th className="border-top-0">Mã ĐH</th>
                            <th className="border-top-0">Người mua</th>
                            <th className="border-top-0">Ngày mua</th>
                            <th className="border-top-0">Số điện thoại</th>
                            <th className="border-top-0">Địa chỉ</th>
                            <th className="border-top-0">Email</th>
                            <th className="border-top-0">Mô tả</th>
                            <th className="border-top-0">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.list && pageData.list.map((item, index) => {
                            return (      
                                <PaymentTr key={index} order={item}
                                ></PaymentTr>

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


export default Payment;