import React, { Component } from 'react';
import { Link  } from 'react-router-dom';


class ProductItem extends Component {
    render() {

       
        let { img, name, price, id } = this.props;
        return (
            
            
                <div
                    className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <div className="product-item">
                        <div className="position-relative bg-light overflow-hidden">
                            <img
                                className="img-fluid w-100"
                                src={img}
                                alt=""
                            />
                            <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                New
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <Link className="d-block h5 mb-2" to={`/detailProduct${id}`}>
                                {name}
                            </Link>
                            <span className="text-primary me-1">{price}</span>
                            
                        </div>
                        <div className="d-flex border-top">
                            <small className="w-50 text-center border-end py-2">
                                <button className="text-body btn" href="">
                                    <i className="fa fa-eye text-primary me-2" />
                                    Xem chi tiết
                                </button>
                            </small>


                            <small className="w-50 text-center py-2">
                                <button className="btn text-body btn-sm" href="">
                                    <i className="fa fa-shopping-bag text-primary me-2" />
                                    Thêm vào giỏ hàng
                                </button>
                            </small>
                        </div>
                    </div>
                </div>
                
        );
    }
}

const rootReducer = (state = this.props.id, action) => {
    return state;
}
export default ProductItem;