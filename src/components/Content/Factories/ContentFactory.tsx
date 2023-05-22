import React, { useEffect, useState } from 'react'
import Content from '../Content';
import PhotoContent from '../PhotoContent';
import TextContent from '../TextContent';
import postStyles from '../../../style/post.module.css'
import VideoContent from '../VideoContent';

const ContentFactory = (props: any) => {
    const [contentType, setContentType] = useState('')
    const [contentData, setContentData] = useState<any>([])

    useEffect(() => {
        setContentType(props?.props[0])
        setContentData(props?.props[1])
    }, [props])

    let content: any = [];

    switch (contentType) {
        case 'PICTURE':
            contentData?.map((cont: any) => {
                let picture: Content = { contentId: cont.photoContentId, source: cont.photoLink }
                content.push(<PhotoContent props={picture} />)
            })

            break;
        case 'TEXT':
            contentData?.map((cont: any) => {
                content.push(<TextContent props={cont} />)
            })
            break;
        case 'VIDEO':
            contentData?.map((cont: any) => {
                let video: Content = { contentId: cont.videoId, source: cont.videoLink }
                content.push(<VideoContent props={video} />)
            })
            break
        default:
            content = []
            break
    }

    return (
        content?.map((cont: any, index: number) => {
            return <div key={`postPicture-${index}`} className={postStyles.slider_item}>
                {cont}
            </div>
        })
    );
};

export default ContentFactory;
