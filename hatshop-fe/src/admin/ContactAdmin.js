import React, { Component, useEffect, useState } from 'react';
import { contactAdminApi } from '../api/contactAdminApi';
import ContactTr from './ComponentAdmin/ContactTr';
import ReactPaginate from 'react-paginate';
function ContactAdmin() {

    const [pageData, setPageData] = useState({
        totalPages: 0,
        totalItems: 0,
        currentPage: 1,
        list: []
    })

    const [contact, setContact] = useState();
    // useEffect(() => {
    //     contactAdminApi.getListContact()
    //         .then(res => {
    //             console.log("data", res)
    //             setContact(res);

    //         }).catch(e => {
    //             console.log(e)
    //         });
    // }, [])

    useEffect(() => {
        contactAdminApi.getListPage(8, pageData.currentPage)
            .then(res => {
                console.log("data", res)
                setPageData(res);

            }).catch(e => {

                console.log(e)
            });
    }, [pageData.currentPage])
    // console.log("contact", contact);

    const handleGetId = (id) => {
        console.log(id)
        // chỗ này xóa thằng nào có id = id đã truyền vào
        // sử dụng hàm filter cho lẹ, xóa thằng đó có nghĩa là lọc
        // ra những thằng có id khác với id của thằng đó là được


        setContact(contact.filter(item => item.id !== id))
    }
   
    const handlePageClick = (value) => {
        const currentPage = value.selected+1;
        setPageData({...pageData,currentPage})
    }


    return (


        <div className="white-box w-100">
            <h3 className="box-title">Phản hồi</h3>

            <div className="table-responsive w-100">
                <table className="table text-nowrap">
                    <thead>
                        <tr>
                            <th className="border-top-0">ID</th>
                            <th className="border-top-0">Email</th>
                            <th className="border-top-0">Ngày gửi</th>
                            <th className="border-top-0">Tiêu đề</th>
                            <th className="border-top-0">Nội dung</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.list && pageData.list.map((item, index) => {
                            return (

                                <ContactTr onGetId={handleGetId} contact={item} key={index} />
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

export default ContactAdmin;