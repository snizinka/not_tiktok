import { SearchAction, SearchActionTypes, SearchState } from "../../types/search";

const initialState: SearchState = {
    search: '',
    loading: false,
    error: null
}

export default function searchReducer(state = initialState, action: SearchAction): SearchState {
    switch (action.type) {
        case SearchActionTypes.SET_SEARCH:
            return {
                loading: true,
                search: action.payload,
                error: null
            }

        default:
            return state
    }
}