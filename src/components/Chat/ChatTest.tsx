// @ts-ignore
import React, { MutableRefObject, useEffect, useState, useRef } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Header from "../Header";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ChatStyle } from "./ChatStyle";
import ChatContactFactory from "./ChatContactFactory/ChatContactFactory";
import ChatGroupAdd from "./ChatGroupAdd";
import ChatUsers from "./ChatUsers";
import { socket } from "./ChatSocket";
import ScrollSetup from "../ScrollSetup";

export const ChatTest = (props: any) => {
    const [message, setMessage]: any = useState('')
    const [selectedChat, setSelectedChat]: any = useState(false)
    const [atTop, setAtTop]: any = useState(false)
    const [allowScrollingBottom, setAllowScrollingBottom]: any = useState(0)
    const [limit, setLimit]: any = useState(20)
    const selectedGroup = useRef<any>(null)
    const { chats, messages, loadingMessages } = useTypedSelector(state => state.chat)
    const { user } = useTypedSelector(state => state.user)
    const {
        fetchChatUsers,
        fetchChatMessages,
        addChatMessage,
        removeChatMessage,
        editChatMessage,
        sortContacts,
        createChat,
        addUsersToChat,
        removeUserFromChat,
        leftChat,
        fetchLimitChatMessages
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
            createChat(data)
        })

        props.socket?.on('added_user_to_chat', (data: any) => {
            let commit = true
            data.users.map((use: any) => {
                if (use.user.userId === user[0].userId) {
                    commit = false
                }
            })

            if (commit) {
                addUsersToChat(data)
            }
        })

        props.socket?.on('removed_from_chat', (data: any) => {
            if (data.userId === user[0].userId) {
                let leave = {}
                if (data.chatType === 'Group') {
                    leave = {
                        chatId: data.chatId,
                        userId: user[0].userId,
                        chatType: 'Group'
                    }
                } else {
                    leave = {
                        contactId: data.contactId,
                        userId: user[0].userId,
                        chatType: 'Provate'
                    }
                }

                leftChat(leave)
            } else {
                removeUserFromChat(data)
            }
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
        setSelectedChat(!selectedChat)
    }

    function changeAddNewChat() {
        setAddNewChat(!addNewChat)
    }

    function setIsAtTop(atTop: boolean) {
        setAtTop(true)
    }

    // TODO: IT RERENDERS BECAUSE OF THE FUNCTION WHICH CHECKS IF I ADDED SOMETHING TO DOM. POP UP MENU ADDED

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
                                        currentGroup={selectedGroup.current?.chatId}
                                        socket={socket}
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
                            <ScrollSetup
                                setAtTop={setIsAtTop}
                                backToBottomButtonClass="back-to-bottom"
                                scrollFieldClass="chat-field"
                                scrollWrapper='scroll-wrapper'
                                allowScrollingBottom={allowScrollingBottom}
                            >
                                {
                                    loadingMessages ? <div>
                                        <p>Loading</p>
                                    </div> : <>
                                        <button onClick={() => {
                                            setAllowScrollingBottom((prev: any) => 1)
                                            fetchLimitChatMessages(contact, limit)
                                            setLimit((prev: any) => prev + 10)
                                        }}>Load messages</button>
                                        {messages.map((message: any[] | never[] | any | never, index: number) => {
                                            return <div
                                                key={`message-container-${index}`}
                                                className="message-container"
                                                style={{ alignItems: message?.user?.userId === user[0].userId ? 'end' : 'start' }}
                                            >
                                                <ChatMessage
                                                    socket={props.socket}
                                                    message={message}
                                                    contact={contact}
                                                    chatMode={chatMode}
                                                    changeMessage={changeMessage}
                                                    changeChatMode={changeChatMode}
                                                />
                                            </div>
                                        })}
                                    </>
                                }
                            </ScrollSetup>}
                    <div>
                        {selectedGroup.current && showChatUsers ? <ChatUsers
                            socket={socket}
                            changeShowChatUsers={changeShowChatUsers}
                            contact={contact}
                            selectedChat={selectedChat}
                            changesetSelectedChat={changesetSelectedChat}
                            chats={chats.filter((cht: any) => cht.chatType === 'Group')
                                .flatMap((cht: any) => cht.chat)
                                .filter((group: any) => group.chatId === selectedGroup.current.chatId)[0]} /> : ''}
                    </div>



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
                            socket={socket}
                            changeAddNewChat={changeAddNewChat}
                        /> : ''
                    }
                </div>
            </div>
        </ChatDiv>
    )
};

const ChatDiv = ChatStyle