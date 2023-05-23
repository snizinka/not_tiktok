import { AdminAction, AdminActionTypes, AdminState } from "../../types/admin";

const initialState: AdminState = {
    action: '',
    all_posts: [],
    posts: [],
    post: {},
    users: [],
    user: {},
    analytics: [],
    loading: false,
    error: null
}

function sortPosts(posts: any, description: any) {
    return posts.filter((post: any) => post.description.includes(description))
}

export default function adminReducer(state = initialState, action: AdminAction): AdminState {
    switch (action.type) {
        case AdminActionTypes.FIND_USER_OR_POST:
            return {
                action: 'searching',
                all_posts: [],
                posts: [],
                post: {},
                users: [],
                user: {},
                analytics: [],
                loading: true,
                error: null
            }

        case AdminActionTypes.FIND_USER_OR_POST_SUCCESS:
            return {
                action: state.action,
                all_posts: action.payload.posts,
                posts: action.payload.posts,
                post: {},
                users: action.payload.users,
                user: {},
                analytics: [],
                loading: false,
                error: null
            }

        case AdminActionTypes.FIND_USER_OR_POST_ERROR:
            return {
                action: state.action,
                all_posts: [],
                posts: [],
                post: {},
                users: [],
                user: {},
                analytics: [],
                loading: false,
                error: action.payload
            }

        case AdminActionTypes.SELECT_USER_OR_POST:
            return {
                action: 'selected',
                all_posts: state.posts,
                posts: state.posts,
                post: state.post,
                users: state.users,
                user: {},
                analytics: [],
                loading: true,
                error: null
            }

        case AdminActionTypes.SELECT_USER_OR_POST_SUCCESS:
            return {
                action: state.action,
                all_posts: action.payload.posts,
                posts: action.payload.posts,
                post: action.payload.selectedPost,
                users: [],
                user: action.payload.user,
                analytics: [],
                loading: false,
                error: null
            }

        case AdminActionTypes.SELECT_USER_OR_POST_ERROR:
            return {
                action: state.action,
                all_posts: [],
                posts: [],
                post: [],
                users: [],
                user: {},
                analytics: [],
                loading: false,
                error: action.payload
            }

        case AdminActionTypes.SORT_POSTS:
            return {
                action: state.action,
                all_posts: state.all_posts,
                posts: sortPosts(state.all_posts, action.payload),
                post: state.post,
                users: state.users,
                user: state.user,
                analytics: state.analytics,
                loading: false,
                error: null
            }

        case AdminActionTypes.LOAD_POST:
            return {
                action: 'selected',
                all_posts: state.posts,
                posts: state.posts,
                post: {},
                users: state.users,
                user: state.user,
                analytics: state.analytics,
                loading: true,
                error: null
            }

        case AdminActionTypes.LOAD_POST_SUCCESS:
            return {
                action: state.action,
                all_posts: state.all_posts,
                posts: state.posts,
                post: action.payload,
                users: state.users,
                user: state.user,
                analytics: state.analytics,
                loading: false,
                error: null
            }

        case AdminActionTypes.LOAD_POST_ERROR:
            return {
                action: state.action,
                all_posts: [],
                posts: [],
                post: [],
                users: [],
                user: {},
                analytics: [],
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}