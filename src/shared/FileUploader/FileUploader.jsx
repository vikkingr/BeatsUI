import React, { useState } from "react";
import "./FileUploader.scss"

const FileUploader = () => {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const setFilesHandler = (event) => {
        setFiles([...event.target.files]);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const url = 'http:localhost:3000/upload';
        const formData = new FormData();

        files.forEach((file, index) => {
            formData.append($`file{index}`, file);
        });

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        //rest of api call here
    };

    return (
        <div className='file-uploader'>
            <input
                multiple
                onChange={setFilesHandler}
                type='file'
            />
            <input 
                value="Upload"
                type="button" 
                onClick={onSubmitHandler} 
            />
        </div>
    )
};

export default FileUploader;
