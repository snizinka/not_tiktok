import React, { useEffect, useRef } from "react"
import LoadImage from "../../hooks/LoadImage"

const Notification = ({ index, removeNotificationFromBar, preview, message, from, delay }: any) => {
    const notificationItem = useRef<any>()

    function removeNotification() {
        notificationItem.current.style.transition = '.9s ease'
        notificationItem.current.style.marginTop = '-66px'
        notificationItem.current.style.opacity = '0'

        setTimeout(() => {
            removeNotificationFromBar(index)
        }, 2000)
    }

    useEffect(() => {
        setTimeout(() => {
            removeNotification()
        }, (delay + 1) * 1000)
    }, [])

    return (
        <div ref={notificationItem} className='notification-field' style={{ display: 'flex' }}>
            <LoadImage className={'notification-image'} path={preview} />
            <h2 className="notification-sender">{from}</h2>
            <h3 className="notification-message">{message}</h3>
            <button className="notification-close-btn" onClick={removeNotification}>Close</button>
        </div>
    )
}

export default React.memo(Notification)