import React, { useEffect } from "react"
import postStyles from '../../style/post.module.css'
import useActions from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const PostEvaluation = (props: {props: any}) => {
    const { user } = useTypedSelector(state => state.user)
    const { removePosts } = useActions()
    const { handleLikes } = useActions()

    useEffect(() => {
        console.log(props.props.iliked)
    }, [])

    return (
        <div className={postStyles.actions}>
            <div className={postStyles.item}>
                <button style={{ background: props.props.iliked ? '#F32828' : 'gray' }}
                    onClick={() => handleLikes(props.props.postId, user[0].userId)}>{ props.props.iliked ? 'Unlike' : 'Like'}</button>
            </div>
            <div className={postStyles.item}>
            <button style={{ background: '#DBDB23' }}
                    >Share</button>
            </div>
            <div className={postStyles.item}>
            <button style={{ background: '#1CB31C' }}
                    ></button>
            </div>
            <div className={postStyles.item}>
                <button onClick={() => removePosts(props.props.postId)}>Don't recomend me</button>
            </div>
        </div>
    )
};

export default PostEvaluation;
