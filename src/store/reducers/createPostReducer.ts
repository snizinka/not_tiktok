import { CreatePostAction, CreatePostActionTypes, CreatePostState } from "../../types/createPost"

const initialState: CreatePostState = {
    content: [],
    tags: [],
    description: '',
    previewImage: '',
    loading: false,
    error: null
}

export default function createPostReducer(state = initialState, action: CreatePostAction): CreatePostState {
    switch (action.type) {
        case CreatePostActionTypes.ADD_CONTENT:
            return {
                loading: true,
                content: [...state.content, action.payload],
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.REMOVE_CONTENT:
            return {
                loading: false,
                content: state.content.filter((content: any) => content.id !== action.payload),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.EDIT_CONTENT:
            return {
                loading: false,
                content: [],
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.INPUT_TITLE_TEXT:
            return {
                loading: false,
                content: state.content.map((text: any) => text.id === action.payload.id ?
                    { ...text, content: { title: action.payload.textContent, type: text.content.type, body: text.content.body } } : text
                ),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.INPUT_BODY_TEXT:
            return {
                loading: false,
                content: state.content.map((text: any) => text.id === action.payload.id ?
                    { ...text, content: { title: text.content.title, type: text.content.type, body: action.payload.bodyText } } : text
                ),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                loading: false,
                content: state.content.map((image: any) => image.id === action.payload.id ?
                    { ...image, content: { link: action.payload.copiedImage, type: image.content.type, description: image.content.description } } : image
                ),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE_ERROR:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }


        case CreatePostActionTypes.UPLOAD_VIDEO:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_VIDEO_SUCCESS:
            return {
                loading: false,
                content: state.content.map((video: any) => video.id === action.payload.id ?
                    { ...video, content: { link: action.payload.copiedVideo, type: video.content.type, description: video.content.description } } : video
                ),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_VIDEO_ERROR:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.UPDATE_CONTENT_ARRAY:
            return {
                loading: false,
                content: action.payload,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST:
            return {
                loading: true,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_SUCCESS:
            return {
                loading: false,
                content: [],
                tags: [],
                description: '',
                previewImage: '',
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_ERROR:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.ADD_TAG:
            return {
                loading: false,
                content: state.content,
                tags: [...state.tags, action.payload],
                description: state.description,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.REMOVE_TAG:
            return {
                loading: false,
                content: state.content,
                tags: state.tags.filter((tag: any) => tag.tagId !== action.payload),
                description: state.description,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.INPUT_DESCRIPTION:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: action.payload,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_SUCCESS:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: action.payload,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_ERROR:
            return {
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }
        default:
            return state
    }
}
