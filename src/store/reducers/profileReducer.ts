import { ProfileAction, ProfileActionTypes, ProfileState } from "../../types/profile";

const initialState: ProfileState = {
    profile: {},
    posts: [],
    postType: 'all',
    loading: false,
    error: null
}

export default function profileReducer(state = initialState, action: ProfileAction): ProfileState {
    switch (action.type) {
        case ProfileActionTypes.FETCH_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'recent',
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'saved',
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'response',
                error: null
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_PROFILE:
            return {
                loading: true,
                posts: [],
                profile: [],
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                loading: false,
                posts: action.payload.posts,
                profile: action.payload.userProfile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        default:
            return state
    }
}