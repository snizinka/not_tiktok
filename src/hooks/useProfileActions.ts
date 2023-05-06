import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as ProfileActionCreators from '../store/action-creator/profile'

export default function useActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(ProfileActionCreators, dispatch)
}
