import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [owner, setOwner] = useState<any>()
    const [receiver, setReceiver] = useState<any>()
    const { leaveChat } = useChatActions()

    useEffect(() => {
        setOwner(props.chat.owner)
        setReceiver(props.chat.receiver)
    }, [props])

    function leavesChat() {
        const data = {
            contactId: props?.chat?.receiver.userId,
            chatType: 'Private'
        }
        leaveChat(data)
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
