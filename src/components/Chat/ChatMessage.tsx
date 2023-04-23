import React, { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import io from 'socket.io-client'
import ChatMessageReply from "./ChatMessageReply";

const ChatMessage = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const socket = io("http://localhost:5000")

    useEffect(() => {

    }, [])

    function ChatMessageHandler() {
        return <div className="message-action-container">
            {props.message.user.userId === user[0].userId ? <button onClick={() => {
                socket.emit('remove_message', { chat: props.contact, messageId: props.message.messageId });
            }}>Remove</button> : ''}

            {props.message.user.userId === user[0].userId ? <button onClick={() => {
                if (props.chatMode.mode !== 'Editing') {
                    props.changeMessage(props.message.message);
                    props.changeChatMode({ mode: 'Editing', messageId: props.message.messageId });
                } else {
                    props.changeMessage('');
                    props.changeChatMode({ mode: 'Typing', messageId: props.message.messageId });
                }

            }}>Edit</button> : ''}

            <button
                onClick={() => {
                    if (props.chatMode.mode !== 'Reply') {
                        props.changeChatMode({ mode: 'Reply', message: props.message });
                    } else {
                        props.changeMessage('');
                        props.changeChatMode({ mode: 'Typing', messageId: props.message.messageId });
                    }
                }}>Reply</button>
            <button>Forward</button>
        </div>
    }

    return (
        <><div>
            <div className="message">
                {props.message?.user?.userImage ? <img className="chat-img" src={require(`../../post_content/pictures/${props.message?.user?.userImage}`)} alt="" /> : ''}
                <div className="message-info">
                    <p className="username">{props.message?.user?.username}</p>
                    <p className="message-content">{props.message?.message}</p>

                    {props.message?.reply ? <ChatMessageReply reply={props.message.reply} /> : ''}
                </div>
            </div>
        </div>
            <div className="message-action">
                <ChatMessageHandler />
            </div></>
    )
};

export default ChatMessage;
