import React from "react"

const ChatMessageForwarded = (props: any) => {
    return (
        <div key={`forwarded-${props.forwarded?.messageId}`} className="forwarded-container">
            <div className="message-info forwarded">
                <p className="username forwarded">Forwarded from {props.forwarded?.user?.username}</p>
                <p className="message-content forwarded">{props.forwarded?.message}</p>
            </div>
        </div>
    )
};

export default ChatMessageForwarded;
