import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as SoCketActionCreators from '../store/action-creator/socket'

export default function useActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(SoCketActionCreators, dispatch)
}
