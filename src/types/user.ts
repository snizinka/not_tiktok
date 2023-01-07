export interface UserState {
    user: any;
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    SIGN_USER = 'SIGN_USER',
    SIGN_USER_SUCCESS = 'SIGN_USER_SUCCESS',
    SIGN_USER_ERROR = 'SIGN_USER_ERROR',

    LOGOUT_USER = 'LOGOUT_USER',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'
}

interface SignUserAction {
    type: UserActionTypes.SIGN_USER
}

interface SignUserSuccessAction {
    type: UserActionTypes.SIGN_USER_SUCCESS,
    payload: any[]
}

interface SignUserErrorAction {
    type: UserActionTypes.SIGN_USER_ERROR,
    payload: string
}




interface LogoutUserAction {
    type: UserActionTypes.LOGOUT_USER
}

interface LogoutUserSuccessAction {
    type: UserActionTypes.LOGOUT_USER_SUCCESS
}

interface LogoutUserErrorAction {
    type: UserActionTypes.LOGOUT_USER_ERROR,
    payload: string
}

export type UserAction = SignUserAction | SignUserSuccessAction | SignUserErrorAction | LogoutUserAction | LogoutUserSuccessAction | LogoutUserErrorAction