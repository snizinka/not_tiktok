import React from "react"

const BackButton = (props: any) => {
    return (
        <button className="back-btn" onClick={() => props.switchHorizontalSlide(props.slide)}>
            Back
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
        </button>
    )
};

export default BackButton;
