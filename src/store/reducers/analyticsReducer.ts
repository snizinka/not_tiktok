import { AnalyticsAction, AnalyticsActionTypes, AnalyticsState } from "../../types/analytics";

const initialState: AnalyticsState = {
    posts: [],
    analytics: [],
    loading: false,
    error: null
}

export default function analyticsReducer(state = initialState, action: AnalyticsAction): AnalyticsState {
    switch (action.type) {
        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION:
            return {
                posts: [],
                analytics: [],
                loading: true,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_SUCCESS:
            return {
                posts: action.payload,
                analytics: [],
                loading: false,
                error: null
            }

        case AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_ERROR:
            return {
                posts: [],
                analytics: [],
                loading: false,
                error: null
            }

        case AnalyticsActionTypes.STORE_VIEWED_POST:
            return {
                posts: state.posts,
                analytics: state.analytics,
                loading: state.loading,
                error: state.error
            }

        default:
            return state
    }
}