import React, { useEffect, useState } from 'react'
import postStyles from '../../style/post.module.css'
import PostSlider from './PostSlider'
import PostComments from './PostComments'
import PostEvaluation from './PostEvaluation'
import PostDescription from './PostDescription'
import PostStatistics from './PostStatistics'
import PostAuthor from './PostAuthor'

export const Post = (props: any) => {
    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div key={`post-${props.info._user.userId}`} className={postStyles.post}>
            <div className={postStyles.left_part}>
                <PostAuthor props={props.info} />
                <PostDescription props={props.info} />
                <PostStatistics props={props.info} />
            </div>
            <div className={postStyles.middle_part}>
                <PostSlider props={props.info} />
            </div>
            <div className={postStyles.right_part}>
                <PostComments props={props.info} />
                <PostEvaluation props={props.info} />
            </div>
        </div>
    )
}