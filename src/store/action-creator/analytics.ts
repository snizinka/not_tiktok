import { Dispatch } from "redux";
import { AnalyticsAction, AnalyticsActionTypes } from "../../types/analytics";

export const fetchPostsByDescription = (description: string, userId: number) => {
    return async (dispatch: Dispatch<AnalyticsAction>) => {
        try {
            dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION })
            const data = await fetch('http://localhost:9000/postsbydescription', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    userId: userId
                })
            }).then(res => res.json());

            console.log(data.result.data)

            dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_SUCCESS, payload: data.result.data })
        } catch (err: any) {
            dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_BY_DESCRIPTION_ERROR, payload: "Couldn't load analytics" })
        }
    }
}

export const storeViewedPost = (data: any) => {
    return async (dispatch: Dispatch<AnalyticsAction>) => {
        try {
            dispatch({ type: AnalyticsActionTypes.STORE_VIEWED_POST })
            await fetch('http://localhost:9000/registerviewedpost', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    data: data
                })
            })
        } catch (err: any) {
           console.log('Analytics error')
        }
    }
}


export const fetchPostAnalytics = (post: any) => {
    return async (dispatch: Dispatch<AnalyticsAction>) => {
        try {
            dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS })
            const data = await fetch('http://localhost:9000/loadpostanalytics', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    id: post
                })
            }).then(res => res.json());

            console.log(data.result)

            dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_SUCCESS, payload: data.result })
        } catch (err: any) {
           console.log('Analytics error')
           dispatch({ type: AnalyticsActionTypes.FETCH_POSTS_ANALYTICS_ERROR, payload: err })
        }
    }
}