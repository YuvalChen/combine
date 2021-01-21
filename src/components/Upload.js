import React, { useRef } from "react";
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'combine-bucket',
    region: 'us-east-2'
}

function Upload() {
    const fileInput = useRef();

    const handleClick = event => {
        
        event.preventDefault();
        let file = fileInput.current.files[0];
        ReactS3.uploadFile(file, config).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <form onSubmit={handleClick}>
            <label>
                Upload file:
                <input type='file' ref={fileInput} />
            </label>
            <br />
            <button type='submit'>Upload</button>
        </form>

    )

}

export default Upload;