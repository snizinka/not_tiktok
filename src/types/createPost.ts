export interface CreatePostState {
    postId: any;
    mode: any;
    content: any[] | any;
    loading: boolean;
    description: string;
    tags: any[];
    previewImage: any;
    error: null | string;
}

export enum CreatePostActionTypes {
    ADD_CONTENT = 'ADD_CONTENT',
    REMOVE_CONTENT = 'REMOVE_CONTENT',
    EDIT_CONTENT = 'EDIT_CONTENT',
    UPDATE_CONTENT_ARRAY = 'UPDATE_CONTENT_ARRAY',

    INPUT_TITLE_TEXT = 'INPUT_TITLE_TEXT',
    INPUT_BODY_TEXT = 'INPUT_BODY_TEXT',

    CLEAR_FIELDS = 'CLEAR_FIELDS',
    CLEAR_FIELDS_SUCCESS = 'CLEAR_FIELDS_SUCCESS',
    CLEAR_FIELDS_ERROR = 'CLEAR_FIELDS_ERROR',


    UPLOAD_IMAGE = 'UPLOAD_IMAGE',
    UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
    UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR',

    UPLOAD_VIDEO = 'UPLOAD_VIDEO',
    UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS',
    UPLOAD_VIDEO_ERROR = 'UPLOAD_VIDEO_ERROR',

    UPLOAD_POST = 'UPLOAD_POST',
    UPLOAD_POST_SUCCESS = 'UPLOAD_POST_SUCCESS',
    UPLOAD_POST_ERROR = 'UPLOAD_POST_ERROR',

    ADD_TAG = 'ADD_TAG',
    REMOVE_TAG = 'REMOVE_TAG',

    INPUT_DESCRIPTION = 'INPUT_DESCRIPTION',

    UPLOAD_PREVIEW_IMAGE = 'UPLOAD_PREVIEW_IMAGE',
    UPLOAD_PREVIEW_IMAGE_SUCCESS = 'UPLOAD_PREVIEW_IMAGE_SUCCESS',
    UPLOAD_PREVIEW_IMAGE_ERROR = 'UPLOAD_PREVIEW_IMAGE_ERROR',

    PREPARE_CONTENT = 'PREPARE_CONTENT',
    PREPARE_CONTENT_SUCCESS = 'PREPARE_CONTENT_SUCCESS',
    PREPARE_CONTENT_ERROR = 'PREPARE_CONTENT_ERROR',

    UPLOAD_EDITED_CONTENT = 'UPLOAD_EDITED_CONTENT',
    UPLOAD_EDITED_CONTENT_SUCCESS = 'UPLOAD_EDITED_CONTENT_SUCCESS',
    UPLOAD_EDITED_CONTENT_ERROR = 'UPLOAD_EDITED_CONTENT_ERROR',
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

interface AddPostTagAction {
    type: CreatePostActionTypes.ADD_TAG,
    payload: any[] | any
}

interface RemovePostTagAction {
    type: CreatePostActionTypes.REMOVE_TAG,
    payload: any[] | any
}

interface InputPostDescriptionAction {
    type: CreatePostActionTypes.INPUT_DESCRIPTION,
    payload: any
}

interface UploadPreviewImageCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE
}

interface UploadPreviewImageSuccessCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_SUCCESS,
    payload: any[] | any
}

interface UploadPreviewImageErrorCreatePostsAction {
    type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_ERROR,
    payload: any[] | any
}

interface PrepareEditPostsAction {
    type: CreatePostActionTypes.PREPARE_CONTENT
}

interface PrepareEditSuccessPostsAction {
    type: CreatePostActionTypes.PREPARE_CONTENT_SUCCESS,
    payload: any[] | any
}

interface PrepareEditErrorPostsAction {
    type: CreatePostActionTypes.PREPARE_CONTENT_ERROR,
    payload: any[] | any
}

interface UploadEditedPostsAction {
    type: CreatePostActionTypes.UPLOAD_EDITED_CONTENT
}

interface UploadEditedSuccessPostsAction {
    type: CreatePostActionTypes.UPLOAD_EDITED_CONTENT_SUCCESS,
    payload: any[] | any
}

interface UploadEditedErrorPostsAction {
    type: CreatePostActionTypes.UPLOAD_EDITED_CONTENT_ERROR,
    payload: any[] | any
}


interface ClearFieldsPostsAction {
    type: CreatePostActionTypes.CLEAR_FIELDS
}

interface ClearFieldsSuccessPostsAction {
    type: CreatePostActionTypes.CLEAR_FIELDS_SUCCESS,
    payload: any[] | any
}

interface ClearFieldsErrorPostsAction {
    type: CreatePostActionTypes.CLEAR_FIELDS_ERROR,
    payload: any[] | any
}

export type CreatePostAction = AddCreatePostsAction | RemoveCreatePostsSuccessAction | EditCreatePostsErrorAction
| InputTitleTextCreatePostsErrorAction | InputBodyTextCreatePostsErrorAction
| UploadImageCreatePostsAction | UploadImageSuccessCreatePostsAction | UploadImageErrorCreatePostsAction
| UploadVideoCreatePostsAction | UploadVideoSuccessCreatePostsAction | UploadVideoErrorCreatePostsAction
| UpdateCreatePostsAction
| UploadPostAction | UploadPostSuccessAction | UploadPostErrorAction
| AddPostTagAction | RemovePostTagAction
| InputPostDescriptionAction
| UploadPreviewImageCreatePostsAction | UploadPreviewImageSuccessCreatePostsAction | UploadPreviewImageErrorCreatePostsAction
| PrepareEditPostsAction | PrepareEditSuccessPostsAction | PrepareEditErrorPostsAction
| UploadEditedPostsAction | UploadEditedSuccessPostsAction | UploadEditedErrorPostsAction
| ClearFieldsPostsAction | ClearFieldsSuccessPostsAction | ClearFieldsErrorPostsAction