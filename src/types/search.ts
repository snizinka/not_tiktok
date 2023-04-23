export interface SearchState {
    search: string;
    loading: boolean;
    error: null | string;
}

export enum SearchActionTypes {
    SET_SEARCH = 'SET_SEARCH',
}

interface SetSearchAction {
    type: SearchActionTypes.SET_SEARCH,
    payload: string
}

export type SearchAction = SetSearchAction