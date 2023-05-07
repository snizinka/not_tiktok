import React, { memo, useState } from "react"

const CancelButton = (props: any) => {

  return (
    <button onClick={() => { 
        props.removeContent(props.contentId)
     }} className="cancel-button">Remove</button>
  )
};

export default memo(CancelButton);
