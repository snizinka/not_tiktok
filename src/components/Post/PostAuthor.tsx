import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import postStyles from '../../style/post.module.css'
import useActions from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import useIsMobile from "../../hooks/useIsMobile"

const PostAuthor = (props: { props: any }) => {
    const navigate = useNavigate()
    const { user } = useTypedSelector(state => state.user)
    const { handleFollow } = useActions()

    return (
        <div key={`post-author-${props.props._user.userId}`}
            style={{
                marginBottom: useIsMobile() ? '10px' : '40px',
                gap: useIsMobile() ? '10px' : '0px',
                justifyContent: useIsMobile() ? 'start' : 'space-between'
            }}
            className={postStyles.info_top}>
            <div className={postStyles.icon} style={{
                width: useIsMobile() === true ? '70px' : '120px',
                height: useIsMobile() ? '70px' : '120px',
            }}>
                <img className={postStyles.image}
                    onClick={() => navigate(`profile/${props.props._user.userId}`)}
                    src={require(`../../post_content/pictures/${props.props._user.userImage}`)} alt="" />
            </div>
            <div className={postStyles.follow_user} style={{
                height: useIsMobile() ? '70px' : '120px',
                flexDirection: useIsMobile() ? 'row' : 'column',
                gap: useIsMobile() ? '10px' : '0px',
            }}>
                <p style={{ fontSize: useIsMobile() ? '20px' : '25px' }} 
                onClick={() => navigate(`profile/${props.props._user.userId}`)} className={postStyles.username}>@{props.props._user.username}</p>
                {
                    user[0].userId === props.props._user.userId ?
                        <Link to={`/edit/${props.props.postId}`} className={postStyles.follow}>
                            <p style={{ textAlign: 'center', color: 'black' }}>Edit</p>
                        </Link>
                        :
                        <button className={postStyles.follow}
                            style={{ backgroundColor: props.props.isFollowing ? '#D9D9D9' : '#FFFFFF' }}
                            onClick={() => handleFollow(props.props._user.userId, user[0].userId)}>
                            {props.props.isFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                }
            </div>
        </div>
    )
};

export default PostAuthor;
