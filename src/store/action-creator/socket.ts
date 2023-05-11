import { Dispatch } from "redux";
import { SocketAction, SocketActionTypes } from "../../types/socket";

export const setSocket = (socket: any) => {
    return async (dispatch: Dispatch<SocketAction>) => {
        dispatch({type: SocketActionTypes.SET_SOCKET, payload: socket})
    }
}