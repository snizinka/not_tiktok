import { NotificationsAction, NotificationsActionTypes, NotificationsState } from "../../types/notifications";

const initialState: NotificationsState = {
    recent: [],
    notifications: { chat: {}, system: [], tasks: [] },
    loading: false,
    error: null
}

function addNotification(state: any, action: any) {
    if (action.payload.type === 'chat') {
        const id = action.payload.notification.contactId.toString()
        const chatNotifications = state.notifications.chat[id] || []
        const newChatNotifications = [
            {
                ...action.payload.notification,
                notificationId:
                    chatNotifications.length > 0
                        ? chatNotifications[chatNotifications.length - 1].notificationId + 1
                        : 1,
            },
            ...chatNotifications
        ]

        return {
            notifications: {
                ...state.notifications,
                chat: {
                    ...state.notifications.chat,
                    [id]: newChatNotifications,
                },
            },
            recent: [...state.recent, {
                ...action.payload.notification, notificationId:
                    state.recent.length > 0
                        ? state.recent[state.recent.length - 1].notificationId + 1
                        : 1
            }],
            loading: false,
            error: null,
        }
    }

    return state;
}

function addNotifications(state: any, action: any) {
    const chatNotificationsList = action.payload.notifications
    const notificationListOld = state.notifications

    for (let i = 0; i < chatNotificationsList.length; i++) {
        const id = chatNotificationsList[i].contactId.toString()
        const chatNotifications = notificationListOld.chat[id] || []
        const newChatNotifications = {
            ...chatNotificationsList[i],
            loaded: true,
            notificationId:
                chatNotifications.length > 0
                    ? chatNotifications[chatNotifications.length - 1].notificationId + 1
                    : 1
        }

        if (notificationListOld.chat.hasOwnProperty(id)) {
            notificationListOld.chat[id].push({ ...newChatNotifications })
        } else {
            notificationListOld.chat[id] = [{ ...newChatNotifications }]
        }
    }

    return notificationListOld
}

function addTaskNotifications(state: any, action: any) {
    const chatNotificationsList = action.payload.notifications
    let notificationListOld = state.notifications
    notificationListOld.tasks = [...chatNotificationsList, ...notificationListOld.tasks]

    return notificationListOld
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

function removeChatNotificationById(state: any, action: any) {
    const notificationListOld = state.notifications
    const messagesById = notificationListOld.chat[action.payload.contactId].filter((message: any) => message.messageId !== action.payload.messageId)

    return {
        ...state.notifications,
        chat: {
            ...state.notifications.chat,
            [action.payload.contactId]: messagesById,
        },
    }
}

function removeTasksNotificationById(state: any, action: any) {
    const notificationListOld = state.notifications
    const requests = notificationListOld.tasks.filter((request: any) => request.requestId !== action.payload)

    return {
        ...state.notifications,
        tasks: requests
    }
}

export default function notificationReducer(state = initialState, action: NotificationsAction): NotificationsState {
    switch (action.type) {
        case NotificationsActionTypes.RECEIVED_NOTIFICATION_ONLINE:
            return addNotification(state, action)

        case NotificationsActionTypes.SEEN_CHAT_NOTIFICATIONS:
            return {
                recent: state.recent,
                loading: false,
                notifications: removeChatNotifications(state, action),
                error: null,
            }

        case NotificationsActionTypes.SEEN_NOTIFICATION_BY_ID:
            return {
                recent: state.recent,
                loading: false,
                notifications: removeChatNotificationById(state, action),
                error: null,
            }

        case NotificationsActionTypes.SEEN_TASKS_NOTIFICATIONS_ID:
            return {
                recent: state.recent,
                loading: false,
                notifications: removeTasksNotificationById(state, action),
                error: null,
            }

        case NotificationsActionTypes.FETCH_NOTIFICATIONS:
            return {
                recent: state.recent,
                loading: true,
                notifications: state.notifications,
                error: null,
            }

        case NotificationsActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
            return {
                recent: state.recent,
                loading: false,
                notifications: addNotifications(state, action),
                error: null,
            }

        case NotificationsActionTypes.FETCH_TASK_NOTIFICATIONS_SUCCESS:
            return {
                recent: state.recent,
                loading: false,
                notifications: addTaskNotifications(state, action),
                error: null,
            }

        case NotificationsActionTypes.FETCH_NOTIFICATIONS_ERROR:
            return {
                recent: state.recent,
                loading: false,
                notifications: state.notifications,
                error: null,
            }

        default:
            return state;
    }
}