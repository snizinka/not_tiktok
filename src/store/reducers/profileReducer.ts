import { ProfileAction, ProfileActionTypes, ProfileState } from "../../types/profile";

const initialState: ProfileState = {
    success: false,
    validating: false,
    validation: { userLink: false, mailAddress: false, phoneNumber: false, password: false },
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
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_SUCCESS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_POSTS_ERROR:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'recent',
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_SUCCESS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_RECENT_PROFILE_POSTS_ERROR:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'saved',
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_SUCCESS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_SAVED_PROFILE_POSTS_ERROR:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: state.profile,
                postType: 'response',
                error: null
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_SUCCESS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: action.payload,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_RESPONSE_PROFILE_POSTS_ERROR:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.FETCH_PROFILE:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: [],
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: action.payload.posts,
                profile: action.payload.userProfile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {
                success: state.success,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }


        case ProfileActionTypes.FETCH_PROFILE_SETTINGS:
            return {
                success: false,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: true,
                posts: [],
                profile: [],
                postType: 'all',
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_SETTINGS_SUCCESS:
            return {
                success: false,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: [],
                profile: action.payload,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.FETCH_PROFILE_SETTINGS_ERROR:
            return {
                success: false,
                validating: false,
                validation: { userLink: false, mailAddress: false, phoneNumber: false },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }


        case ProfileActionTypes.CHECK_USER_LINK:
            return {
                success: false,
                validating: true,
                validation: state.validation,
                loading: true,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.CHECK_USER_LINK_SUCCESS:
            return {
                success: false,
                validating: false,
                validation: { ...state.validation, userLink: action.payload },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.CHECK_USER_LINK_ERROR:
            return {
                success: false,
                validating: false,
                validation: state.validation,
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }


        case ProfileActionTypes.CHECK_EMAIL:
            return {
                success: false,
                validating: true,
                validation: state.validation,
                loading: true,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.CHECK_EMAIL_SUCCESS:
            return {
                success: false,
                validating: false,
                validation: { ...state.validation, mailAddress: action.payload },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.CHECK_EMAIL_ERROR:
            return {
                success: false,
                validating: false,
                validation: state.validation,
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: action.payload
            }

        case ProfileActionTypes.UPDATE_PROFILE:
            return {
                success: false,
                validating: true,
                validation: state.validation,
                loading: true,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.UPDATE_PROFILE_SUCCESS:
            return {
                success: action.payload.success,
                validating: false,
                validation: {
                    ...state.validation, mailAddress: action.payload.validation.email,
                    userLink: action.payload.validation.userLink,
                    password: action.payload.validation.password
                },
                loading: false,
                posts: state.posts,
                profile: state.profile,
                postType: state.postType,
                error: null
            }

        case ProfileActionTypes.UPDATE_PROFILE_ERROR:
            return {
                success: false,
                validating: false,
                validation: state.validation,
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