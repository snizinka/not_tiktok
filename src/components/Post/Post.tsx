import React, { useEffect, useState } from 'react'
import postStyles from '../../style/post.module.css'
import PostSlider from './PostSlider'
import PostComments from './PostComments'
import PostEvaluation from './PostEvaluation'
import PostDescription from './PostDescription'
import PostStatistics from './PostStatistics'
import PostAuthor from './PostAuthor'
import { useInView } from 'react-intersection-observer'
import useAnalyticsActions from '../../hooks/useAnalytics'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'
import useIsMobile from '../../hooks/useIsMobile'

export const Post = ({ socket, info, index }: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { currentPostThreshold, loadPostIndex } = useTypedSelector(state => state.post)
    const { storeViewedPost } = useAnalyticsActions()
    const { fetchAdditionalPosts } = useActions()
    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: '0px',
        triggerOnce: true,
        root: document.getElementById('postlist'),
    })

    const [letLoad, setLetLoad] = useState(true)

    useEffect(() => {
        if (inView) {
            const data = {
                userId: user[0].userId,
                postId: info.postId
            }
            console.log(info.postId)

            if ((index + 1) === loadPostIndex && letLoad) {
                if (letLoad) {
                    setLetLoad(prev => !prev)
                    fetchAdditionalPosts({
                        userId: user[0].userId,
                        threshold: currentPostThreshold
                    })
                }
            }
            //storeViewedPost(data)
        }
    }, [inView])

    return (
        <div ref={ref} key={`post-${info?._user?.userId}`}
            style={{
                flexDirection: useIsMobile() ? 'column' : 'row',
                marginLeft: useIsMobile() ? '0' : '4%'
            }}
            className={postStyles.post}>
            <div className={postStyles.left_part} style={{
                width: useIsMobile() ? '100%' : '25%',
                marginLeft: useIsMobile() ? '0' : '3%'
            }}>
                <PostAuthor props={info} />
                <PostDescription props={info} />
                {useIsMobile() ? '' : <PostStatistics info={info} />}
            </div>
            <div className={postStyles.middle_part}
                style={{
                    width: useIsMobile() ? '100%' : '40%',
                    height: useIsMobile() ? '50%' : '570px'
                }}>
                {inView ? <PostSlider info={info} /> : ''}
            </div>
            <div className={postStyles.right_part} style={{ width:
                 useIsMobile() ? '100%' : '25%' }}>
                {useIsMobile() ? '' : <PostComments props={info} />}
                <PostEvaluation socket={socket} info={info} />
            </div>
        </div>
    )
}