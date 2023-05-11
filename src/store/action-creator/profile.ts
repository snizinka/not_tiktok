import { Dispatch } from "redux";
import { ProfileAction, ProfileActionTypes } from "../../types/profile";

export const fetchProfile = (id:number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            const data = await fetch('http://localhost:9000/profile', {
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
                dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: 'Not found'})
        }
    }
}

export const fetchRecentPostProfile = (id:number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS})
            const data = await fetch('http://localhost:9000/recentprofile', {
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
                dispatch({type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR, payload: 'Not found'})
        }
    }
}

export const fetchAllProfilePosts = (id:number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_POSTS})
            const data = await fetch('http://localhost:9000/allprofileposts', {
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
                dispatch({type: ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR, payload: 'Not found'})
        }
    }
}

export const fetchSavedProfilePosts = (id:number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS})
            const data = await fetch('http://localhost:9000/savedprofileposts', {
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
                dispatch({type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR, payload: 'Not found'})
        }
    }
}

export const fetchResponseProfilePosts = (id:number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS})
            const data = await fetch('http://localhost:9000/responseprofileposts', {
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
                dispatch({type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_ERROR, payload: 'Not found'})
        }
    }
}