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
import ChatGroupAdd from "./ChatGroupAdd";
import ChatUsers from "./ChatUsers";

export const Chat = () => {
    const socket = io("http://localhost:9000")

    const { chats, messages, loadingMessages } = useTypedSelector(state => state.chat)
    const { user } = useTypedSelector(state => state.user)
    const { 
        fetchChatUsers,
        fetchChatMessages,
        addChatMessage,
        removeChatMessage,
        editChatMessage,
        sortContacts
    } = useChatActions()
    const [selectedChat, setSelectedChat] = useState(false)
    const [selectedGroup, setSelectedGroup] = useState<any>(null)
    const [contact, setContact]: any = useState({ id: undefined, type: 'Private', name: '' })
    const [addNewChat, setAddNewChat] = useState(false)
    const [showChatUsers, setShowChatUsers] = useState(false)
    const [message, setMessage] = useState("")
    const [contactToSearch, setContactToSearch] = useState("")
    const [chatMode, setChatMode] = useState({ mode: 'Typing', messageId: null, message: { message: '', user: { username: '' } }, from: '' })

    useEffect(() => {
        fetchChatUsers(user[0].userId)
        return () => {
            socket.disconnect();
        }
    }, [])

    useEffect(() => {
        console.log(chats)

    }, [chats])

    useEffect(() => {
        socket.on('message_removed', (data) => {
            removeChatMessage(data)
        })

        socket.on('message_edited', (data) => {
            editChatMessage(data)
        })
    }, [socket])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            if (data.user.userId !== user[0].userId) {
            }
            addChatMessage(data)
        })
    }, [socket, message])

    useEffect(() => {
        console.log(contact)
        if (contact.id !== undefined) {
            socket.off('disconnect')
            socket.emit('join_chat', contact.id)
            fetchChatMessages(contact)
        }
    }, [contact])

    useEffect(() => {
        sortContacts(contactToSearch)
    }, [contactToSearch])


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
        socket.emit('send_message', message)
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
        } else if (chatMode.mode === 'Forward') {
            sendMessage(message, chatMode)
            clearChatMode()
            setMessage('')
        }
    }

    function clearChatMode() {
        setChatMode({ mode: 'Typing', messageId: null, message: { message: '', user: { username: '' } }, from: '' })
    }

    function changeSelectedChat(chat: any) {
        setSelectedGroup(chat)
    }

    function changeContact(contactId: any) {
        if (contact.id !== undefined) {
            socket.emit('leave', contact.id)
        }
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

    function changeShowChatUsers() {
        setShowChatUsers(!showChatUsers)
    }

    function changesetSelectedChat() {
        setSelectedChat(!selectedChat)
    }

    function changeAddNewChat() {
        setAddNewChat(!addNewChat)
    }

    return (
        <ChatDiv>
            <Header></Header>
            <div className="chat-container">
                <div className="left-pannel">
                    <div className="chat-list">
                        <div className="new_chat">
                            <button className="create_chat_trigger" onClick={() => setAddNewChat(!addNewChat)}>Create a new chat</button>
                        </div>
                        <div className="search_contact">
                            <input
                                className="search_fro_chat"
                                type="text"
                                value={contactToSearch}
                                onInput={(e: any) => setContactToSearch(e.target.value)}
                                placeholder='Search'
                            />
                        </div>
                        <div className="chat_list">
                            {
                                chats?.map((user: any, id: number) => {
                                    return <ChatContactFactory
                                        key={`chatfactory${id}`}
                                        contacts={user}
                                        chatType={user?.chatType}
                                        changeSelectedChat={changeSelectedChat}
                                        changeContact={changeContact}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="chat-box">
                    <div className="chat-info">
                        {contact.type !== 'Group' ? contact.name : ''}
                        {contact.type === 'Group' ? <button className="chat-info-btn" onClick={changeShowChatUsers}>{contact.name}</button> : ''}
                    </div>

                    {
                        contact.id === undefined ? <div className="chat-field"><p>Chose a chat ...</p></div> :
                            <ScrollToBottom className="chat-field">
                                {
                                    loadingMessages ? <div>
                                        <p>Loading</p>
                                    </div> :
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
                                <div>
                                    {selectedGroup && showChatUsers ? <ChatUsers
                                        changeShowChatUsers={changeShowChatUsers}
                                        contact={contact}
                                        selectedChat={selectedChat}
                                        changesetSelectedChat={changesetSelectedChat}
                                        chats={chats.filter((cht: any) => cht.chatType === 'Group')
                                            .flatMap((cht: any) => cht.chat)
                                            .filter((group: any) => group.chatId === selectedGroup.chatId)[0]} /> : ''}
                                </div>
                            </ScrollToBottom>
                    }

                    <div className="inputRow">
                        <ChatInput
                            clearChatMode={clearChatMode}
                            chatMode={chatMode}
                            operateMessage={operateMessage}
                            message={message}
                            contact={contact.id}
                            changeMessageState={changeMessageState}
                        />
                    </div>
                    {
                        addNewChat ? <ChatGroupAdd
                            changeAddNewChat={changeAddNewChat}
                        /> : ''
                    }
                </div>
            </div>
        </ChatDiv>
    )
};

const ChatDiv = ChatStyle