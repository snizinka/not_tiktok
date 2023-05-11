import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import io from 'socket.io-client'
import ChatMessageReply from "./ChatMessageReply";
import ChatMessageForwarded from "./ChatMessageForwarded";
import img from '../../post_content/assets/reply-arrow.png'

const ChatMessage = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const socket = io("http://localhost:9000")
    const [displayMessageActions, setDisplayMessageActions] = useState(false)

    useEffect(() => {

    }, [])

    function ChatMessageHandler() {
        return <div className="message-action-container">
            {props.message.user.userId === user[0].userId ? <button
                className="messageHandler remove"
                onClick={() => {
                    socket.emit('remove_message', { chat: props.contact, messageId: props.message.messageId });
                }}>Remove</button> : ''}

            {props.message.user.userId === user[0].userId ? <button
                className="messageHandler"
                onClick={() => {
                    if (props.chatMode.mode !== 'Editing') {
                        props.changeMessage(props.message.message);
                        props.changeChatMode({ mode: 'Editing', messageId: props.message.messageId, from: props.contact.type });
                    } else {
                        props.changeMessage('');
                        props.changeChatMode({ mode: 'Typing', messageId: props.message.messageId, from: props.contact.type });
                    }

                }}>Edit</button> : ''}

            <button
                className="messageHandler"
                onClick={() => {
                    if (props.chatMode.mode !== 'Forward') {
                        props.changeChatMode({ mode: 'Forward', message: props.message.messageId, from: props.contact.type });
                    } else {
                        props.changeMessage('');
                        props.changeChatMode({ mode: 'Typing', messageId: props.message.messageId, from: props.contact.type });
                    }
                }}>Forward</button>
        </div>
    }

    return (
        <><div>
            <div className="message" onContextMenu={(e) => {
                e.preventDefault()
                setDisplayMessageActions(!displayMessageActions)
            }}>
                <button
                    className="replyHandler"
                    onClick={() => {
                        if (props.chatMode.mode !== 'Reply') {
                            props.changeChatMode({ mode: 'Reply', message: props.message, from: props.contact.type });
                        } else {
                            props.changeMessage('');
                            props.changeChatMode({ mode: 'Typing', messageId: props.message.messageId, from: props.contact.type });
                        }
                    }}><img className="replyAsset" src={img} alt='' /></button>
                {props.message?.user?.userImage ? <img className="chat-img" src={require(`../../post_content/pictures/${props.message?.user?.userImage}`)} alt="" /> : ''}
                <div className="message-info">
                    <p className="username">{props.message?.user?.username}</p>
                    <p className="message-content">{props.message?.message}</p>

                    {props.message?.reply ? <ChatMessageReply reply={props.message.reply} /> : ''}
                    {props.message?.forwarded ? <ChatMessageForwarded forwarded={props.message.forwarded} /> : ''}
                </div>
            </div>
        </div>
            <div className="message-action">
                {displayMessageActions ? <ChatMessageHandler /> : ''}
            </div></>
    )
};

export default ChatMessage;
