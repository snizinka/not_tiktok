import React, { useState, useEffect } from "react"
import Header from "../Header";
import { AdminPanelStyles } from "./AdminPanelStyles";
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
import useAdminActions from "../../hooks/useAdminActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UsersAndPostsList from "./UsersAndPostsList";
import LoadImage from "../../hooks/LoadImage";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const AdminPanel = () => {
    const { action, posts, users, user, post, analytics, loading } = useTypedSelector(state => state.admin)
    const { findUserOrPost, selectUserOrPost, sortPosts, loadPost, manageBlockPostState } = useAdminActions()
    const [search, setSearch] = useState<string>('')
    const [searchAmongPosts, setSearchAmongPosts] = useState<string>('')
    const [displayResults, setDisplayResults] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<any>({})
    const [labels, setLables] = useState<any>(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octovber', 'November', 'December'])
    const [analyticsData, setAnalyticsData] = useState<any>({
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
    })

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
        if (search !== '') {
            findUserOrPost(search)
            setDisplayResults(true)
        } else {
            setDisplayResults(false)
        }
    }, [search])

    useEffect(() => {
        if (Object.keys(selectedItem).length > 0) {
            const item = {
                userId: selectedItem.type === 'post' ? selectedItem._user.userId : selectedItem.userId,
                selectedPost: selectedItem.type === 'post' ? selectedItem.postId : null
            }
            selectUserOrPost(item)
        }
    }, [selectedItem])

    useEffect(() => {
        console.log(user, posts, post, action, analytics)
    }, [user])

    useEffect(() => {
        sortPosts(searchAmongPosts)
    }, [searchAmongPosts])

    useEffect(() => {
        if (analytics.length) {
            const months = analytics.map((item: any) => labels[item.month - 1])
            const dataSet = analytics.map((item: any, index: any) => {
                return {
                    label: item.month,
                    data: item.dates,
                    borderColor: 'rgb(197, 184, 184)',
                    backgroundColor: `rgba(${index * 70}, ${index * 70}, ${index * 100}, ${index * 0.7})`,
                }
            })

            setAnalyticsData({
                labels: months,
                datasets: dataSet
            })
        }
    }, [analytics])

    function changeSelectedItem(item: any) {
        setSelectedItem(item)
    }

    return (
        <AdminPanelStyles>
            <Header />

            <div className="admin-wrapper">
                <div className="admin-container">
                    <div>
                        <input value={search} onChange={(e: any) => setSearch(e.target.value)}
                            className="admin-search"
                            type="text"
                            placeholder="Username"
                        />
                        {displayResults && action === 'searching' ? <UsersAndPostsList changeSelectedItem={changeSelectedItem} result={[...posts, ...users]} /> : ''}
                    </div>
                    <div className="parts-wrapper">
                        <div className="left-part">
                            <div className="left-part-container">
                                <h1>POSTS</h1>

                                <div className="posts-container">
                                    <input value={searchAmongPosts} onChange={(e: any) => setSearchAmongPosts(e.target.value)}
                                        className="posts-search"
                                        type="text"
                                        placeholder="Post"
                                    />
                                    {
                                        action === 'selected' ? posts.map((item: any, index: number) => {
                                            return <div key={`admin-post-${index}`}
                                                onClick={() => loadPost(item.postId)}
                                                className="post">
                                                <p>{item.description}</p>
                                            </div>
                                        }) : ''
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="right-part">
                            <div className="right-part-top">
                                <div className="top-left">
                                    <div className="top-container">
                                        <div className="info-item">
                                            <p>Username:</p>
                                            <p className="reactive">{user?.username}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>User Link:</p>
                                            <p className="reactive">{user?.userLink}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>Created At:</p>
                                            <p className="reactive">{user?.created_at?.slice(0, 19).replace('T', ' ')}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>Amount of Posts:</p>
                                            <p className="reactive">{posts?.length}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>Amount of Views:</p>
                                            <p className="reactive">{user?.postsViews}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="top-right">
                                    <div className="top-container">
                                        <Line data={analyticsData} options={options}>
                                        </Line>
                                    </div>
                                </div>
                            </div>

                            <div className="right-part-bottom">
                                <div className="bottom-container">
                                    <div className="post-preview">
                                        <LoadImage className={'post-preview-image'} path={post?.previewImage} />
                                    </div>

                                    <div className="post-details">
                                        <div className="info-item">
                                            <p>Title:</p>
                                            <p>{post?.description}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>Categories:</p>
                                            <div className='info-item-categories'>
                                                {
                                                    post?._category?.map((item: any) => {
                                                        return <a key={`category-${item.categoryId}`} href="#">#{item.categoryName}</a>
                                                    })
                                                }
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <p>Post Link:</p>
                                            <a href={`http://localhost:3000/content/${post?.postId}`}>{post?.postId ? `http://localhost:3000/content/${post?.postId}` : ''}</a>
                                        </div>

                                        <div className="info-item">
                                            <p>Views:</p>
                                            <p>{post?.views}</p>
                                        </div>

                                        <div className="info-item">
                                            <p>Status:</p>
                                            <p style={{ color: post?.isBlocked ? 'red' : 'black' }}>{post?.isBlocked ? 'Blocked' : 'No restrictions'}</p>
                                        </div>
                                    </div>

                                    <div className='action-btn'>
                                        <button onClick={() => {
                                            if (post?.postId) {
                                                manageBlockPostState(post?.postId)
                                            }
                                        }}>{post?.isBlocked ? 'UNBLOCK POST' : 'BLOCK POST'}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPanelStyles>
    )
}

export default AdminPanel;
