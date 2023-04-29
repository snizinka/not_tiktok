import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const GroupChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { leaveChat } = useChatActions()

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
        props.onChangeContact({id: props.chat?.chatId, type: 'Group', name: props?.chat?.chatName })
    }

    return (
        <div key={`chat-${props.chat?.chatId}`} className="chat" onClick={onContactSelect}>
            {props.chat?.chat_image ? <img className="chat-img" loading="lazy" src={require(`../../post_content/pictures/${props.chat?.chat_image}`)} alt="" /> : ''}
            <div className="chat-textside">
                <p className="chat-username">{props.chat?.chatName}</p>
                <p className="chat-text">Last message</p>
            </div>
            <button className='leave-chat' onClick={leavesChat}>x</button>
        </div>
    )
};

export default GroupChatContact;
