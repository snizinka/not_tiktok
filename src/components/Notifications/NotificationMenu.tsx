import React from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import NotificationFromMenu from "./NotificationFromMenu"

const NotificationMenu = () => {
    const { notifications } = useTypedSelector(state => state.notifications)

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            {
                notifications.map((notification: any, index: number) => {
                    return <NotificationFromMenu notification={notification} />
                })
            }
        </div>
    )
}

export default NotificationMenu;
