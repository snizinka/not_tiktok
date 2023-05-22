import React, { useEffect, useState } from 'react'
import postStyles from '../../style/post.module.css'
import ContentFactory from '../Content/Factories/ContentFactory';

const PostSlider = (props: any) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [content, setContent] = useState<any>([]);
    const [amountOfSlides, setAmountOfSlides] = useState(0)
    
    useEffect(() => {
        const renderedContent = [['PICTURE', props?.info?._picture], ['TEXT', props?.info?._text], ['VIDEO', props?.info?._video]]
        const amount = renderedContent?.map((slide: any) => slide[1]?.length)
        const reduce = amount?.reduce((acc: any, curr: any) => acc + curr, 0)
        setAmountOfSlides(reduce)
        setContent(renderedContent)
    }, [props])

    function switchToRightSlides() {
        if (currentSlide < ((amountOfSlides - 2) * (-400))) {
            setCurrentSlide(0)
            return
        }
        setCurrentSlide(currentSlide - 400)
    }

    function switchToLeftSlides() {
        if (currentSlide >= 0) {
            setCurrentSlide((amountOfSlides - 1) * (-400))
            return
        }
        setCurrentSlide(currentSlide + 400)
    }

    return (
        <>
            <div className={postStyles.left_swtch}>
                <button onClick={switchToLeftSlides}>Prev</button>
            </div>
            <div className={postStyles.middle_wrapper}>
                <div style={{ transform: `translateX(${currentSlide}px)` }} className={postStyles.middle_container}>
                    {
                        content?.map((contentInstance: any, index: number) => {
                            return <ContentFactory key={`post-factory-${index}`} props={contentInstance} />
                        })
                    }
                </div>
            </div>
            <div className={postStyles.right_switch}>
                <button onClick={switchToRightSlides}>Next</button>
            </div>
        </>
    )
};

export default PostSlider;
