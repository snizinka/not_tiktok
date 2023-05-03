import React, { useState } from "react"

const CancelButton = (props: any) => {
    const [clicked, setClicked] = useState(false)

  return (
    <button onClick={() => { 
        setClicked(true)
        props.removeContent(props.contentId)
     }} className="cancel-button">Remove</button>
  )
};

export default CancelButton;
