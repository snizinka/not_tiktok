import React from "react"

const TextContent = () => {
  return (
    <div className="text-content-type">
        <p>Title</p>
        <input className="text-content-title" type="text" />
        <p>Body</p>
        <textarea className="text-content-value"></textarea>
    </div>
  )
};

export default TextContent;
