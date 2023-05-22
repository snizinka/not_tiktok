import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [receiver, setReceiver] = useState<any>()
    const [displayDelete, setDisplayDelete] = useState(false)

    useEffect(() => {
        setReceiver(props.chat.receiver)
    }, [props])

    function leavesChat() {
        props.onChangeSelectedChat(null)
        props.onChangeContact({ id: undefined, type: 'Private', name: '' })
        const data = {
            contactId: props?.chat?.contactId,
            userId: user[0].userId,
            seconUserId: props?.chat?.receiver?.userId,
            chatType: 'Private'
        }
        console.log(data)
        props.socket.emit('remove_from_chat', data)
    }

    function onContactSelect() {
        if (!displayDelete) {
            props.onChangeSelectedChat(null)
            props.onChangeContact({ id: props.chat.contactId, receiver: props?.chat?.receiver.userId, type: 'Private', name: receiver?.username })
        }
    }

    function handleContextMenu(event: any) {
        event.preventDefault()
        setDisplayDelete(prev => !prev)
    }

    return (
        <div key={`chat-${props.chat.contactId}`} className="chat" onClick={onContactSelect} onContextMenu={handleContextMenu}>
            {receiver?.userImage ?
                <img
                    className="chat-img"
                    loading="lazy"
                    src={require(`../../post_content/pictures/${receiver?.userImage}`)}
                    alt=""
                /> : ''}
            <div className="chat-textside">
                <p className="chat-username">{receiver?.username}</p>
                <p className="chat-text">Last message</p>
            </div>
            {displayDelete ? <button className='leave-chat' onClick={leavesChat}>x</button> : ''}
        </div>
    )
};

export default ChatContact;
