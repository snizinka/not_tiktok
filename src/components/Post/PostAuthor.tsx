import React from "react"
import { useNavigate } from 'react-router-dom'
import postStyles from '../../style/post.module.css'
import useActions from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const PostAuthor = (props: { props: any }) => {
    const navigate = useNavigate()
    const { user } = useTypedSelector(state => state.user)
    const { handleFollow } = useActions()

    return (
        <div className={postStyles.info_top}>
            <div className={postStyles.icon}>
                <img className={postStyles.image}
                    onClick={() => navigate(`profile/${props.props._user.userId}`)}
                    src={require(`../../post_content/pictures/${props.props._user.userImage}`)} alt="" />
            </div>
            <div className={postStyles.follow_user}>
                <p onClick={() => navigate(`profile/${props.props._user.userId}`)} className={postStyles.username}>@{props.props._user.username}</p>
                <button className={postStyles.follow}
                    style={{ backgroundColor: props.props.isFollowing ? '#D9D9D9' : '#FFFFFF' }}
                    onClick={() => handleFollow(props.props._user.userId, user[0].userId)}>
                    {props.props.isFollowing ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
};

export default PostAuthor;