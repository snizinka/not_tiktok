import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'

export const Request = (props: any) => {
    const [stage, setStage] = useState(0);

    return (
        <RequestDiv>
            <Header></Header>
            <div className="form-wrapper">
                <div className="slider"
                    style={{ transform: `translate(-${stage}%, 0px)` }}>
                    <div className="first-stage">
                        <div className='request-container'>
                            <div className="form-component">
                                <p>Topic</p>
                                <input type="text" />
                                <button>Add</button>
                                <div className='topic-box'>
                                    <div className='topic-list'>
                                        <div className="topic-item">
                                            <button className='remove-item'>x</button>
                                            <a href='#1'>Science</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-component'>
                                <p>Task</p>
                                <input type="text" />
                            </div>

                            <div className="form-component">
                                <p>Budget</p>
                                <input type="text" />
                            </div>

                            <div className="form-component">
                                <p>Deadline</p>
                                <input type="date" />
                            </div>

                            <div className="form-component">
                                <p>More details (Word file)</p>
                                <input type="file" />
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
                            <div className="form-component">
                                <p>User to accomplish</p>
                                <input type="text" className='search-user' />
                                <button>Add</button>
                            </div>

                            <div className="user-list">
                                <div className="user-offered">
                                    <p>Some user to accomplish</p>
                                    <a href="#2">Visit profile</a>
                                </div>
                            </div>

                            <div className="user-que">

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
                </div>
            </div>
        </RequestDiv>
    )

}

const RequestDiv = styled.div`
.form-wrapper {
    margin: auto;
    padding: 20px 0;
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
    gap: 20px;
    padding: 30px 0;
}

.form-component {
    p {
        font-family: 'Signika Negative', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
    }

    input[type=text], input[type="date"] {
        border: none;
        outline: none;
        padding: 8px 10px;
        width: 330px;
        border-radius: 7px;
        margin-bottom: 10px;
    }

    width: 350px;
    display: flex;
    flex-direction: column;
}

.topic-box {
    //display: flex;

    .topic-list {
        display: flex;
        display: flex;
        max-width: 400px;
        flex-wrap: wrap;
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
`