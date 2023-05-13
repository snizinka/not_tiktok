import React, { useState } from "react"
import LoadImage from "../../hooks/LoadImage";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const GroupChatContact = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [displayDelete, setDisplayDelete] = useState(false)
    function leavesChat() {
        if (props.currentGroup === props.chat?.chatId) {
            props.onChangeSelectedChat(null)
            props.onChangeContact({ id: undefined, type: 'Private', name: '' })
        }

        const data = {
            chatId: props.chat?.chatId,
            userId: user[0].userId,
            chatType: 'Group'
        }
        props.socket.emit('remove_from_chat', data)
    }

    function onContactSelect() {
        if(!displayDelete) {
            props.onChangeSelectedChat(props.chat)
            props.onChangeContact({ id: props.chat?.chatId, type: 'Group', name: props?.chat?.chatName })
        }
    }

    function handleContextMenu(event: any) {
        event.preventDefault()
        setDisplayDelete(prev => !prev)
    }

    return (
        <div key={`chat-${props.chat?.chatId}`} className="chat" onClick={onContactSelect} onContextMenu={handleContextMenu}>
            <LoadImage className={'chat-img'} path={props.chat?.chat_image} />

            <div className="chat-textside">
                <p className="chat-username">{props.chat?.chatName}</p>
                <p className="chat-text">Last message</p>
            </div>
            { displayDelete ? <button className='leave-chat' onClick={leavesChat}>x</button> : ''}
        </div>
    )
};

export default GroupChatContact;
