import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";
import requestUsersReducer from "./requestUsersReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    chat: chatReducer,
    requestUsers: requestUsersReducer
})

export type RootState = ReturnType<typeof rootReducer>