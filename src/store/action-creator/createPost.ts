import axios from 'axios';
import { Dispatch } from "redux";
import { CreatePostAction, CreatePostActionTypes } from "../../types/createPost";

export const addContent = (data: any[] | any) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.ADD_CONTENT, payload: data })
    }
}

export const removeContent = (id: number) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.REMOVE_CONTENT, payload: id })
    }
}

export const updateContentArray = (contentArray: any[]) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.UPDATE_CONTENT_ARRAY, payload: contentArray })
    }
}

export const inputTitleText = (id: number, textContent: string) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.INPUT_TITLE_TEXT, payload: { id: id, textContent: textContent } })
    }
}

export const inputBodyText = (id: number, bodyText: string) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.INPUT_BODY_TEXT, payload: { id: id, bodyText: bodyText } })
    }
}

export const addTag = (tag: string, tagId: number) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.ADD_TAG, payload: {tag, tagId} })
    }
}

export const removeTag = (tagId: number) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.REMOVE_TAG, payload: tagId })
    }
}

export const inputDescription = (description: number) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        dispatch({ type: CreatePostActionTypes.INPUT_DESCRIPTION, payload: description })
    }
}

export const uploadImage = (id: number, image: any) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        try {
            dispatch({ type: CreatePostActionTypes.UPLOAD_IMAGE })
            let formData: any = new FormData()
            formData.append("file", image)
            let copiedImage = ""
            try {
                const { data } = await axios.post('http://localhost:9000/uploadfile', formData)
                copiedImage = data.result.replace(/\\/g, '/')

                console.log(copiedImage)
            } catch (error) {
                console.error(error);
                return;
            }
            dispatch({ type: CreatePostActionTypes.UPLOAD_IMAGE_SUCCESS, payload: { id, copiedImage } })
        } catch (e: any) {
            console.log(e)
            dispatch({ type: CreatePostActionTypes.UPLOAD_IMAGE_ERROR, payload: e })
        }
    }
}

export const uploadVideo = (id: number, video: any) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        try {
            dispatch({ type: CreatePostActionTypes.UPLOAD_VIDEO })
            let formData: any = new FormData()
            formData.append("file", video)
            let copiedVideo = ""
            try {
                const { data } = await axios.post('http://localhost:9000/uploadfile', formData)
                copiedVideo = data.result.replace(/\\/g, '/')

                console.log(copiedVideo)
            } catch (error) {
                console.error(error);
                return;
            }
            dispatch({ type: CreatePostActionTypes.UPLOAD_VIDEO_SUCCESS, payload: { id, copiedVideo } })
        } catch (e: any) {
            console.log(e)
            dispatch({ type: CreatePostActionTypes.UPLOAD_VIDEO_ERROR, payload: e })
        }
    }
}

export const uploadPost = (content: any[], tags: any[], description: string, previewImage: string, userId: number, requstedPostId: number) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        try {
            dispatch({ type: CreatePostActionTypes.UPLOAD_POST })

            try {
                const data = await fetch('http://localhost:9000/uploadpost', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        content: { content, userId, description, tags, previewImage, requstedPostId }
                    })
                }).then(res => res.json())
                console.log(data)
            } catch (error) {
                console.error(error);
                return;
            }
            dispatch({ type: CreatePostActionTypes.UPLOAD_POST_SUCCESS, payload: {} })
        } catch (e: any) {
            console.log(e)
            dispatch({ type: CreatePostActionTypes.UPLOAD_POST_ERROR, payload: e })
        }
    }
}

export const uploadPreviewImage = (image: any) => {
    return async (dispatch: Dispatch<CreatePostAction>) => {
        try {
            dispatch({ type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE })
            let formData: any = new FormData()
            formData.append("file", image)
            let copiedImage = ""
            try {
                const { data } = await axios.post('http://localhost:9000/uploadfile', formData)
                copiedImage = data.result.replace(/\\/g, '/')

                console.log(copiedImage)
            } catch (error) {
                console.error(error);
                return;
            }
            dispatch({ type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_SUCCESS, payload: copiedImage })
        } catch (e: any) {
            console.log(e)
            dispatch({ type: CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_ERROR, payload: e })
        }
    }
}