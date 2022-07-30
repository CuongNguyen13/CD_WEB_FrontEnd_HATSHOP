// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentFacebook from './CommentFaceBook';
import { productApi } from '../api/productApi';
import { Button, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { cartApi } from '../api/cartAPI';


function DetailProduct() {
    const navigate = useNavigate();
    let params = useParams();
    const id = params.id;
    window.scrollTo(0, 0);
    const user = sessionStorage.getItem("userName");
    const idUser = sessionStorage.getItem("id");
    const [product, setProduct] = useState();
    const [quantity,setQuantity] = useState()
    const input = {
        'productId': id,
        'userId': idUser,
        'quantity':quantity,
        'id': 0
    }
    const handlCart = () => {
        if (user != null) {
        
            if (quantity == null) {
                input.quantity = 1;
            }
            cartApi.createItemCart(input).then(res => {
                if (res) {
                    navigate("/cart")
                } else {
                    alert("Vui lòng thử lại!")
                }
            }).catch(e => {
                console.log(e)
            });
        } else {
            navigate("/login")
        }
    }


    useEffect(() => {
        // gọi api chỗ này
        productApi.getDetail(id)
            .then(res => {
                console.log(res)
                setProduct(res)
            }).catch(e => {
                console.log(e)
            });
    }, [id])


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
                                        <input className='col-3 mb-1' type='number' id="quantity" name="quantity" min="1" defaultValue={1} onChange={(event)=>setQuantity(event.target.value)}></input>

                                    </div>
                                    <div className='col-6'>
                                        <input name='id' value={id} style={{ display: 'none' }}></input>
                                    </div>
                                </form>
                            </div>

                            <button onClick={handlCart} className="btn btn-danger rounded-pill py-3 px-3 mt-3" style={{ margin: '1em' }} href="">
                                Thêm vào giỏ hàng
                            </button>


                            <button onClick={handlCart}
                                className="btn btn-primary rounded-pill py-3 px-5 mt-3" style={{ margin: '1em' }} href="">
                                Mua ngay
                            </button>



                        </div>
                        <div>

                        </div>
                        {/* <CommentFB dataURL={window.location.href}></CommentFB> */}
                        {/* <CommentFacebook dataHref={window.location.href}></CommentFacebook> */}
                        <CommentFacebook></CommentFacebook>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default (DetailProduct);


