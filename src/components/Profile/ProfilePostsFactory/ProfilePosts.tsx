import React, { memo } from "react"
import { Link } from "react-router-dom"
import { ProfileStyles } from "../ProfileStyles"

const ProfilePosts = (props: any) => {
    return (
        <ProfileDiv style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            gap: '10px',
            padding: '10px'
        }}>
            {
                props.posts.map((post: any, index: number) => {
                    return <Link key={`profile-post-${index}`} to={`/content/${post.postId}`}>
                        <div key={`profile-posts-${index}`} className="profile-post-card">
                            <div className="profile-post-image">
                                {
                                    post.previewImage ? <img className="profile-post-img"
                                        src={require(`../../../post_content/pictures/${post.previewImage}`)}
                                        alt="" /> : ''
                                }
                                <div className="card-content">
                                    <h2>
                                        {post.description}
                                    </h2>
                                    <div className="additional-refs">
                                        <div className="profile-post-categories">
                                            {
                                                post._categories.map((category: any, indexx: number) => {
                                                    return <p key={`profile-post-category-${indexx}`}>#{category.categoryName}</p>
                                                })
                                            }
                                        </div>
                                        <p>
                                            {post.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                })
            }
        </ProfileDiv>
    )
}

const ProfileDiv = ProfileStyles

export default memo(ProfilePosts);
