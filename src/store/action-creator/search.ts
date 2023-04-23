import { Dispatch } from "redux";
import { SearchAction, SearchActionTypes } from "../../types/search";

export const setSearchValue = (searchValue: string) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        dispatch({ type: SearchActionTypes.SET_SEARCH, payload: searchValue })
    }
}