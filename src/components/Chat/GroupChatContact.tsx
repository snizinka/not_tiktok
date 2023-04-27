import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const GroupChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [owner, setOwner] = useState<any>()
    const [receiver, setReceiver] = useState<any>()
    const { leaveChat } = useChatActions()

    useEffect(() => {
        setOwner(props.chat?.chatUser)
        setReceiver(props.chat?.chatId)
    }, [props])

    function leavesChat() {
        const data = {
            chatId: props.chat?.chatId,
            userId: user[0].userId,
            chatType: 'Group'
        }
        leaveChat(data)
    }

    function onContactSelect() {
        props.onChangeSelectedChat(props.chat)
        props.onChangeContact({id: props.chat?.chatId, type: 'Group'})
    }

    return (
        <div key={`chat-${props.chat?.chatId}`} className="chat" onClick={onContactSelect}>
            {props.chat?.chatImage ? <img className="chat-img" src={require(`../../post_content/pictures/${props.chat?.chatImage}`)} alt="" /> : ''}
            <div className="chat-textside">
                <p className="chat-username">{props.chat?.chatName}</p>
                <p className="chat-text">Chat text</p>
            </div>
            <button onClick={leavesChat}>Leave</button>
        </div>
    )
};

export default GroupChatContact;
