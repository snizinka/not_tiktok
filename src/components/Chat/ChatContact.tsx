import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [receiver, setReceiver] = useState<any>()

    useEffect(() => {
        setReceiver(props.chat.receiver)
    }, [props])

    function leavesChat() {
        const data = {
            chatId: props?.chat?.receiver.userId,
            userId: user[0].userId,
            chatType: 'Private'
        }
        props.socket.emit('remove_from_chat', data)
    }

    function onContactSelect() {
        props.onChangeSelectedChat(null)
        props.onChangeContact({ id: props.chat.contactId, receiver: props?.chat?.receiver.userId, type: 'Private', name: receiver?.username })
    }

    return (
        <div key={`chat-${props.chat.contactId}`} className="chat" onClick={onContactSelect}>
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
            <button className='leave-chat' onClick={leavesChat}>x</button>
        </div>
    )
};

export default ChatContact;
