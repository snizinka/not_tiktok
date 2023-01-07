import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

export default function postReducer(state = initialState, action: PostAction): PostState {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {
                loading: true,
                posts: [],
                error: null
            }

        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: null
            }

        case PostActionTypes.FETCH_POSTS_ERROR:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }

        case PostActionTypes.REMOVE_POSTS:
            return {
                loading: true,
                posts: state.posts.filter((p: { postId: number; }) => p.postId !== action.payload),
                error: null
            }

        case PostActionTypes.REMOVE_POSTS_SUCCESS:
            return {
                loading: false,
                posts: state.posts,
                error: null
            }




        case PostActionTypes.HANDLE_LIKES:
            return {
                loading: false,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.HANDLE_LIKES_SUCCESS:
            return {
                loading: false,
                posts: state.posts.map(
                    (content: { postId: any; }, i: any) => content.postId === action.payload.postId ? { ...content, iliked: action.payload.pass }
                        : content
                ),
                error: null
            }

        case PostActionTypes.HANDLE_LIKES_ERROR:
            return {
                loading: false,
                posts: state.posts,
                error: action.payload
            }



            
        case PostActionTypes.FETCH_PROFILE:
            return {
                loading: true,
                posts: [],
                error: null
            }

        case PostActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: null
            }

        case PostActionTypes.FETCH_PROFILE_ERROR:
            return {
                loading: false,
                posts: state.posts,
                error: action.payload
            }

        default:
            return state
    }
}