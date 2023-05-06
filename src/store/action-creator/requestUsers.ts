import axios from "axios";
import { Dispatch } from "redux";
import { RequestUsersAction, RequestUsersActionTypes } from "../../types/requestUsers";

export const fetchUsersToAccomplish = (categories:string[], userToFind:string) => {
    return async (dispatch:Dispatch<RequestUsersAction>) => {
        try {
            dispatch({type: RequestUsersActionTypes.LOAD_USERS})
                const data = await fetch('http://localhost:9000/userstoaccomplish', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        categories: {
                            categories,
                            userToFind
                        }
                    })
                }).then(res => res.json());
        
                console.log(data.result.data)

                dispatch({type: RequestUsersActionTypes.LOAD_USERS_SUCCESS, payload: data.result.data})
        }catch {
            dispatch({
                type: RequestUsersActionTypes.LOAD_USERS_ERROR,
                payload: 'Loading problems ...'
            })
        }
    }
}

export const makeRequest = (request: any | any[]) => {
    return async (dispatch:Dispatch<RequestUsersAction>) => {
        try {
            dispatch({type: RequestUsersActionTypes.MAKE_REQUEST})
                const data = await fetch('http://localhost:9000/request', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        request: request
                    })
                }).then(res => res.json());
        
                console.log(data.result.data)

                dispatch({type: RequestUsersActionTypes.MAKE_REQUEST_SUCCESS, payload: data.result.data.status})
        }catch {
            dispatch({
                type: RequestUsersActionTypes.MAKE_REQUEST_ERROR,
                payload: 'Loading problems ...'
            })
        }
    }
}

export const fetchRequestsByCreator = (id: number) => {
    return async (dispatch:Dispatch<RequestUsersAction>) => {
        try {
            dispatch({type: RequestUsersActionTypes.FETCH_REQUESTS_BY_CREATOR})
                const data = await fetch('http://localhost:9000/allrequestsforcreator', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id
                    })
                }).then(res => res.json());
        
                console.log(data.result.data)

                dispatch({type: RequestUsersActionTypes.FETCH_REQUESTS_BY_CREATOR_SUCCESS, payload: data.result.data})
        }catch {
            dispatch({
                type: RequestUsersActionTypes.FETCH_REQUESTS_BY_CREATOR_ERROR,
                payload: 'Loading problems ...'
            })
        }
    }
}