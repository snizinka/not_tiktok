import React from "react"
import useCreatePostActions from "../../hooks/useCreatePostActions";

const PhotoContent = (props: any) => {
    const { uploadImage } = useCreatePostActions()

    return (
        <div className="photo-content-type">
            <p className="photo-content-type-title">Select pictures to upload</p>
            <input multiple type="file" onChange={(event: any) => {uploadImage(props.id, event.target.files[0]) }} />
            <div>
                <p className="photo-content-type-title">Selected pictures</p>
                <div className="pictures-upload">

                </div>
            </div>
        </div>
    )
};

export default PhotoContent;
