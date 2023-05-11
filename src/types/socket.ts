export interface SocketState {
    socket: any;
}

export enum SocketActionTypes {
    SET_SOCKET = 'SET_SOCKET'
}

interface FetchProfilesAction {
    type: SocketActionTypes.SET_SOCKET,
    payload: any[] | any
}

export type SocketAction = FetchProfilesAction