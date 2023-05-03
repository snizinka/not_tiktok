import React, { useEffect } from "react"

const TextContent = (props: any) => {
  useEffect(() => {

  }, [props])

  return (
    <div className="text-content-type">
      <p>Title</p>
      <input
        value={props.titleContent}
        onInput={(e: any) => props.onInputTitleText(props.id, e.target.value)}
        className="text-content-title" type="text" />
      <p>Body</p>
      <textarea
        value={props.bodyContent}
        onInput={(e: any) => props.onInputBodyText(props.id, e.target.value)}
        className="text-content-value"></textarea>
    </div>
  )
};

export default TextContent;
