import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as RequestUsersActionCreators from '../store/action-creator/requestUsers'

export default function useRequestUsersActions() {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(RequestUsersActionCreators, dispatch)
}