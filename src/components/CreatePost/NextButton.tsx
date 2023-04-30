import React, { useState } from "react"

const NextButton = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <button onClick={() => setClicked(true)} className="next-button">Next</button>
    )
};

export default NextButton;
