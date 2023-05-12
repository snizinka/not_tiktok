// @ts-ignore
import React, { useEffect, useState, useRef } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../Header";
import ScrollToBottom from 'react-scroll-to-bottom'
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ChatStyle } from "./ChatStyle";
import ChatContactFactory from "./ChatContactFactory/ChatContactFactory";
import ChatGroupAdd from "./ChatGroupAdd";
import ChatUsers from "./ChatUsers";

export const ChatTest = (props: any) => {
    const [message, setMessage]: any = useState('')
    const selectedChat: any = useRef<any>(false)
    const selectedGroup = useRef<any>(null)
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

    const contactt: any = useRef(undefined)
    const [contact, setContact]: any = useState({ id: undefined, type: 'Private', name: '' })
    const [addNewChat, setAddNewChat] = useState(false)
    const [showChatUsers, setShowChatUsers] = useState(false)
    const [contactToSearch, setContactToSearch] = useState("")
    const [chatMode, setChatMode] = useState({ mode: 'Typing', messageId: null, message: { message: '', user: { username: '' } }, from: '' })

    useEffect(() => {
        props.socket?.emit('join_chat', {
            id: user[0].userId,
            joinMethod: 'private'
        })

        props.socket?.on('message_removed', (data: any) => {
            if ((contactt.current === data.author) || (user[0].userId === data.author) || (selectedGroup.current?.chatId === data.chat.id)) {
                removeChatMessage(data.messageId)
            }
        })

        props.socket?.on('message_edited', (data: any) => {
            if ((contactt.current === data.author) || (user[0].userId === data.author) || (selectedGroup.current?.chatId === data.chat.id)) {
                editChatMessage(data)
            }
        })

        props.socket?.on('receive_message', (data: any) => {
            if ((contactt.current === data.user.userId) || (user[0].userId === data.user.userId) || (selectedGroup.current?.chatId === data.contactId)) {
                addChatMessage(data)
            }
        })

        props.socket?.on('added_to_chat', (data: any) => {
           console.log(data)
        })

        fetchChatUsers(user[0].userId)
        return () => { props.socket?.removeAllListeners() }
    }, [])

    useEffect(() => {
        if (contact.id !== undefined) {
            contactt.current = contact.receiver
            if (contact.type === 'Group') {
                props.socket?.emit('join_chat', {
                    rooms: [user[0].userId, contact.id],
                    joinMethod: 'group'
                })
            }
            fetchChatMessages(contact)
        }
    }, [contact])

    useEffect(() => {
        sortContacts(contactToSearch)
    }, [contactToSearch])


    async function sendMessage(messageToSend: any, chatMode: any) {
        const message = {
            chat: contact.id,
            receiver: contact.receiver,
            author: user[0].userId,
            message: messageToSend,
            time: '2022.12.15',
            details: user[0],
            chatMode: chatMode,
            chatType: contact.type
        }

        console.log(message)

        props.socket?.emit('send_message', message)
    }

    function operateMessage() {
        console.log(chatMode)
        if (contact.id !== undefined && message !== "" && chatMode.mode === 'Typing') {
            sendMessage(message, chatMode)
            setMessage('')
        }
        else if (chatMode.mode === 'Editing' && message !== "") {
            props.socket?.emit('edit_message', { newmessage: message, author: user[0].userId, messageId: chatMode.messageId, chat: contact })
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
        selectedGroup.current = (chat)
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

    function changeShowChatUsers() {
        setShowChatUsers(!showChatUsers)
    }

    function changesetSelectedChat() {
        selectedChat.current = (!selectedChat.current)
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
                                                    socket={props.socket}
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
                                    {selectedGroup.current && showChatUsers ? <ChatUsers
                                        changeShowChatUsers={changeShowChatUsers}
                                        contact={contact}
                                        selectedChat={selectedChat.current}
                                        changesetSelectedChat={changesetSelectedChat}
                                        chats={chats.filter((cht: any) => cht.chatType === 'Group')
                                            .flatMap((cht: any) => cht.chat)
                                            .filter((group: any) => group.chatId === selectedGroup.current.chatId)[0]} /> : ''}
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