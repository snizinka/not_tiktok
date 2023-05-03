export interface CreatePostState {
    content: any[] | any;
    textContent: any[]
    photoContent: any[]
    videContent: any[]
    loading: boolean;
    error: null | string;
}

export enum CreatePostActionTypes {
    ADD_CONTENT = 'ADD_CONTENT',
    REMOVE_CONTENT = 'REMOVE_CONTENT',
    EDIT_CONTENT = 'EDIT_CONTENT',
    UPDATE_CONTENT_ARRAY = 'UPDATE_CONTENT_ARRAY',

    INPUT_TITLE_TEXT = 'INPUT_TITLE_TEXT',
    INPUT_BODY_TEXT = 'INPUT_BODY_TEXT',

    UPLOAD_IMAGE = 'UPLOAD_IMAGE',
    UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
    UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR',

    UPLOAD_VIDEO = 'UPLOAD_VIDEO',
    UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS',
    UPLOAD_VIDEO_ERROR = 'UPLOAD_VIDEO_ERROR',

    UPLOAD_POST = 'UPLOAD_POST',
    UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS',
    UPLOAD_POST_ERROR = 'UPLOAD_POST_ERROR',
}

interface AddCreatePostsAction {
    type: CreatePostActionTypes.ADD_CONTENT,
    payload: any[] | any
}

interface RemoveCreatePostsSuccessAction {
    type: CreatePostActionTypes.REMOVE_CONTENT,
    payload: any[] | any
}

interface EditCreatePostsErrorAction {
    type: CreatePostActionTypes.EDIT_CONTENT,
    payload: any[] | any
}

interface InputTitleTextCreatePostsErrorAction {
    type: CreatePostActionTypes.INPUT_TITLE_TEXT,
    payload: any[] | any
}

interface InputBodyTextCreatePostsErrorAction {
    type: CreatePostActionTypes.INPUT_BODY_TEXT,
    payload: any[] | any
}

interface UploadImageCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_IMAGE
}

interface UploadImageSuccessCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_IMAGE_SUCCESS,
    payload: any[] | any
}

interface UploadImageErrorCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_IMAGE_ERROR,
    payload: any[] | any
}

interface UploadVideoCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_VIDEO
}

interface UploadVideoSuccessCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_VIDEO_SUCCESS,
    payload: any[] | any
}

interface UploadVideoErrorCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_VIDEO_ERROR,
    payload: any[] | any
}

interface UpdateCreatePostsAction {
    type: CreatePostActionTypes.UPDATE_CONTENT_ARRAY,
    payload: any[] | any
}

interface UploadPostAction {
    type: CreatePostActionTypes.UPLOAD_POST
}

interface UploadPostSuccessAction {
    type: CreatePostActionTypes.UPLOAD_POST_SUCCESS,
    payload: any[] | any
}

interface UploadPostErrorAction {
    type: CreatePostActionTypes.UPLOAD_POST_ERROR,
    payload: any[] | any
}

export type CreatePostAction = AddCreatePostsAction | RemoveCreatePostsSuccessAction | EditCreatePostsErrorAction
| InputTitleTextCreatePostsErrorAction | InputBodyTextCreatePostsErrorAction
| UploadImageCreatePostsAction | UploadImageSuccessCreatePostsAction | UploadImageErrorCreatePostsAction
| UploadVideoCreatePostsAction | UploadVideoSuccessCreatePostsAction | UploadVideoErrorCreatePostsAction
| UpdateCreatePostsAction
| UploadPostAction | UploadPostSuccessAction | UploadPostErrorAction