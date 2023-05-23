import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import analyticsReducer from "./analyticsReducer";
import chatReducer from "./chatReducer";
import createPostReducer from "./createPostReducer";
import postReducer from "./postReducer";
import profileReducer from "./profileReducer";
import requestUsersReducer from "./requestUsersReducer";
import searchReducer from "./searchReducer";
import socketReducer from "./socketReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    admin: adminReducer,
    analytics: analyticsReducer,
    socket: socketReducer,
    profile: profileReducer,
    createPost: createPostReducer,
    post: postReducer,
    user: userReducer,
    chat: chatReducer,
    requestUsers: requestUsersReducer,
    search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>