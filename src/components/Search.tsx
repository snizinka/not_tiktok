import useActions from '../hooks/useActions'
import { Link, useNavigate } from 'react-router-dom'
import { removePosts } from '../store/action-creator/post'
import { handleLikes } from '../store/action-creator/post'
import postStyles from '../style/post.module.css'
import { useTypedSelector } from '../hooks/useTypedSelector'
import React, { useEffect, useState } from 'react'
import textContent from '../post_content/postImg/textContent.png';

export const Search = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [postImage, setPostImage] = useState(require(`../post_content/postImg/textContent.png`))
    const [userImage, setUserImage] = useState(null)
    const [userName, setUserName] = useState(null)
    const [userId, setUserId] = useState(null)
    const [postId, setPostId] = useState(null)


    useEffect(() => {
        generatePostImage()
        if (props.info._user.userImage !== null) {
            setUserImage(props.info._user.userImage)
        }
        setTitle(trimTitle(props.info.description))
        setUserName(props.info._user.userLink)
        setUserId(props.info._user.userId)
        setPostId(props.info.postId)
    }, [])


    function trimTitle(title: string) {
        const inputTitle = title.split(' ');
        const trimmedTitle = inputTitle.length > 8 ? inputTitle.slice(0, 8).join(' ') : title;

        return trimmedTitle;
    }

    function generatePostImage() {
        if (props.info._picture.length > 0) {
            setPostImage(require(`../post_content/pictures/${props.info._picture[0].photoLink}`))
        } else if(props.info._video.length > 0) {
            setPostImage(require(`../post_content/postImg/videoContent.png`))
        } else {
            setPostImage(require(`../post_content/postImg/textContent.png`))
        }
    }

    return (
        <Link to={`/content/${postId}`}>
            <div key={`post-${props.info._user.userId}`} className={postStyles.searchCard}>
                <div className={postStyles.searchImageField}>
                    {
                         postImage !== '' ? <img className={postStyles.searchImage} src={ (postImage) } alt="" /> : ''
                    }
                </div>
                <p className={postStyles.userName}>{title}</p>
                <div className={postStyles.userField}>
                    {
                        userImage !== null ? <img className={postStyles.userImage} src={require(`../post_content/pictures/${userImage}`)} alt="" /> : ''
                    }
                    <Link to={`/profile/${userId}`}>{userName}</Link>
                </div>
            </div>
        </Link>
    )
}