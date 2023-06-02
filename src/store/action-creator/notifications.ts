import { Dispatch } from "redux";
import { NotificationsAction, NotificationsActionTypes } from "../../types/notifications";

export const addNotification = (notification: any) => {
    return async (dispatch: Dispatch<NotificationsAction>) => {
        dispatch({ type: NotificationsActionTypes.RECEIVED_NOTIFICATION_ONLINE, payload: notification })
    }
}

export const removeChatNotifications = (chatId: any) => {
    return async (dispatch: Dispatch<NotificationsAction>) => {
        dispatch({ type: NotificationsActionTypes.SEEN_CHAT_NOTIFICATIONS, payload: chatId })
    }
}

export const fetchNotifications = (userId: number) => {
    return async (dispatch: Dispatch<NotificationsAction>) => {
        try {
            dispatch({ type: NotificationsActionTypes.FETCH_NOTIFICATIONS })
            const data = await fetch('http://localhost:9000/fetchnotifications', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            }).then(res => res.json());

            const tasks = await fetch('http://localhost:9000/fetchtasksnotifications', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            }).then(res => res.json());

            console.log(tasks)

            dispatch({ type: NotificationsActionTypes.FETCH_TASK_NOTIFICATIONS_SUCCESS, payload: { type: 'tasks', notifications: tasks.result } })
            dispatch({ type: NotificationsActionTypes.FETCH_NOTIFICATIONS_SUCCESS, payload: { type: 'chat', notifications: data.result.data } })
        } catch (err: any) {
            dispatch({ type: NotificationsActionTypes.FETCH_NOTIFICATIONS_ERROR, payload: "Couldn't load notifications" })
        }
    }
}

export const removeNotificationById = (notificationId: any) => {
    return async (dispatch: Dispatch<NotificationsAction>) => {
        try {
            dispatch({ type: NotificationsActionTypes.SEEN_NOTIFICATION_BY_ID, payload: notificationId })
            await fetch('http://localhost:9000/messageseen', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    messageId: notificationId.messageId
                })
            }).then(res => res.json());

        } catch (err: any) { }
    }
}

export const removeTasksNotificationById = (userId: number, requestId: any) => {
    return async (dispatch: Dispatch<NotificationsAction>) => {
        try {
            dispatch({ type: NotificationsActionTypes.SEEN_TASKS_NOTIFICATIONS_ID, payload: requestId })
            await fetch('http://localhost:9000/settaskseen', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    requestId: requestId
                })
            }).then(res => res.json())
        } catch (err: any) { }
    }
}