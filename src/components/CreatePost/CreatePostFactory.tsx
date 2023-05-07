import React, { memo, useEffect, useState } from "react"
import PhotoContent from "./PhotoContent";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";
import useCreatePostActions from "../../hooks/useCreatePostActions";

const CreatePostFactory = (props: any) => {
    const { inputTitleText, inputBodyText } = useCreatePostActions()
    const [contentType, setContentType] = useState(props.contentType)
    let content: any = [];

    useEffect(() => {
        setContentType(props.contentType)
    }, [props])

    switch (contentType.content.type) {
        case 'textContent':
            content.push(<TextContent
                id={contentType.id}
                onInputTitleText={inputTitleText}
                onInputBodyText={inputBodyText}
                titleContent={contentType.content.title}
                bodyContent={contentType.content.body}
            />)
            break;
        case 'videoContent':
            content.push(<VideoContent
                id={contentType.id}
                content={contentType.content.link}
            />)
            break;
        case 'photoContent':
            content.push(<PhotoContent
                id={contentType.id}
                content={contentType.content.link}
            />)
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

export default memo(CreatePostFactory);
