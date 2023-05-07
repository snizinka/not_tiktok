import React, { useRef, useEffect } from "react"
import useCreatePostActions from "../../hooks/useCreatePostActions";

const PreviewImage = (props: any) => {
    const { uploadPreviewImage } = useCreatePostActions()
    const inputRef = useRef<any>()
    const areaRef = useRef<any>()
    const sunRef = useRef<any>()

    function handleDragOver(event: any) {
        event.preventDefault()
        areaRef.current.style.background = '#B1BCE6'
        sunRef.current.style.transform = 'scale(10)';
    }

    function handleDragEnd(event: any) {
        event.preventDefault()
        areaRef.current.style.background = 'transparent'
        sunRef.current.style.transform = 'scale(1)';
    }

    function handleDrop(event: any) {
        event.preventDefault()
        uploadPreviewImage(event.dataTransfer.files[0])
        areaRef.current.style.background = 'transparent'
        sunRef.current.style.transform = 'scale(10)';
    }

    useEffect(() => {
        if (props.previewImage !== '') {
            areaRef.current.style.background = 'transparent'
            sunRef.current.style.transform = 'scale(10)';
        }
    }, [props.previewImage])

    return (
        <div ref={areaRef} className="file-drop-area" onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragEnd}>
            <div ref={sunRef} className="file-select-status vanila" onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragEnd}></div>
            {
                props.previewImage ? <h6>Preview image is Uploaded!</h6>
                    : <>
                        <h6>Drag & Drop File Here</h6>
                        <span className="file-msg">or</span>
                        <button className="fake-btn" onClick={() => inputRef.current.click()}>Select preview image</button>
                        <input hidden ref={inputRef} type="file" onChange={(event: any) => { uploadPreviewImage(event.target.files[0]) }} />
                    </>
            }
        </div>
    )
};

export default PreviewImage;
