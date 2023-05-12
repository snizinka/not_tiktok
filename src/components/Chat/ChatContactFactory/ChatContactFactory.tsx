import React, { useEffect, useState } from "react"
import ChatContact from "../ChatContact";
import GroupChatContact from "../GroupChatContact";

const ChatContactFactory = (props: any) => {
    const [contentType, setContentType] = useState(props.chatType)
    const [contacts, setContentData] = useState<any>('')
    let content: any = [];

    useEffect(() => {
        setContentType(props.chatType)
        setContentData(props.contacts)
    }, [props])

    switch (contentType) {
        case 'Private':
            contacts?.users?.map((cont: any) => {
                content.push(<ChatContact key={`chat-Contact-${cont.contactId}`} chat={cont}
                    onChangeSelectedChat={props.changeSelectedChat}
                    onChangeContact={props.changeContact}
                />)
            })
            break;
        case 'Group':
            contacts?.chat?.map((cont: any) => {
                content.push(<GroupChatContact
                    socket={props.socket}
                    key={`chatContact-${cont?.chatId}`}
                    chat={cont}
                    onChangeSelectedChat={props.changeSelectedChat}
                    onChangeContact={props.changeContact}
                />)
            })
            break;
        default:
            content = []
            break
    }

    return (
        <React.Fragment key={`chatContactFactory`}>
            {
                content?.map((cont: any, index: number) => {
                    return <React.Fragment key={`chatContactFactory${index}`}>
                        {cont}
                    </React.Fragment>
                })
            }
        </React.Fragment>
    )
};

export default ChatContactFactory;
