export interface AnalyticsState {
    posts: any[] | any;
    post: any[] | any;
    analytics: any[] | any;
    loading: boolean;
    error: null | string;
}

export enum AnalyticsActionTypes {
    FETCH_POSTS_BY_DESCRIPTION = 'FETCH_POSTS_BY_DESCRIPTION',
    FETCH_POSTS_BY_DESCRIPTION_SUCCESS = 'FETCH_POSTS_BY_DESCRIPTION_SUCCESS',
    FETCH_POSTS_BY_DESCRIPTION_ERROR = 'FETCH_POSTS_BY_DESCRIPTION_ERROR',

    STORE_VIEWED_POST = 'STORE_VIEWED_POST',

    FETCH_POSTS_ANALYTICS = 'FETCH_POSTS_ANALYTICS',
    FETCH_POSTS_ANALYTICS_SUCCESS = 'FETCH_POSTS_ANALYTICS_SUCCESS',
    FETCH_POSTS_ANALYTICS_ERROR = 'FETCH_POSTS_ANALYTICS_ERROR',
}


interface FetchPostsByDescriptionAction {
    type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION
}

interface FetchPostsByDescriptionSuccessAction {
    type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_SUCCESS,
    payload: any[] | any
}

interface FetchPostsByDescriptionErrorAction {
    type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_ERROR,
    payload: any[] | any
}

interface StoreViewedPostAction {
    type: AnalyticsActionTypes.STORE_VIEWED_POST
}

interface FetchPostAnalyticsAction {
    type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS
}

interface FetchPostAnalyticsSuccessAction {
    type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_SUCCESS,
    payload: any[] | any
}

interface FetchPostAnalyticsErrorAction {
    type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_ERROR,
    payload: any[] | any
}


export type AnalyticsAction = FetchPostsByDescriptionAction | FetchPostsByDescriptionSuccessAction | FetchPostsByDescriptionErrorAction
| StoreViewedPostAction
| FetchPostAnalyticsAction | FetchPostAnalyticsSuccessAction | FetchPostAnalyticsErrorAction