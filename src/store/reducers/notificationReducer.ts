import { NotificationsAction, NotificationsActionTypes, NotificationsState } from "../../types/notifications";

const initialState: NotificationsState = {
    notifications: { chat: {}, system: [], tasks: [] },
    loading: false,
    error: null
}

function addNotification(state: any, action: any) {
    if (action.payload.type === 'chat') {
        const id = action.payload.notification.contactId.toString()
        const chatNotifications = state.notifications.chat[id] || []
        const newChatNotifications = [
            ...chatNotifications,
            {
                ...action.payload.notification,
                notificationId:
                    chatNotifications.length > 0
                        ? chatNotifications[chatNotifications.length - 1].notificationId + 1
                        : 1,
            },
        ]

        return {
            ...state.notifications,
            chat: {
                ...state.notifications.chat,
                [id]: newChatNotifications,
            },
        }
    }

    return state;
}

function removeChatNotifications(state: any, action: any) {
    if (action.payload.type === 'chat') {
        const notificationId = action.payload.id

        const chat = state.notifications.chat
        delete chat[notificationId]

        return {
            ...state.notifications,
            chat
        }
    }
}

export default function notificationReducer(state = initialState, action: NotificationsAction): NotificationsState {
    switch (action.type) {
        case NotificationsActionTypes.RECEIVED_NOTIFICATION_ONLINE:
            return {
                loading: false,
                notifications: addNotification(state, action),
                error: null,
            }

        case NotificationsActionTypes.SEEN_CHAT_NOTIFICATIONS:
            return {
                loading: false,
                notifications: removeChatNotifications(state, action),
                error: null,
            }

        default:
            return state;
    }
}