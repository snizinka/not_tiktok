import React, { useEffect } from "react"
import LoadImage from "../../hooks/LoadImage"

const NotificationFromMenu = ({ message, from, preview }: any) => {

    useEffect(() => {
        console.log(message, from, preview)
    }, [message])

    return (
        <li className='notification-menu-field' style={{ display: 'flex' }}>
            <LoadImage className={'notification-menu-image'} path={preview} />
            <h2 className="notification-menu-sender">{from}</h2>
            <h3 className="notification-menu-message">{message}</h3>
            <button className="notification-menu-close-btn">Close</button>
        </li>
    )
}

export default NotificationFromMenu;
