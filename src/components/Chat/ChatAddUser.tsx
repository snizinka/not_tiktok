import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ChatAddUser = (props: any) => {
    const [userList, setUserList] = useState([])
    const { availableUsers } = useTypedSelector(state => state.chat)
    const { addUsersToChat, getUsersNotFromChat } = useChatActions()

    useEffect(() => {
        getUsersNotFromChat({ chatId: props.chatId, userId: props.userId })
    }, [])

    function addUsers(id: any) {
        const newArray: any = [...userList]
        newArray.push(id)
        setUserList(newArray)
    }

    function removeUser(id: any) {
        let newArray: any = [...userList]
        newArray = newArray.filter((_: any, i: any) => _ !== id)
        setUserList(newArray)
    }

    function checkSelected(id: any) {
        const there = userList.filter((i: any) => i === id)
        return there.length
    }

    function addUsersToGroup() {
        const chat = {
            chatId: props.chatId,
            userList: userList
        }
        addUsersToChat(chat)
    }

    return (
        <div>
            <div className="add_users_container">
                {
                    availableUsers?.map((available: any) => {
                        return <div className="chat_users">
                            <p className="chat_user_link">{available?.username}</p>
                            <button className="chat_user_button" onClick={() => {
                                if (checkSelected(available?.userId) > 0) {
                                    removeUser(available?.userId)
                                } else {
                                    addUsers(available?.userId)
                                }
                            }}>{checkSelected(available?.userId) > 0 ? 'Added' : 'Add'}</button>
                        </div>
                    })
                }
            </div>
            <button className="accent-btn" onClick={addUsersToGroup}>Add to chat</button>
        </div>
    )
};

export default ChatAddUser;
