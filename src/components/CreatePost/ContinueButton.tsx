import React from "react"

const ContinueButton = (props: any) => {
    return (
        <div className="container">
            <button onClick={() => { 
                props.validateContet()
                //props.switchHorizontalSlide(2) 
                }} className="button">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Continue</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
            </button>
        </div>
    )
};

export default ContinueButton;
