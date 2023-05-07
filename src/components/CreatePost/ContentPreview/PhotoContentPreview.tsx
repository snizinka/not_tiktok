import React, { useEffect, useState } from "react"

const PhotoContentPreview = (props: any) => {
  try {
    const img = require(`../../../post_content/pictures/${props.content}`);
    return (
      <div className="previewCard">
        {img ? <img className="photo-card-img" src={img} /> : ''}
      </div>
    )
  } catch (e) {
    return (
      <div className="previewCard">

      </div>
    )
  }
};

export default PhotoContentPreview;
