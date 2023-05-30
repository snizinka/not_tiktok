export interface NotificationsState {
    notifications: any
    loading: boolean
    error: null | string
}

export enum NotificationsActionTypes {
    RECEIVED_NOTIFICATION_ONLINE = 'RECEIVED_NOTIFICATION_ONLINE',
    SEEN_NOTIFICATION_BY_ID = 'SEEN_NOTIFICATION_BY_ID',
    SEEN_CHAT_NOTIFICATIONS = 'SEEN_CHAT_NOTIFICATIONS'
}

interface ReceivedNotificationOnlineAction {
    type: NotificationsActionTypes.RECEIVED_NOTIFICATION_ONLINE,
    payload: any
}

interface SeenNotificationAction {
    type: NotificationsActionTypes.SEEN_NOTIFICATION_BY_ID,
    payload: any
}

interface SeenChatNotificationAction {
    type: NotificationsActionTypes.SEEN_CHAT_NOTIFICATIONS,
    payload: any
}

export type NotificationsAction = ReceivedNotificationOnlineAction | SeenNotificationAction | SeenChatNotificationAction