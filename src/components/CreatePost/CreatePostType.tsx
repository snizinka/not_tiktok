import React, { memo } from "react"

const CreatePostType = (props: any) => {
    return (
        <div className="content-type-container">
            <button onClick={() => props.setContentType({type: 'textContent', title: '', body: ''})} className="content-type">
                Text content
            </button>
            <button onClick={() => props.setContentType({type: 'videoContent', link: '', description: '' })} className="content-type">
                Video content
            </button>
            <button onClick={() => props.setContentType({type: 'photoContent', link: '', description: ''})} className="content-type">
                Photo content
            </button>
        </div>
    )
};

export default memo(CreatePostType);
