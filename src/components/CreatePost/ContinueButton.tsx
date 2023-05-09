import React, { memo } from "react"

const ContinueButton = (props: any) => {
    return (
        <div className="container">
            <button onClick={() => { 
                if (props.validateContet() === false) {
                    props.switchHorizontalSlide(2) 
                }
                
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

export default memo(ContinueButton);
