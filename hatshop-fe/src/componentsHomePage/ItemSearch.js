import React, { Component } from 'react';
import { Link,useNavigate  } from 'react-router-dom';
function ItemSearch (props){
    let {name, id} = props.product
        return (
           
                <Link className="d-block h5 mb-2" to={`/detailProduct${id}`} style={{textDecoration:"none"}}>
                {name}
            </Link>
        );
    }


export default ItemSearch;