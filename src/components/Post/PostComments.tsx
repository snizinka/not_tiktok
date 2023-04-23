import React from "react"
import postStyles from '../../style/post.module.css'

const PostComments = (props: {props: any}) => {
  return (
    <div className={postStyles.comment_section}>
    <p className={postStyles.comment_p}>Comments</p>
    <div className={postStyles.comments}>

        {
            props.props._comments.map((comment: any) => {
                return <div key={`comment-${comment.commentId}`} className={postStyles.comment}>
                    <div className={postStyles.user_sign}>
                        <p>{comment._user.username}</p>
                    </div>
                    <div className={postStyles.comment_content}>
                        <img src={require(`../../post_content/pictures/${comment._user.userImage}`)} alt="" />
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
  )
};

export default PostComments;
