import React from "react"
import Header from "../Header";
import analytics from '../../style/analytics.module.css'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const AnalyticsPost = () => {
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
                data: [1, 21, 13, 4, 5, 61, 72, 8, 9, 0],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'July',
                data: [1, 21, 13, 4, 5, 61, 72, 8, 9, 0],
                borderColor: 'blue',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }
    //TODO: create table with abandoned posts
    //TODO: write post views
    return (
        <div>
            <Header />
            <div className={analytics.wrapper}>
                <div className={analytics.container}>
                    <h1 className={analytics.title}>Analytics</h1>
                    <div>
                        <h2 className={analytics.postTitle}>Post Title</h2>

                        <div className={analytics.dashboardWrapper}>
                            <div className={analytics.leftDashboard}>
                                <div className={analytics.leftTopDashboard}>
                                    <div className={analytics.dashItem}>
                                        <p>Post Views: </p>
                                    </div>

                                    <div className={analytics.dashItem}>
                                        <p>Post Likes: </p>
                                    </div>

                                    <div className={analytics.dashItem}>
                                        <p>Post Shares: </p>
                                    </div>

                                    <div className={analytics.dashItem}>
                                        <p>Post Comments: </p>
                                    </div>

                                    <div className={analytics.dashItem}>
                                        <p>Post Abandoned: </p>
                                    </div>

                                    <div className={analytics.dashItem}>
                                        <p>Most popular topic: </p>
                                    </div>
                                </div>

                                <div className={analytics.leftBottomDashboard}>
                                    <Line data={data} options={options}>
                                    </Line>
                                </div>
                            </div>

                            <div className={analytics.rightDashboard}>
                            <Line data={data} options={options}>
                                    </Line>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPost;
