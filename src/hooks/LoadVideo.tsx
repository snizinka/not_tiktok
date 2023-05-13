import React from "react"

const LoadVideo = (props: any) => {
    try {
        const video = require(`../post_content/pictures/${props.path}`);
        return (
            <>
                <video className={props.className} controls>
                    {props.path ? <source src={video} /> : ''}
                </video>
            </>
        )
    } catch (e) {
        return (
            <>
            </>
        )
    }
}

export default LoadVideo;
