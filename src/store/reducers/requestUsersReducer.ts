import { RequestUsersAction, RequestUsersActionTypes, RequestUsersState } from "../../types/requestUsers";

const initialState: RequestUsersState = {
    requestStatus: false,
    users: [],
    loading: false,
    error: null
}

export default function requestUsersReducer(state = initialState, action: RequestUsersAction): RequestUsersState {
    switch (action.type) {
        case RequestUsersActionTypes.LOAD_USERS:
            return {
                requestStatus: state.requestStatus,
                loading: true,
                users: [],
                error: null
            }

        case RequestUsersActionTypes.LOAD_USERS_SUCCESS:
            return {
                requestStatus: state.requestStatus,
                loading: false,
                users: action.payload,
                error: null
            }

        case RequestUsersActionTypes.LOAD_USERS_ERROR:
            return {
                requestStatus: state.requestStatus,
                loading: false,
                users: [],
                error: action.payload
            }




            case RequestUsersActionTypes.MAKE_REQUEST:
            return {
                requestStatus: false,
                loading: true,
                users: [],
                error: null
            }

        case RequestUsersActionTypes.MAKE_REQUEST_SUCCESS:
            return {
                requestStatus: action.payload,
                loading: false,
                users: state.users,
                error: null
            }

        case RequestUsersActionTypes.MAKE_REQUEST_ERROR:
            return {
                requestStatus: false,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state
    }
}