import React, { useState, useEffect, useRef } from "react"
import Header from "../Header";
import CancelButton from "./CancelButton";
import CreatePostFactory from "./CreatePostFactory";
import { CreatePostStyles } from "./CreatePostStyles";
import CreatePostType from "./CreatePostType";
import NextButton from "./NextButton";
import useCreatePostActions from "../../hooks/useCreatePostActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ContentPreviewFactory from "./ContentPreviewFactory";
import CreatePostPurpose from "./CreatePostPurpose";
import CustomerCard from "./CustomerCard";
import ContinueButton from "./ContinueButton";
import PreviewImage from "./PreviewImage";
import contentValidationFactory from "./ContentValidation/contentValidationFactory";
import BackButton from "./BackButton";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextContent from "./TextContent";

const CreatePost = () => {
    const navigate = useNavigate();
    const { getPostContentToEdit } = useCreatePostActions()
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const { request } = useTypedSelector(state => state.requestUsers)
    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)
    const { content, description, previewImage, tags, mode, postId } = useTypedSelector(state => state.createPost)
    const { addContent, removeContent, updateContentArray, uploadPost, addTag, removeTag, inputDescription, uploadEditedPostContent, clearFields } = useCreatePostActions()

    const [currentId, setCurrentId] = useState<any>(0)
    const [error, setError] = useState<any>(null)
    const [requstedPostId, setRequestedPostId] = useState<any>(null)
    const [tagId, setTagId] = useState<any>(0)
    const [isPostOrdered, setIsPostOrdered] = useState(false)
    const currentSlide = useRef(0)
    const slider = useRef<any>(null)
    const [currentHorizontalSlide, setCurrentHorizontalSlide] = useState(0)
    const [contentToRemove, setContentToRemove] = useState<any>(null)
    const [horizontalSlide, setHorizontalSlide] = useState<any>(0)
    const [tag, setTag] = useState<any>('')
    const contentLength = useRef<any>(0)

    useEffect(() => {
        console.log(mode)
        if (params.id) {
            getPostContentToEdit(params.id, user[0].userId)
        } else {
            clearFields()
        }
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    let newPosition = contentLength.current * (-100)
                    currentSlide.current = (newPosition)
                    console.log(newPosition)
                    slider.current.style.transition = `.4s ease`;
                    slider.current.style.transform = `translate(0, ${newPosition}%)`;
                }
            }
        })

        observer.observe(slider.current, { childList: true });

        return () => {
            observer.disconnect();
        }
    }, [])

    useEffect(() => {
        contentLength.current = content.length
        console.log(content)
    }, [content])

    useEffect(() => {
        if (contentToRemove !== null) {
            removeContent(contentToRemove)
            setContentToRemove(null)
            scrollSlider('up')
        }
    }, [contentToRemove])

    function scrollSlider(direction: string) {
        console.log(currentSlide)
        let newPosition = direction === 'down' ? currentSlide.current - 100 : currentSlide.current + 100

        if (newPosition > 0) {
            newPosition = content.length * (-100)
        } else if ((content.length) * (-100) > newPosition) {
            newPosition = 0
        }

        currentSlide.current = (newPosition)
        slider.current.style.transform = `translateY(${newPosition}%)`;
    }

    function addContentType(newContentType: string) {
        setCurrentId(currentId + 1)
        addContent({ content: newContentType, id: currentId })
    }

    function setIsOrderContent(status: boolean) {
        setIsPostOrdered(status)
    }

    function removeContentById(id: number) {
        setContentToRemove(id)
    }

    function switchHorizontalSlide(index: number) {
        setHorizontalSlide(index)
        let newPosition = index * (-100)

        setCurrentHorizontalSlide(newPosition)
        let dpc: any = document.getElementsByClassName('content-slider-wrapper')[0];
        dpc.style.transform = `translateX(${newPosition}%)`;
    }

    function handleSort() {
        let _content = [...content]
        const draggedItem = _content.splice(dragItem.current, 1)[0]
        _content.splice(dragOverItem.current, 0, draggedItem)
        dragItem.current = null
        dragOverItem.current = null
        updateContentArray(_content)
    }

    function uploadContent() {
        if (mode === 'creation') {
            uploadPost(content, tags, description, previewImage, user[0].userId, requstedPostId)
        } else {
            uploadEditedPostContent({ postId, content, tags, description, previewImage, userId: user[0].userId, requstedPostId })
            navigate(`/content/${postId}`)
        }
    }

    function addNewTag() {
        addTag(tag, tagId)
        setTagId((prev: any) => prev + 1)
        setTag('')
    }

    function removeTagById(tagID: number) {
        removeTag(tagID)
    }

    function RenderButtons() {
        if (horizontalSlide === 0) {
            return <></>
        }
        if (horizontalSlide === 1) {
            return <>
                <button onClick={() => scrollSlider('up')}>UP</button>
                <button onClick={() => scrollSlider('down')}>DOWN</button>
            </>
        } else if (horizontalSlide === 2) {
            return <button onClick={() => switchHorizontalSlide(3)}>Choose tags</button>
        } else if (horizontalSlide === 3) {
            return <button onClick={() => switchHorizontalSlide(4)}>Describe post</button>
        } else if (horizontalSlide === 4) {
            return <button onClick={() => switchHorizontalSlide(5)}>Preview</button>
        } else {
            return <button onClick={uploadContent}>{mode === 'editing' ? 'Publish edited' : 'Publish post'}</button>
        }
    }

    function assignPostCustomerId(e: any) {
        setRequestedPostId(e.currentTarget.value)
    }

    function validateContet() {
        let hasError = false
        content.map((item: any) => {
            if (!contentValidationFactory(item)) {
                hasError = true
                return
            }
        })
        setError(hasError ? 'Fill all fields' : '')

        return hasError
    }

    return (
        <CreatePostDiv>
            <Header />
            <div className="content-type-wrapper">
                <div className="content-type-container">
                    <div className="content-slider-wrapper">
                        <div className="content-type-slider-wrapper">
                            <div className="content-type-slider">
                                <div className="content-type-slide" key={`content-type-null`}>
                                    <CreatePostPurpose setIsOrderContent={setIsOrderContent} switchHorizontalSlide={switchHorizontalSlide} />
                                </div>
                            </div>
                        </div>

                        <div className="content-type-slider-wrapper">
                            <div ref={slider} id="content-type-slider" className="content-type-slider">
                                <div className="content-type-slide" key={`content-type-zero`}>
                                    <CreatePostType setContentType={addContentType} />
                                    {error}
                                    {content.length > 0 ? <ContinueButton error={error} validateContet={validateContet} switchHorizontalSlide={switchHorizontalSlide} /> : ''}
                                </div>
                                {
                                    horizontalSlide === 1 ? content?.map((cnt: any, index: number) => {
                                        return <div className="content-type-slide" key={`content-types-${index}`}>
                                            <CancelButton removeContent={removeContentById} contentId={cnt.id} />
                                            <CreatePostFactory key={`content-factory-${cnt.id}`} contentType={cnt} />
                                            {index === content.length - 1 ? <NextButton slide={scrollSlider} /> : ''}
                                        </div>
                                    }) : ''
                                }
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <BackButton switchHorizontalSlide={switchHorizontalSlide} slide={1} />
                            <div className="content-type-slidr">
                                {
                                    horizontalSlide > 0 ? content?.map((cnt: any, index: number) => {
                                        return <div
                                            className="content-type-slid"
                                            key={`content-typejk-${index}`}
                                            draggable
                                            onDragStart={(e: any) => (dragItem.current = index)}
                                            onDragEnter={(e: any) => (dragOverItem.current = index)}
                                            onDragEnd={handleSort}
                                            onDragOver={(e: any) => e.preventDefault()}
                                        >
                                            <ContentPreviewFactory contentType={cnt} />
                                            <CancelButton removeContent={removeContentById} contentId={cnt.id} />
                                        </div>
                                    }) : ''
                                }
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <BackButton switchHorizontalSlide={switchHorizontalSlide} slide={2} />
                            <div className="tag-add-container">
                                <input className="tag-add" value={tag} onInput={(e: any) => setTag(e.target.value)} type="text" placeholder="#tag" />
                                <button className="tag-add-btn" onClick={addNewTag}>Add tag</button>
                            </div>
                            <div className="content-type-slidr tag-slide">
                                {
                                    tags.map((_tag: any, index: number) => {
                                        return <div key={`tag-item-${index}`} className="tag-item">
                                            <p>{_tag.tag}</p>
                                            <button className="delete-tag" onClick={() => removeTagById(_tag.tagId)}>x</button>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <BackButton switchHorizontalSlide={switchHorizontalSlide} slide={3} />
                            <div className="content-type-slidr">
                                <textarea
                                    className="text-content-value"
                                    value={description}
                                    onInput={(e: any) => inputDescription(e.target.value)}
                                    placeholder="Post description"
                                />
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <BackButton switchHorizontalSlide={switchHorizontalSlide} slide={4} />
                            <div className="content-type-slidr">
                                <div>
                                    <PreviewImage previewImage={previewImage} />
                                </div>
                                <div>
                                    <CustomerCard assignPostCustomerId={assignPostCustomerId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-type-slider-switches">
                    <RenderButtons />
                </div>
            </div>
        </CreatePostDiv>
    )
};

const CreatePostDiv = CreatePostStyles

export default CreatePost;
