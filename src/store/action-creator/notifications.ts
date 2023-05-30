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