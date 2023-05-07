import React, { memo } from "react"

const VideoContentPreview = (props: any) => {
  try {
    const video = require(`../../../post_content/pictures/${props.content}`)
    return (
      <div className="previewCard">
        <video className="preview-video" controls>
          {props.content ? <source src={video} /> : ''}
        </video>
      </div>
    )
  } catch (e) {
    return (
      <div className="previewCard">

      </div>
    )
  }
};

export default memo(VideoContentPreview);
