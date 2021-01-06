import React, { useRef } from "react";

function Upload() {
    const fileInput = useRef();

    const handleClick = event => {
        event.preventDefault();
        console.log(fileInput.current);

    }

    return (
        <form onSubmit={handleClick}>
            <label>
                Upload file:
                <input type='file' ref={fileInput} />
            </label>
            <br/>
            <button type='submit'>Upload</button>
        </form>

    )

}

export default Upload;