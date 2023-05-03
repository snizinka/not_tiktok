import React from "react"

const VideoContentPreview = (props: any) => {
  return (
    <div className="previewCard">
      <video className="preview-video" controls>
        <source src={(require(`../../../post_content/pictures/${props.content}`))} />
      </video>
    </div>
  )
};

export default VideoContentPreview;