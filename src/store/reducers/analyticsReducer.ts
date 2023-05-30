import { AnalyticsAction, AnalyticsActionTypes, AnalyticsState } from "../../types/analytics";

const initialState: AnalyticsState = {
    posts: [],
    post: {},
    analytics: [],
    loading: false,
    error: null
}

export default function analyticsReducer(state = initialState, action: AnalyticsAction): AnalyticsState {
    switch (action.type) {
        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION:
            return {
                posts: [],
                post: state.post,
                analytics: [],
                loading: true,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_SUCCESS:
            return {
                posts: action.payload,
                post: state.post,
                analytics: [],
                loading: false,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_ERROR:
            return {
                posts: [],
                post: state.post,
                analytics: [],
                loading: false,
                error: null
            }

        case AnalyticsActionTypes.STORE_VIEWED_POST:
            return {
                posts: state.posts,
                post: state.post,
                analytics: state.analytics,
                loading: state.loading,
                error: state.error
            }


        case AnalyticsActionTypes.FETCH_POSTS_ANALYTICS:
            return {
                posts: state.posts,
                analytics: [],
                post: {},
                loading: true,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_SUCCESS:
            return {
                posts: state.posts,
                analytics: action.payload.views,
                post: action.payload.response,
                loading: false,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_ERROR:
            return {
                posts: state.posts,
                analytics: [],
                post: {},
                loading: false,
                error: null
            }

        default:
            return state
    }
}