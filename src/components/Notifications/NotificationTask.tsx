import React from "react"
import useNotificationsActions from "../../hooks/useNotificationsActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const NotificationTask = ({ id, message, from }: any) => {
    const { user } = useTypedSelector(state => state.user)
    const { removeTasksNotificationById } = useNotificationsActions()

    return (
        <li className='notification-menu-field' style={{ display: 'flex' }}>
            <h2 className="notification-menu-sender">{from}</h2>
            <h3 className="notification-menu-message">{message}</h3>
            <button onClick={() => removeTasksNotificationById(user[0].userId, id)} className="notification-menu-close-btn">Close</button>
        </li>
    )
}

export default NotificationTask
