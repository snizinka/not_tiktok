import React from "react"

const UsersAndPostsList = ({ result, changeSelectedItem }: any) => {
    return (
        <div className="results-wrapper">
            <div className="results-container">
                {
                    result.map((item: any, index: any) => {
                        if (item.type === 'user') {
                            return <div
                                onClick={() => changeSelectedItem(item)}
                                className="result-item"
                                key={index}>
                                <p>{item.username.slice(0, 36)}</p>
                                <p className="indetifiery">User</p>
                            </div>
                        } else {
                            return <div
                                onClick={() => changeSelectedItem(item)}
                                className="result-item"
                                key={index}>
                                <p>{item.description.slice(0, 36)}</p>
                                <p className="indetifiery">Post</p>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default UsersAndPostsList
