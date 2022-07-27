import React, { Component ,useEffect} from 'react';
import { cartApi } from '../api/cartAPI';

function ItemCart (props) {
    
        let{id,quantity,products} = props.cart;
        
        const hanldeDeleteCart =()=>{
            cartApi.deleteCart(id).then(res => {
                props.onGetId(id);
                if (res) {

                }
                else {
                    alert("vui lòng thử lại!")
                }
            }).catch(e => { console.log(e) })
    }
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })
    
        return (
            <div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div>
                                    <img
                                        src={products.linkImage1}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: 65 }}
                                    />
                                </div>
                                <div className="ms-3">
                                    <h5>{products.name}</h5>
                                  
                                </div>

                                
                                
                                
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div style={{ width: 50,marginRight:'4em' }}>
                                    <h5 className="fw-normal mb-0">SL: {quantity}</h5>
                                </div>
                                <div>
                                    <h5 className="mb-0">{formatter.format(products.price)}</h5>
                                </div>
                                <button className='btn btn-danger'>
                                    <i className="fas fa-trash-alt" onClick={hanldeDeleteCart} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default ItemCart;