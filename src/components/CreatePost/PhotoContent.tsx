import React, { useState } from "react"

const PhotoContent = () => {
    const [photosToUpload, setPhotosToUpload] = useState()

    return (
        <div className="photo-content-type">
            <p className="photo-content-type-title">Select pictures to upload</p>
            <input multiple type="file" onChange={(event: any) => setPhotosToUpload(event.target.files)} />

            <div>
                <p className="photo-content-type-title">Selected pictures</p>
                <div className="pictures-upload">

                </div>
            </div>
        </div>
    )
};

export default PhotoContent;
