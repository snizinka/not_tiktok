import { Dispatch } from "redux";
import { ProfileAction, ProfileActionTypes } from "../../types/profile";

export const fetchProfile = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE })
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
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: 'Not found' })
        }
    }
}

export const fetchRecentPostProfile = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS })
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
            dispatch({ type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR, payload: 'Not found' })
        }
    }
}

export const fetchAllProfilePosts = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_POSTS })
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
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR, payload: 'Not found' })
        }
    }
}

export const fetchSavedProfilePosts = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS })
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
            dispatch({ type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR, payload: 'Not found' })
        }
    }
}

export const fetchResponseProfilePosts = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS })
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
            dispatch({ type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_ERROR, payload: 'Not found' })
        }
    }
}

export const fetchProfileSettings = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_SETTINGS })
            const data = await fetch('http://localhost:9000/profilesettings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: id
                })
            }).then(res => res.json());
            console.log(data.result)
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_SETTINGS_SUCCESS, payload: data.result })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.FETCH_PROFILE_SETTINGS_ERROR, payload: 'Not found' })
        }
    }
}

export const checkUserLink = (userLink: string, userId: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.CHECK_USER_LINK })
            const data = await fetch('http://localhost:9000/checkuserlink', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userLink: userLink,
                    userId: userId
                })
            }).then(res => res.json())
            dispatch({ type: ProfileActionTypes.CHECK_USER_LINK_SUCCESS, payload: data.result })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.CHECK_USER_LINK_ERROR, payload: 'Not found' })
        }
    }
}

export const checkMailAddress = (mailAddress: string, userId: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.CHECK_EMAIL })
            const data = await fetch('http://localhost:9000/checkemail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    mailAddress: mailAddress,
                    userId: userId
                })
            }).then(res => res.json())
            console.log(data.result)
            dispatch({ type: ProfileActionTypes.CHECK_EMAIL_SUCCESS, payload: data.result })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.CHECK_EMAIL_ERROR, payload: 'Not found' })
        }
    }
}

export const updateProfile = (profile: any) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({ type: ProfileActionTypes.UPDATE_PROFILE })
            const data = await fetch('http://localhost:9000/editprofile', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    profile: profile
                })
            }).then(res => res.json())
            console.log(data.result)
            dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS, payload: data.result })
        } catch (err) {
            console.log(err)
            dispatch({ type: ProfileActionTypes.UPDATE_PROFILE_ERROR, payload: 'Not found' })
        }
    }
}