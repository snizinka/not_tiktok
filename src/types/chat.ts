export interface ChatState {
    availableUsers: any | any[];
    user: any;
    chat: any;
    chats: any[] | any;
    storedChats: any[] | any;
    messages: any[];
    loadingMessages: boolean;
    error: null | string;
}

export enum ChatActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',

    FETCH_MESSAGES = 'FETCH_MESSAGES',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR',

    FETCH_LIMIT_MESSAGES = 'FETCH_LIMIT_MESSAGES',
    FETCH_LIMIT_MESSAGES_SUCCESS = 'FETCH_LIMIT_MESSAGES_SUCCESS',
    FETCH_LIMIT_MESSAGES_ERROR = 'FETCH_LIMIT_MESSAGES_ERROR',

    ADD_MESSAGE = 'ADD_MESSAGE',

    ADD_NEW_CHAT = 'ADD_NEW_CHAT',

    ADD_USERS_TO_CHAT = 'ADD_USERS_TO_CHAT',

    REMOVE_MESSAGE = 'REMOVE_MESSAGE',

    REMOVE_USERS_FROM_CHAT = 'REMOVE_USERS_FROM_CHAT',

    EDIT_MESSAGE = 'EDIT_MESSAGE',

    SORT_CONTACTS = 'SORT_CONTACTS',

    GET_USERS_FOR_CHAT = 'GET_USERS_FOR_CHAT', 
    GET_USERS_FOR_CHAT_SUCCESS = 'GET_USERS_FOR_CHAT_SUCCESS', 
    GET_USERS_FOR_CHAT_ERROR = 'GET_USERS_FOR_CHAT_ERROR',

    LEAVE_CHAT = 'LEAVE_CHAT', 
    LEAVE_CHAT_SUCCESS = 'LEAVE_CHAT_SUCCESS', 
    LEAVE_CHAT_ERROR = 'LEAVE_CHAT_ERROR', 
}

interface FetchUsersAction {
    type: ChatActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: ChatActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface FetchUsersErrorAction {
    type: ChatActionTypes.FETCH_USERS_ERROR,
    payload: string
}

interface FetchMessagesAction {
    type: ChatActionTypes.FETCH_MESSAGES
}

interface FetchMessagesSuccessAction {
    type: ChatActionTypes.FETCH_MESSAGES_SUCCESS,
    payload: any[]
}

interface FetchMessagesErrorAction {
    type: ChatActionTypes.FETCH_MESSAGES_ERROR,
    payload: string
}

interface FetchLimitMessagesAction {
    type: ChatActionTypes.FETCH_LIMIT_MESSAGES
}

interface FetchLimitMessagesSuccessAction {
    type: ChatActionTypes.FETCH_LIMIT_MESSAGES_SUCCESS,
    payload: any[]
}

interface FetchLimitMessagesErrorAction {
    type: ChatActionTypes.FETCH_LIMIT_MESSAGES_ERROR,
    payload: string
}

interface AddMessageAction {
    type: ChatActionTypes.ADD_MESSAGE,
    payload: any
}

interface RemoveMessageAction {
    type: ChatActionTypes.REMOVE_MESSAGE,
    payload: any
}

interface EditMessageAction {
    type: ChatActionTypes.EDIT_MESSAGE,
    payload: any
}

interface SortContactsAction {
    type: ChatActionTypes.SORT_CONTACTS,
    payload: any
}

interface GetUsersForChatAction {
    type: ChatActionTypes.GET_USERS_FOR_CHAT
}

interface GetUsersForChatSuccessAction {
    type: ChatActionTypes.GET_USERS_FOR_CHAT_SUCCESS,
    payload: any[] | any
}

interface GetUsersForChatErrorAction {
    type: ChatActionTypes.GET_USERS_FOR_CHAT_ERROR,
    payload: string
}


interface AddUsersToChatAction {
    type: ChatActionTypes.ADD_USERS_TO_CHAT,
    payload: any[] | any
}

interface RemoveUsersFromChatAction {
    type: ChatActionTypes.REMOVE_USERS_FROM_CHAT,
    payload: any[] | any
}

interface LeaveChatAction {
    type: ChatActionTypes.LEAVE_CHAT
}

interface LeaveChatSuccessAction {
    type: ChatActionTypes.LEAVE_CHAT_SUCCESS,
    payload: any[] | any
}

interface LeaveChatErrorAction {
    type: ChatActionTypes.LEAVE_CHAT_ERROR,
    payload: string
}

interface AddNewChatAction {
    type: ChatActionTypes.ADD_NEW_CHAT,
    payload: any[] | any
}


export type ChatAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction 
| FetchMessagesAction | FetchMessagesSuccessAction | FetchMessagesErrorAction 
| AddMessageAction
| RemoveMessageAction
| EditMessageAction
| SortContactsAction
| GetUsersForChatAction | GetUsersForChatSuccessAction | GetUsersForChatErrorAction
| AddUsersToChatAction
| RemoveUsersFromChatAction
| LeaveChatAction | LeaveChatSuccessAction | LeaveChatErrorAction
| AddNewChatAction
| FetchLimitMessagesAction | FetchLimitMessagesSuccessAction | FetchLimitMessagesErrorAction