// @ts-ignore
import React, { useEffect, useState } from "react"
import useActions from "../hooks/useActions";
import useChatActions from "../hooks/useChatActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
    fetchChatUsers,
    fetchChatMessages,
    addChatMessage,
    removeChatMessage,
    editChatMessage
} from "../store/action-creator/chat";
import styled from 'styled-components'
import Header from "./Header";
import ScrollToBottom from 'react-scroll-to-bottom'
import io from 'socket.io-client'


export const Chat = () => {
    const socket = io("http://localhost:5000")

    const { error, loading, chats, chat, messages } = useTypedSelector(state => state.chat)
    const { user } = useTypedSelector(state => state.user)
    const { fetchChatUsers,
        fetchChatMessages,
        addChatMessage,
        removeChatMessage,
        editChatMessage
    } = useChatActions()
    const [selectedChat, setSelectedChat] = useState(null)
    const [chatInfo, setChatInfo]: any[] | never[] | any | never = useState(null)
    const [contact, setContact]: any = useState("")
    const [message, setMessage] = useState("")
    const [chatMode, setChatMode] = useState({ mode: 'Typing', messageId: null })

    async function sendMessage(messageToSend: any, chatMode: any) {
        const message = {
            chat: contact,
            author: user[0].userId,
            message: messageToSend,
            time: '2022.12.15',
            details: user[0],
            chatMode: chatMode
        }
        await socket.emit('send_message', message)
    }


    useEffect(() => {
        fetchChatUsers(user[0].userId)
    }, [])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            if (data.author !== user[0].userId) {
            }
            addChatMessage(data)
        })

        socket.on('message_removed', (data) => {
            removeChatMessage(data)
        })

        socket.on('message_edited', (data) => {
            editChatMessage(data)
        })
    }, [socket])

    useEffect(() => {
        socket.emit('join_chat', contact)
    }, [selectedChat])

    useEffect(() => {
        if (contact != "")
            fetchChatMessages(contact)
    }, [contact])


    return (
        <ChatDiv>
            <Header></Header>
            <div className="chat-container">
                <div className="left-pannel">
                    <div className="chat-list">
                        {
                            chats.map(chat => {
                                return <div className="chat" onClick={() => {
                                    setSelectedChat(chat.userId)
                                    setContact(chat.contactId)
                                    setChatInfo((chatInfo: any) => [chat])
                                }}>
                                    <img className="chat-img" src={require(`../post_content/pictures/${chat.firstId === user[0].userId ? chat.secondImage : chat.firstImage}`)} alt="" />
                                    <div className="chat-textside">
                                        <p className="chat-username">{chat.firstId === user[0].userId ? chat.secondName : chat.firstName}</p>
                                        <p className="chat-text">Chat text</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>

                <div className="chat-box">
                    <div className="chat-info"></div>

                    {
                        contact === null ? <div className="chat-field"><p>Chose a chat ...</p></div> :
                            <ScrollToBottom className="chat-field">
                                {
                                    messages.map((message: any[] | never[] | any | never) => {
                                        return <div className="message-container" style={{ justifyContent: message.userId === user[0].userId ? 'flex-end' : 'flex-start' }}>
                                            <div>
                                                <div className="message">
                                                    <img className="chat-img" src={require(`../post_content/pictures/${message.userImage}`)} alt="" />
                                                    <div className="message-info">
                                                        <p className="username">{message.username}</p>
                                                        <p className="message-content">{message.message}</p>
                                                        {
                                                            message.reply.map((repl: any) => {
                                                                return messages.map((ms2: any) => {
                                                                    console.log(ms2)
                                                                    if (ms2.messageId === repl.replyId) {
                                                                        return <div className="reply-container">
                                                                            <div className="message-info reply">
                                                                                <p className="username reply">{ms2.username}</p>
                                                                                <p className="message-content reply">{ms2.message}</p>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                })
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="message-action">
                                                <div className="message-action-container">
                                                    <button onClick={() => {
                                                        socket.emit('remove_message', { chat: contact, messageId: message.messageId })
                                                    }}>Remove</button>

                                                    <button onClick={() => {
                                                        if (chatMode.mode !== 'Editing') {
                                                            setMessage(message.message)
                                                            setChatMode({ mode: 'Editing', messageId: message.messageId })
                                                        } else {
                                                            setMessage('')
                                                            setChatMode({ mode: 'Typing', messageId: message.messageId })
                                                        }

                                                    }}>Edit</button>
                                                    <button
                                                        onClick={() => {
                                                            if (chatMode.mode !== 'Reply') {
                                                                setChatMode({ mode: 'Reply', messageId: message.messageId })
                                                            } else {
                                                                setMessage('')
                                                                setChatMode({ mode: 'Typing', messageId: message.messageId })
                                                            }
                                                        }}>Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </ScrollToBottom>
                    }

                    <div className="chat-accessories">
                        <textarea rows={7} className="input-message" onInput={(e: any) => {
                            setMessage(e.target.value)
                        }} value={message} />
                        <button className="send-message"
                            onClick={() => {
                                if (contact !== null && message !== "" && chatMode.mode === 'Typing') {
                                    sendMessage(message, chatMode)
                                    setMessage('')
                                }
                                else if (chatMode.mode === 'Editing' && message !== "") {
                                    socket.emit('edit_message', { newmessage: message, messageId: chatMode.messageId, chat: contact })
                                    setChatMode({ mode: 'Typing', messageId: null })
                                    setMessage('')
                                } else if(chatMode.mode === 'Reply' && message !== "") {
                                    sendMessage(message, chatMode) // REPLIES
                                    setChatMode({ mode: 'Typing', messageId: null })
                                    setMessage('')
                                }
                            }}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    if (contact !== null && message !== "")
                                        sendMessage(message, chatMode)
                                }
                            }}
                        >Send</button>
                    </div>
                </div>
            </div>
        </ChatDiv>
    )
};

const ChatDiv = styled.div`
    .chat-img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        object-fit: cover;
        padding-right: 5px;
    }

    .chat {
        display: flex;
        height: 60px;
        width: 100%;
        padding: 3px;
        border: solid #b1bce6 3px;
        border-radius: 10px;
        cursor: pointer;
    }

    .chat-username {
        font-family: 'Signika Negative', sans-serif;
        font-weight: 600;
        font-size: 20px;
        padding-top: 2.5px;
    }

    .chat-text {
        font-family: 'Signika Negative', sans-serif;
        padding-top: 2.5px;
        font-size: 15px;
    }

    .chat-textside {
        
    }

    .chat-field {
        height: calc(100vh - 320px);
        overflow: auto;
    }

    .chat-field>div {
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 90%;
    }

    .message-container {
        display: flex;
    }

    .message {
        display: inline-flex;
    }

    .chat-img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        object-fit: cover;
        padding-right: 5px;
    }
    
    .username {
        font-family: 'Signika Negative', sans-serif;
        font-weight: 600;
        font-size: 20px;
        padding-top: 2.5px;
    }

    .message-content {
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
    }
    
    .chat-container {
        display: flex;
        width: 1400px;
        margin: auto;
    }

    .left-pannel {
        width: 25%;
        display: flex;
        justify-content: center;
    }

    .chat-box {
        width: 75%;
    }

    .chat-list {
        width: 90%;
    }

    .input-message {
        width: 40%;
        height: auto;
        border: none;
        outline: none;
        border-radius: 7px;
        margin-right: 30px;
        resize: none;
        padding: 3px;
    }

    .chat-accessories {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .send-message {
        height: 30px;
        border: none;
        outline: none;
        border-radius: 7px;
        padding: 0 10px;
        cursor: pointer;
        font-family: 'Signika Negative',sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    .chat-info {
        padding: 6px 0;
        height: 60px;
        background: #b1bce6;
        border-radius: 10px;
    }

    .reply-container {
        display: flex;
    }

    .reply {
        font-size: 14px;
    }
`