import { ProfileAction, ProfileActionTypes, ProfileState } from "../../types/profile";

const initialState: ProfileState = {
    profile: {},
    posts: [],
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
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS:
            return {
                loading: true,
                posts: [],
                profile: state.profile,
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                profile: state.profile,
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                error: action.payload
            }


        case ProfileActionTypes.FETCH_PROFILE:
            return {
                loading: true,
                posts: [],
                profile: [],
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                loading: false,
                posts: action.payload.posts,
                profile: action.payload.userProfile,
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {
                loading: false,
                posts: state.posts,
                profile: state.profile,
                error: action.payload
            }

        default:
            return state
    }
}