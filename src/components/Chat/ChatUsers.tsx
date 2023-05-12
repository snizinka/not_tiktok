import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ChatAddUser from "./ChatAddUser";

const ChatUsers = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [chatUsers, setChatUsers] = useState<any>([])

    useEffect(() => {
        setChatUsers(props.chats?.users)
    }, [props])

    function removeFromChat(userId: number) {
        const data = {
            chatId: props.chats?.chatId,
            userId: userId
        }
        props.socket.emit('remove_from_chat', data)
    }

    return (
        <div>
            <div className="chat_users_wrapper" onClick={props.changeShowChatUsers}>
            </div>
            <div key={`chatusers-${props?.chats?.chatId}`} className='chat_users_container'>
                <button className="chat_user_button" onClick={props.changesetSelectedChat}>Add users</button>
                <div className="possible_chat_users">
                    {
                        props.selectedChat ? <ChatAddUser socket={props.socket} key={`chat-add-user-${props.contact?.id}`} userId={user[0].userId} chatId={props.contact?.id} /> : ''
                    }
                </div>
                <div className="chat_users_container_list">
                    {
                        chatUsers?.map((chatUsers: any, index: any) => {
                            return <div key={`chatUser${index}`} className='chat_user'>
                                {chatUsers?.userImage ? <img
                                    className="chat-contact-img"
                                    src={require(`../../post_content/pictures/${chatUsers?.userImage}`)}
                                    alt=""
                                /> : ''}
                                <a
                                    href={`http://localhost:3000/profile/${chatUsers.userId}`}
                                    className='chat_user_link'>{chatUsers.username}
                                </a>
                                {user[0].userId !== chatUsers?.userId ? <button
                                    className="chat_user_button"
                                    onClick={() => {
                                        removeFromChat(chatUsers.userId)
                                    }}
                                >Delete</button> : ''}
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
};

export default ChatUsers;
