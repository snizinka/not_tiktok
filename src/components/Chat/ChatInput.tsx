import React, { useEffect } from "react"

const ChatInput = (props: any) => {
    useEffect(() => {
        console.log(props.message)
    }, [props])

    return (
        <>
            <div className="chat-all">
                <div className="chat-accessories">
                    <div className="chat-reply-container">
                        {props.chatMode.mode === 'Reply' ?
                            <div className="replyingMessage">
                                <div className="replyingMessageContent">
                                    <p className="reply-username">{props.chatMode?.message?.user?.username}: {' '}</p>
                                    <p className="reply-message">{ props.chatMode?.message?.forwarded ? props.chatMode?.message?.forwarded?.message : props.chatMode?.message?.message}</p>
                                </div>
                                <button className="reply-cancel" onClick={props.clearChatMode}>x</button>
                            </div> : ''}
                    </div>
                    <textarea rows={4} className="input-message" onInput={(e: any) => {
                        props.changeMessageState(e.target.value)
                    }} value={props.message} />
                </div>
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
