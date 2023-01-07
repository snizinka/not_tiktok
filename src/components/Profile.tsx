import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import useActions from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import profile from '../style/profile.module.css'
import Header from './Header';
import { fetchProfile } from '../store/action-creator/post';
import '../style/profile.css'

const Profile = (props: any) => {
    const params = useParams()
    const { error, posts, loading } = useTypedSelector(state => state.post)
    const { user } = useTypedSelector(state => state.user)

    const { fetchProfile } = useActions()

    useEffect(() => {
        fetchProfile(Number(params.id))
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
                posts.following !== undefined ?
                    <div className={profile.profile_wrapper}>
                        <div className={profile.profile}>
                            <div className={profile.top_left}>
                                <div className={profile.profile_img}>
                                    <img src={require(`../post_content/pictures/${posts.userProfile.userImage}`)} alt="" />
                                </div>

                                <div className={profile.middle}>
                                    <div className={profile.couple}>
                                        <button>Posts: {posts.posts.length}</button>
                                        <button>Followers: {posts.followers.followers}</button>
                                    </div>
                                    <div className={profile.couple}>
                                        <button>Rating: 200</button>
                                        <button>Following: {posts.following.following}</button>
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
                                <button>@{posts.userProfile.username}</button>
                                {
                                    posts.userProfile.userId === user[0].userId ? <button>Edit</button> : ''
                                }

                            </div>

                            <div className={profile.posts_wrapper}>
                                <div className={profile.tabs}>
                                    <div className={profile.tabs_container}>
                                        <button id='frst' onClick={()=>{switchTab()}}>All posts <div id='ubderln' className={profile.underln}></div></button>
                                        <button id='scnd'>Recent</button>
                                        <button id='thrd'>Saved</button>
                                        <button id='frth'>Collections</button>
                                        <button id='fvth'>Acted in</button>
                                        <button id='sxth'>Responses</button>
                                    </div>
                                </div>
                                <div className={profile.posts_container}>
                                    {
                                        posts.y.map((yy: any) => {
                                            return <div className={profile.post_item}><img src={require(`../post_content/pictures/${yy.pics.at(0)[0].photoLink}`)} alt="" /></div>
                                        })

                                    }
                                </div>
                            </div>
                        </div>
                    </div> : <div></div>
            }
        </div>
    );
};

export default Profile;