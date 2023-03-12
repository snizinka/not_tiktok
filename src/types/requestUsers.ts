export interface RequestUsersState {
    requestStatus: boolean;
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum RequestUsersActionTypes {
    LOAD_USERS = 'LOAD_USERS',
    LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
    LOAD_USERS_ERROR = 'LOAD_USERS_ERROR',

    MAKE_REQUEST = 'MAKE_REQUEST',
    MAKE_REQUEST_SUCCESS = 'MAKE_REQUEST_SUCCESS',
    MAKE_REQUEST_ERROR = 'MAKE_REQUEST_ERROR',

}

interface LoadUsersAction {
    type: RequestUsersActionTypes.LOAD_USERS
}

interface LoadUsersSuccessAction {
    type: RequestUsersActionTypes.LOAD_USERS_SUCCESS,
    payload: any[]
}

interface LoadUsersErrorAction {
    type: RequestUsersActionTypes.LOAD_USERS_ERROR,
    payload: string
}


interface MakeRequestAction {
    type: RequestUsersActionTypes.MAKE_REQUEST
}

interface MakeRequestSuccessAction {
    type: RequestUsersActionTypes.MAKE_REQUEST_SUCCESS,
    payload: boolean
}

interface MakeRequestErrorAction {
    type: RequestUsersActionTypes.MAKE_REQUEST_ERROR,
    payload: string
}

export type RequestUsersAction = LoadUsersAction | LoadUsersSuccessAction | LoadUsersErrorAction
| MakeRequestAction | MakeRequestSuccessAction | MakeRequestErrorAction