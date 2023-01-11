import React from 'react'
import styled from 'styled-components'

export const Request = (props: any) => {

    return (
        <RequestDiv>
           <div className='request-container'>
            <div className='form-comonent'>
                <p>Task</p>
                <input type="text" />
            </div>

            <div className="form-component">
                <p>Topic</p>
                <input type="text" />
            </div>

            <div className="form-component">
                <p>Budget</p>
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
        </RequestDiv>   
    )
    
}

const RequestDiv = styled.div`

`