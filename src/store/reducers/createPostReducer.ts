import { CreatePostAction, CreatePostActionTypes, CreatePostState } from "../../types/createPost"

const initialState: CreatePostState = {
    content: [],
    textContent: [],
    photoContent: [],
    videContent: [],
    loading: false,
    error: null
}

export default function createPostReducer(state = initialState, action: CreatePostAction): CreatePostState {
    switch (action.type) {
        case CreatePostActionTypes.ADD_CONTENT:
            return {
                loading: true,
                content: [...state.content, action.payload],
                textContent: action.payload.content === 'textContent' ? [...state.textContent, { id: action.payload.id, textContent: '' }] : state.textContent,
                photoContent: action.payload.content === 'photoContent' ? [...state.photoContent, { id: action.payload.id, photoContent: '' }] : state.photoContent,
                videContent: action.payload.content === 'videoContent' ? [...state.videContent, { id: action.payload.id, videoContent: '' }] : state.videContent,
                error: null
            }

        case CreatePostActionTypes.REMOVE_CONTENT:
            return {
                loading: false,
                content: state.content.filter((content: any) => content.id !== action.payload),
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.EDIT_CONTENT:
            return {
                loading: false,
                content: [],
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.INPUT_TITLE_TEXT:
            return {
                loading: false,
                content: state.content.map((text: any) => text.id === action.payload.id ?
                    { ...text, content: { title: action.payload.textContent, type: text.content.type, body: text.content.body } } : text
                ),
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.INPUT_BODY_TEXT:
            return {
                loading: false,
                content: state.content.map((text: any) => text.id === action.payload.id ?
                    { ...text, content: { title: text.content.title, type: text.content.type, body: action.payload.bodyText } } : text
                ),
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE:
            return {
                loading: false,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                loading: false,
                content: state.content.map((image: any) => image.id === action.payload.id ?
                    { ...image, content: { link: action.payload.copiedImage, type: image.content.type, description: image.content.description } } : image
                ),
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE_ERROR:
            return {
                loading: false,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: action.payload
            }


        case CreatePostActionTypes.UPLOAD_VIDEO:
            return {
                loading: false,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_VIDEO_SUCCESS:
            return {
                loading: false,
                content: state.content.map((video: any) => video.id === action.payload.id ?
                    { ...video, content: { link: action.payload.copiedVideo, type: video.content.type, description: video.content.description } } : video
                ),
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_VIDEO_ERROR:
            return {
                loading: false,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: action.payload
            }

        case CreatePostActionTypes.UPDATE_CONTENT_ARRAY:
            return {
                loading: false,
                content: action.payload,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST:
            return {
                loading: true,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_SUCCESS:
            return {
                loading: false,
                content: [],
                textContent: [],
                photoContent: [],
                videContent: [],
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_ERROR:
            return {
                loading: false,
                content: state.content,
                textContent: state.textContent,
                photoContent: state.photoContent,
                videContent: state.videContent,
                error: action.payload
            }
        default:
            return state
    }
}
