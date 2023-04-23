import React, { useState } from "react"

const ChatInput = (props: any) => {

    return (
        <>
            <div className="chat-accessories">
                <textarea rows={4} className="input-message" onInput={(e: any) => {
                    props.changeMessageState(e.target.value)
                }} value={props.message} />
                <button className="send-message"
                    onClick={props.operateMessage}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            if (props.contact !== null && props.message !== "")
                                props.operateSendMessage()
                        }
                    }}
                >Send</button>
            </div>
        </>
    )
};

export default ChatInput;
