import React from "react"

const CreatePostType = (props: any) => {
    return (
        <div className="content-type-container">
            <button onClick={() => props.setContentType('textContent')} className="content-type">
                Text content
            </button>
            <button onClick={() => props.setContentType('videoContent')} className="content-type">
                Video content
            </button>
            <button onClick={() => props.setContentType('photoContent')} className="content-type">
                Photo content
            </button>
        </div>
    )
};

export default CreatePostType;
