import React, { useEffect, useState } from 'react'
import Content from '../Content';
import PhotoContent from '../PhotoContent';
import TextContent from '../TextContent';
import postStyles from '../../../style/post.module.css'

const ContentFactory = (props: any) => {
    const [contentType, setContentType] = useState('')
    const [contentData, setContentData] = useState<any>([])

    useEffect(() => {
        setContentType(props.props[0])
        setContentData(props.props[1])
    }, [props])

    let content: any = [];

    switch (contentType) {
        case 'PICTURE':
            contentData.map((cont: any) => {
                let picture: Content = { contentId: cont.photoContentId, source: cont.photoLink }
                content.push(<PhotoContent props={picture} />)
            })

            break;
        case 'TEXT':
            contentData.map((cont: any) => {
                let text: Content = { contentId: cont.textContentId, source: cont.textContent }
                content.push(<TextContent props={text} />)
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
