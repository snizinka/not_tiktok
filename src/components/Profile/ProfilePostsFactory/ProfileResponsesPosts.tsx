import React, { memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { ProfileStyles } from "../ProfileStyles"

const ProfileResponsesPosts = (props: any) => {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <ProfileDiv style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: '10px',
            rowGap: '50px',
            padding: '10px'
        }}>
            {
                props.posts.map((post: any, index: number) => {
                    return <Link to={`/content/${post.post.postId}`}>
                        <div key={`profile-post-${index}`} className="profile-post-card">
                            <div className="profile-post-image" style={{ marginBottom: '6px' }}>
                                {
                                    post.post.previewImage ? <img className="profile-post-img"
                                        src={require(`../../../post_content/pictures/${post.post.previewImage}`)}
                                        alt="" /> : ''
                                }
                                <div className="card-content">
                                    <h2>
                                        {post.post.description}
                                    </h2>
                                    <div className="additional-refs">
                                        <div className="profile-post-categories">
                                            {
                                                post.post._categories.map((category: any) => {
                                                    return <p>#{category.categoryName}</p>
                                                })
                                            }
                                        </div>
                                        <p>
                                            {post.post.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-response-customer">
                                {
                                    post.customer.userImage ? <img
                                        src={require(`../../../post_content/pictures/${post.customer.userImage}`)}
                                        alt="" /> : ''
                                }
                                <Link to={`/profile/${post.customer.userId}`}>{post.customer.userLink}</Link>
                            </div>
                        </div>
                    </Link>
                })
            }
        </ProfileDiv>
    )
}

const ProfileDiv = ProfileStyles

export default memo(ProfileResponsesPosts);
