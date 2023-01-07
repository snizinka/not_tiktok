import useActions from '../hooks/useActions'
import { useNavigate } from 'react-router-dom'
import { removePosts } from '../store/action-creator/post'
import { handleLikes } from '../store/action-creator/post'
import postStyles from '../style/post.module.css'
import { useTypedSelector } from '../hooks/useTypedSelector'
import React from 'react'

export const Post = (props: any) => {
    const { error, user, loading} = useTypedSelector(state => state.user)
    const { removePosts } = useActions()
    const { handleLikes } = useActions()
    const navigate = useNavigate()

    return (
        <div className={postStyles.post}>
            <div className={postStyles.left_part}>
                <div className={postStyles.info_top}>
                    <div className={postStyles.icon}>
                        <img className={postStyles.image} onClick={() => navigate(`profile/${props.info._user.userId}`)} src={require(`../post_content/pictures/${props.info._user.userImage}`)} alt="" />
                    </div>
                    <div className={postStyles.follow_user}>
                        <p onClick={() => navigate(`profile/${props.info._user.userId}`)} className={postStyles.username}>@{props.info._user.username}</p>
                        <button className={postStyles.follow}>Follow</button>
                    </div>
                </div>

                <div className={postStyles.desctiption}>
                    <div className={postStyles.desctiption_container}>
                        <div className={postStyles.category}>

                            {
                                props.info._category.map((cat: any) => {
                                    return <a href="#">@{cat.categoryName}</a>
                                })
                            }

                        </div>
                        <div className={postStyles.description_text}>
                            <p>{props.info.description}</p>
                        </div>
                    </div>
                </div>

                <div className={postStyles.post_info}>
                    <p>Likes: {props.info.likes.likes === undefined ? 0 : props.info.likes.likes}</p>
                    <p>Shares: {props.info.shares.shares === undefined ? 0 : props.info.shares.shares}</p>
                    <p>Created: 2022.11.11</p>
                </div>
            </div>
            <div className={postStyles.middle_part}>
                <div className={postStyles.left_swtch}>
                    <button>Prev</button>
                </div>
                <div className={postStyles.middle_wrapper}>
                    <div className={postStyles.middle_container}>

                        {
                            props.info._picture.map((pic: any) => {
                                return <div className={postStyles.slider_item}><img className={postStyles.slider_img} src={require(`../post_content/pictures/${pic.photoLink}`)} alt="" /></div>
                            })
                        }

                    </div>
                </div>
                <div className={postStyles.right_switch}>
                    <button>Next</button>
                </div>
            </div>
            <div className={postStyles.right_part}>
                <div className={postStyles.comment_section}>
                    <p className={postStyles.comment_p}>Comments</p>
                    <div className={postStyles.comments}>

                        {
                            props.info._comments.map((comment: any) => {
                                return <div className={postStyles.comment}>
                                    <div className={postStyles.user_sign}>
                                        <p>{comment._user.username}</p>
                                    </div>
                                    <div className={postStyles.comment_content}>
                                        <img src={require(`../post_content/pictures/${comment._user.userImage}`)} alt="" />
                                        <p>{comment.commentContent}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>

                    <div className={postStyles.add_comment_fld}>
                        <input type="text" />
                        <button>Send</button>
                    </div>
                </div>



                <div className={postStyles.actions}>
                    <div className={postStyles.item}>
                        <button style={{ background: props.info.iliked?.likesId !== undefined ? 'red' : 'gray' }}
                        onClick={() => handleLikes(props.info.iliked.likesId, props.info.postId, user[0].userId)}>Like</button>
                    </div>
                    <div className={postStyles.item}></div>
                    <div className={postStyles.item}></div>
                    <div className={postStyles.item}>
                        <button onClick={() => removePosts(props.info.postId)}>Don't recomend me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}