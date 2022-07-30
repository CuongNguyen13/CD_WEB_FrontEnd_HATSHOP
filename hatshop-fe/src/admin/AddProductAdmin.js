import React, { Component, useEffect, useState } from 'react';
import UploadFile from './UploadFile';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { productApi } from '../api/productApi';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';



function AddProductAdmin() {
    const [input, setInputs] = useState();
    const [img1, setImage1] = useState([]);
    const [img2, setImage2] = useState();
    const [img3, setImage3] = useState();
    const [decription, setDecription] = useState();
    const [checkName, setCheckName] = useState();
    const [validation, setValidateion] = useState(true);



    // progress
    const [percent, setPercent] = useState(0);

    const [img, setImg] = useState();




    const id = sessionStorage.getItem("id");


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
                console.log("input", input);
                console.log("data", res)
                setValidateion(res);
            }).catch(e => {
                console.log(e)
            });
    }, [input && input.name])

    const handleUpload = (file) => {
        
        console.log("filekkkkkkk:", file)
        const storageRef = ref(storage, `/files/${file.name}.png`);
        // progress can be paused and resumed. It also exposes progress update
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log("url",url)
                    return url;

                });
            }
        );
    };


    const handleSubmit = (event) => {
        if (validation) {
            // if (img1 != null || img2 != null || img3 != null) {

            //gọi api contact
            //send form to service
            const link1 = handleUpload(img1);
            console.log("link1", link1)
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
    function handleChangeImg(event) {
        const file = event.target.files[0]
        console.log("file event", file);
        setImage1(file);   
    }

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
            <h2>Thêm sản phẩm </h2>
            <hr style={{ color: 'red' }}></hr>
            <form className="row g-3">
                <div className="col-md-8">
                    <label htmlFor="inputEmail4" className="form-label">
                        Tên
                    </label>
                    <input type="text" required placeholder='Tên sản phẩm' className="form-control"
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
                    {/* <UploadFile onGetImg={handleGetImg1} /> */}
                    {/* <UploadFile onGetImg={handleGetImg2} /> */}
                    {/* <UploadFile onGetImg={handleGetImg3} /> */}
                    <input type="file" onChange={handleChangeImg} accept="/image/*" />


                </div>


                <hr style={{ color: 'red' }}></hr>
                <h3>Mô tả sản phẩm</h3>
                <div className='row'>
                    <div className='col-5'></div>
                    <div>
                        <CKEditor

                            editor={ClassicEditor}
                            data=""
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
                            <option selected value={"Nón bảo hiểm"}>Nón bảo hiểm</option>
                            <option value={"Nón thời trang"}>Nón thời trang</option>
                            <option value={"Nón tắm biển"}>Nón tắm biển</option>
                        </select>
                    </div>
                    <div className='col-3'>

                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Số lượng
                        </label>

                        <input type="number" min="1" className="form-control" required id="inputZip"
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


export default AddProductAdmin;