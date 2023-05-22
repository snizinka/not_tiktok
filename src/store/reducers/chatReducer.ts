import { ChatAction, ChatActionTypes, ChatState } from "../../types/chat";

const initialState: ChatState = {
    availableUsers: [],
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    chat: null,
    chats: [],
    storedChats: [],
    messages: [],
    loadingMessages: false,
    error: null
}

function sortContacts(state: any, action: any) {
    let chatL: any = []
    let chatR: any = []
    state.storedChats?.map((cht: any) => {
        if (cht?.chatType === 'Group') {
            return cht?.chat?.map((group: any) => {
                if (group?.chatName.includes(action.payload)) {
                    chatR.push(group)
                    return group
                }
            })
        } else {
            cht?.users?.map((group: any) => {
                if (group?.receiver?.username.includes(action.payload)) {
                    chatL.push(group)
                }
            })
        }
        let data = [{ users: chatL, chatType: "Private", chat: { chatType: 'Private' } }, { chat: chatR, chatType: 'Group' }]
        state.chats = data
    })

    return state.chats
}

function changeGroupChatMembers(state: any, action: any) {
    let chatL: any = []
    let chatR: any = []
    state.chats?.map((cht: any) => {
        if (cht?.chatType === 'Group') {
            return cht?.chat?.map((group: any) => {

                if (group?.chatId === action.payload.chat) {
                    let us: any = []
                    action.payload.users.map((u: any) => {
                        us.push(u.user)
                    })
                    chatR.push({ ...group, users: [...group.users, ...us] })
                    return { ...group, users: [...group.users, ...us] }
                } else {
                    chatR.push(group)
                }
            })
        } else {
            chatL.push(cht)
        }
        let data = [chatL[0], { chat: chatR, chatType: 'Group' }]
        state.chats = data
    })

    return state.chats
}

function removeGroupChatMembers(state: any, action: any) {
    const newChats = state.chats?.map((chat: any) => {
        if (chat?.chatType !== 'Group') {
            return chat;
        }

        const newChat = chat.chat?.map((group: any) => {
            if (group.chatId === action.payload.chatId) {
                return {
                    ...group,
                    users: group.users.filter((user: any) => user.userId !== action.payload.userId),
                }
            } else {
                return group;
            }
        })

        return {
            ...chat,
            chat: newChat,
        }
    })

    return newChats;
}

function addGroupToList(state: any, action: any) {
    let chatL: any = []
    let chatR: any = []
    state.chats?.map((cht: any) => {
        if (cht?.chatType === 'Group') {
            return cht?.chat?.map((group: any) => {
                chatR.push(group)
                return group
            })
        } else {
            chatL.push(cht)
        }
        chatR.push(action.payload.chat)
        let data = [chatL[0], { chat: chatR, chatType: 'Group' }]
        state.chats = data
    })

    return state.chats
}

function leavePrivateChat(state: any, action: any) {
    let chatL: any = []
    let chatR: any = []
    state.storedChats?.map((cht: any) => {
        if (cht?.chatType === 'Group') {
            return cht?.chat?.map((group: any) => {
                chatR.push(group)
                return group
            })
        } else {
            cht?.users?.map((group: any) => {
                if (group?.contactId !== action.payload.contactId) {
                    chatL.push(group)
                }
            })
        }
        let data = [{ users: chatL, chatType: "Private", chat: { chatType: 'Private' } }, { chat: chatR, chatType: 'Group' }]
        state.chats = data
    })

    return state.chats
}

function leaveGroupChat(state: any, action: any) {
    let chatL: any = []
    let chatR: any = []
    state.chats?.map((cht: any) => {
        if (cht?.chatType === 'Group') {
            return cht?.chat?.map((group: any) => {
                if (group?.chatId !== action.payload.chatId) {
                    chatR.push(group)
                    return group
                }
            })
        } else {
            chatL.push(cht)
        }
        let data = [chatL[0], { chat: chatR, chatType: 'Group' }]
        state.chats = data
    })

    return state.chats
}

function leaveChat(state: any, action: any) {
    if (action.payload.chatType === 'Group') {
        return leaveGroupChat(state, action)
    } else {
        return leavePrivateChat(state, action)
    }
}

export default function chatReducer(state = initialState, action: ChatAction): ChatState {
    switch (action.type) {
        case ChatActionTypes.FETCH_USERS:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: true,
                chats: [],
                error: null,
                chat: null,
                storedChats: null,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_USERS_SUCCESS:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: action.payload,
                error: null,
                chat: null,
                storedChats: action.payload,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_USERS_ERROR:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: [],
                error: "Couldn't load chats",
                chat: null,
                storedChats: null,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_MESSAGES:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: true,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: action.payload
            }

        case ChatActionTypes.FETCH_MESSAGES_ERROR:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: action.payload,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: []
            }

            case ChatActionTypes.FETCH_LIMIT_MESSAGES:
                return {
                    availableUsers: state.availableUsers,
                    loadingMessages: true,
                    chats: state.chats,
                    error: null,
                    chat: state.chat,
                    storedChats: state.storedChats,
                    user: state.user,
                    messages: state.messages
                }
    
            case ChatActionTypes.FETCH_LIMIT_MESSAGES_SUCCESS:
                return {
                    availableUsers: state.availableUsers,
                    loadingMessages: false,
                    chats: state.chats,
                    error: null,
                    chat: state.chat,
                    storedChats: state.storedChats,
                    user: state.user,
                    messages: [...action.payload, ...state.messages]
                }
    
            case ChatActionTypes.FETCH_LIMIT_MESSAGES_ERROR:
                return {
                    availableUsers: state.availableUsers,
                    loadingMessages: false,
                    chats: state.chats,
                    error: action.payload,
                    chat: state.chat,
                    storedChats: state.storedChats,
                    user: state.user,
                    messages: []
                }
    

        case ChatActionTypes.ADD_MESSAGE:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: [...state.messages, action.payload]
            }

        case ChatActionTypes.REMOVE_MESSAGE:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages.filter(msg => msg.messageId !== action.payload)
            }

        case ChatActionTypes.EDIT_MESSAGE:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages.map(msg =>
                    msg.messageId === action.payload.messageId
                        ? { ...msg, message: action.payload.newmessage }
                        : msg
                )
            }

        case ChatActionTypes.GET_USERS_FOR_CHAT:
            return {
                availableUsers: [],
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.GET_USERS_FOR_CHAT_SUCCESS:
            return {
                availableUsers: action.payload,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.GET_USERS_FOR_CHAT_ERROR:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }


        case ChatActionTypes.ADD_USERS_TO_CHAT:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: changeGroupChatMembers(state, action),
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.REMOVE_USERS_FROM_CHAT:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: removeGroupChatMembers(state, action),
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.SORT_CONTACTS:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                storedChats: state.storedChats,
                chats: sortContacts(state, action),
                error: null,
                chat: state.chat,
                user: state.user,
                messages: state.messages
            }




        case ChatActionTypes.LEAVE_CHAT:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.LEAVE_CHAT_SUCCESS:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: leaveChat(state, action),
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.LEAVE_CHAT_ERROR:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }

        case ChatActionTypes.ADD_NEW_CHAT:
            return {
                availableUsers: state.availableUsers,
                loadingMessages: false,
                chats: addGroupToList(state, action),
                error: null,
                chat: state.chat,
                storedChats: state.storedChats,
                user: state.user,
                messages: state.messages
            }


        default:
            return state;
    }
}