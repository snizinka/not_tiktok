export interface NotificationsState {
    recent: any[]
    notifications: any
    loading: boolean
    error: null | string
}

export enum NotificationsActionTypes {
    RECEIVED_NOTIFICATION_ONLINE = 'RECEIVED_NOTIFICATION_ONLINE',
    SEEN_NOTIFICATION_BY_ID = 'SEEN_NOTIFICATION_BY_ID',
    SEEN_CHAT_NOTIFICATIONS = 'SEEN_CHAT_NOTIFICATIONS',

    SEEN_TASKS_NOTIFICATIONS_ID = 'SEEN_TASKS_NOTIFICATIONS_ID',

    FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS',
    FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS',
    FETCH_NOTIFICATIONS_ERROR = 'FETCH_NOTIFICATIONS_ERROR',

    FETCH_TASK_NOTIFICATIONS_SUCCESS = 'FETCH_TASK_NOTIFICATIONS_SUCCESS'
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

interface SeenTasksNotificationByIdAction {
    type: NotificationsActionTypes.SEEN_TASKS_NOTIFICATIONS_ID,
    payload: any
}

interface FetchNotificationsAction {
    type: NotificationsActionTypes.FETCH_NOTIFICATIONS,
}

interface FetchNotificationsSuccessAction {
    type: NotificationsActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
    payload: any
}

interface FetchNotificationsErrorAction {
    type: NotificationsActionTypes.FETCH_NOTIFICATIONS_ERROR,
    payload: any
}

interface FetchTaskNotificationsSuccessAction {
    type: NotificationsActionTypes.FETCH_TASK_NOTIFICATIONS_SUCCESS,
    payload: any
}

export type NotificationsAction = ReceivedNotificationOnlineAction | SeenNotificationAction | SeenChatNotificationAction
| FetchNotificationsAction | FetchNotificationsSuccessAction | FetchNotificationsErrorAction
| FetchTaskNotificationsSuccessAction
| SeenTasksNotificationByIdAction