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
    }, [])

    switch (contentType) {
        case 'Private':
            contacts?.users?.map((cont: any) => {
                content.push(<ChatContact key={`chatContact-${cont.contactId}`} chat={cont}
                    onChangeSelectedChat={props.changeSelectedChat}
                    onChangeContact={props.changeContact}
                />)
            })
            break;
        case 'Group':
            contacts?.chat?.map((cont: any) => {
                content.push(<GroupChatContact key={`chatContact-${cont?.chatId}`} chat={cont}
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
        <div>
            {
                content?.map((cont: any, index: number) => {
                    return <div key={`postPicture-${index}`}>
                        {cont}
                    </div>
                })
            }
        </div>
    )
};

export default ChatContactFactory;
