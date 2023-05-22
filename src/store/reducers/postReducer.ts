import { PostAction, PostActionTypes, PostState } from "../../types/post";

const initialState: PostState = {
    loadPostIndex: 5,
    currentPostThreshold: 0,
    posts: [],
    loading: false,
    error: null
}

function addCommentHandler(state: any, action: any) {
    const data = state.posts.map((post: any) =>
        post.postId === action.payload.postId
            ? { ...post, _comments: [...post._comments, action.payload] }
            : post
    )

    return data
}

function removeCommentHandler(state: any, action: any) {
    const data = state.posts.map((post: any) =>
        post.postId === action.payload.postId
            ? { ...post, _comments: post._comments.filter((comment: any) => comment.commentId !== action.payload.commentId) }
            : post
    )

    return data
}

export default function postReducer(state = initialState, action: PostAction): PostState {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold + 6,
                loading: true,
                posts: [],
                error: null
            }

        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: action.payload,
                error: null
            }

        case PostActionTypes.FETCH_POSTS_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: [],
                error: action.payload
            }

        case PostActionTypes.FETCH_ADDITIONAL_POSTS:
            return {
                loadPostIndex: state.loadPostIndex + 6,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.FETCH_ADDITIONAL_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold + 6,
                loading: false,
                posts: [...state.posts, ...action.payload],
                error: null
            }

        case PostActionTypes.FETCH_ADDITIONAL_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }

        case PostActionTypes.REMOVE_POSTS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: true,
                posts: state.posts.filter((p: { postId: number; }) => p.postId !== action.payload),
                error: null
            }

        case PostActionTypes.REMOVE_POSTS_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: null
            }




        case PostActionTypes.HANDLE_LIKES:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.HANDLE_LIKES_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts.map(
                    (content: { postId: any; likes: number }, i: any) =>
                        content.postId === action.payload.postId ?
                            {
                                ...content,
                                iliked: action.payload.pass,
                                likes: action.payload.pass ? content.likes + 1 : content.likes - 1,
                            }
                            : content
                ),
                error: null
            }

        case PostActionTypes.HANDLE_LIKES_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }





        case PostActionTypes.HANDLE_FOLLOW:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.HANDLE_FOLLOW_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts.map(
                    (content: { _user: any; }, i: any) =>
                        content._user.userId === action.payload.authorId ?
                            {
                                ...content,
                                isFollowing: action.payload.pass,
                            }
                            : content
                ),
                error: null,
            };

        case PostActionTypes.HANDLE_FOLLOW_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }




        case PostActionTypes.FETCH_PROFILE:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: true,
                posts: [],
                error: null
            }

        case PostActionTypes.FETCH_PROFILE_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: action.payload,
                error: null
            }

        case PostActionTypes.FETCH_PROFILE_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }

        case PostActionTypes.ADD_COMMENT:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: true,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.ADD_COMMENT_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: addCommentHandler(state, action),
                error: null
            }

        case PostActionTypes.ADD_COMMENT_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }

        case PostActionTypes.REMOVE_COMMENT:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: true,
                posts: state.posts,
                error: null
            }

        case PostActionTypes.REMOVE_COMMENT_SUCCESS:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: removeCommentHandler(state, action),
                error: null
            }

        case PostActionTypes.REMOVE_COMMENT_ERROR:
            return {
                loadPostIndex: state.loadPostIndex,
                currentPostThreshold: state.currentPostThreshold,
                loading: false,
                posts: state.posts,
                error: action.payload
            }

        default:
            return state
    }
}