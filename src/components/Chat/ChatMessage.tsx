import React, { useState, useEffect, useRef } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ChatMessageReply from "./ChatMessageReply";
import ChatMessageForwarded from "./ChatMessageForwarded";
import img from '../../post_content/assets/reply-arrow.png'
import LoadImage from "../../hooks/LoadImage";
import LoadVideo from "../../hooks/LoadVideo";
import ChatPostPreview from "./ChatPostPreview";
import { useInView } from "react-intersection-observer";
import useChatActions from "../../hooks/useChatActions";

const ChatMessage = (props: any) => {
    const { setSeenStatus } = useChatActions()
    const messageRef = useRef<any>()
    const { firstUnread } = useTypedSelector(state => state.chat)
    const { user } = useTypedSelector(state => state.user)
    const [displayMessageActions, setDisplayMessageActions] = useState(false)
    const [messageFile, setMessageFile]: any = useState(null)

    useEffect(() => {
        const index = props.message?.message?.indexOf('.')
        const result = props.message?.message?.substring(index + 1)
        setMessageFile(result)
    }, [])

    useEffect(() => {
        if (props.message.messageId === firstUnread) {
            const scrollSetupElement = document.getElementById('scrollSetup');
            if (scrollSetupElement) {
                const firstElementChild = scrollSetupElement.children[props.index]
                if (firstElementChild) {
                    firstElementChild.scrollIntoView()
                }
            }
        }
    }, [firstUnread])

    function isValidHttpUrl(string: any) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    function isPost(url: any) {
        const lastIndex = url.lastIndexOf('/');
        const result = url.substring(0, lastIndex)
        return result === 'http://localhost:3000/content'
    }

    function getPostId(url: any) {
        const lastIndex = url.lastIndexOf('/');
        const result = url.substring(lastIndex + 1)
        return result
    }

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

    function MessageRender() {
        if (messageFile === 'jpg' || messageFile === 'png') {
            return <LoadImage className={'message-image'} path={props.message?.message} />
        } else if (messageFile === 'mkv' || messageFile === 'mp4') {
            return <LoadVideo className={'message-image'} path={props.message?.message} />
        } else {
            if (isValidHttpUrl(props.message?.message)) {
                return <>
                    {isPost(props.message?.message) ? <ChatPostPreview id={getPostId(props.message?.message)} />
                        : <a href={props.message?.message} className="message-content">{props.message?.message}</a>}
                </>
            } else {
                return <p className="message-content">{props.message?.message}</p>
            }
        }
    }

    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: '0px',
        triggerOnce: true,
    })


    useEffect(() => {
        if (inView) {
            if ((props.message.seen === 0 || props.message.seen === null) && props.message.user.userId !== user[0].userId) {
                setSeenStatus(props.message.messageId)
            }
        }
    }, [inView])

    return (
        <><div ref={messageRef}>
            <div ref={ref} className="message" onContextMenu={(e) => {
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

                    {/* <MessageRender /> */}
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
