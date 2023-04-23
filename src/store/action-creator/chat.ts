import { Dispatch } from "redux";
import { ChatAction, ChatActionTypes } from "../../types/chat";
//
export const fetchChatUsers = (userId: number) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_USERS })
            const data = await fetch('http://localhost:5000/chatusers', {
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

export const fetchChatMessages = (contact: number) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_MESSAGES })
            const data = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    contact: contact
                })
            }).then(res => res.json());

            console.log(data.result.data)

            dispatch({ type: ChatActionTypes.FETCH_MESSAGES_SUCCESS, payload: data.result.data })
        } catch (err: any) {
            dispatch({ type: ChatActionTypes.FETCH_MESSAGES_ERROR, payload: "Couldn't load messages" })
        }
    }
}

export const addChatMessage = (message: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.ADD_MESSAGE, payload:message })
    }
}

export const removeChatMessage = (messageId: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.REMOVE_MESSAGE, payload:messageId })
    }
}

export const editChatMessage = (message: any) => {
    return async (dispatch: Dispatch<ChatAction>) => {
        dispatch({ type: ChatActionTypes.EDIT_MESSAGE, payload:message })
    }
}