import React, { useState, useEffect } from 'react';
import analytics from '../../style/analytics.module.css'
import Header from '../Header';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import useAnalyticsActions from '../../hooks/useAnalytics';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AnalyticsDropdown from './AnalyticsDropdown';
import { useMediaQuery } from 'react-responsive';
import useIsMobile from '../../hooks/useIsMobile';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    const { user } = useTypedSelector(state => state.user)
    const { posts, post, analytics: analyticsContent } = useTypedSelector(state => state.analytics)
    const [search, setSearch] = useState('')
    const [period, setPeriod] = useState(0)
    const [speriod, setSperiod] = useState('March')
    const [month, setMonth] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octovber', 'November', 'December'])
    const [analyticsDataSet, setAnalyticsDataSet] = useState(
        {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'June',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'July',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                    borderColor: 'blue',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }
    )

    const { fetchPostsByDescription, fetchPostAnalytics } = useAnalyticsActions()

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Period from June to July',
            },
        },
    }


    useEffect(() => {
        fetchPostsByDescription(search, user[0].userId)
    }, [search])

    useEffect(() => {
        const months = analyticsContent.map((item: any) => month[item.month - 1])
        const dataSet = analyticsContent.map((item: any, index: any) => {
            return {
                label: item.month,
                data: item.dates,
                borderColor: 'rgb(197, 184, 184)',
                backgroundColor: `rgba(${index * 70}, ${index * 70}, ${index * 100}, ${index * 0.7})`,
            }
        })

        setAnalyticsDataSet({
            labels: months,
            datasets: dataSet
        })

    }, [analyticsContent])

    function fetchPost(postId: number) {
        fetchPostAnalytics(postId)
    }

    return (
        <div>
            <Header></Header>
            <div className={analytics.wrapper}>
                <div className={analytics.container}>
                    <h1 className={analytics.title}>Analytics</h1>
                    {
                        <div className={analytics.layout_title} style={{
                            flexDirection: useIsMobile() ? 'column' : 'row'
                        }}>
                            <div className={analytics.search} style={{
                                overflow: useIsMobile() ? 'hidden' : 'inherit'
                            }}>
                                <div className={analytics.title_select}>
                                    <h1>Analyze selected post</h1>
                                </div>
                                <input type='text' className={analytics.search_txt} value={search} onInput={(e: any) => {
                                    setSearch(e.target.value)
                                }} />
                                <div className={analytics.posts}>
                                    {
                                        posts.map((post: any) => {
                                            return <AnalyticsDropdown key={post.postId} post={post} fetchPost={fetchPost} />
                                        })
                                    }
                                </div>
                            </div>

                            <div className={analytics.left_column} style={{
                                marginTop: useIsMobile() ? '0px' : '80px',
                                display: useIsMobile() ? 'flex' : 'block',
                                justifyContent: 'center'
                            }}>
                                <div className={analytics.top_part}>
                                    <div className={analytics.text_container}>
                                        <p>Posts views: {post?.views}</p>
                                        <p>Posts likes: {post?.likes}</p>
                                        <p>Shares: {post?.shares}</p>
                                        <p>Comments: {post?._comments?.length}</p>

                                        <div className="chart">
                                            <Line data={analyticsDataSet} options={options}>
                                            </Line>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={analytics.right_column}>

                            </div> </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Analytics;