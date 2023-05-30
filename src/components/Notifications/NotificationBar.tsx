import React, { useEffect, useState } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import Notification from "./Notification"
import { NotificationBarStyles } from "./NotificationBarStyles"

const NotificationBar = () => {
    const { notifications } = useTypedSelector(state => state.notifications)
    const [recentNotifications, setRecentNotifications] = useState<any>([])

    useEffect(() => {
        if (Object.keys(notifications.chat).length > 0) {
            const recents = Object.values(notifications.chat)?.map((value: any) => value)
            let recent = recents[recents.length - 1]
            recent = recent[recent.length - 1]
            setRecentNotifications([...recentNotifications, recent])
        }
    }, [notifications])
    
    const removeNotificationFromBar = React.useCallback((itemToDelete: any) => {
        setRecentNotifications((currentItems: any) =>
            currentItems.filter((item: any) => item.messageId !== itemToDelete)
        )
    }, [])

    return (
        <NotificationBarStyles>
            <div style={{
                zIndex: '10',
                gap: '5px',
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: '0px',
                left: 'calc(50% - 30%)',
                width: '30%',
                height: '200px',
                overflow: 'hidden'
            }}>
                {
                    recentNotifications?.map((notification: any, index: number) => {
                        console.log(notification)
                        return <Notification
                            delay={recentNotifications.length}
                            preview={notification.user.userImage}
                            from={notification.user.username}
                            message={notification.message}
                            removeNotificationFromBar={removeNotificationFromBar}
                            index={notification.messageId}
                            key={`pop-up-notification-${notification.messageId}`}
                        />
                    })
                }
            </div>
        </NotificationBarStyles>
    )
}

export default NotificationBar
