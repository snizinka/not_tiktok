import React, { useEffect } from "react"
import LoadImage from "../../hooks/LoadImage"
import useNotificationsActions from "../../hooks/useNotificationsActions"

const NotificationFromMenu = ({ id, message, from, preview }: any) => {
    const { removeNotificationById } = useNotificationsActions()

    return (
        <li className='notification-menu-field' style={{ display: 'flex' }}>
            <LoadImage className={'notification-menu-image'} path={preview} />
            <h2 className="notification-menu-sender">{from}</h2>
            <h3 className="notification-menu-message">{message}</h3>
            <button onClick={() => removeNotificationById({ notificationId: id.notificationId, contactId: id.contactId, messageId: id.messageId })} className="notification-menu-close-btn">Close</button>
        </li>
    )
}

export default NotificationFromMenu;
