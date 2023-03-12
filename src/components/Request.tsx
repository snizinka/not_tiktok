import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import useRequestUsersActions from '../hooks/useRequestUsersActions';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsersToAccomplish } from "../store/action-creator/requestUsers";
import { makeRequest } from "../store/action-creator/requestUsers";
import { stat } from 'fs';

export const Request = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { error, loading, users, requestStatus } = useTypedSelector(state => state.requestUsers)
    const { fetchUsersToAccomplish } = useRequestUsersActions()
    const { makeRequest } = useRequestUsersActions()

    const [stage, setStage] = useState(0);

    const [topic, setTopic] = useState("");
    const [task, setTask] = useState("");
    const [budget, setBudget] = useState<number | string | undefined>(10);
    const [deadline, setDeadline] = useState<number | string | undefined | any>(Date.now);
    const [detailsFile, setDetailsFile] = useState('');
    const [userToAccomplish, setUserToAccomplish] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [toChange, setToChange] = useState('');
    const [extended, setExtended] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [summury, setSummury] = useState([false, false, false, false, false])

    useEffect(() => {
        if (stage === 100) {
            fetchUsersToAccomplish(categories, searchValue)
        }
    }, [stage, setStage, searchValue, setSearchValue])

    useEffect(() => {
        if (toChange !== '') {
            window.setTimeout(() => {
                setToChange('')
            }, 2000)
        }
    }, [toChange, setToChange])

    useEffect(() => {
        if (confirm === true) {
            makeRequest({
                user: user[0].userId,
                topic: categories,
                task: task,
                budget: budget,
                deadline: deadline,
                detailsFile: detailsFile,
                userToAccomplish: userToAccomplish,
            })
            setConfirm(false)
        }
    }, [confirm, setConfirm])

    useEffect(() => {
        if(requestStatus) {
            setBudget(0)
            setCategories([])
            setDeadline(Date.now)
            setSearchValue('')
            setUserToAccomplish([])
        }
    }, [requestStatus])


    return (
        <RequestDiv>
            <Header></Header>
            <div className="form-wrapper">
                <div className="slider"
                    style={{ transform: `translate(-${stage}%, 0px)` }}>

                    <div className="first-stage">
                        <div className='request-container'>
                            <div className="comeback"></div>
                            <div className="components">
                                <div className="form-component" style={{
                                    //background: toChange === 'topic' ? '#ff9e00' : 'none',
                                    opacity: toChange !== '' && toChange !== 'topic' ? '0.1' : '1',
                                    border: toChange === 'topic' ? 'dashed #8653D5 2px' : 'none'
                                }}>
                                    <p>Topic</p>
                                    <div className="add-category">
                                        <input type="text" id='exception' value={topic} onChange={(e) => setTopic(e.target.value)} />
                                        <button onClick={() => {
                                            let categories_filtered = categories.filter(c => c === topic)

                                            if (categories_filtered.length === 0) {
                                                setCategories([...categories, topic])
                                                setTopic('')
                                            }

                                        }}>Add</button>
                                    </div>

                                    <div className='topic-box'>
                                        <div className='topic-list'>
                                            {
                                                categories.map(cat => {
                                                    return <div className="topic-item">
                                                        <button className='remove-item' onClick={() => {
                                                            let categories_filtered = categories.filter(c => c !== cat)
                                                            setCategories(categories_filtered)
                                                        }}>x</button>
                                                        <a href='#1'>{cat}</a>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='form-component' style={{
                                    background: toChange === 'task' ? '#ff9e00' : 'none',
                                    opacity: toChange !== '' && toChange !== 'task' ? '0.1' : '1'
                                }}>
                                    <p>Task <button className='extended-btn' onClick={() => {
                                        setExtended(!extended)
                                    }}>Extended</button></p>
                                    <textarea value={task} onChange={(e) => setTask(e.target.value)} />
                                </div>

                                <div className="form-component" style={{
                                    background: toChange === 'budget' ? '#ff9e00' : 'none',
                                    opacity: toChange !== '' && toChange !== 'budget' ? '0.1' : '1'
                                }}>
                                    <p>Budget</p>
                                    <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
                                </div>

                                <div className="form-component" style={{
                                    background: toChange === 'deadline' ? '#ff9e00' : 'none',
                                    opacity: toChange !== '' && toChange !== 'deadline' ? '0.1' : '1'
                                }}>
                                    <p>Deadline</p>
                                    <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                                </div>

                                <div className="form-component" style={{
                                    background: toChange === 'more-details' ? '#ff9e00' : 'none',
                                    opacity: toChange !== '' && toChange !== 'more-details' ? '0.1' : '1'
                                }}>
                                    <p>More details (Word file)</p>
                                    <input type="file" value={detailsFile} onChange={(e) => setDetailsFile(e.target.value)} />
                                </div>
                            </div>
                            <div className="continue">
                                <button onClick={() => {
                                    if (true) {
                                        setStage(stage + 100)
                                    }
                                }}>➜</button>
                            </div>
                        </div>
                    </div>

                    <div className="second-stage">
                        <div className='request-container'>
                            <div className="comeback">
                                <button onClick={() => {
                                    setStage(stage - 100)
                                }}>Back</button>
                            </div>
                            <div className="components">
                                <div className="form-component">
                                    <p>User to accomplish</p>
                                    <input type="text" placeholder="Author's name" className='search-user' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                                </div>

                                <div className="user-list">
                                    {
                                        users.map(usr => {
                                            return usr.length > 0 ? <div className="user-offered">
                                                <a href="#2">{usr[0].userLink}</a>
                                                <button onClick={() => {
                                                    let filteredUsers = userToAccomplish.filter(u => u.userId === usr[0].userId)
                                                    if (filteredUsers.length === 0) {
                                                        setUserToAccomplish([...userToAccomplish, usr[0]])
                                                    }
                                                }}>Select</button>
                                            </div> : ''
                                        })
                                    }

                                </div>

                                {
                                    userToAccomplish.length > 0 ? <div className="user-que">
                                        <p>Selected users</p>
                                        <div className="selected">
                                            {
                                                userToAccomplish.map(usr => {
                                                    return <div className="user-offered">
                                                        <a href="#2">{usr.userLink}</a>
                                                        <button onClick={() => {
                                                            let filteredUsers = userToAccomplish.filter(u => u.userId !== usr.userId)
                                                            setUserToAccomplish(filteredUsers)
                                                        }}>Remove</button>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div> : ''
                                }

                            </div>

                            <div className="continue">
                                <button onClick={() => {
                                    if (true) {
                                        setStage(stage + 100)
                                    }
                                }}>➜</button>
                            </div>
                        </div>
                    </div>

                    <div className="second-stage">
                        <div className='request-container'>
                            <div className="comeback">
                                <button onClick={() => {
                                    setStage(stage - 100)
                                }}>Back</button>
                            </div>
                            <div className="components">
                                <div className="summury-container" style={{
                                    left: summury[0] === true ? '400px' : '0px',
                                    transition: '.7s ease',
                                    position: 'relative'
                                }}>
                                    <p className='request-heading'>Topic</p>

                                    <div className='topic-box'>
                                        <div className='topic-list'>
                                            {
                                                categories.map(cat => {
                                                    return <div className="topic-item">
                                                        <a href='#1'>{cat}</a>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>

                                    <button className='change-final' onClick={() => {
                                        setToChange('topic')
                                        setStage(0)
                                    }}>Change</button>
                                </div>

                                <div className="summury-container">
                                    <p className='request-heading'>Task</p>
                                    <div className="data-reached">
                                        <p>{task}</p>
                                        <button onClick={() => {
                                            setToChange('task')
                                            setStage(0)
                                        }}>Change</button>
                                    </div>
                                </div>

                                <div className="summury-container">
                                    <p className='request-heading'>Budget</p>
                                    <div className="data-reached">
                                        <p>{budget}</p>
                                        <button onClick={() => {
                                            setToChange('budget')
                                            setStage(0)
                                        }}>Change</button>
                                    </div>
                                </div>

                                <div className="summury-container">
                                    <p className='request-heading'>Deadline</p>
                                    <div className="data-reached">
                                        <p>{deadline}</p>
                                        <button onClick={() => {
                                            setToChange('deadline')
                                            setStage(0)
                                        }}>Change</button>
                                    </div>
                                </div>

                                <div className="summury-container">
                                    <p className='request-heading'>Users to accomplish</p>

                                    <div className="accomplishers-list">
                                        <div className="accomplishers-container">
                                            {
                                                userToAccomplish.length > 0 ? userToAccomplish.map(usr => {
                                                    return <div className="user-offered">
                                                        <a href="#2">{usr.userLink}</a>
                                                    </div>
                                                }) : ''
                                            }
                                        </div>
                                    </div>

                                    <button className='change-final' onClick={() => {
                                        setToChange('accomplishers')
                                        setStage(100)
                                    }}>Change</button>
                                </div>
                            </div>

                            <div className="confirm">
                                <button onClick={() => {
                                    if (true) {
                                        setConfirm(true)
                                    }
                                }}>Confirm</button>
                            </div>
                        </div>
                    </div>

                    <div className="wide" style={{
                        display: !extended ? 'none' : 'flex'
                    }}>
                        <div className="wide-form">
                            <div className='wide-container'>
                                <p>Task <button onClick={() => {
                                    setExtended(!extended)
                                }}>Extended</button></p>
                                <textarea value={task} onChange={(e) => setTask(e.target.value)} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </RequestDiv>
    )

}

const RequestDiv = styled.div`
.form-wrapper {
    margin: auto;
    padding: 40px 0;
    width: 1400px;
    background: #BDBDBD;
    box-shadow: 20px 20px 30px rgb(0 0 0 / 25%);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.slider {
    display: flex;
    flex-direction: row;
    width: 100%;
    transition: .7s ease;
}

.first-stage, .second-stage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.request-container {
    display: flex;
    flex-direction: column;
    width: 500px;
    background: #d9d9d9;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    padding: 30px 0;
    height: 460px;
}

.components {
    display: flex;
    flex-direction: column;
    height: 400px;
    gap: 4px;
}

.form-component {
    transition: .9s ease;
    border-radius: 10px;

    p {
        font-family: 'Signika Negative', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
    }

    input[type=text], input[type="date"], textarea {
        border: none;
        outline: none;
        padding: 8px 10px;
        width: 330px;
        border-radius: 7px;
        margin-bottom: 10px;
        resize: none;
    }

    width: 350px;
    display: flex;
    flex-direction: column;
}

.topic-box {
    //display: flex;
    padding: 10px 0;

    .topic-list {
        display: flex;
        display: flex;
        max-width: 400px;
        // flex-wrap: wrap;
        gap: 6px 10px;
        max-height: 60px;
        overflow: auto;
    }

    .topic-item {
        display: flex;
        padding: 4px 8px;
        background: #FFF9D7;
        border-radius: 10px;

        a {
            font-family: 'Signika Negative', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
        }

        button {
            height: 14px;
            width: 14px;
            border: none;
            background: transparent;
            font-family: 'Signika Negative',sans-serif;
            font-weight: 600;
            cursor: pointer;
        }
    }
}

.continue button {
    height: 40px;
    width: 40px;
    border-radius: 30%;
    cursor: pointer;
}

.confirm button {
    height: 40px;
    width: 80px;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Signika Negative',sans-serif;
}

.user-list {
    width: 350px;
    height: 130px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
}

.selected {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 150px;
    overflow: auto;
}

.user-que > p {
    font-family: 'Signika Negative',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
}

.user-offered {
    width: 310px;
    border: solid black 2px;
    border-radius: 7px;
    padding: 4px;

    a {
        font-family: 'Signika Negative',sans-serif;
        display: inline-block;
        width: calc(310px - 60px);
        color: #5a5a5a;
    }

    button {
        width: 60px;
        height: 25px;
        cursor: pointer;
        background: white;
        border: none;
        border-radius: 4px;
        font-family: 'Signika Negative',sans-serif;
    }
}

.request-heading {
    font-family: 'Signika Negative',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
}

.summury-container {
    transition: .9s ease;
    border-radius: 10px;
    width: 350px;
    display: flex;
    flex-direction: column;
}

.topic-box {
    height: 25px;
}

.add-category {
    display: flex;
    justify-content: space-between;

    button {
        width: 40px;
        height: 32px;
        border: none;
        border-radius: 7px;
        outline: none;
        cursor: pointer;
    }
}

#exception {
    width: 270px;
}

.comeback {
    width: 350px;
    height: 30px;
    margin-bottom: 10px;

    button {
        height: 30px;
        width: 50px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
    }
}

.wide {
    position: absolute;
    width: 1400px;
    height: 600px;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wide-form {
    height: 90%;
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wide-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100%;

    textarea {
        border: none;
        outline: none;
        width: 80%;
        border-radius: 7px;
        margin-bottom: 10px;
        resize: none;
        height: calc(100% - 30px - 32px);
        margin: auto;
        padding: 10px 10px;
        font-family: 'Signika Negative',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

    p {
        font-family: 'Signika Negative',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        color: white;
        text-align: center;
    }
}

.extended-btn {
    padding: 2px 6px;
    background: #FFF9D7;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 13px;
}

.change-final {
    border: dashed;
    border-radius: 4px;
    padding: 3px;
    cursor: pointer;
}

.data-reached {
    display: flex;

    p {
        width: 290px;
    }

    button {
        border: dashed;
        border-radius: 4px;
        padding: 3px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
    }
}

.accomplishers-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 70px;
    padding-bottom: 10px;
}
`