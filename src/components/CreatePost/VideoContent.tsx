import React from "react"
import useCreatePostActions from "../../hooks/useCreatePostActions";

const VideoContent = (props: any) => {
    const { uploadVideo } = useCreatePostActions()

    return (
        <div className="video-content-type">
            <p className="video-content-type-title">Select video to upload</p>
            <input multiple type="file" onChange={(event: any) => {uploadVideo(props.id, event.target.files[0]) }} />
        </div>
    )
};

export default VideoContent;
