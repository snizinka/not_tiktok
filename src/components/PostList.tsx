import React, { useEffect, useMemo } from 'react';
import useActions from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom'
import postStyles from '../style/post.module.css'
import Header from './Header';
import { Post } from './Post/Post';
import Loading from './Loading';
import { Search } from './Search';

function PostList(props: any) {
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const { search } = useTypedSelector(state => state.search);
    const { error, posts, loading } = useTypedSelector(state => state.post)
    const { fetchPosts } = useActions()

    function fetchPostsData() {
        switch (props.byWhat.type) {
            case 'DEFAULT':
                fetchPosts(props.byWhat.type, 0, user[0].userId, 'Default')
                break
            case 'BY_DESCRIPTION':
                fetchPosts(props.byWhat.type, search === '' ? params.name : search, user[0].userId, 'Default')
                break
            case 'BY_POST_ID':
                fetchPosts(props.byWhat.type, Number(params.id), user[0].userId, 'Default')
                break
            default:
                fetchPosts(props.byWhat.type, 0, user[0].userId, 'Default')
        }
    }

    const RenderPosts = (post: any) => {
        if (props.byWhat.type === 'BY_DESCRIPTION')
            return <Search info={post.info} />
        return <Post index={post?.index} postsCount={post?.postsCount} socket={props.socket} info={post?.info} />
    }
    
    const RenderCase = () => {
        if(loading) {
            return <Loading />
        } else if (posts.length > 0) {
            return posts?.map((post: any, index: number) => <RenderPosts id='postlist' index={index} postsCount={posts?.length} key={`postList-${post?.postId}`} info={post} />)
        } else {
            return ''
        }
    }

    useEffect(() => {
        fetchPostsData()
    }, [props.byWhat.type, params])

    useEffect(() => {
        console.log(posts)
    }, [posts])

    if (error) {
        return <div className="error">
            <h1>An error occured</h1>
        </div>
    }

    return (
        <div>
            <Header></Header>
            <div className={postStyles.posts_wrapper}>
                {
                    props.byWhat.type === 'BY_DESCRIPTION' ? <p className={postStyles.searchTitle}>Search results: {search === '' ? params.name : search}</p> : ''
                }
                <div className={postStyles.posts_container}>
                    <div className={props.byWhat.type === 'BY_DESCRIPTION' ? postStyles.searchContainer : ''}>
                        <RenderCase />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PostList)