export interface ChatState {
    user: any;
    chat: any;
    chats: any[] | any;
    messages: any[];
    loading: boolean;
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

    EDIT_MESSAGE = 'EDIT_MESSAGE'
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


export type ChatAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction 
| FetchMessagesAction | FetchMessagesSuccessAction | FetchMessagesErrorAction 
| AddMessageAction
| RemoveMessageAction
| EditMessageAction