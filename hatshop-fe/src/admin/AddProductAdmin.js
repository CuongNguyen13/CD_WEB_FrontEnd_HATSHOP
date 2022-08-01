import React, { Component, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';



function AddProductAdmin() {
    const [input, setInputs] = useState();
    const [img1, setImage1] = useState();
    const [img2, setImage2] = useState();
    const [img3, setImage3] = useState();
    // const [decription, setDecription] = useState('');
    const [checkName, setCheckName] = useState();
    const [validation, setValidateion] = useState(true);



    // progress
    const [percent, setPercent] = useState(0);

    const [img, setImg] = useState();




    const id = sessionStorage.getItem("id");


    const [isDisplayModal, setIsDisplayModal] = useState(false);

    const modal = isDisplayModal ? 'Đã tạo!' : 'Vui lòng thử lại!';


    const [isDisplayModal1, setIsDisplayModal1] = useState(false);
    const modal1 = isDisplayModal1 ? 'Tạo sản phẩm mới!' : '';

    const user = sessionStorage.getItem("admin")


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: (name === 'price' || name === "quantity") ? Number(value) : value, linkImage1: img1, linkImage2: img2, linkImage3: img3 }))

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

    const handleUpload = (file, callback) => {

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
                    callback(url);
                });
            }
        );
    };

    const [url1, setUrl1] = useState();
    const [url2, setUrl2] = useState();
    const [url3, setUrl3] = useState();

    const [anh1, setAnh1] = useState([]);
    const [anh2, setAnh2] = useState([]);
    const [anh3, setAnh3] = useState([]);



    const handleSubmit = (event) => {
        if (validation) {
            if (img1 && img2 && img3) {

                //gọi api contact
                //send form to service
                handleUpload(img1, (url) => {
                    setUrl1(url)
                });
                handleUpload(img2, (url) => {
                    setUrl2(url)
                });
                handleUpload(img3, (url) => {
                    setUrl3(url)
                });

                
                // setInputs(values => ({ ...values,  linkImage1: img1, linkImage2: img2, linkImage3: img3, user: user.id, decription: decription }))

                setIsDisplayModal1(true)
                if (url1 && url2 && url3) {
                    const newInput = { ...input, linkImage1: url1, linkImage2: url2, linkImage3: url3 }
                    productApi.addProduct(newInput).then(res => {
                        console.log("kết quả:", res)
                        setIsDisplayModal1(false)
                        if (res) {
                            setIsDisplayModal(true)
                            setInputs("");
                            setImage1("")
                            setImage2("")
                            setImage3("")
                        }
                        else {
                            setIsDisplayModal(false);
                        }
                        console.log(res)

                    }).catch(e => {
                        console.log(e)
                    });
                }
            } else {
                alert("Vui lòng chọn ảnh!!")
            }
        } else {
            alert("Vui lòng chọn tên khác!!")
        }
    }

    function handleChangeImg(event) {
        const file = event.target.files[0]
        setImage1(file);
        setAnh1(URL.createObjectURL(file))

    }
    function handleChangeImg2(event) {
        const file = event.target.files[0]
        setImage2(file);
        setAnh2(URL.createObjectURL(file))
    }
    function handleChangeImg3(event) {
        const file = event.target.files[0]
        setImage3(file);
        setAnh3(URL.createObjectURL(file))
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
                <h1>Chọn ảnh</h1>
                <div className="row">
                    {/* <UploadFile onGetImg={handleGetImg1} /> */}
                    {/* <UploadFile onGetImg={handleGetImg2} /> */}
                    {/* <UploadFile onGetImg={handleGetImg3} /> */}
                    <div className='col-4'>
                        {/* <div class="card" style="width: 18rem;"> */}

                        <input type="file" onChange={handleChangeImg} accept="/image/*" />
                        {/* <img src={anh1}></img> */}
                
                        <img class="card-img-top" src={anh1} alt="Card image cap"></img>
                        {/* </div> */}
                    </div>
                    <div className='col-4'>
                        <input type="file" onChange={handleChangeImg2} accept="/image/*" />
                        {/* <img src={anh2}></img> */}
                        <img class="card-img-top" src={anh2} alt="Card image cap"></img>
                    </div>
                    <div className='col-4'>
                        <input type="file" onChange={handleChangeImg3} accept="/image/*" />
                        {/* <img src={anh3}></img> */}
                        <img class="card-img-top" src={anh3} alt="Card image cap"></img>
                    </div>

                </div>


                <hr style={{ color: 'red' }}></hr>
                <h3>Mô tả sản phẩm</h3>
                <div className='row'>
                    <div className='col-1'></div>

                    <textarea className='col-11' rows={5} name='description' value={input && input.description || ""} onChange={handleChange} >

                    </textarea>

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

            {
                isDisplayModal1 && (
                    <div className="modal show" id="exampleModal" style={{ display: 'block' }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-modal="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Thông báo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setIsDisplayModal1(false)} aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <h3>  {

                                        modal1
                                    }
                                    </h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={ handleSubmit }>Tạo</button>

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