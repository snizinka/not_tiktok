import React, { useState, useEffect } from "react"
import Header from "../Header";
import CreatePostFactory from "./CreatePostFactory";
import { CreatePostStyles } from "./CreatePostStyles";
import CreatePostType from "./CreatePostType";
import NextButton from "./NextButton";

const CreatePost = () => {
    const [contentType, setContentType] = useState<any[]>([])
    const [contentSlide, setCurrentSlide] = useState(0)
    const [uploadedFiles, setUploadedFiles] = useState<any[]>([])

    useEffect(() => {
        if (contentType.length > 0) {
            scrollSlider('up')
        }
    }, [contentType])

    function scrollSlider(direction: string) {
        let newPosition = direction === 'up' ? contentSlide - 100 : contentSlide + 100
        setCurrentSlide(newPosition)
        let dpc: any = document.getElementsByClassName('content-type-slider')[0];
        dpc.style.transform = `translateY(${newPosition}%)`;
    }

    function addContentType(newContentType: string) {
        setContentType([...contentType, newContentType])
    }

    return (
        <CreatePostDiv>
            <Header />
            <div className="content-type-wrapper">
                <div className="content-type-container">
                    <div className="content-type-slider-wrapper">
                        <div className="content-type-slider">
                        <div className="content-type-slide" key={`content-type-zero`}>
                            <CreatePostType setContentType={addContentType} />
                        </div>
                        {
                            contentType.map((content: any, index: number) => {
                                return <div className="content-type-slide" key={`content-type-${index}`}>
                                    <CreatePostFactory contentType={content} />
                                    <NextButton />
                                </div>
                            })
                        }
                        </div>
                        
                    </div>
                </div>
                <div className="content-type-slider-switches">
                    <button onClick={() => scrollSlider('up')}>UP</button>
                    <button onClick={() => scrollSlider('down')}>DOWN</button>
                </div>
            </div>
        </CreatePostDiv>
    )
};

const CreatePostDiv = CreatePostStyles

export default CreatePost;
