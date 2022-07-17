import React, { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../api/productApi';

function EditProductAdmin () {

    let params = useParams();
    const id = params.id;

    

    useEffect(() => {
        productApi.getDetail(id)
            .then(res => {
                console.log("data", res)
              

            }).catch(e => {

                console.log(e)
            });
    }, [])

        return (
            <div style={{maxWidth:'100%'}}>
                <h2>Chỉnh sửa sản phẩm </h2>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Tên
                        </label>
                        <input type="text" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">
                            Address 2
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            City
                        </label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">
                            State
                        </label>
                        <select id="inputState" className="form-select">
                            <option selected="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Zip
                        </label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                </form>


            </div>
        );
    }

export default EditProductAdmin;