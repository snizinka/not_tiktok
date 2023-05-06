import React from "react"
import { ProfileStyles } from "./ProfileStyles"

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
                    return <div key={`profile-post-${index}`} className="profile-post-card">
                        <div className="profile-post-image">
                            {
                                post.previewImage ? <img
                                    src={require(`../../post_content/pictures/${post.previewImage}`)}
                                    alt="" /> : ''
                            }
                            <div className="card-content">
                                <h2>
                                    {post.description}
                                </h2>
                                <div className="additional-refs">
                                    <div className="profile-post-categories">
                                    {
                                        post._categories.map((category: any) => {
                                            return <p>#{category.categoryName}</p>
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
                })
            }
        </ProfileDiv>
    )
}

const ProfileDiv = ProfileStyles

export default ProfilePosts;
