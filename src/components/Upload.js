import React, { useRef } from "react";
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'combine-bucket',
    region: 'us-east-2',
    accessKeyId: 'AKIA22NTRQREC4CQ73Q7',
    secretAccessKey: '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'
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