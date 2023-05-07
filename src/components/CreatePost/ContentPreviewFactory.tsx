import React, { memo, useEffect, useState } from "react"
import PhotoContentPreview from "./ContentPreview/PhotoContentPreview";
import TextContentPreview from "./ContentPreview/TextContentPreview";
import VideoContentPreview from "./ContentPreview/VideoContentPreview";

const ContentPreviewFactory = (props: any) => {
    const [contentType, setContentType] = useState(props.contentType)
    let content: any = [];

    useEffect(() => {
        setContentType(props.contentType)
    }, [props])

    switch (contentType.content.type) {
        case 'textContent':
            content.push(<TextContentPreview
                id={contentType.id}
                titleContent={contentType.content.title}
                bodyContent={contentType.content.body}
            />)
            break;
        case 'videoContent':
            content.push(<VideoContentPreview
                id={contentType.id}
                content={contentType.content.link}
            />)
            break;
        case 'photoContent':
            content.push(<PhotoContentPreview
                id={contentType.id}
                content={contentType.content.link}
            />)
            break;
        default:
            content = []
            break
    }
    return (
        <React.Fragment key={`sortContent`}>
            {
                content?.map((cont: any, index: number) => {
                    return <React.Fragment key={`sortedContent${index}`}>
                        {cont}
                    </React.Fragment>
                })
            }
        </React.Fragment>
    )
};

export default memo(ContentPreviewFactory);
