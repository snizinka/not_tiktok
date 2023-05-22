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
    const { posts } = useTypedSelector(state => state.analytics)
    const [search, setSearch] = useState('')
    const [period, setPeriod] = useState(0)
    const [speriod, setSperiod] = useState('March')
    const [month, setMonth] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octovber', 'November', 'December'])
    const [mothPeriod, setMonthPeriod] = useState(month[0])

    const { fetchPostsByDescription } = useAnalyticsActions()

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

    const data = {
        labels,
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

    useEffect(() => {
        fetchPostsByDescription(search, user[0].userId)
    }, [search])

    return (
        <div>
            <Header></Header>
            <div className={analytics.wrapper}>
                <div className={analytics.container}>
                    <h1 className={analytics.title}>Analytics</h1>
                    {
                        <div className={analytics.layout_title}>
                            <div className={analytics.search}>
                                <div className={analytics.title_select}>
                                    <h1>Analyze selected post</h1>
                                </div>
                                <input type='text' className={analytics.search_txt} value={search} onInput={(e: any) => {
                                    setSearch(e.target.value)
                                }} />
                                <div className={analytics.posts}>
                                    {
                                        posts.map((post: any) => {
                                            return <AnalyticsDropdown key={post.postId} post={post} />
                                        })
                                    }
                                </div>
                            </div>

                            <div className={analytics.left_column}>
                                <div className={analytics.top_part}>
                                    <div className={analytics.text_container}>
                                        <p>Posts views: 190</p>
                                        <p>Posts likes: </p>
                                        <p>Average topic: science</p>
                                        <p>Subscribers by period of:
                                            {
                                                period === 0 ? <div>
                                                    <span className={analytics.month}>{mothPeriod}</span>
                                                    <button className={analytics.add} onClick={() => { setPeriod(1) }}>+</button>
                                                </div> :
                                                    <div>
                                                        <span className={analytics.month}>{mothPeriod}</span>
                                                        <p>to</p>
                                                        <input type="date" />
                                                        <span className={analytics.month}>{speriod}</span>
                                                    </div>

                                            }

                                        </p>

                                        <div className="chart">
                                            <Line data={data} options={options}>
                                            </Line>
                                        </div>
                                    </div>
                                </div>

                                <div className={analytics.bottom_part}>
                                    <div className={analytics.txt_container}>
                                        <p>Tasks done</p>
                                        <p>Tasks received</p>
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