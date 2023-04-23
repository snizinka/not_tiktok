import React from "react"
import postStyles from '../../style/post.module.css'

const PostDescription = (props: {props: any}) => {
    return (
        <div className={postStyles.desctiption}>
            <div className={postStyles.desctiption_container}>
                <div className={postStyles.category}>

                    {
                        props.props._category.map((cat: any) => {
                            return <a key={`postCategory-${cat.categoryId}`} href="#">@{cat.categoryName}</a>
                        })
                    }

                </div>
                <div className={postStyles.description_text}>
                    <p>{props.props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default PostDescription;
