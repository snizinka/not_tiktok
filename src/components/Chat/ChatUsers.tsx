import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatUsers = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const [chatUsers, setChatUsers] = useState<any>([])
    const { removeUserFromChat } = useChatActions()

    useEffect(() => {
        console.log(props)
        setChatUsers(props.chats?.users)
    }, [props])

    function removeFromChat(userId: number) {
        const data = {
            chatId: props.chats?.chatId,
            userId: userId
        }
        removeUserFromChat(data)
    }

    return (
        <div key={`chatusers-${props?.chats?.chatId}`}>
            {
                chatUsers?.map((chatUsers: any) => {
                    return <div>
                        {chatUsers?.userImage ? <img
                            className="chat-contact-img"
                            src={require(`../../post_content/pictures/${chatUsers?.userImage}`)}
                            alt=""
                        /> : ''}
                        <a href={`http://localhost:3000/profile/${chatUsers.userId}`}>{chatUsers.username}</a>
                        { user[0].userId !== chatUsers?.userId ? <button onClick={() => removeFromChat(chatUsers.userId)}>Delete</button> : '' }
                    </div>
                })
            }
        </div>
    )
};

export default ChatUsers;
