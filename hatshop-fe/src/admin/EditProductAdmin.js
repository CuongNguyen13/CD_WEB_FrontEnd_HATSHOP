import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../api/productApi';
import UploadFile from './UploadFile';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditProductAdmin() {

    let params = useParams();
    const id = params.id;

    const [product, setProduct] = useState();

  


    useEffect(() => {
        productApi.getDetail(id)
            .then(res => {
                console.log("product", res)
                setProduct(res)

            }).catch(e => {

                console.log(e)
            });
    }, []);


    const [input, setInputs] = useState();
    const [img1, setImage1] = useState();
    const [img2, setImage2] = useState();
    const [img3, setImage3] = useState();
    const [decription, setDecription] = useState();
    const [checkName, setCheckName] = useState();

    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const modal = isDisplayModal ? 'Đã gửi!' : 'Vui lòng thử lại!';
    const user = sessionStorage.getItem("admin")


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value, linkImage1: img1, linkImage2: img2, linkImage3: img3, user: user.id, decription: decription }))

    }
    useEffect(() => {
        productApi.checkName(input && input.name)
            .then(res => {
                console.log("checkName", input.name)
                console.log("input", input);
                console.log("data", res)
                setValidateion(res);
            }).catch(e => {
                console.log(e)
            });
    }, [input])
    console.log(input);

    const handleSubmit = (event) => {
        if (validation) {
            // if (img1 != null || img2 != null || img3 != null) {

            //gọi api contact
            //send form to service
            productApi.addProduct(input).then(res => {
                // console.log("kết quả:", res)
                if (res) {
                    setIsDisplayModal(true)
                    setInputs("");

                }
                else {
                    setIsDisplayModal(false);
                }
                console.log(res)

            }).catch(e => {
                console.log(e)
            });
            //    }else{
            //     alert("Vui lòng chọn ảnh!!")
            //    }
        } else {
            alert("Vui lòng chọn tên khác!!")
        }
    }
    const [validation, setValidateion] = useState(true);

    const handleGetImg1 = (url) => {
        setImage1(url);
    }
    const handleGetImg2 = (url) => {
        setImage2(url);
    }
    const handleGetImg3 = (url) => {
        setImage3(url);

    }




    return (
        <div style={{ maxWidth: '100%' }}>
            <h2>Chỉnh sửa sản phẩm  </h2>
            <h2>{product && product.name}</h2>
            <hr style={{ color: 'red' }}></hr>
            <form className="row g-3">
                <div className="col-md-8">
                    <label htmlFor="inputEmail4" className="form-label">
                        Tên
                    </label>
                    <input type="text" defaultValue={product&&product.name} required placeholder='Tên sản phẩm' className="form-control"
                        name="name"
                        value={input && input.name}
                        onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}> {validation && validation ? "" : "Tên đã tồn tại"}</p>

                </div>
                <div className="col-md-4">
                    <label htmlFor="text" className="form-label">
                        Giá bán
                    </label>
                    <input type="number" required placeholder='Giá bán' className="form-control"
                        defaultValue={product && product.price}
                        name="price"
                        value={input && input.price}
                        onChange={handleChange}
                    />
                </div>
                <div />

                <hr style={{ color: 'red' }}></hr>
                <div style={{ marginTop: '2em' }}></div>
                <h1>Chọn ít nhất 1 ảnh</h1>
                <div className="row">
                    <UploadFile onGetImg={handleGetImg1} />
                    <UploadFile onGetImg={handleGetImg2} />
                    <UploadFile onGetImg={handleGetImg3} />

                </div>


                <hr style={{ color: 'red' }}></hr>
                <h3>Mô tả sản phẩm</h3>
                <div className='row'>
                    <div className='col-5'></div>
                    <div>
                        <CKEditor

                            editor={ClassicEditor}
                            data={product&&product.decription}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.

                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });

                                setDecription(data);

                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />

                    </div>
                </div>
                <hr style={{ color: 'red' }}></hr>

                <div className='row'>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">
                            Loại sản phẩm
                        </label>
                        <select id="inputState" className="form-select" name='kind' defaultValue={1} value={input && input.kind || ""}
                            onChange={handleChange}>
                            <option selected value={"1"}>Mũ lưỡi trai</option>
                            <option value={"2"}>Mũ backet</option>
                            <option value={"3"}>Mũ beret</option>
                        </select>
                    </div>
                    <div className='col-3'>

                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Số lượng
                        </label>

                        <input type="number" min="1" defaultValue={1} className="form-control" required id="inputZip"
                            name='quantity'
                            value={input && input.quantity}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <hr style={{ color: 'red' }}></hr>



                <div className="col-12">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        Lưu
                    </button>
                </div>
            </form>

            {
                isDisplayModal && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setIsDisplayModal(false)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <h3>  {

                                        modal
                                    }
                                    </h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setIsDisplayModal(false) }}>Đóng</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default EditProductAdmin;