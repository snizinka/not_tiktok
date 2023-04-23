import React from "react"

const ChatMessageReply = (props: any) => {
    return (
        <div key={`reply-${props.reply?.messageId}`} className="reply-container">
            <div className="message-info reply">
                <p className="username reply">{props.reply?.user?.username}</p>
                <p className="message-content reply">{props.reply?.message}</p>
            </div>
        </div>
    )
};

export default ChatMessageReply;
