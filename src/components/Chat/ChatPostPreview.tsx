import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import LoadImage from "../../hooks/LoadImage";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatPostPreview = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [post, setPost]: any = useState([])

    useEffect(() => {
        async function fetchPostPreview() {
            console.log(props.id);
            const data = await getPostPreview('BY_POST_ID', Number(props.id), user[0].userId);
            setPost(data[0]);
        }
        fetchPostPreview()
    }, [props])

    async function getPostPreview(parameter: string, id: number, userId: number) {
        const data = await fetch('http://localhost:9000/api', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                parameter: parameter,
                id: id,
                userId: userId
            })
        }).then(res => res.json())

        return data.result.converted._posts
    }

    return (
        <Link to={`/content/${props.id}`} className="postPreview">
            <div className="preview-link">
                <a href={`http://localhost:3000/content/${props.id}`}>http://localhost:3000/content/{props.id}</a>
            </div>
            <div className="preview-image-wrapper">
                {post?.previewImage ? <LoadImage className={'preview-image'} path={post?.previewImage} /> : ''}
            </div>
            <div className="preview-description">
                <p className="preview-maintext">{post?.description}</p>

                <div className="preview-categories">
                    {
                        post?._category?.map((tag: any) => {
                            return <a href="#" className="preview-hashtag">#{tag.categoryName}</a>
                        })
                    }
                </div>
            </div>
        </Link>
    )
};

export default ChatPostPreview;
