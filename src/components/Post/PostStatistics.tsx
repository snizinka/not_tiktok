import React from "react"
import postStyles from '../../style/post.module.css'

const PostStatistics = (props: {props: any}) => {
    return (
        <div className={postStyles.post_info}>
            <p>Likes: {props.props.likes}</p>
            <p>Shares: {props.props.shares}</p>
            <p>Created: 2022.11.11</p>
        </div>
    )
};

export default PostStatistics;
