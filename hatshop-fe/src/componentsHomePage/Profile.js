// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { profileApi } from '../api/profileApi';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';
import "../css/profile.css";
import { Link, useNavigate } from 'react-router-dom';
function Profile() {

  var id = sessionStorage.getItem("id");
  console.log("id", id);
    window.scrollTo(0, 0);

    const [profile, setProfile] = useState();
    const [isDisplayModal, setIsDisplayModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {     
        // gọi api chỗ này
        profileApi.getProfile(id)
            .then(res => {
                console.log(res)
                setProfile(res) 
            }).catch(e => {
                console.log(e)
            });
    }, [])
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setProfile(values => ({ ...values, [name]: value }))
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();

    //gọi api login
    //send form to service
    console.log(profile, "profile")
    profileApi.createProfile(profile).then(res => {
        console.log(res)
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
                <img style={{width:"200px",height:"200px",display:"block",margin:"0 auto"}}  id="imageProfileupload" className="img-account-profile rounded-circle mb-2 imageProfileupload" alt="" onChange={handleChange}  src={img}/>
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
                <form style={{height:"407px"}} onSubmit={handleSubmit}>
                <img style={{width:"200px",height:"200px",display:"block",margin:"0 auto",display:"none"}}  id="imageProfileupload" className="img-account-profile rounded-circle mb-2 imageProfileupload" alt="" onChange={handleChange}  src={img}/>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <input className="form-control" id="email" name='email' disabled type="text" placeholder="Email" value={profile && profile.email} onChange={handleChange}/>
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputFirstName" name='fistName' type="text" placeholder="First Name"value={profile && profile.fistName} onChange={handleChange}/>
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputLastName" name='lastName' type="text" placeholder="Last Name"value={profile && profile.lastName} onChange={handleChange}/>
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputOrgName" name='province' type="text" placeholder="Enter your province"value={profile && profile.province} onChange={handleChange}/>
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputLocation" type="text" name='address' placeholder="Enter your location"value={profile && profile.address} onChange={handleChange}/>
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <input className="form-control" id="inputEmailAddress" type="number" name='age' placeholder="Enter your age"value={profile && profile.age} onChange={handleChange}/>
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputPhone" name='workplace' type="tel" placeholder="Enter your workplace" value={profile && profile.workplace} onChange={handleChange}/>
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday"value={profile &&new Date( profile.dateOfBirth).toLocaleDateString()} onChange={handleChange}/>
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


