import React from "react"

const TextContentPreview = (props: any) => {
  return (
    <div className="previewCard">
      <p className="previewTitle">{props.titleContent}</p>
      <p className="previewBody">{props.bodyContent}</p>
    </div>
  )
};

export default TextContentPreview;
