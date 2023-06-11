import React, { useEffect, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import useProfileActions from '../../hooks/useProfileActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import profile from '../../style/profile.module.css'
import Header from '../Header';
import '../../style/profile.css'
import ProfilePostsFactory from './ProfilePostsFactory/ProfilePostsFactory';
import { useMediaQuery } from 'react-responsive';

const Profile = (props: any) => {
    const phoneSize = useMediaQuery({ query: '(max-width: 800px)' })
    const hideSideBar = useMediaQuery({ query: '(max-width: 1100px)' })
    const navigate = useNavigate()
    const params = useParams()
    const { profile: userProfile, posts } = useTypedSelector(state => state.profile)
    const { user } = useTypedSelector(state => state.user)

    const { fetchProfile, fetchAllProfilePosts, fetchRecentPostProfile, fetchSavedProfilePosts, fetchResponseProfilePosts } = useProfileActions()

    useEffect(() => {
        fetchProfile(Number(params.id))
        console.log(posts)
        console.log(userProfile)
    }, [params])

    return (
        <div>
            <Header></Header>
            {
                userProfile ?
                    <div className={profile.profile_wrapper}>
                        <div className={profile.profile}>
                            <div className={profile.top_left} style={{
                                alignItems: phoneSize ? 'center' : 'baseline',
                                flexDirection: phoneSize ? 'column' : 'row',
                                gap: phoneSize ? '5px' : '0px'
                            }}>
                                <div className={profile.profile_img} style={{
                                    width: phoneSize ? '100px' : '180px',
                                    height: phoneSize ? '100px' : '180px',
                                }}>
                                    {userProfile?.userImage ? <img src={require(`../../post_content/pictures/${userProfile?.userImage}`)} alt="" /> : ''}
                                </div>

                                {phoneSize ? <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <button style={{ background: '#D9D9D9', border: 'none', padding: '4px 10px' }}>Posts: {posts.length}</button>
                                    <button style={{
                                        marginLeft: hideSideBar ? '0px' : '20px',
                                        background: '#D9D9D9', border: 'none', padding: '4px 10px'
                                    }}>Followers: {userProfile.followers}</button>
                                    <button style={{ background: '#D9D9D9', border: 'none', padding: '4px 10px' }}>Rating: 200</button>
                                    <button style={{
                                        marginLeft: hideSideBar ? '0px' : '20px',
                                        background: '#D9D9D9', border: 'none', padding: '4px 10px'
                                    }}>Following: {userProfile.following}</button>
                                </div> : <div className={profile.middle} style={{
                                    width: hideSideBar ? 'auto' : '40%'
                                }}>
                                    <div className={profile.couple} style={{
                                        flexDirection: hideSideBar ? 'column' : 'row',
                                        gap: hideSideBar ? '5px' : '0'
                                    }}>
                                        <button>Posts: {posts.length}</button>
                                        <button style={{
                                            marginLeft: hideSideBar ? '0px' : '20px',
                                        }}>Followers: {userProfile.followers}</button>
                                    </div>
                                    <div style={{
                                        marginTop: hideSideBar ? '5px' : '20px',
                                        flexDirection: hideSideBar ? 'column' : 'row',
                                        gap: hideSideBar ? '5px' : '0'
                                    }} className={profile.couple}>
                                        <button>Rating: 200</button>
                                        <button style={{
                                            marginLeft: hideSideBar ? '0px' : '20px'
                                        }}>Following: {userProfile.following}</button>
                                    </div>
                                </div>}

                                <div className={profile.about} style={{ width: phoneSize ? '100%' : '35%' }}>
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
                                    userProfile.userId === user[0].userId ? <button onClick={() => navigate('/editprofile')}>Edit</button> : ''
                                }
                                {userProfile.userId !== user[0].userId ? <button>Send a message</button> : ''}
                            </div>

                            <div className={profile.posts_wrapper}>
                                <div className={profile.tabs}>
                                    <div className={profile.tabs_container}>
                                        <button id='frst' onClick={() => fetchAllProfilePosts(Number(params.id))}>All posts</button>
                                        <button id='scnd' onClick={() => fetchRecentPostProfile(Number(params.id))}>Recent</button>
                                        <button id='thrd' onClick={() => fetchSavedProfilePosts(Number(params.id))}>Saved</button>
                                        <button id='sxth' onClick={() => fetchResponseProfilePosts(Number(params.id))}>Responses</button>
                                    </div>
                                </div>
                                <div className={profile.posts_container}>
                                    <ProfilePostsFactory posts={posts} />
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>
            }
        </div>
    );
};

export default memo(Profile);