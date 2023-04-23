import React, { useEffect, useState } from 'react'
import Content from "./Content";

const TextContent = (props: { props: Content }) => {
  const [textData, setTextData] = useState<Content>()

  useEffect(() => {
    setTextData(props.props)
  }, [props])

  return (
    <p>{textData?.source}</p>
  )
};

export default TextContent;
