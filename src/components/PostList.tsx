import React, { useEffect } from 'react';
import useActions from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchPosts } from '../store/action-creator/post';
import { useParams } from 'react-router-dom'
import postStyles from '../style/post.module.css'
import Header from './Header';
import { Post } from './Post/Post';
import Loading from './Loading';
import { Search } from './Search';

export default function PostList(props: any) {
    const { user } = useTypedSelector(state => state.user)
    const { search } = useTypedSelector(state => state.search);
    const { error, posts } = useTypedSelector(state => state.post)
    const { fetchPosts } = useActions()
    const params = useParams()

    function fetchPostsData() {
        if (props.byWhat.type !== 'DEFAULT') {
            if (props.byWhat.type === 'BY_DESCRIPTION') {
                fetchPosts(props.byWhat.type, search, user[0].userId);
            } else {
                fetchPosts(props.byWhat.type, Number(params.id), user[0].userId);
            }
        } else {
            fetchPosts(props.byWhat.type, 0, user[0].userId);
        }
    }

    const RenderPosts = (post: any) => {
        if (props.byWhat.type === 'BY_DESCRIPTION')
            return <Search info={post.info} />
        return <Post info={post.info} />
    }

    useEffect(() => {
        fetchPostsData();
        console.log(posts)
    }, [props.byWhat.type])

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
                        props.byWhat.type === 'BY_DESCRIPTION' ? <p className={postStyles.searchTitle}>Search results: {search}</p> : ''
                    }
                <div className={postStyles.posts_container}>
                    <div className={props.byWhat.type === 'BY_DESCRIPTION' ? postStyles.searchContainer : ''}>
                        {
                            posts.length > 0 ? posts.map((post: any) =>
                                <RenderPosts key={`postList-${post.postId}`} info={post} />
                            ) : <Loading></Loading>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}