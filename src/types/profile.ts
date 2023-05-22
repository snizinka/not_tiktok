export interface ProfileState {
    success: boolean;
    validating: any;
    validation: any;
    profile: any;
    posts: any[] | any;
    postType: string;
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
    FETCH_SAVED_PROFILE_POSTS_ERROR = 'FETCH_SAVED_PROFILE_POSTS_ERROR',

    FETCH_RESPONSE_PROFILE_POSTS = 'FETCH_RESPONSE_PROFILE_POSTS',
    FETCH_RESPONSE_PROFILE_POSTS_SUCCESS = 'FETCH_RESPONSE_PROFILE_POSTS_SUCCESS',
    FETCH_RESPONSE_PROFILE_POSTS_ERROR = 'FETCH_RESPONSE_PROFILE_POSTS_ERROR',

    FETCH_PROFILE_SETTINGS = 'FETCH_PROFILE_SETTINGS',
    FETCH_PROFILE_SETTINGS_SUCCESS = 'FETCH_PROFILE_SETTINGS_SUCCESS',
    FETCH_PROFILE_SETTINGS_ERROR = 'FETCH_PROFILE_SETTINGS_ERROR',

    CHECK_USER_LINK = 'CHECK_USER_LINK',
    CHECK_USER_LINK_SUCCESS = 'CHECK_USER_LINK_SUCCESS',
    CHECK_USER_LINK_ERROR = 'CHECK_USER_LINK_ERROR',
    
    CHECK_EMAIL = 'CHECK_EMAIL',
    CHECK_EMAIL_SUCCESS = 'CHECK_EMAIL_SUCCESS',
    CHECK_EMAIL_ERROR = 'CHECK_EMAIL_ERROR',

    UPDATE_PROFILE = 'UPDATE_PROFILE',
    UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR',
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

interface FetchResponseProfilesPostsAction {
    type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS,
}

interface FetchResponseProfilesPostsSuccessAction {
    type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_SUCCESS,
    payload: any[] | any
}

interface FetchResponseProfilesPostsErrorAction {
    type: ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_ERROR,
    payload: string
}

interface FetchProfileSettingsAction {
    type: ProfileActionTypes.FETCH_PROFILE_SETTINGS,
}

interface FetchProfileSettingsSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_SETTINGS_SUCCESS,
    payload: any[] | any
}

interface FetchProfileSettingsErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_SETTINGS_ERROR,
    payload: string
}

interface CheckUserLinkAction {
    type: ProfileActionTypes.CHECK_USER_LINK,
}

interface CheckUserLinkSuccessAction {
    type: ProfileActionTypes.CHECK_USER_LINK_SUCCESS,
    payload: any[] | any
}

interface CheckUserLinkErrorAction {
    type: ProfileActionTypes.CHECK_USER_LINK_ERROR,
    payload: string
}

interface CheckEmailAction {
    type: ProfileActionTypes.CHECK_EMAIL,
}

interface CheckEmailSuccessAction {
    type: ProfileActionTypes.CHECK_EMAIL_SUCCESS,
    payload: any[] | any
}

interface CheckEmailErrorAction {
    type: ProfileActionTypes.CHECK_EMAIL_ERROR,
    payload: string
}

interface UpdateProfileAction {
    type: ProfileActionTypes.UPDATE_PROFILE,
}

interface UpdateProfileSuccessAction {
    type: ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
    payload: any[] | any
}

interface UpdateProfileErrorAction {
    type: ProfileActionTypes.UPDATE_PROFILE_ERROR,
    payload: string
}

export type ProfileAction = FetchProfilesAction | FetchProfilesSuccessAction | FetchProfilesErrorAction 
| FetchRecentProfilesPostsAction | FetchRecentProfilesPostsSuccessAction | FetchRecentProfilesPostsErrorAction
| FetchProfilesPostsAction | FetchProfilesPostsSuccessAction | FetchProfilesPostsErrorAction
| FetchSavedProfilesPostsAction | FetchSavedProfilesPostsSuccessAction | FetchSavedProfilesPostsErrorAction
| FetchResponseProfilesPostsAction | FetchResponseProfilesPostsSuccessAction | FetchResponseProfilesPostsErrorAction
| FetchProfileSettingsAction | FetchProfileSettingsSuccessAction | FetchProfileSettingsErrorAction
| CheckUserLinkAction | CheckUserLinkSuccessAction | CheckUserLinkErrorAction
| CheckEmailAction | CheckEmailSuccessAction | CheckEmailErrorAction
| UpdateProfileAction | UpdateProfileSuccessAction | UpdateProfileErrorAction