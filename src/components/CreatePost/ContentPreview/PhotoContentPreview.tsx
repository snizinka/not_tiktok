import React from "react"

const PhotoContentPreview = (props: any) => {
  return (
    <div className="previewCard">
      {props.content !== '' ? <img className="photo-card-img" src={require(`../../../post_content/pictures/${props.content}`)} alt="" /> : ''}
    </div>
  )
};

export default PhotoContentPreview;
