// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profileApi } from '../api/profileApi';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';
import "../css/profile.css";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
function Profile() {

  var id = sessionStorage.getItem("id");
  // console.log("id", id);
    window.scrollTo(0, 0);

    const [profile, setProfile] = useState({});
      
    
    useEffect(() => {
      // gọi api chỗ này
      profileApi.getProfile(id)
          .then(res => {
              // console.log(res)
              setProfile(res) 
              formik.setValues(res)
          }).catch(e => {
              console.log(e)
          });
  }, [])

  console.log("Profile", profile.fistName);
  const formik = useFormik({
    initialValues:{
      avatarlink : "",
      fistName : "",
      lastName : "",
      email : "",
      province : "",
      address : "",
      age : 0,
      workplace : "",
      birthday : "",
    },
    validationSchema: Yup.object({
      fistName: Yup.string().required("Tên không được trống!").min(2, "Tên tối thiểu 2 ký tự!").matches(/^[a-zA-Z\s]*$/, "Tên không được là số"),
      lastName: Yup.string().required("Họ và tên đệm không được trống!").min(2, "Họ và tên đệm tối thiểu 2 ký tự!").matches(/^[a-zA-Z\s]*$/, "Họ không được là số"),
      email : Yup.string().required("Email không được trống!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Chưa phù hợp định dạng email!"),
      age: Yup.string().required("Tuổi khẩu không được trống!").matches(/^[0-9]*$/, "Tuổi không thể là chữ!"),
      province: Yup.string().required("Quê quán không được trống!").min(3, "Nguyên quán tối thiểu 3 ký tự!"),
      address: Yup.string().required("Địa chỉ không được trống!").min(3, "Địa chỉ tối thiểu 3 ký tự!"),
    }),
    onSubmit: (values) => {
      // handleSubmit(values);
      console.log("initialValues ", values)
      handleSubmit(values)
      }
  })

  
  const handleSubmit = (values) => {

    //gọi api login
    //send form to service
    console.log(values, "profile")
    profileApi.createProfile(values).then(res => {
       alert("Luu thành công!")
    }).catch(e => {
        console.log(e)
    });

}



  // State to store uploaded file
  const [file, setFile] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  const [img, setImg] = useState();

  // Handle file upload event and update state
  function handleChangeImage(event) {
      setFile(event.target.files[0]);
      handleUpload();
  }
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();

    navigate("/login");
  }


  const handleUpload = () => {
      if (!file) {
          alert("Vui lòng đợi");
      } else {

          const storageRef = ref(storage, `/files/${file.name}`);

          // progress can be paused and resumed. It also exposes progress updates.
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

                      setImg(url);
                

                  });
              }
          );
      }
  };


    
    return (
    <div className="container-xl px-4 mt-4">
        <div className="row" style={{margin:"150px auto"}}>
          <div className="col-xl-4" >
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img style={{width:"200px",height:"200px",display:"block",margin:"0 auto"}}  id="imageProfileupload" className="img-account-profile rounded-circle mb-2 imageProfileupload" alt="" onChange={formik.handleChange}  src={img}/>
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                {/* Profile picture upload button*/}
                <input type="file" onChange={handleChangeImage} accept="/image/*" />

                <p>{percent} "%"</p>

              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form style={{height:"407px"}}  onSubmit={formik.handleSubmit}>
                <img style={{width:"200px",height:"200px",display:"block",margin:"0 auto",display:"none"}} name="avatarlink"  id="imageProfileupload" className="img-account-profile rounded-circle mb-2 imageProfileupload" alt="" value={formik.values.avatarlink || "" || profile.avatarlink} onChange={formik.handleChange}  src={img}/>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <input className="form-control" id="email" name='email' disabled type="text" placeholder="Email" value={formik.values.email} onChange={formik.handleChange}/>
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputFirstName" name='fistName' type="text" placeholder="First Name" value={formik.values.fistName} onChange={formik.handleChange}/>
                      <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.fistName}</span>
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputLastName" name='lastName' type="text" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange}/>
                      <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.lastName}</span>
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputOrgName" name='province' type="text" placeholder="Enter your province" value={formik.values.province} onChange={formik.handleChange}/>
                      <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.province}</span>
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputLocation" type="text" name='address' placeholder="Enter your location" value={formik.values.address} onChange={formik.handleChange}/>
                      <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.address}</span>
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <input className="form-control" id="inputEmailAddress" type="number" name='age' placeholder="Enter your age" value={formik.values.age} onChange={formik.handleChange}/>
                    <span style={{textAlign:"left", color:"red", margin:"0",fontSize:"15px",float:"left"}}>{formik.errors.age}</span>
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputPhone" name='workplace' type="tel" placeholder="Enter your workplace"  value={formik.values.workplace} onChange={formik.handleChange}/>
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputBirthday" type="date" name="dateOfBirth" placeholder="Enter your birthday" value={ new Date(formik.values.dateOfBirth).toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })} onChange={formik.handleChange}/>
                      {/* value={profile &&new Date( profile.dateOfBirth).toLocaleDateString()} onChange={handleChange} */}
                    </div>
                  </div>
                  {/* Save changes button*/}
                  <button className="btn btn-primary" type="submit">Lưu Thông tin</button>
                  <img onClick={logout} id="iconLogout" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHENHP4By-MoVVo82gY6TMPaN4Q1TAW8lNg&usqp=CAU" style={{width:"40px",height:"40px",cursor:"pointer"}}/>
                  <div className='hoverLogout' style={{display:"none"}}> Đăng xuất </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;


