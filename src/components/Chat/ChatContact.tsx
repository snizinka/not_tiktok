import React, { useEffect, useState } from "react"

const ChatContact = (props: any) => {
    const [owner, setOwner] = useState<any>()
    const [receiver, setReceiver] = useState<any>()

    useEffect(() => {
        setOwner(props.chat.owner)
        setReceiver(props.chat.receiver)
    }, [props])

    function onContactSelect() {
        props.onChangeSelectedChat(owner.userId)
        props.onChangeContact({id: props.chat.contactId, type: 'Private'})
    }

    return (
        <div key={`chat-${props.chat.contactId}`} className="chat" onClick={onContactSelect}>
            {owner ? <img className="chat-img" src={require(`../../post_content/pictures/${receiver?.userImage}`)} alt="" /> : ''}
            <div className="chat-textside">
                <p className="chat-username">{receiver?.username}</p>
                <p className="chat-text">Chat text</p>
            </div>
        </div>
    )
};

export default ChatContact;
