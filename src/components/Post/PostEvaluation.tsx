import React, { useEffect, useState } from "react"
import postStyles from '../../style/post.module.css'
import useActions from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import SharePost from "../SharePost/SharePost";

const PostEvaluation = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { removePosts } = useActions()
    const { handleLikes } = useActions()
    const [sharePost, setSharePost] = useState(false)

    return (
        <div className={postStyles.actions}>
            <div className={postStyles.item}>
                <button style={{ background: props?.info?.iliked ? '#F32828' : 'gray' }}
                    onClick={() => handleLikes(props?.info?.postId, user[0].userId)}>{props?.info?.iliked ? 'Unlike' : 'Like'}</button>
            </div>
            <div className={postStyles.item}>
                <button onClick={() => setSharePost(prev => !sharePost)} style={{ background: '#DBDB23' }}
                >Share</button>
            </div>
            <div className={postStyles.item}>
                <button style={{ background: '#1CB31C' }}
                ></button>
            </div>
            <div className={postStyles.item}>
                <button onClick={() => removePosts(props?.info?.postId)}>Don't recomend me</button>
            </div>

            {sharePost ? <div className={postStyles.sharePost}>
                <SharePost postId={props?.info?.postId} socket={props.socket} />
            </div> : ''}
        </div>
    )
};

export default PostEvaluation;
