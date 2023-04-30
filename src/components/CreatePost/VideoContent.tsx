import React, { useState } from "react"

const VideoContent = () => {
    const [videoToUpload, setVideoToUpload] = useState()

    return (
        <div className="video-content-type">
            <p className="video-content-type-title">Select video to upload</p>
            <input multiple type="file" onChange={(event: any) => setVideoToUpload(event.target.files)} />
        </div>
    )
};

export default VideoContent;
