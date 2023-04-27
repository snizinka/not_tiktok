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

    ADD_MESSAGE = 'ADD_MESSAGE',

    REMOVE_MESSAGE = 'REMOVE_MESSAGE',

    EDIT_MESSAGE = 'EDIT_MESSAGE',

    SORT_CONTACTS = 'SORT_CONTACTS',

    CREATE_CHAT = 'CREATE_CHAT',
    CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS',
    CREATE_CHAT_ERROR = 'CREATE_CHAT_ERROR',

    GET_USERS_FOR_CHAT = 'GET_USERS_FOR_CHAT', 
    GET_USERS_FOR_CHAT_SUCCESS = 'GET_USERS_FOR_CHAT_SUCCESS', 
    GET_USERS_FOR_CHAT_ERROR = 'GET_USERS_FOR_CHAT_ERROR',

    ADD_USERS_TO_CHAT = 'ADD_USERS_TO_CHAT', 
    ADD_USERS_TO_CHAT_SUCCESS = 'ADD_USERS_TO_CHAT_SUCCESS', 
    ADD_USERS_TO_CHAT_ERROR = 'ADD_USERS_TO_CHAT_ERROR', 
    
    REMOVE_USERS_FROM_CHAT = 'REMOVE_USERS_FROM_CHAT', 
    REMOVE_USERS_FROM_CHAT_SUCCESS = 'REMOVE_USERS_FROM_CHAT_SUCCESS', 
    REMOVE_USERS_FROM_CHAT_ERROR = 'REMOVE_USERS_FROM_CHAT_ERROR', 

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

interface CreateChatAction {
    type: ChatActionTypes.CREATE_CHAT
}

interface CreateChatSuccessAction {
    type: ChatActionTypes.CREATE_CHAT_SUCCESS,
    payload: any[] | any
}

interface CreateChatErrorAction {
    type: ChatActionTypes.CREATE_CHAT_ERROR,
    payload: string
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
    type: ChatActionTypes.ADD_USERS_TO_CHAT
}

interface AddUsersToChatSuccessAction {
    type: ChatActionTypes.ADD_USERS_TO_CHAT_SUCCESS,
    payload: any[] | any
}

interface AddUsersToChatErrorAction {
    type: ChatActionTypes.ADD_USERS_TO_CHAT_ERROR,
    payload: string
}

interface RemoveUsersFromChatAction {
    type: ChatActionTypes.REMOVE_USERS_FROM_CHAT
}

interface RemoveUsersFromChatSuccessAction {
    type: ChatActionTypes.REMOVE_USERS_FROM_CHAT_SUCCESS,
    payload: any[] | any
}

interface RemoveUsersFromChatErrorAction {
    type: ChatActionTypes.REMOVE_USERS_FROM_CHAT_ERROR,
    payload: string
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


export type ChatAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction 
| FetchMessagesAction | FetchMessagesSuccessAction | FetchMessagesErrorAction 
| AddMessageAction
| RemoveMessageAction
| EditMessageAction
| SortContactsAction
| CreateChatAction
| CreateChatSuccessAction
| CreateChatErrorAction
| GetUsersForChatAction | GetUsersForChatSuccessAction | GetUsersForChatErrorAction
| AddUsersToChatAction | AddUsersToChatSuccessAction | AddUsersToChatErrorAction
| RemoveUsersFromChatAction | RemoveUsersFromChatSuccessAction | RemoveUsersFromChatErrorAction
| LeaveChatAction | LeaveChatSuccessAction | LeaveChatErrorAction