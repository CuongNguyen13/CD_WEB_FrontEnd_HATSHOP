import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes, NavLink
} from "react-router-dom";

function ItemSearch (props){
    let {name, id} = props.product
        return (
                <NavLink className="d-block h5 mb-2" to={`/detailProduct${id}`} style={{textDecoration:"none"}}>
                {name}
                </NavLink>
        );
    }


export default ItemSearch;