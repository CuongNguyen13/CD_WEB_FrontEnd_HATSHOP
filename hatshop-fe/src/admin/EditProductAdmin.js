import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../api/productApi';

function EditProductAdmin() {

    let params = useParams();
    const id = params.id;

    const [product, setProduct] = useState();
    const [input, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        console.log("input", input)
    }

    useEffect(() => {
        productApi.getDetail(id)
            .then(res => {
                console.log("data", res)
                setProduct(res)

            }).catch(e => {

                console.log(e)
            });
    }, []);


    return (
        <div style={{ maxWidth: '100%' }}>
            <h2>Chỉnh sửa sản phẩm </h2>
            <h2 className='text-danger'>{product && product.name} </h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-8">
                    <label htmlFor="inputEmail4" className="form-label">
                        Tên
                    </label>
                    <input type="text" defaultValue={product && product.name} className="form-control"
                        name="name"
                        value={input.name || product && product.name}
                        onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="text" className="form-label">
                        Giá bán
                    </label>
                    <input type="number" defaultValue={product && product.price} className="form-control"
                        name="price"
                        value={input.price || product && product.price}
                        onChange={handleChange}
                    />
                </div>
                <div />
                <hr style={{ color: 'red' }}></hr>
                <div className="row">
                    <div className='col-4'>
                        <label htmlFor="inputAddress" className="form-label">
                            Ảnh 1
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            name="linkImage1"
                            value={input.linkImage1 || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-4'>
                        <label htmlFor="inputAddress" className="form-label">
                            Ảnh 2
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            name="linkImage2"
                            value={input.linkImage2 || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-4'>
                        <label htmlFor="inputAddress" className="form-label">
                            Ảnh 3
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            name="linkImage3"
                            value={input.linkImage3 || ""}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div></div>
                <div className="row">
                    <div className='col-4'>
                        <img style={{ maxWidth: '15em' }} className='rounded float-start' src={product && product.linkImage1}></img>
                    </div>
                    <div className='col-4'>
                        <img style={{ maxWidth: '15em' }} className='rounded float-start' src={product && product.linkImage2}></img>

                    </div>
                    <div className='col-4'>
                        <img style={{ maxWidth: '15em' }} className='rounded float-start' src={product && product.linkImage3}></img>

                    </div>
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
                        Lưu
                    </button>
                </div>
            </form>


        </div>
    );
}

export default EditProductAdmin;