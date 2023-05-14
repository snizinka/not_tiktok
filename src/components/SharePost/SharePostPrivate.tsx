import React, { useEffect, useState } from "react"

const SharePostPrivate = (props: any) => {
  const [receiver, setReceiver] = useState<any>()

  useEffect(() => {
    setReceiver(props.chat.receiver)
  }, [props])

  return (
    <div
      style={{ background: props.contactsToShare.length > 0 ? '#968F8F' : '#C5B8B8' }}
      key={`chat-${props.chat.contactId}`}
      className="share-to-chat"
      onClick={() => props.addContactToShareList(props.chat.contactId, 'Private', props.chat)}
    >
      {receiver?.userImage ?
        <img
          className="chat-img"
          loading="lazy"
          src={require(`../../post_content/pictures/${receiver?.userImage}`)}
          alt=""
        /> : ''}
      <div className="chat-textside">
        <p className="chat-username">{receiver?.username}</p>
      </div>
    </div>
  )
}

export default SharePostPrivate;