import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import analyticsReducer from "./analyticsReducer";
import chatReducer from "./chatReducer";
import createPostReducer from "./createPostReducer";
import notificationReducer from "./notificationReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";
import requestUsersReducer from "./requestUsersReducer";
import searchReducer from "./searchReducer";
import socketReducer from "./socketReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    admin: adminReducer,
    analytics: analyticsReducer,
    createPost: createPostReducer,
    chat: chatReducer,
    notifications: notificationReducer,
    post: postReducer,
    profile: profileReducer,
    requestUsers: requestUsersReducer,
    socket: socketReducer,
    search: searchReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>