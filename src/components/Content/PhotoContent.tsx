import React, { useEffect, useState } from 'react'
import Content from "./Content";
import postStyles from '../../style/post.module.css'

const PhotoContent = (props: { props: Content }) => {
  const [photoData, setPhotoData] = useState<Content>()

  useEffect(() => {
    props.props.source = require(`../../post_content/pictures/${props.props.source}`);
    setPhotoData(props.props)
  }, [props])

  return (
    <img className={postStyles.slider_img} src={photoData?.source} alt="" />
  )
};

export default PhotoContent;
