import { CreatePostAction, CreatePostActionTypes, CreatePostState } from "../../types/createPost"

const initialState: CreatePostState = {
    mode: 'creation',
    postId: undefined,
    content: [],
    tags: [],
    description: '',
    previewImage: '',
    loading: false,
    error: null
}

function spreadContent(content: any) {
    let index = 0
    const textContent = content._text.map((item: any) => {
        index += 1
        return { content: { title: item.textTitle, body: item.textContent, type: "textContent", textContentId: item.textContentId }, id: index }
    })

    const photoContent = content._picture.map((item: any) => {
        index += 1
        return { content: { description: '', link: item.photoLink, type: "photoContent", photoContentId: item.photoContentId }, id: index }
    })

    const videoContent = content._video.map((item: any) => {
        index += 1
        return { content: { description: '', link: item.videoLink, type: "videoContent", videoContentId: item.videoContentId }, id: index }
    })

    return [...textContent, ...photoContent, ...videoContent]
}

function spreadTags(content: any) {
    let index = 0
    const tags = content._category.map((item: any) => {
        index += 1
        return { tag: item.categoryName, tagId: index, categoryId: item.categoryId }
    })

    return tags
}

export default function createPostReducer(state = initialState, action: CreatePostAction): CreatePostState {
    switch (action.type) {
        case CreatePostActionTypes.ADD_CONTENT:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: true,
                content: [...state.content, action.payload],
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.REMOVE_CONTENT:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content.filter((content: any) => content.id !== action.payload),
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.EDIT_CONTENT:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: [],
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.INPUT_TITLE_TEXT:
            return {
                postId: state.postId,
                mode: state.mode,
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
                postId: state.postId,
                mode: state.mode,
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
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                postId: state.postId,
                mode: state.mode,
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
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }


        case CreatePostActionTypes.UPLOAD_VIDEO:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_VIDEO_SUCCESS:
            return {
                postId: state.postId,
                mode: state.mode,
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
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.UPDATE_CONTENT_ARRAY:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: action.payload,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: true,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_SUCCESS:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: [],
                tags: [],
                description: '',
                previewImage: '',
                error: null
            }

        case CreatePostActionTypes.UPLOAD_POST_ERROR:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.ADD_TAG:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: [...state.tags, action.payload],
                description: state.description,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.REMOVE_TAG:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags.filter((tag: any) => tag.tagId !== action.payload),
                description: state.description,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.INPUT_DESCRIPTION:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: action.payload,
                previewImage: state.previewImage,
                error: state.error
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_SUCCESS:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: action.payload,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_PREVIEW_IMAGE_ERROR:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.PREPARE_CONTENT:
            return {
                postId: undefined,
                mode: 'editing',
                loading: false,
                content: [],
                tags: [],
                description: '',
                previewImage: '',
                error: null
            }

        case CreatePostActionTypes.PREPARE_CONTENT_SUCCESS:
            return {
                postId: action.payload.postId,
                mode: state.mode,
                loading: false,
                content: spreadContent(action.payload),
                tags: spreadTags(action.payload),
                description: action.payload.description,
                previewImage: action.payload.previewImage,
                error: null
            }

        case CreatePostActionTypes.PREPARE_CONTENT_ERROR:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }

        case CreatePostActionTypes.UPLOAD_EDITED_CONTENT:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: true,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_EDITED_CONTENT_SUCCESS:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: null
            }

        case CreatePostActionTypes.UPLOAD_EDITED_CONTENT_ERROR:
            return {
                postId: state.postId,
                mode: state.mode,
                loading: false,
                content: state.content,
                tags: state.tags,
                description: state.description,
                previewImage: state.previewImage,
                error: action.payload
            }



            case CreatePostActionTypes.CLEAR_FIELDS:
                return {
                    postId: undefined,
                    mode: 'creation',
                    loading: false,
                    content: [],
                    tags: [],
                    description: '',
                    previewImage: '',
                    error: null
                }
    
        default:
            return state
    }
}
