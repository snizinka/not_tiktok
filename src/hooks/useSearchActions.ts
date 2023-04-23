import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as SearchActionCreators from '../store/action-creator/search'

export default function useSearchActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(SearchActionCreators, dispatch)
}
