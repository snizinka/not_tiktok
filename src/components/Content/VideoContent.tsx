import React from "react"
import Content from "./Content";
import { ContentStyles } from "./ContentStyles";

const VideoContent = (props: { props: Content }) => {
  return (
    <VideoContentStyle style={{height: '100%', width: '100%'}}>
      <video className="post-video" controls>
        <source src={(require(`../../post_content/pictures/${props.props.source}`))} />
      </video>
    </VideoContentStyle>
  )
};

const VideoContentStyle = ContentStyles

export default VideoContent;
