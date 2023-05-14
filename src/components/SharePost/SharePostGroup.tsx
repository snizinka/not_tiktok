import React from "react"
import LoadImage from "../../hooks/LoadImage"

const SharePostGroup = (props: any) => {
  return (
    <div
      style={{ background: props.contactsToShare.length > 0 ? '#968F8F' : '#C5B8B8' }}
      key={`chat-${props.chat?.chatId}`}
      className="share-to-chat"
      onClick={() => props.addContactToShareList(props.chat?.chatId, 'Group', props.chat)}
    >
      <LoadImage className={'chat-img'} path={props.chat?.chat_image} />

      <div className="chat-textside">
        <p className="chat-username">{props.chat?.chatName}</p>
      </div>
    </div>
  )
}

export default SharePostGroup;
