import React, { Component } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import { cartApi } from '../api/cartAPI';


function ProductItem (props){
        const navigate = useNavigate();
        let { img, name, price, id } = props;
        const user = sessionStorage.getItem("userName");
        const idUser = sessionStorage.getItem("id");
        const input = {
            'productId':id,
            'userId':idUser,
            'quantity':1,
            'id':0


        }


        const handlCart=()=>{
            if(user!=null){
                cartApi.createItemCart(input).then(res => {
                   if(res){
                    alert("Đã thêm vào giỏ hàng!")
                   }else{
                    alert("Sản phẩm đã tồn tại trong giỏ hàng!")
                   }

                }).catch(e => {
                    console.log(e)
                });
            }else{
                navigate("/login")
            }

        }
        return (
                <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                 
                    <div className="product-item">
                        <div className="position-relative bg-light overflow-hidden">
                        <Link className="d-block h5 mb-2" to={`/detailProduct${id}`}>
                            <img
                                className="img-fluid w-100"
                                src={img}
                                alt=""
                            />
                            </Link>
                            <div className="bg-danger rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                New
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <Link className="d-block h5 mb-2" to={`/detailProduct${id}`} style={{textDecoration:"none"}}>
                                {name}
                            </Link>
                            <span className="text-primary me-1">{price} vnđ</span>
                            
                        </div>
                        <div className="d-flex border-top">
                            <small className="w-50 text-center border-end py-2">
                            <Link className="d-block h5 mb-2" to={`/detailProduct${id}`}>
                                <button className="text-body btn" href="">
                                    <i className="fa fa-eye text-primary me-2" />
                                    Xem chi tiết
                                </button>
                            </Link>
                            </small>


                            <small className="w-50 text-center py-2">
                                <button className="btn text-body btn-sm" onClick={handlCart}>
                                    <i className="fa fa-shopping-bag text-primary me-2" />
                                    Thêm vào giỏ hàng
                                </button>
                            </small>
                        </div>
                    </div>
                </div>
                
        );
    }


export default ProductItem;