export interface AdminState {
    action: any;
    all_posts: any[] | any;
    posts: any[] | any;
    post: any[] | any;
    users: any[] | any;
    user: any[] | any;
    analytics: any[] | any;
    loading: boolean;
    error: null | any[] | any;
}

export enum AdminActionTypes {
    FIND_USER_OR_POST = 'FIND_USER_OR_POST',
    FIND_USER_OR_POST_SUCCESS = 'FIND_USER_OR_POST_SUCCESS',
    FIND_USER_OR_POST_ERROR = 'FIND_USER_OR_POST_ERROR',

    SELECT_USER_OR_POST = 'SELECT_USER_OR_POST',
    SELECT_USER_OR_POST_SUCCESS = 'SELECT_USER_OR_POST_SUCCESS',
    SELECT_USER_OR_POST_ERROR = 'SELECT_USER_OR_POST_ERROR',

    SORT_POSTS = 'SORT_POSTS',

    LOAD_POST = 'LOAD_POST',
    LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS',
    LOAD_POST_ERROR = 'LOAD_POST_ERROR',

    MANAGE_POST_BLOCK = 'MANAGE_POST_BLOCK',
    MANAGE_POST_BLOCK_SUCCESS = 'MANAGE_POST_BLOCK_SUCCESS',
    MANAGE_POST_BLOCK_ERROR = 'MANAGE_POST_BLOCK_ERROR',
}


interface FindUserOrPostAction {
    type: AdminActionTypes.FIND_USER_OR_POST
}

interface FindUserOrPostSuccessAction {
    type: AdminActionTypes.FIND_USER_OR_POST_SUCCESS,
    payload: any[] | any
}

interface FindUserOrPostErrorAction {
    type: AdminActionTypes.FIND_USER_OR_POST_ERROR,
    payload: any[] | any
}

interface SelectUserOrPostAction {
    type: AdminActionTypes.SELECT_USER_OR_POST
}

interface SelectUserOrPostSuccessAction {
    type: AdminActionTypes.SELECT_USER_OR_POST_SUCCESS,
    payload: any[] | any
}

interface SelectUserOrPostErrorAction {
    type: AdminActionTypes.SELECT_USER_OR_POST_ERROR,
    payload: any[] | any
}

interface SortPostsAction {
    type: AdminActionTypes.SORT_POSTS,
    payload: any[] | any
}

interface LoadPostAction {
    type: AdminActionTypes.LOAD_POST
}

interface LoadPostSuccessAction {
    type: AdminActionTypes.LOAD_POST_SUCCESS,
    payload: any[] | any
}

interface LoadPostErrorAction {
    type: AdminActionTypes.LOAD_POST_ERROR,
    payload: any[] | any
}

interface ManagePostBlockAction {
    type: AdminActionTypes.MANAGE_POST_BLOCK
}

interface ManagePostBlockSuccessAction {
    type: AdminActionTypes.MANAGE_POST_BLOCK_SUCCESS,
    payload: any[] | any
}

interface ManagePostBlockErrorAction {
    type: AdminActionTypes.MANAGE_POST_BLOCK_ERROR,
    payload: any[] | any
}

export type AdminAction = FindUserOrPostAction | FindUserOrPostSuccessAction | FindUserOrPostErrorAction
| SelectUserOrPostAction | SelectUserOrPostSuccessAction | SelectUserOrPostErrorAction
| SortPostsAction
| LoadPostAction | LoadPostSuccessAction | LoadPostErrorAction
| ManagePostBlockAction | ManagePostBlockSuccessAction | ManagePostBlockErrorAction