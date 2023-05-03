import React, { useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import UserList from "./UserList";
import axios from 'axios';

const ChatGroupAdd = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { createChat } = useChatActions()
    const [chatName, setChatName] = useState('')
    const [chatLink, setChatLink] = useState('')
    const [chatImage, setChatImage] = useState<any>('')

    const [userList, setUserList] = useState([user[0].userId])

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

    function clearFields() {
        setChatName('')
        setChatLink('')
    }

    async function createGroupChat() {
        let formData: any = new FormData()
        formData.append("file", chatImage)

        try {
            const { data } = await axios.post('http://localhost:9000/uploadfile', formData)
            let copiedImage = data.result.replace(/\\/g, '/')

            const creationData = {
                chatName: chatName,
                chatLink: chatLink,
                chatImage: copiedImage,
                chatType: 'Group',
                userList: userList,
            }

            createChat(creationData)
            clearFields()
        } catch (error) {
            console.error(error);
            return;
        }
    }

    return (
        <div>
            <div className="bluring_back" onClick={props.changeAddNewChat}>

            </div>
            <div className="create_chat">
                <div className="create_chat_container">
                    <div className="input_field">
                        <p>Chat name</p>
                        <input value={chatName} type="text" onInput={(e: any) => setChatName(e.target.value)} />
                    </div>

                    <div className="input_field">
                        <p>Chat link</p>
                        <input value={chatLink} type="text" onInput={(e: any) => setChatLink(e.target.value.toLowerCase())} />
                    </div>

                    <div className="input_field">
                        <p>Chat image</p>
                        <input
                            onChange={(event: any) => setChatImage(event.target.files[0])}
                            type="file" />
                    </div>

                    <div className="chat_user_list">
                        <UserList addUsers={addUsers} removeUser={removeUser} userList={userList} />
                    </div>
                </div>
                <button className="create_button" onClick={createGroupChat}>Create chat</button>
            </div>
        </div>
    )
};

export default ChatGroupAdd;
