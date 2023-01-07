import { ChatAction, ChatActionTypes, ChatState } from "../../types/chat";

const initialState: ChatState = {
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    chat: null,
    chats: [],
    messages: [],
    loading: false,
    error: null
}

export default function chatReducer(state = initialState, action: ChatAction): ChatState {
    switch (action.type) {
        case ChatActionTypes.FETCH_USERS:
            return {
                loading: true,
                chats: [],
                error: null,
                chat: null,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                chats: action.payload,
                error: null,
                chat: null,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_USERS_ERROR:
            return {
                loading: false,
                chats: [],
                error: "Couldn't load chats",
                chat: null,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_MESSAGES:
            return {
                loading: true,
                chats: state.chats,
                error: null,
                chat: state.chat,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                loading: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                user: state.user,
                messages: action.payload
            }

        case ChatActionTypes.FETCH_MESSAGES_ERROR:
            return {
                loading: false,
                chats: state.chats,
                error: action.payload,
                chat: state.chat,
                user: state.user,
                messages: []
            }

        case ChatActionTypes.ADD_MESSAGE:
            return {
                loading: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                user: state.user,
                messages: [...state.messages, action.payload]
            }

        case ChatActionTypes.REMOVE_MESSAGE:
            return {
                loading: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                user: state.user,
                messages: state.messages.filter(msg => msg.messageId !== action.payload)
            }

        case ChatActionTypes.EDIT_MESSAGE:
            return {
                loading: false,
                chats: state.chats,
                error: null,
                chat: state.chat,
                user: state.user,
                messages: state.messages.map(msg =>
                    msg.messageId === action.payload.messageId
                        ? { ...msg, message: action.payload.newmessage }
                        : msg
                )
            }

        default:
            return state;
    }
}