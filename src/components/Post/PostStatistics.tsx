import React, { useEffect } from "react"
import useIsMobile from "../../hooks/useIsMobile";
import postStyles from '../../style/post.module.css'

const PostStatistics = (props: any) => {
    return (
        <div className={postStyles.post_info}>
            <p style={{ fontSize: useIsMobile() ? '16px' : '20px' }}>Likes: {props?.info?.likes}</p>
            <p style={{ fontSize: useIsMobile() ? '16px' : '20px' }}>Shares: {props?.info?.shares}</p>
            <p style={{ fontSize: useIsMobile() ? '16px' : '20px' }}>Created: 2022.11.11</p>
        </div>
    )
};

export default PostStatistics;
