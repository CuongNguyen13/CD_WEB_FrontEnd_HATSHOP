import React, { Component, useState, useEffect } from 'react';
import { productApi } from '../api/productApi';
import ProductItem from './ProductItem'
import ReactPaginate from 'react-paginate';
function Product() {


    window.scroll(0, 0);

    const [kind, setKind] = useState("Nón bảo hiểm")

    const [pageData, setPageData] = useState({
        totalPages: 0,
        totalItems: 0,
        currentPage: 1,
        list: []
    })

    //phân trang
    const handlePageClick = (value) => {
        const currentPage = value.selected + 1;
        setPageData({ ...pageData, currentPage })
    }

    //gọi api 
    useEffect(() => {
        productApi.listProductKind(8, pageData.currentPage, kind)
            .then(res => {
                setPageData(res);

            }).catch(e => {

                console.log(e)
            });
    }, [kind, pageData.currentPage])

    const kindFashion = () => {

        const currentPage = 1;
        console.log(kind)
        setKind("Nón thời trang")
        setPageData({ ...pageData, currentPage })

    }

    const kindHelmet = () => {

        const currentPage = 1;
        console.log(kind)
        setKind("Nón bảo hiểm")
        setPageData({ ...pageData, currentPage })

    }

    const kindWimcap = () => {

        const currentPage = 1;
        console.log(kind)
        setKind("Mũ panama")
        setPageData({ ...pageData, currentPage })

    }



    return (
        <div>

            {/* Product Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-0 gx-5 align-items-end">
                        <div className="col-lg-6">

                        </div>

                        <div
                            style={{ marginTop: "5em" }}
                            className="col-lg-6 text-start text-lg-end wow slideInRight"
                            data-wow-delay="0.1s"
                        >
                            <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li className="nav-item me-2">
                                    <button onClick={kindHelmet}
                                        className="btn btn-outline-primary border-2 active"
                                        data-bs-toggle="pill"
                                    >
                                        Nón bảo hiểm
                                    </button>
                                </li>
                                <li className="nav-item me-2">
                                    <button onClick={kindFashion}
                                        className="btn btn-outline-primary border-2"
                                        data-bs-toggle="pill"
                                    >
                                        Nón thời trang
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button onClick={kindWimcap}
                                        className="btn btn-outline-primary border-2"
                                        data-bs-toggle="pill"
                                    >
                                        Nón panama
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {
                                    pageData.list && pageData.list.map((item, index) => {
                                        return (
                                            <ProductItem img={item.linkImage1} name={item.name} price={item.price} id={item.id} key={index}></ProductItem>
                                        )

                                    })
                                }
                                <div></div>
                                <div className='row'>
                                    <div className='col-3'></div>
                                    <div className='col-3'></div>
                                    <div className='col-3'></div>
                                    <div className='col-3'>
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
                                </div>















                                <div
                                    className="col-12 text-center wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product End */}
















        </div>
    );
}

export default Product;