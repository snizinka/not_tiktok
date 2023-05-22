import React, { useEffect, useRef, useState } from "react"

const ScrollSetup = ({ setAtTop, scrollFieldClass, backToBottomButtonClass, scrollWrapper, allowScrollingBottom, children }: any) => {
    const scrollSetupElement = useRef<HTMLElement | null>(null);
    const [scrollPosition, setScrollPostion] = useState(0)
    useEffect(() => {
        scrollSetupElement.current = document.getElementById('scrollSetup')
        if (scrollSetupElement.current) {
            scrollSetupElement.current.onscroll = (event: any) => {
                setScrollPostion(prev => event.target.scrollTop)
                if (event.target.scrollTop === 0) {
                    // scrollSetupElement.current && scrollSetupElement.current.scrollTo(0, 20)
                    setAtTop(true)
                }
                else {
                    setAtTop(false)
                }
            }

            scrollSetupElement.current?.addEventListener('DOMNodeInserted', event => {
                console.log(allowScrollingBottom)
                if (scrollSetupElement.current && allowScrollingBottom === 0) {
                    scrollSetupElement.current.scrollTo(0, scrollSetupElement.current.scrollHeight)
                }
            });
        }
    }, [])

    return (
        <div className={scrollWrapper}>
            <h1>{allowScrollingBottom}</h1>
            <div id="scrollSetup" className={scrollFieldClass}>
                {children}
            </div>
            {scrollSetupElement.current && scrollPosition < scrollSetupElement.current.scrollHeight - scrollSetupElement.current.offsetHeight
                ?
                <button className={backToBottomButtonClass}
                    onClick={() => scrollSetupElement.current && scrollSetupElement.current.scrollTo(0, scrollSetupElement.current.scrollHeight)}
                ></button> : ''}
        </div>
    )
}

export default ScrollSetup;
