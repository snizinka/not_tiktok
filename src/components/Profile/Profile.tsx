import React, { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom'
import useProfileActions from '../../hooks/useProfileActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import profile from '../../style/profile.module.css'
import Header from '../Header';
import '../../style/profile.css'
import ProfilePosts from './ProfilePosts';

const Profile = (props: any) => {
    const params = useParams()
    const { profile: userProfile, posts } = useTypedSelector(state => state.profile)
    const { user } = useTypedSelector(state => state.user)

    const { fetchProfile, fetchAllProfilePosts, fetchRecentPostProfile, fetchSavedProfilePosts } = useProfileActions()

    useEffect(() => {
        fetchProfile(Number(params.id))
        console.log(posts)
        console.log(userProfile)
    }, [])

    function switchTab() {
        let ro = document.getElementById('ubderln')
        ro?.classList.add('solo');
        document.getElementById('ubderln')?.remove()
        document.getElementById('scnd')
    }

    return (
        <div>
            <Header></Header>
            {
                userProfile ?
                    <div className={profile.profile_wrapper}>
                        <div className={profile.profile}>
                            <div className={profile.top_left}>
                                <div className={profile.profile_img}>
                                    { userProfile?.userImage ? <img src={require(`../../post_content/pictures/${userProfile?.userImage}`)} alt="" /> : '' }
                                </div>

                                <div className={profile.middle}>
                                    <div className={profile.couple}>
                                        <button>Posts: {posts.length}</button>
                                        <button>Followers: {userProfile.followers}</button>
                                    </div>
                                    <div className={profile.couple}>
                                        <button>Rating: 200</button>
                                        <button>Following: {userProfile.following}</button>
                                    </div>
                                </div>

                                <div className={profile.about}>
                                    <h1>About</h1>

                                    <div className={profile.categories}>
                                        <a href='#'>#popmusic</a>
                                        <a href='#'>#science</a>
                                        <a href='#'>#jwt</a>
                                    </div>

                                    <div className={profile.description}>
                                        <p>Hi! This is some account placed on NOT TikTok. In this box written  information about  account’s owner.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={profile.middle_line}>
                                <button>@{userProfile?.username}</button>
                                {
                                    userProfile.userId === user[0].userId ? <button>Edit</button> : ''
                                }
                                <button>Send a message</button>
                            </div>

                            <div className={profile.posts_wrapper}>
                                <div className={profile.tabs}>
                                    <div className={profile.tabs_container}>
                                        <button id='frst' onClick={()=> fetchAllProfilePosts(Number(params.id))}>All posts</button>
                                        <button id='scnd' onClick={() => fetchRecentPostProfile(Number(params.id))}>Recent</button>
                                        <button id='thrd' onClick={() => fetchSavedProfilePosts(Number(params.id))}>Saved</button>
                                        <button id='sxth'>Responses</button>
                                    </div>
                                </div>
                                <div className={profile.posts_container}>
                                    <ProfilePosts posts={posts} />
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>
            }
        </div>
    );
};

export default memo(Profile);