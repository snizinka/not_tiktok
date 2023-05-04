import React, { useState, useEffect } from "react"
import Header from "../Header";
import CancelButton from "./CancelButton";
import CreatePostFactory from "./CreatePostFactory";
import { CreatePostStyles } from "./CreatePostStyles";
import CreatePostType from "./CreatePostType";
import NextButton from "./NextButton";
import useCreatePostActions from "../../hooks/useCreatePostActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ContentPreviewFactory from "./ContentPreviewFactory";

const CreatePost = () => {
    const { user } = useTypedSelector(state => state.user)
    const dragItem = React.useRef<any>(null)
    const dragOverItem = React.useRef<any>(null)
    const { content, description, previewImage, tags } = useTypedSelector(state => state.createPost)
    const { addContent, removeContent, updateContentArray, uploadPost, addTag, removeTag, inputDescription, uploadPreviewImage } = useCreatePostActions()

    const [currentId, setCurrentId] = useState<any>(0)
    const [tagId, setTagId] = useState<any>(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentHorizontalSlide, setCurrentHorizontalSlide] = useState(0)
    const [contentToRemove, setContentToRemove] = useState<any>(null)
    const [addedNewType, setAddedNewType] = useState<any>(false)
    const [horizontalSlide, setHorizontalSlide] = useState<any>(0)
    const [tag, setTag] = useState<any>('')

    useEffect(() => {
        if (content.length > 0 && addedNewType) {
            scrollToAdded()
            setAddedNewType(false)
        }
    }, [content])

    useEffect(() => {
        if (contentToRemove !== null) {
            removeContent(contentToRemove)
            setContentToRemove(null)
            scrollSlider('up')
        }
    }, [contentToRemove])

    useEffect(() => {
        console.log(content)
    }, [content])

    function scrollToAdded() {
        let newPosition = content.length * (-100)
        setCurrentSlide(newPosition)
        let dpc: any = document.getElementsByClassName('content-type-slider')[0];
        dpc.style.transform = `translateY(${newPosition}%)`;
    }

    function scrollSlider(direction: string) {
        console.log(currentSlide)
        let newPosition = direction === 'down' ? currentSlide - 100 : currentSlide + 100

        if (newPosition > 0) {
            newPosition = content.length * (-100)
        } else if ((content.length) * (-100) > newPosition) {
            newPosition = 0
        }

        setCurrentSlide(newPosition)
        let dpc: any = document.getElementsByClassName('content-type-slider')[0];
        dpc.style.transform = `translateY(${newPosition}%)`;
    }

    function addContentType(newContentType: string) {
        setAddedNewType(true)
        setCurrentId(currentId + 1)
        addContent({ content: newContentType, id: currentId })
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
        uploadPost(content, tags, description, previewImage, user[0].userId)
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
            return <>
                <button onClick={() => scrollSlider('up')}>UP</button>
                <button onClick={() => scrollSlider('down')}>DOWN</button>
            </>
        } else if (horizontalSlide === 1) {
            return <button onClick={() => switchHorizontalSlide(2)}>Choose tags</button>
        } else if (horizontalSlide === 2) {
            return <button onClick={() => switchHorizontalSlide(3)}>Describe post</button>
        } else if (horizontalSlide === 3) {
            return <button onClick={() => switchHorizontalSlide(4)}>Preview</button>
        } else {
            return <button onClick={uploadContent}>Publish post</button>
        }
    }

    return (
        <CreatePostDiv>
            <Header />
            <div className="content-type-wrapper">
                <div className="content-type-container">
                    <div className="content-slider-wrapper">
                        <div className="content-type-slider-wrapper">
                            <div className="content-type-slider">
                                <div className="content-type-slide" key={`content-type-zero`}>
                                    <CreatePostType setContentType={addContentType} />
                                    {content.length > 0 ? <button onClick={() => switchHorizontalSlide(1)}>Place post content in order</button> : ''}
                                </div>
                                {
                                    horizontalSlide === 0 ? content?.map((cnt: any, index: number) => {
                                        return <div className="content-type-slide" key={`content-type-${index}`}>
                                            <CancelButton removeContent={removeContentById} contentId={cnt.id} />
                                            <CreatePostFactory contentType={cnt} />
                                            {index === content.length - 1 ? <NextButton slide={scrollSlider} /> : ''}
                                        </div>
                                    }) : ''
                                }
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <button onClick={() => switchHorizontalSlide(0)}>Back</button>
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
                            <button onClick={() => switchHorizontalSlide(1)}>Back</button>
                            <div>
                                <input value={tag} onInput={(e: any) => setTag(e.target.value)} type="text" placeholder="#tag" />
                                <button onClick={addNewTag}>Add tag</button>
                            </div>
                            <div className="content-type-slidr">
                                {
                                    tags.map((_tag: any, index: number) => {
                                        return <div>
                                            <p>{_tag.tag}</p>
                                            <button onClick={() => removeTagById(_tag.tagId)}>x</button>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="content-type-slider-wrappe">
                            <button onClick={() => switchHorizontalSlide(2)}>Back</button>
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
                            <button onClick={() => switchHorizontalSlide(3)}>Back</button>
                            <div className="content-type-slidr">
                                <p>Preview Image</p>
                                <input onChange={(event: any) => {uploadPreviewImage(event.target.files[0]) }} type='file' />
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
