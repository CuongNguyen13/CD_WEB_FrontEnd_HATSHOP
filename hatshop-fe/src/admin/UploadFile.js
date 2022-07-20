import React from 'react';
import { useState } from "react";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseConfig';
function UploadFile({ onGetImg }) {
    // State to store uploaded file
    const [file, setFile] = useState("");
    

    // progress
    const [percent, setPercent] = useState(0);

    const [img, setImg] = useState();

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
        handleUpload();
    }

    const handleUpload = () => {
        
            const blobFile = URL.createObjectURL(file)
            console.log("file:",blobFile)

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
                        onGetImg(url)

                    });
                }
            );
        
    };

    return (

        <div className='col-4'>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <p>{percent} "%"</p>
            <img style={{ maxWidth: '15em', maxHeight: '15em' }} className='rounded float-start' src={img}></img>
        </div>

    );
}

export default UploadFile;