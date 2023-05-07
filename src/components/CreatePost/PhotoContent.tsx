import React, { useRef } from "react"
import useCreatePostActions from "../../hooks/useCreatePostActions";

const PhotoContent = (props: any) => {
    const { uploadImage } = useCreatePostActions()
    const inputRef = useRef<any>()
    const areaRef = useRef<any>()

    function handleDragOver(event: any) {
        event.preventDefault()
        areaRef.current.style.background = '#B1BCE6'
    }

    function handleDragEnd(event: any) {
        event.preventDefault()
        areaRef.current.style.background = 'transparent'
    }

    function handleDrop(event: any) {
        event.preventDefault()
        uploadImage(props.id, event.dataTransfer.files[0])
        areaRef.current.style.background = 'transparent'
    }

    return (
        <div ref={areaRef} className="file-drop-area" onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragEnd}>
            <h6>Drag & Drop File Here</h6>
            <span className="file-msg">or</span>
            <button className="fake-btn" onClick={() => inputRef.current.click()}>Select picture</button>
            <input hidden ref={inputRef} type="file" onChange={(event: any) => { uploadImage(props.id, event.target.files[0]) }} />
        </div>
    )
};

export default PhotoContent;
