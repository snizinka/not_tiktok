import React, { useEffect } from "react"
import postStyles from '../../style/post.module.css'

const PostStatistics = (props: any) => {
    return (
        <div className={postStyles.post_info}>
            <p>Likes: {props?.info?.likes}</p>
            <p>Shares: {props?.info?.shares}</p>
            <p>Created: 2022.11.11</p>
        </div>
    )
};

export default PostStatistics;
