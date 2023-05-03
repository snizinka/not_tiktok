import React from "react"

const NextButton = (props: any) => {

    return (
        <button onClick={() => { 
            props.slide('down')
         }} className="next-button">Next</button>
    )
};

export default NextButton;
