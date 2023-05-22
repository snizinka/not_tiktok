import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer";

const TextContent = (props: any) => {
  const titleRef = useRef<any>()
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '0px',
    root: document.getElementById('postlist'),
  })

  useEffect(() => {
    if (inView) {
      titleRef.current.scrollIntoView()
    }
  }, [inView])

  return (
    <div ref={ref} className="text-content-type">
      <p>Title</p>
      <input
        ref={titleRef}
        value={props?.titleContent}
        onInput={(e: any) => props.onInputTitleText(props?.id, e.target.value)}
        className="text-content-title" type="text" />
      <p>Body</p>
      <textarea
        value={props?.bodyContent}
        onInput={(e: any) => props.onInputBodyText(props.id, e.target.value)}
        className="text-content-value"></textarea>
    </div>
  )
};

export default TextContent;
