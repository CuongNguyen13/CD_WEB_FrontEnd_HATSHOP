import React, { Component,useState,useEffect } from 'react';
import { contactAdminApi } from '../api/contactAdminApi';
import ContactTr from './ComponentAdmin/ContactTr';
import ReactPaginate from 'react-paginate';
import { userApi } from '../api/userApi';
import UserTr from './ComponentAdmin/UserTr';



function UserAdmin() {
    const [pageData, setPageData] = useState({
        totalPages: 0,
        totalItems: 0,
        currentPage: 1,
        list: []
    });


    useEffect(() => {
        userApi.getListUserAdmin(5, pageData.currentPage)
            .then(res => {
                console.log("data", res)
                setPageData(res);

            }).catch(e => {

                console.log(e)
            });
    }, [pageData.currentPage])


    const handleGetId = (id) => {
        console.log("id", id)
        // chỗ này xóa thằng nào có id = id đã truyền vào
        // sử dụng hàm filter cho lẹ, xóa thằng đó có nghĩa là lọc
        // ra những thằng có id khác với id của thằng đó là được


        setPageData({ ...pageData, list: pageData.list.filter(item => item.id !== id) })
    }

    const handlePageClick = (value) => {
        const currentPage = value.selected + 1;
        setPageData({ ...pageData, currentPage })
    }


    return (
        <div className="white-box w-100">
            <h3 className="box-title">Phản hồi</h3>

            <div className="table-responsive w-100">
                <table className="table text-nowrap align-middle table-hover">
                    <thead>
                        <tr>
                            <th className="border-top-0">ID</th>
                            <th className="border-top-0">Email</th>
                            <th className="border-top-0">Họ</th>
                            <th className="border-top-0">Tên</th>
                            <th className="border-top-0">Địa chỉ</th>
                            <th className="border-top-0">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.list && pageData.list.map((item, index) => {
                            return (
                                
                                <UserTr onGetId={handleGetId} user={item} key={index} />
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

export default UserAdmin;