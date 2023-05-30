import { Dispatch } from "redux";
import { AdminAction, AdminActionTypes } from "../../types/admin";

export const findUserOrPost = (title: any) => {
    return async (dispatch: Dispatch<AdminAction>) => {
        try {
            dispatch({ type: AdminActionTypes.FIND_USER_OR_POST })
            const data = await fetch('http://localhost:9000/finduserorpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    title: title
                })
            }).then(res => res.json());

            console.log(data.result)

            dispatch({ type: AdminActionTypes.FIND_USER_OR_POST_SUCCESS, payload: data.result })
        } catch (err: any) {
            dispatch({ type: AdminActionTypes.FIND_USER_OR_POST_ERROR, payload: "Couldn't load" })
        }
    }
}

export const selectUserOrPost = (item: any) => {
    return async (dispatch: Dispatch<AdminAction>) => {
        try {
            dispatch({ type: AdminActionTypes.SELECT_USER_OR_POST })
            const data = await fetch('http://localhost:9000/selectuserorpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    item: item
                })
            }).then(res => res.json());

            console.log(data.result)

            dispatch({ type: AdminActionTypes.SELECT_USER_OR_POST_SUCCESS, payload: data.result })
        } catch (err: any) {
            console.log(err)
            dispatch({ type: AdminActionTypes.SELECT_USER_OR_POST_ERROR, payload: "Couldn't load" })
        }
    }
}

export const sortPosts = (item: any) => {
    return async (dispatch: Dispatch<AdminAction>) => {
        dispatch({ type: AdminActionTypes.SORT_POSTS, payload: item })
    }
}

export const loadPost = (id: any) => {
    return async (dispatch: Dispatch<AdminAction>) => {
        try {
            dispatch({ type: AdminActionTypes.LOAD_POST })
            const data = await fetch('http://localhost:9000/loadpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            }).then(res => res.json());

            console.log(data.result)

            dispatch({ type: AdminActionTypes.LOAD_POST_SUCCESS, payload: data.result })
        } catch (err: any) {
            console.log(err)
            dispatch({ type: AdminActionTypes.LOAD_POST_ERROR, payload: "Couldn't load" })
        }
    }
}

export const manageBlockPostState = (id: number) => {
    return async (dispatch: Dispatch<AdminAction>) => {
        try {
            dispatch({ type: AdminActionTypes.MANAGE_POST_BLOCK })
            const data = await fetch('http://localhost:9000/managepostblockstate', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            }).then(res => res.json());

            console.log(data.result)

            dispatch({ type: AdminActionTypes.MANAGE_POST_BLOCK_SUCCESS, payload: data.result })
        } catch (err: any) {
            console.log(err)
            dispatch({ type: AdminActionTypes.MANAGE_POST_BLOCK_ERROR, payload: "Couldn't load" })
        }
    }
}