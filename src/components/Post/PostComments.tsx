import React, { useState, useEffect } from "react"
import useActions from '../../hooks/useActions'
import postStyles from '../../style/post.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ScrollToBottom from "react-scroll-to-bottom";
import { Link } from "react-router-dom";

const PostComments = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { addComment, removeComment } = useActions()
    const [commentInput, setCommentInput] = useState('')
    const [replyTo, setReplyTo] = useState(null)

    function sendComment() {
        const comment = {
            userId: user[0].userId,
            postId: props.props.postId,
            replyTo: replyTo,
            commentContent: commentInput,
        }

        addComment(comment)
    }

    function deleteComment(commentId: any) {
        const comment = {
            postId: props.props.postId,
            commentId: commentId
        }

        removeComment(comment)
    }

    return (
        <div key={`post-comments-${props.props.postId}`} className={postStyles.comment_section}>
            <p className={postStyles.comment_p}>Comments</p>
                <ScrollToBottom className={postStyles.comments}>
                    {
                        props.props._comments.map((comment: any) => {
                            return <div key={`post-comment-${comment.commentId}`} className={postStyles.comment}>
                                <Link to={`profile/${comment._user.userId}`} className={postStyles.user_sign}>
                                    <p>{comment._user.username}</p>
                                </Link>
                                <div className={postStyles.comment_content}>
                                    <img src={require(`../../post_content/pictures/${comment._user.userImage}`)} alt="" />
                                    <p>{comment.commentContent}</p>
                                </div>
                                <div>
                                    <button onClick={() => setReplyTo(comment.commentId)}>Reply</button>
                                    { comment._user.userId === user[0].userId ? <button onClick={() => deleteComment(comment.commentId)}>Remove</button> : '' }
                                </div>
                            </div>
                        })
                    }
                </ScrollToBottom>
            <div className={postStyles.add_comment_fld}>
                <input type='text' value={commentInput} onInput={(e: any) => setCommentInput(e.target.value)} placeholder='' />
                <button onClick={sendComment}>Send</button>
            </div>
        </div>
    )
};

export default PostComments;
