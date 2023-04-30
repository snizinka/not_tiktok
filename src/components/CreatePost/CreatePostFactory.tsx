import React, { useEffect, useState } from "react"
import PhotoContent from "./PhotoContent";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";

const CreatePostFactory = (props: any) => {
    const [contentType, setContentType] = useState(props.contentType)
    let content: any = [];

    useEffect(() => {
        setContentType(props.contentType)
    }, [props])

    switch (contentType) {
        case 'textContent':
            content.push(<TextContent />)
            break;
        case 'videoContent':
            content.push(<VideoContent />)
            break;
        case 'photoContent':
            content.push(<PhotoContent />)
            break;
        default:
            content = []
            break
    }
    return (
        <React.Fragment key={`createPostFactory`}>
            {
                content?.map((cont: any, index: number) => {
                    return <React.Fragment key={`CreatePostFactory${index}`}>
                        {cont}
                    </React.Fragment>
                })
            }
        </React.Fragment>
    )
};

export default CreatePostFactory;
