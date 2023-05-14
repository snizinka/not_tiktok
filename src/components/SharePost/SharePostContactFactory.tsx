import React, { useEffect, useState } from "react"
import SharePostGroup from "./SharePostGroup";
import SharePostPrivate from "./SharePostPrivate";

const SharePostContactFactory = (props: any) => {
    const [contentType, setContentType] = useState(props.chatType)
    const [contacts, setContentData] = useState<any>('')
    let content: any = [];

    useEffect(() => {
        setContentType(props.chatType)
        setContentData(props.contacts)
    }, [props])

    switch (contentType) {
        case 'Private':
            contacts?.users?.forEach((cont: any) => {
                content.push(<SharePostPrivate
                    key={`chat-Contact-${cont.contactId}`}
                    chat={cont}
                    addContactToShareList={props.addContactToShareList}
                    contactsToShare={props.contactsToShare.filter((con: any) => con.contactId === cont.contactId && con.contactType === 'Private')} />)
            })
            break;
        case 'Group':
            contacts?.chat?.forEach((cont: any) => {
                content.push(<SharePostGroup
                    key={`chatContact-${cont?.chatId}`}
                    chat={cont}
                    addContactToShareList={props.addContactToShareList}
                    contactsToShare={props.contactsToShare.filter((con: any) => con.contactId === cont.chatId && con.contactType === 'Group')} />)
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

export default SharePostContactFactory;
