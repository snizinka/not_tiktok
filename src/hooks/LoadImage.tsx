import React from "react"

const LoadImage = (props: any) => {
    try {
        const img = require(`../post_content/pictures/${props.path}`);
        return (
            <>
                { props.path ? <img className={props.className} src={img} /> : '' }
            </>
        )
    } catch (e) {
        return (
            <>
            </>
        )
    }
};

export default LoadImage;
