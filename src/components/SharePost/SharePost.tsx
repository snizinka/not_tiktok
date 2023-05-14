import React, { useEffect, useState } from "react"
import useChatActions from "../../hooks/useChatActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SharePostContactFactory from "./SharePostContactFactory";
import { SharePostStyles } from "./SharePostStyles";

const SharePost = (props: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { chats } = useTypedSelector(state => state.chat)
    const [messageContent, setMessageContent] = useState()
    const [contactsToShare, setContactsToShare]: any = useState([])
    const { fetchChatUsers } = useChatActions()

    useEffect(() => {
        fetchChatUsers(user[0].userId)
    }, [])

    function sharePostToChats() {
        contactsToShare.forEach((contact: any) => {
            console.log(contact)
            const message = {
                chat: contact.contactId,
                receiver: contact.contactType === 'Private' ? contact.addiTionalInfo.receiver.userId : contact.addiTionalInfo.chatId,
                author: user[0].userId,
                message: `http://localhost:3000/content/${props.postId}`,
                time: '2022.12.15',
                details: user[0],
                chatMode: 'Typing',
                chatType: contact.contactType
            }

            props.socket?.emit('send_message', message)
        })
    }

    function addContactToShareList(contactId: number, contactType: string, addiTionalInfo: any) {
        const isContactSet = contactsToShare.filter((cont: any) => cont.contactId === contactId && cont.contactType === contactType)

        if (isContactSet.length === 0) {
            setContactsToShare((prev: any) => [...prev, { contactId, contactType, addiTionalInfo }])
        } else {
            const updatedContacts = contactsToShare.filter((cont: any) => {
                if (cont.contactId === contactId) {
                    if (cont.contactType !== contactType) {
                        return cont
                    }
                } else {
                    return cont
                }
            })
            setContactsToShare(updatedContacts)
        }
    }

    return (
        <SharePostStyles style={{ height: '100%' }}>
            <div className="shareTopPart">
                {
                    chats?.map((user: any, id: number) => {
                        return <SharePostContactFactory
                            key={`chatfactory${id}`}
                            contacts={user}
                            chatType={user?.chatType}
                            addContactToShareList={addContactToShareList}
                            contactsToShare={contactsToShare}
                        />
                    })
                }
            </div>
            <div className="shareBottomPart">
                <input type='text' value={messageContent} onInput={(e: any) => setMessageContent(e.target.value)} placeholder='' />
                <button onClick={sharePostToChats}>Share</button>
            </div>
        </SharePostStyles>
    )
};

export default SharePost;
