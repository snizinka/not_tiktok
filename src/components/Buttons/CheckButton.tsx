import React from "react"

const CheckButton = ({ checked, setChecked }: any) => {

    return (
        <button style={{
            width: '52px',
            height: '28px',
            position: 'relative',
            borderRadius: '20px',
            background: checked ? '#6EDD5F' : '#DDDDDD',
            boxSizing: 'content-box',
            border: 'none',
            cursor: 'pointer',
        }}
            className="choice-checkbox"
            onClick={() => setChecked()}
        >
            <div style={{
                background: '#FFFFFF',
                height: '20px',
                width: '20px',
                borderRadius: '100%',
                position: 'absolute',
                left: checked ? '25px' : '5px',
                bottom: '13%',
                boxShadow: '2px 4px 6px rgba(0,0,0,0.2)'
            }} className="dot-switch"></div>
        </button>
    )
};

export default CheckButton;
