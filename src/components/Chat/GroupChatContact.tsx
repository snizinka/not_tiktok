import React, { useEffect, useState } from "react"

const GroupChatContact = (props: any) => {
    const [owner, setOwner] = useState<any>()
    const [receiver, setReceiver] = useState<any>()

    useEffect(() => {
        setOwner(props.chat?.chatUser)
        setReceiver(props.chat?.chatId)
    }, [props])

    function onContactSelect() {
        props.onChangeSelectedChat(props.chat?.chatUser)
        props.onChangeContact({id: props.chat?.chatId, type: 'Group'})
    }

    return (
        <div key={`chat-${props.chat?.chatId}`} className="chat" onClick={onContactSelect}>
            {props.chat?.chatImage ? <img className="chat-img" src={require(`../../post_content/pictures/${props.chat?.chatImage}`)} alt="" /> : ''}
            <div className="chat-textside">
                <p className="chat-username">{props.chat?.chatName}</p>
                <p className="chat-text">Chat text</p>
            </div>
        </div>
    )
};

export default GroupChatContact;
