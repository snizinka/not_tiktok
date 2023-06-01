import { Dispatch } from "redux";
import { ChatAction, ChatActionTypes } from "../../types/chat";
//
export const fetchChatUsers = (userId: number) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_USERS })
            const data = await fetch('http://localhost:9000/chatusers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            }).then(res => res.json());

            dispatch({ type: ChatActionTypes.FETCH_USERS_SUCCESS, payload: data.result.data })
        } catch (err: any) {
            dispatch({ type: ChatActionTypes.FETCH_USERS_ERROR, payload: "Couldn't load chats" })
        }
    }
}

export const fetchChatMessages = (contact: number, userId: number) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_MESSAGES })
            const data = await fetch('http://localhost:9000/messages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    contact: contact,
                    userId: userId
                })
            }).then(res => res.json());

            dispatch({ type: ChatActionTypes.FETCH_MESSAGES_SUCCESS, payload: data.result.data })
        } catch (err: any) {
            dispatch({ type: ChatActionTypes.FETCH_MESSAGES_ERROR, payload: "Couldn't load messages" })
        }
    }
}

export const fetchLimitChatMessages = (contact: number, limit: number) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_LIMIT_MESSAGES })
            const data = await fetch('http://localhost:9000/limitmessages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    contact: contact,
                    limit: limit
                })
            }).then(res => res.json());

            dispatch({ type: ChatActionTypes.FETCH_LIMIT_MESSAGES_SUCCESS, payload: data.result.data })
        } catch (err: any) {
            dispatch({ type: ChatActionTypes.FETCH_LIMIT_MESSAGES_ERROR, payload: "Couldn't load messages" })
        }
    }
}

export const addChatMessage = (message: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.ADD_MESSAGE, payload: message })
    }
}

export const removeChatMessage = (messageId: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.REMOVE_MESSAGE, payload: messageId })
    }
}

export const editChatMessage = (message: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.EDIT_MESSAGE, payload: message })
    }
}

export const sortContacts = (contactName: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.SORT_CONTACTS, payload: contactName })
    }
}

export const createChat = (chat: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.ADD_NEW_CHAT, payload: chat })
    }
}

export const getUsersNotFromChat = (chat: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.GET_USERS_FOR_CHAT })
            const data = await fetch('http://localhost:9000/availableforchat', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    chat: chat
                })
            }).then(res => res.json());

            console.log(data.result.data.users)

            dispatch({ type: ChatActionTypes.GET_USERS_FOR_CHAT_SUCCESS, payload: data.result.data.users })
        } catch (err: any) {
            dispatch({ type: ChatActionTypes.GET_USERS_FOR_CHAT_ERROR, payload: "Couldn't load chats" })
        }
    }
}

export const addUsersToChat = (chat: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.ADD_USERS_TO_CHAT, payload: chat })
    }
}

export const removeUserFromChat = (chat: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.REMOVE_USERS_FROM_CHAT, payload: chat })
    }
}

export const leftChat = (id: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.LEAVE_CHAT_SUCCESS, payload: id })
    }
}

export const setUnreadMessage = (messageId: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.SET_FIRST_UNREAD_MESSAGE, payload: messageId })
    }
}

export const setSeenStatus = (messageId: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.SET_SEEN_STATUS, payload: messageId })
            const data = await fetch('http://localhost:9000/messageseen', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    messageId: messageId
                })
            }).then(res => res.json());
        } catch (err: any) { }
    }
}