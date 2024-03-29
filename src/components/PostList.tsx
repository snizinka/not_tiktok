import React, { useEffect, useMemo, useState } from 'react';
import useActions from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom'
import postStyles from '../style/post.module.css'
import Header from './Header';
import { Post } from './Post/Post';
import Loading from './Loading';
import { Search } from './Search';
import useIsMobile from '../hooks/useIsMobile';

function PostList(props: any) {
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const { search } = useTypedSelector(state => state.search);
    const { error, posts, loading } = useTypedSelector(state => state.post)
    const { fetchPosts } = useActions()
    const [rendered, setRendered] = useState(0)

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

    useEffect(() => {
        if (rendered === 0) {
            setRendered(1)
            fetchPostsData()
        }
    }, [props.byWhat.type, params])

    if (error) {
        return <div className="error">
            <h1>An error occured</h1>
        </div>
    }

    return (
        <div>
            <Header />
            <div className={postStyles.posts_wrapper} style={{ height: 'calc(100vh - 100px)' }}>
                {
                    props.byWhat.type === 'BY_DESCRIPTION' ? 
                    <p className={postStyles.searchTitle}>Search results: {search === '' ? params.name : search}</p> : ''
                }
                <div className={postStyles.posts_container} style={{ height: '100%' }}>
                    <div className={props.byWhat.type === 'BY_DESCRIPTION' ? postStyles.searchContainer : ''} style={{ height: '100%' }}>
                        {
                            props.byWhat.type === 'BY_DESCRIPTION' ? 
                            posts?.map((post: any, index: number) => <Search key={`search-${index}`} info={post} />)
                                :
                                posts?.map((post: any, index: number) => <Post key={`psot-${index}`} 
                                index={index} socket={props.socket} info={post} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(PostList)