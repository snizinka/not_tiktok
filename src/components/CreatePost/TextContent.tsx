import React from "react"
import useCreatePostActions from '../../hooks/useCreatePostActions'

const TextContent = (props: any) => {
  const { inputTitleText, inputBodyText } = useCreatePostActions()

  return (
    <div className="text-content-type">
      <p>Title</p>
      <input
        value={props?.titleContent}
        onInput={(e: any) => inputTitleText(props?.id, e.target.value)}
        className="text-content-title" type="text" />
      <p>Body</p>
      <textarea
        value={props?.bodyContent}
        onInput={(e: any) => inputBodyText(props.id, e.target.value)}
        className="text-content-value"></textarea>
    </div>
  )
};

export default TextContent;
