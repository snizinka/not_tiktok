import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserList from "./UserList";

const ChatGroupAdd = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { createChat } = useChatActions()
    const [chatName, setChatName] = useState('')
    const [chatLink, setChatLink] = useState('')

    const [userList, setUserList] = useState([user[0].userId])

    function addUsers(id: any) {
        const newArray: any = [...userList]
        newArray.push(id)
        setUserList(newArray)
    }

    function removeUser(id: any) {
        let newArray: any = [...userList]
        newArray = newArray.filter((_:any, i:any) => _ !== id)
        setUserList(newArray)
    }

    function clearFields() {
        setChatName('')
        setChatLink('')
    }

    function createGroupChat() {
        const data = {
            chatName: chatName,
            chatLink: chatLink,
            chatType: 'Group',
            userList: userList
        }

        createChat(data)
        clearFields()
    }

    return (
        <div>
            <div>
                <p>Chat name</p>
                <input value={chatName} type="text" onInput={(e: any) => setChatName(e.target.value)} />
                <p>Chat link</p>
                <input value={chatLink} type="text" onInput={(e: any) => setChatLink(e.target.value)} />
                <p>Chat image</p>
                <input type="file" />
                <UserList addUsers={addUsers} removeUser={removeUser} userList={userList} />
            </div>
            <button onClick={createGroupChat}>Create chat</button>
        </div>
    )
};

export default ChatGroupAdd;
