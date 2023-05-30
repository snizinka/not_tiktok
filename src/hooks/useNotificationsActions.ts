import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as NotificationsActionCreators from '../store/action-creator/notifications'

export default function useNotificationsActions () {
    const dispatch: Dispatch<any> = useDispatch()

    return bindActionCreators(NotificationsActionCreators, dispatch)
}
