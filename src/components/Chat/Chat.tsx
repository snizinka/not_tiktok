// @ts-ignore
import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../Header";
import ScrollToBottom from 'react-scroll-to-bottom'
import io from 'socket.io-client'
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ChatStyle } from "./ChatStyle";
import ChatContactFactory from "./ChatContactFactory/ChatContactFactory";


export const Chat = () => {
    const socket = io("http://localhost:5000")

    const { chats, messages } = useTypedSelector(state => state.chat)
    const { user } = useTypedSelector(state => state.user)
    const { fetchChatUsers,
        fetchChatMessages,
        addChatMessage,
        removeChatMessage,
        editChatMessage
    } = useChatActions()
    const [selectedChat, setSelectedChat] = useState(null)
    const [contact, setContact]: any = useState({id: undefined, type: 'Private'})
    const [message, setMessage] = useState("")
    const [chatMode, setChatMode] = useState({ mode: 'Typing', messageId: null, message: { message: '', user: { username: '' } } })

    useEffect(() => {
        fetchChatUsers(user[0].userId)
    }, [])

    useEffect(() => {
        console.log(chats)
    }, [chats])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            if (data.user.userId !== user[0].userId) {
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
        socket.emit('join_chat', contact.id)
    }, [selectedChat])

    useEffect(() => {
        if (contact.id !== undefined)
            fetchChatMessages(contact)
    }, [contact])


    async function sendMessage(messageToSend: any, chatMode: any) {
        const message = {
            chat: contact.id,
            author: user[0].userId,
            message: messageToSend,
            time: '2022.12.15',
            details: user[0],
            chatMode: chatMode,
            chatType: contact.type
        }
        await socket.emit('send_message', message)
    }

    function operateMessage() {
        console.log(chatMode)
        if (contact.id !== undefined && message !== "" && chatMode.mode === 'Typing') {
            sendMessage(message, chatMode)
            setMessage('')
        }
        else if (chatMode.mode === 'Editing' && message !== "") {
            socket.emit('edit_message', { newmessage: message, messageId: chatMode.messageId, chat: contact })
            clearChatMode()
            setMessage('')
        } else if (chatMode.mode === 'Reply' && message !== "") {
            sendMessage(message, chatMode)
            clearChatMode()
            setMessage('')
        }
    }

    function clearChatMode() {
        setChatMode({ mode: 'Typing', messageId: null, message: { message: '', user: { username: '' } } })
    }

    function changeSelectedChat(chatId: any) {
        setSelectedChat(chatId)
    }

    function changeContact(contactId: any) {
        setContact(contactId)
    }

    function changeMessage(message: any) {
        setMessage(message)
    }

    function changeChatMode(chatMode: any) {
        setChatMode(chatMode)
    }

    function changeMessageState(message: any) {
        setMessage(message)
    }

    return (
        <ChatDiv>
            <Header></Header>
            <div className="chat-container">
                <div className="left-pannel">
                    <div className="chat-list">
                        {
                            chats?.map((user: any) => {
                                return <ChatContactFactory
                                    contacts={user}
                                    chatType={user.chatType}
                                    changeSelectedChat={changeSelectedChat}
                                    changeContact={changeContact}
                                />
                            })
                        }

                    </div>
                </div>

                <div className="chat-box">
                    <div className="chat-info"></div>

                    {
                        contact.id === undefined ? <div className="chat-field"><p>Chose a chat ...</p></div> :
                            <ScrollToBottom className="chat-field">
                                {
                                    messages.map((message: any[] | never[] | any | never) => {
                                        return <div key={`message-container-${message?.messageId}`} className="message-container" style={{ justifyContent: message?.user?.userId === user[0].userId ? 'flex-end' : 'flex-start' }}>
                                            <ChatMessage
                                                message={message}
                                                contact={contact}
                                                chatMode={chatMode}
                                                changeMessage={changeMessage}
                                                changeChatMode={changeChatMode}
                                            />
                                        </div>
                                    })
                                }
                            </ScrollToBottom>
                    }

                    <div className="inputRow">
                        <div>
                            {chatMode.mode === 'Reply' ?
                                <div className="replyingMessage">
                                    <div className="replyingMessageContent">
                                        <p>{chatMode?.message?.user?.username}: {' '}</p>
                                        <p>{chatMode?.message?.message}</p>
                                    </div>
                                    <button onClick={clearChatMode}>x</button>
                                </div> : ''}
                        </div>
                        <ChatInput
                            operateMessage={operateMessage}
                            message={message}
                            contact={contact.id}
                            changeMessageState={changeMessageState}
                        />
                    </div>
                </div>
            </div>
        </ChatDiv>
    )
};

const ChatDiv = ChatStyle