import React from 'react'
import styled from 'styled-components'

export const Request = (props: any) => {

    return (
        <RequestDiv>
            <div className="form-wrapper">
                <div className='request-container'>
                    <div className="form-component">
                        <div className='topic-box'>
                            <p>Topic</p>
                            <div className='topic-list'>
                                <div className="topic-item">
                                    <button className='remove-item'>x</button>
                                    <a href='#'>Science</a>
                                </div>
                            </div>
                        </div>
                        <input type="text" />
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
                        <input type="text" />
                    </div>

                    <div className="form-component">
                        <p>More details (Word file)</p>
                        <input type="file" />
                    </div>

                    <div className="form-component">
                        <p>User to accomplish</p>
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
    flex-direction: column;
    justify-content: center;
}

.request-container {
    display: flex;
    flex-direction: column;
}

.form-component {
    p {
        font-family: 'Signika Negative', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 19px;
    }

    input[type=text] {
        border: none;
        outline: none;
        padding: 8px 10px;
        width: 270px;
        border-radius: 7px;
    }

    display: flex;
    flex-direction: column;
}

.topic-box {
    display: flex;

    .topic-list {
        display: flex;
    }

    .topic-item {
        display: flex;
        padding: 2px 6px;
        background: #FFF9D7;
        border-radius: 7px;

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
        }
    }
}
`