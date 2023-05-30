import React from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NotificationBarStyles } from "./NotificationBarStyles";
import NotificationFromMenu from "./NotificationFromMenu";

const Notifications = () => {
    const { notifications } = useTypedSelector(state => state.notifications)

    return (
        <NotificationBarStyles>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    width: '250px',
                    height: '320px',
                    overflowY: 'hidden',
                    overflowX: 'hidden',
                    position: 'absolute',
                    zIndex: '10',
                    background: '#D9D9D9',
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    padding: '6px'
                }}>
                <h1>Notifications</h1>
                <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    width: '100%',
                    background: '#D9D9D9',
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    padding: '6px',
                    height: 'calc(100% - 41px)',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}>
                    {
                        Object.values(notifications.chat).map((value: any) => value?.map((message: any, index: any) =>
                            <NotificationFromMenu key={`notification-${index}`}
                                message={message.message}
                                from={message.user.username}
                                preview={message.user.userImage}
                            />
                        ))
                    }
                </ul>
            </div>
        </NotificationBarStyles>
    )
}

export default React.memo(Notifications)