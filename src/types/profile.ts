export interface ProfileState {
    profile: any;
    posts: any[] | any;
    loading: boolean;
    error: null | string;
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',

    FETCH_RECENT_PROFILE_POSTS = 'FETCH_RECENT_PROFILE_POSTS',
    FETCH_RECENT_PROFILE_POSTS_SUCCESS = 'FETCH_RECENT_PROFILE_POSTS_SUCCESS',
    FETCH_RECENT_PROFILE_POSTS_ERROR = 'FETCH_RECENT_PROFILE_POSTS_ERROR',

    FETCH_PROFILE_POSTS = 'FETCH_PROFILE_POSTS',
    FETCH_PROFILE_POSTS_SUCCESS = 'FETCH_PROFILE_POSTS_SUCCESS',
    FETCH_PROFILE_POSTS_ERROR = 'FETCH_PROFILE_POSTS_ERROR',

    FETCH_SAVED_PROFILE_POSTS = 'FETCH_SAVED_PROFILE_POSTS',
    FETCH_SAVED_PROFILE_POSTS_SUCCESS = 'FETCH_SAVED_PROFILE_POSTS_SUCCESS',
    FETCH_SAVED_PROFILE_POSTS_ERROR = 'FETCH_SAVED_PROFILE_POSTS_ERROR' 
}

interface FetchProfilesAction {
    type: ProfileActionTypes.FETCH_PROFILE,
}

interface FetchProfilesSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
    payload: any[] | any
}

interface FetchProfilesErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR,
    payload: string
}

interface FetchRecentProfilesPostsAction {
    type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS,
}

interface FetchRecentProfilesPostsSuccessAction {
    type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS,
    payload: any[] | any
}

interface FetchRecentProfilesPostsErrorAction {
    type: ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR,
    payload: string
}

interface FetchProfilesPostsAction {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS,
}

interface FetchProfilesPostsSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS,
    payload: any[] | any
}

interface FetchProfilesPostsErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR,
    payload: string
}

interface FetchSavedProfilesPostsAction {
    type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS,
}

interface FetchSavedProfilesPostsSuccessAction {
    type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS,
    payload: any[] | any
}

interface FetchSavedProfilesPostsErrorAction {
    type: ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR,
    payload: string
}

export type ProfileAction = FetchProfilesAction | FetchProfilesSuccessAction | FetchProfilesErrorAction 
| FetchRecentProfilesPostsAction | FetchRecentProfilesPostsSuccessAction | FetchRecentProfilesPostsErrorAction
| FetchProfilesPostsAction | FetchProfilesPostsSuccessAction | FetchProfilesPostsErrorAction
| FetchSavedProfilesPostsAction | FetchSavedProfilesPostsSuccessAction | FetchSavedProfilesPostsErrorAction