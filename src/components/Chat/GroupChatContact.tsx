import React from "react"
import LoadImage from "../../hooks/LoadImage";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const GroupChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)

    function leavesChat() {
        const data = {
            chatId: props.chat?.chatId,
            userId: user[0].userId,
            chatType: 'Group'
        }
        props.socket.emit('remove_from_chat', data)
    }

    function onContactSelect() {
        props.onChangeSelectedChat(props.chat)
        props.onChangeContact({id: props.chat?.chatId, type: 'Group', name: props?.chat?.chatName })
    }

    return (
        <div key={`chat-${props.chat?.chatId}`} className="chat" onClick={onContactSelect}>
            <LoadImage className={'chat-img'} path={props.chat?.chat_image} />

            <div className="chat-textside">
                <p className="chat-username">{props.chat?.chatName}</p>
                <p className="chat-text">Last message</p>
            </div>
            <button className='leave-chat' onClick={leavesChat}>x</button>
        </div>
    )
};

export default GroupChatContact;
