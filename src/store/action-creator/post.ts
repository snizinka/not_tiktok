import { Dispatch } from "redux";
import { PostAction, PostActionTypes } from "../../types/post";

export const fetchPosts = (parameter: string, id: any = 0, userId: number, mode: string) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.FETCH_POSTS })
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
            dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: data.result.converted._posts })
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Shit happens'
            })
        }
    }
}

export const removePosts = (id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.REMOVE_POSTS, payload: id })
            dispatch({ type: PostActionTypes.REMOVE_POSTS_SUCCESS, payload: [] })

        } catch {
            dispatch({
                type: PostActionTypes.REMOVE_POSTS_ERROR,
                payload: 'Shit happens'
            })
        }
    }
}

export const handleLikes = (postId: number, userId: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.HANDLE_LIKES })
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
            let send = { pass, postId }
            dispatch({ type: PostActionTypes.HANDLE_LIKES_SUCCESS, payload: send })
        } catch (err) {
            console.log(err)
            dispatch({ type: PostActionTypes.HANDLE_LIKES_ERROR, payload: 'Something happened' })
        }
    }
}


export const handleFollow = (authorId: number, userId: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.HANDLE_FOLLOW })
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
            let send = { pass, authorId }
            dispatch({ type: PostActionTypes.HANDLE_FOLLOW_SUCCESS, payload: send })
        } catch (err) {
            console.log(err)
            dispatch({ type: PostActionTypes.HANDLE_FOLLOW_ERROR, payload: 'Something happened' })
        }
    }
}

export const addComment = (comment: any) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.ADD_COMMENT })
            const data = await fetch(`http://localhost:9000/addcomment`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    data: comment
                })
            }).then(res => res.json());

            dispatch({ type: PostActionTypes.ADD_COMMENT_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: PostActionTypes.ADD_COMMENT_ERROR, payload: 'Something happened' })
        }
    }
}

export const removeComment = (comment: any) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.REMOVE_COMMENT })
            const data = await fetch(`http://localhost:9000/removecomment`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    data: comment
                })
            }).then(res => res.json());

            dispatch({ type: PostActionTypes.REMOVE_COMMENT_SUCCESS, payload: data.result.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: PostActionTypes.REMOVE_COMMENT_ERROR, payload: 'Something happened' })
        }
    }
}

export const fetchAdditionalPosts = (dataParam: any) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({ type: PostActionTypes.FETCH_ADDITIONAL_POSTS })
            const data = await fetch('http://localhost:9000/getadditionalposts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    data: dataParam
                })
            }).then(res => res.json());

            console.log(data.result.data)
            dispatch({ type: PostActionTypes.FETCH_ADDITIONAL_SUCCESS, payload: data.result.data })
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_ADDITIONAL_ERROR,
                payload: 'Shit happens'
            })
        }
    }
}