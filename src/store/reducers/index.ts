import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>