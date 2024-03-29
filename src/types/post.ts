export interface PostState {
    loadPostIndex: number;
    currentPostThreshold: number;
    posts: any[] | any;
    loading: boolean;
    error: null | string;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

    FETCH_ADDITIONAL_POSTS = 'FETCH_ADDITIONAL_POSTS',
    FETCH_ADDITIONAL_SUCCESS = 'FETCH_ADDITIONAL_SUCCESS',
    FETCH_ADDITIONAL_ERROR = 'FETCH_ADDITIONAL_ERROR',

    ADD_POSTS = 'ADD_POSTS',
    ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS',
    ADD_POSTS_ERROR = 'ADD_POSTS_ERROR',

    EDIT_POSTS = 'EDIT_POSTS',
    EDIT_POSTS_SUCCESS = 'EDIT_POSTS_SUCCESS',
    EDIT_POSTS_ERROR = 'EDIT_POSTS_ERROR',

    REMOVE_POSTS = 'REMOVE_POSTS',
    REMOVE_POSTS_SUCCESS = 'REMOVE_POSTS_SUCCESS',
    REMOVE_POSTS_ERROR = 'REMOVE_POSTS_ERROR',

    HANDLE_LIKES = 'HANDLE_LIKES',
    HANDLE_LIKES_SUCCESS = 'HANDLE_LIKES_SUCCESS',
    HANDLE_LIKES_ERROR = 'HANDLE_LIKES_ERROR',

    HANDLE_FOLLOW = 'HANDLE_FOLLOW',
    HANDLE_FOLLOW_SUCCESS = 'HANDLE_FOLLOW_SUCCESS',
    HANDLE_FOLLOW_ERROR = 'HANDLE_FOLLOW_ERROR',

    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',

    ADD_COMMENT = 'ADD_COMMENT',
    ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS',
    ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR',

    REMOVE_COMMENT = 'REMOVE_COMMENT',
    REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS',
    REMOVE_COMMENT_ERROR = 'REMOVE_COMMENT_ERROR',
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS,
}

interface FetchPostsSuccessAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS,
    payload: any[]
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR,
    payload: string
}


interface FetchAdditionalPostsAction {
    type: PostActionTypes.FETCH_ADDITIONAL_POSTS,
}

interface FetchAdditionalSuccessAction {
    type: PostActionTypes.FETCH_ADDITIONAL_SUCCESS,
    payload: any[]
}

interface FetchAdditionalErrorAction {
    type: PostActionTypes.FETCH_ADDITIONAL_ERROR,
    payload: string
}



interface RemovePostsAction {
    type: PostActionTypes.REMOVE_POSTS,
    payload: number
}

interface RemovePostsSuccessAction {
    type: PostActionTypes.REMOVE_POSTS_SUCCESS,
    payload: any[]
}

interface RemovePostsErrorAction {
    type: PostActionTypes.REMOVE_POSTS_ERROR,
    payload: string
}




interface HandleLikesAction {
    type: PostActionTypes.HANDLE_LIKES
}

interface HandleLikesSuccessAction {
    type: PostActionTypes.HANDLE_LIKES_SUCCESS,
    payload: any
}

interface HandleLikesErrorAction {
    type: PostActionTypes.HANDLE_LIKES_ERROR,
    payload: string
}


interface HandleFollowAction {
    type: PostActionTypes.HANDLE_FOLLOW
}

interface HandleFollowSuccessAction {
    type: PostActionTypes.HANDLE_FOLLOW_SUCCESS,
    payload: any
}

interface HandleFollowErrorAction {
    type: PostActionTypes.HANDLE_FOLLOW_ERROR,
    payload: string
}


interface FetchProfileAction {
    type: PostActionTypes.FETCH_PROFILE
}

interface FetchProfileSuccessAction {
    type: PostActionTypes.FETCH_PROFILE_SUCCESS,
    payload: any
}

interface FetchProfileErrorAction {
    type: PostActionTypes.FETCH_PROFILE_ERROR,
    payload: string
}

interface AddCommentAction {
    type: PostActionTypes.ADD_COMMENT
}

interface AddCommentSuccessAction {
    type: PostActionTypes.ADD_COMMENT_SUCCESS,
    payload: any
}

interface AddCommentErrorAction {
    type: PostActionTypes.ADD_COMMENT_ERROR,
    payload: string
}

interface RemoveCommentAction {
    type: PostActionTypes.REMOVE_COMMENT
}

interface RemoveCommentSuccessAction {
    type: PostActionTypes.REMOVE_COMMENT_SUCCESS,
    payload: any
}

interface RemoveCommentErrorAction {
    type: PostActionTypes.REMOVE_COMMENT_ERROR,
    payload: string
}

export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction 
                        | RemovePostsAction | RemovePostsSuccessAction | RemovePostsErrorAction
                        | HandleLikesAction | HandleLikesSuccessAction | HandleLikesErrorAction
                        |FetchProfileAction | FetchProfileSuccessAction | FetchProfileErrorAction
                        |HandleFollowAction | HandleFollowSuccessAction | HandleFollowErrorAction
                        | AddCommentAction | AddCommentSuccessAction | AddCommentErrorAction
                        | RemoveCommentAction | RemoveCommentSuccessAction | RemoveCommentErrorAction
                        | FetchAdditionalPostsAction | FetchAdditionalSuccessAction | FetchAdditionalErrorAction