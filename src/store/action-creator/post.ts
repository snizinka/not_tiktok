import axios from "axios";
import { Dispatch } from "redux";
import { PostAction, PostActionTypes } from "../../types/post";
import { useTypedSelector } from '../../hooks/useTypedSelector'


export const fetchPosts = (parameter:string, id:any = 0, userId:number) => {
    return async (dispatch:Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
                const data = await fetch('http://localhost:9000/api', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        parameter: parameter,
                        id: id,
                        userId: userId
                    })
                }).then(res => res.json());
        
                console.log(data.result.converted._posts)
                dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: data.result.converted._posts})
        }catch(e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Shit happens'
            })
        }
    }
}

export const fetchProfile = (id:number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            console.log('in')
            dispatch({type: PostActionTypes.FETCH_PROFILE})
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
                dispatch({type: PostActionTypes.FETCH_PROFILE_SUCCESS, payload: data.result.data})
        }catch(err) {
            console.log(err)
            dispatch({type: PostActionTypes.FETCH_PROFILE_ERROR, payload: 'Not found'})
        }
    }
}

export const removePosts = (id:number) => {
    return async (dispatch:Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.REMOVE_POSTS, payload: id})
            dispatch({type: PostActionTypes.REMOVE_POSTS_SUCCESS, payload: []})

        }catch {
            dispatch({
                type: PostActionTypes.REMOVE_POSTS_ERROR,
                payload: 'Shit happens'
            })
        }
    }
}

export const handleLikes = (postId:number, userId:number) => {
    return async (dispatch:Dispatch<PostAction>) => {
        try{
            dispatch({type: PostActionTypes.HANDLE_LIKES})
            const data = await fetch(`http://localhost:9000/likehandle`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    postId: postId,
                    userId: userId
                })
            }).then(res => res.json());
            console.log(data)
            let pass = data.result.length ? data : data.result.data
            let send = {pass, postId}
            dispatch({type: PostActionTypes.HANDLE_LIKES_SUCCESS, payload:send})
        }catch(err) {
            console.log(err)
            dispatch({type: PostActionTypes.HANDLE_LIKES_ERROR, payload: 'Something happened'})
        }
    }
}


export const handleFollow = (authorId:number, userId:number) => {
    return async (dispatch:Dispatch<PostAction>) => {
        try{
            dispatch({type: PostActionTypes.HANDLE_FOLLOW})
            const data = await fetch(`http://localhost:9000/followhandle`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    authorId: authorId,
                    userId: userId
                })
            }).then(res => res.json());
            
            let pass = data.result.data
            let send = {pass, authorId}
            dispatch({type: PostActionTypes.HANDLE_FOLLOW_SUCCESS, payload:send})
        }catch(err) {
            console.log(err)
            dispatch({type: PostActionTypes.HANDLE_FOLLOW_ERROR, payload: 'Something happened'})
        }
    }
}