import React, { useEffect, useState } from 'react'
import { ContentStyles } from "./ContentStyles";

const TextContent = (props: any) => {
  const [textData, setTextData] = useState<any>()

  useEffect(() => {
    setTextData(props.props)
  }, [props])

  return (
    <TextContentStyle style={{ height: '100%', width: '100%' }}>
      <div className='text-title'>
        <p>{textData?.textTitle}</p>
      </div>
      <div className='text-body'>
        <p>{textData?.textContent}</p>
      </div>
    </TextContentStyle>
  )
};

const TextContentStyle = ContentStyles

export default TextContent;
