// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentFacebook from './CommentFaceBook';
import { productApi } from '../api/productApi';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function DetailProduct() {

    let params = useParams();
    const id = params.id;
    window.scrollTo(0, 0);

    const [product, setProduct] = useState();

    useEffect(() => {
        // gọi api chỗ này
        productApi.getDetail(id)
            .then(res => {
                console.log(res)
                setProduct(res)
            }).catch(e => {
                console.log(e)
            });
    }, [])


    var checkUserName = sessionStorage.getItem("userName");
    console.log("userName", checkUserName)

    return (
        <div>
            <div className="container-xxl py-5" style={{ marginTop: "3em" }}>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden p-5 pe-0">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={product && product.linkImage1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={product && product.linkImage2}
                                            alt="Second slide"
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={product && product.linkImage3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-5 mb-4">{product && product.name}</h1>
                            <div style={{ textAlign: 'left' }}>
                                <h3>Giá: <span style={{ color: 'red' }}>{product && product.price}</span><span style={{ fontSize: '20px' }}> VNĐ</span></h3>
                                <h4>Mô tả: </h4>
                                <p className="mb-4">
                                    {product && product.description}
                                </p>
                                <form name='add_cart'>
                                    <div className='col-6'>
                                        <label><b>Số lượng: </b></label>
                                        <input className='col-2 mb-1' type='number' id="quantity" name="quantity" min="1" defaultValue={1}></input>

                                    </div>
                                    <div className='col-6'>
                                        <input name='id' value={id} style={{ display: 'none' }}></input>
                                    </div>
                                </form>
                            </div>

                            <Link to={checkUserName !== null ? "/cart" : "/login"} className="btn btn-danger rounded-pill py-3 px-3 mt-3" style={{ margin: '1em' }} href="">
                                Thêm vào giỏ hàng
                            </Link>


                            <Link to={checkUserName !== null ? "/cart" : "/login"}
                                className="btn btn-primary rounded-pill py-3 px-5 mt-3" style={{ margin: '1em' }} href="">
                                Mua ngay
                            </Link>



                        </div>
                        <div>

                        </div>
                        {/* <CommentFB dataURL={window.location.href}></CommentFB> */}
                        {/* <CommentFacebook dataHref={window.location.href}></CommentFacebook> */}
                        {/* <CommentFacebook></CommentFacebook> */}
                    </div>
                </div>
            </div>



        </div>
    );
}

export default (DetailProduct);


