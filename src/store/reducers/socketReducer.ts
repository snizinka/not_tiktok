import { SocketAction, SocketActionTypes, SocketState } from "../../types/socket";
import io from 'socket.io-client'

const initialState: SocketState = {
    socket: {}
}

export default function socketReducer(state = initialState, action: SocketAction): SocketState {
    switch (action.type) {
        case SocketActionTypes.SET_SOCKET:
            return {
                socket: action.payload,
            }

        default:
            return state
    }
}