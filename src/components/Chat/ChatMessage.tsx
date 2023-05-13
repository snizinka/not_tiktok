import React, { useState, useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ChatMessageReply from "./ChatMessageReply";
import ChatMessageForwarded from "./ChatMessageForwarded";
import img from '../../post_content/assets/reply-arrow.png'
import LoadImage from "../../hooks/LoadImage";
import LoadVideo from "../../hooks/LoadVideo";

const ChatMessage = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [displayMessageActions, setDisplayMessageActions] = useState(false)
    const [messageFile, setMessageFile]: any = useState(null)

    useEffect(() => {
        const index = props.message?.message.indexOf('.')
        const result = props.message?.message.substring(index + 1)
        setMessageFile(result)
        if (result === 'jpg' || result === 'png') {
            console.log(result)
        }
    }, [])

    function ChatMessageHandler() {
        return <div className="message-action-container">
            {props.message.user.userId === user[0].userId ? <button
                className="messageHandler remove"
                onClick={() => {
                    props.socket.emit('remove_message', { chat: props.contact, author: user[0].userId, messageId: props.message.messageId });
                }}>Remove</button> : ''}
            
            {props.message.user.userId === user[0].userId && (messageFile !== 'jpg' && messageFile !== 'png') ? <button
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
                    
                    {messageFile === 'jpg' || messageFile === 'png' || messageFile === 'mkv' || messageFile === 'mp4' ? '' : <p className="message-content">{props.message?.message}</p> }
                    {messageFile === 'jpg' || messageFile === 'png' ? <LoadImage className={'message-image'} path={props.message?.message} /> : ''}
                    {messageFile === 'mkv' || messageFile === 'mp4' ? <LoadVideo className={'message-image'} path={props.message?.message} /> : ''}

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
