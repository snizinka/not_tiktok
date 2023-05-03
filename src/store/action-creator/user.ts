import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/user";

export const userData = (login: string, password: string) => {
    return async (dispatch:Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionTypes.SIGN_USER})
            const data = await fetch('http://localhost:9000/signin', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(res => res.json());

            localStorage.setItem('user', data.result === undefined ? '{}' : JSON.stringify(data.result));
            dispatch({type: UserActionTypes.SIGN_USER_SUCCESS, payload: data.result === undefined ? {} : data.result})
        }catch(err:any) {
            dispatch({type: UserActionTypes.SIGN_USER_ERROR, payload: 'Wrong username or password'})
            console.log(UserActionTypes.SIGN_USER_ERROR)
        }
    }   
}

export const userLogout = () => {
    return async (dispatch:Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.LOGOUT_USER})
        localStorage.setItem('user', JSON.stringify({}))
        dispatch({type: UserActionTypes.LOGOUT_USER_SUCCESS})
    }
}