import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    loading: false,
    error: null
}

export default function postReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionTypes.SIGN_USER:
            return {
                loading: true,
                user: {},
                error: null
            }

        case UserActionTypes.SIGN_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: null
            }

        case UserActionTypes.SIGN_USER_ERROR:
            return {
                loading: false,
                user: {},
                error: action.payload
            }



        case UserActionTypes.SIGN_UP_USER:
            return {
                loading: true,
                user: {},
                error: null
            }

        case UserActionTypes.SIGN_UP_USER_SUCCESS:
            return {
                loading: false,
                user: {},
                error: null
            }

        case UserActionTypes.SIGN_UP_USER_ERROR:
            return {
                loading: false,
                user: {},
                error: action.payload
            }

        case UserActionTypes.LOGOUT_USER:
            return {
                loading: true,
                user: {},
                error: null
            }

        case UserActionTypes.LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                user: {},
                error: null
            }

        default:
            return state;
    }
}