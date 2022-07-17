import React, { Component } from 'react';

function ProductTr (props){
    const { id, name, linkImage1,date,kind , price,quantity } = props.product;
   
    // let params = {
    //     id,
    //     status: 0
    // }
    
    const handlDelete = () => {
    //     // console.log("params", params)
    //     contactAdminApi.updateStatus(params).then(res => {
    //         // check success
    //         if (res) {

    //             //  ở đây gọi hàm cho thằng cha cập nhật lại list
    //             // nó truyền qua props
    //             props.onGetId(id);
    //             //  đó là vậy
    //             // setModal(false)
    //         }
    //         else {

    //         }
    //     }).catch(e => { console.log(e) })

        // call api

    }
    
    
    
    
    
    
    return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td><img style={{maxWidth:'7em'}} className='rounded float-start' src={linkImage1}></img></td>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>{kind}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td> <button className='btn btn-success' >
                    Chỉnh sửa
                </button>
                </td>
                <td><button onClick={handlDelete} type='button' className='btn btn-danger'>
                    Xóa
                </button>
                </td>
            </tr>
        );
    }


export default ProductTr;